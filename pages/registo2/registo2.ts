import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import "rxjs/add/operator/map";
import {Http, Headers, RequestOptions} from "@angular/http";
import { LoginPage } from '../login/login';
import {InstructorPage} from '../instructor/instructor';
/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class Registo2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerta:AlertController, private http: Http, public loading: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }
	
	rcontrasena: string;
	contrasena: string;
	correo: string;
	nombre: string;
	area: string;
	
	
	verAlerta(msg: string)	{
	let mialerta= this.alerta.create({
	title: "Titulo de alerta",
	message: msg,
	buttons: ["entendido"]
	})
	mialerta.present();
	}
	
	validar(){
		
	if (this.nombre == undefined || this.correo == undefined || this.contrasena == undefined || this.rcontrasena == undefined || this.area == undefined ) {
		
		this.verAlerta("Falta un dato");
		}	

	
		else{
		
				if (this.contrasena != this.rcontrasena){
		
					this.verAlerta("La contraseña no coincide");
					}	 		
		
		
				else {
			
						var headers = new Headers();
				
								headers.append("Accept", "application/json");
				
								headers.append("Content-Type", "application/json");
				
								let options = new RequestOptions({ headers: headers });
				
								let data = { 
											email: this.correo, 
											password: this.contrasena,
											name: this.nombre,
											password_confirmation: this.rcontrasena,
											area: this.area
											};
				
								let loader = this.loading.create({
											content: 'Por favor espere...',});		
								loader.present().then(() => {
 
							this.http.post('http://localhost:3000/users',data,options)
 
							.map(res => res.json())
 
							.subscribe(res => {
 
							console.log(res)
 
							loader.dismiss()
 
							if(res=="Correcto"){
 
							//let alert = this.alerta.create({
							//title:"CONGRATS",
							//subTitle:(res),
							//buttons: ['OK']
							//});
							//alert.present();
								this.navCtrl.push(InstructorPage);
 
								}else
									{
 
										let alert = this.alerta.create({
 
											title:"ERROR",
 
											subTitle:"Correo o Contraseña Invalido",
 
											buttons: ['OK']
 
																		});
 
											alert.present();
				
				
									}
				
				
													})
													})
								}
				
			}		
	}
}
	
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import {Http, Headers, RequestOptions} from "@angular/http";
import { IngresoPage } from '../ingreso/ingreso';



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  public alerta:AlertController, private http: Http, 
  public loading: LoadingController, public toastCtrl: ToastController)  {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  rcontrasena: string;
	contrasena: string;
	correo: string;
	nombre: string;
	
	VerAlerta(msg: string)
	{let mialerta= this.alerta.create({
	title: "Titulo de alerta",
	message: msg,
	buttons: ["entendido"]
	})
	mialerta.present();

	}
	
	
	Login(){ 
		if (this.correo == undefined )
				{
					let alert = this.VerAlerta("Correo vacío");
                	
				}
				else 
					
					{ 
						if(this.contrasena == undefined)
							{
							let alert = this.VerAlerta("Contrasena Vacía");
							}
				
						else {	
				
								var headers = new Headers();
				
								headers.append("Accept", "application/json");
				
								headers.append("Content-Type", "application/json");
				
								let options = new RequestOptions({ headers: headers });
				
								let data = { 
											email: this.correo, 
											password: this.contrasena};
				
								let loader = this.loading.create({
											content: 'Por favor espere...',});		
								loader.present().then(() => {
 
							this.http.post('https://json-pruebas.herokuapp.com/api/login.php',data,options)
 
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
								this.navCtrl.push(IngresoPage);
 
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

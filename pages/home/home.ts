import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegistroPage } from '../registro/registro';
import { ConviertetePage } from '../conviertete/conviertete';
import { InstructorPage } from '../instructor/instructor';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, alerta:AlertController) {

  }
	IfRegistro()
	{this.navCtrl.push(RegistroPage);
	}
	IfLogin()
	{this.navCtrl.push(LoginPage);
	}
	IfConviertete()
	{this.navCtrl.push(ConviertetePage);
	}
	}

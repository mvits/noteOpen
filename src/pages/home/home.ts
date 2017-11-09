import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotasService } from '../../services/notas.service';
import { DetallePage } from '../detalle/detalle';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	notas=[];

	@ViewChild('myNav') nav: NavController;

  constructor(public navCtrl: NavController, public notasService : NotasService ) {

  	this.notas= notasService.getNotas();

  }

  public goToDetalle(){

  	this.navCtrl.push(DetallePage);

  }

}

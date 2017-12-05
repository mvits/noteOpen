import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database/database";

@Injectable()

export class NotasService {

	constructor(public afDB: AngularFireDatabase){}

	notas = [];

	public getNotas(){
		//return this.notas;
		return this.afDB.list('notas/');

	}

	public getNota(id){
		//return this.notas.filter(function(e,i) {return e.id==id})[0] || {id: null, titulo: null, descripcion: null};
		return this.afDB.object('notas/'+id);
	}

	public createNota(nota){
		//this.notas.push(nota);
		this.afDB.database.ref('notas/'+nota.id).set(nota);
	}

	public editNota(nota){
		for (let i = 0; i< this.notas.length; i++) {
			if (this.notas[i].id == nota.id) { 
				this.notas[i] = nota;
			}
		}
	}

	public deleteNota(nota){
		for (let i = 0; i< this.notas.length; i++) {
			if (this.notas[i].id == nota.id) { 
				this.notas.splice(i,1);
			}
		}
	}
}
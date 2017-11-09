import { Injectable } from '@angular/core';

@Injectable()

export class NotasService {

	notas = [
		{id:1, titulo:'Nota 1', descripcion:'Descripción de Nota 1'},
		{id:2, titulo:'Nota 2', descripcion:'Descripción de Nota 2'},
		{id:3, titulo:'Nota 3', descripcion:'Descripción de Nota 3'}
	];

	public getNotas(){
		return this.notas;
	}

	public getNota(id){
		return this.notas.filter(function(e,i) {return e.id==id})[0] || {id: null, titulo: null, descripcion: null};
	}

	public createNota(nota){
		this.notas.push(nota);
	}

	public editNota(nota){
		for (let i; i< this.notas.length; i++) {
			if (this.notas[i].id == nota.id) { 
				this.notas[i] = nota;
			}
		}
	}
}
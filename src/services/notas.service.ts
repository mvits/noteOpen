import { Injectable } from '@angular/core';

@Injectable()

export class NotasService {

	notas = [
		{id:1, titulo:'Nota 1', descripcion:'Descripción de Nota 1'},
		{id:1, titulo:'Nota 2', descripcion:'Descripción de Nota 2'},
		{id:1, titulo:'Nota 3', descripcion:'Descripción de Nota 3'}
	];

	public getNotas(){
		return this.notas;
	}
}
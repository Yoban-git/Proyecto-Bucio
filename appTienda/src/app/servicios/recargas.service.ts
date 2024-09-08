import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recargas } from '../modelos/recargas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecargasService {
  API_URI = 'http://localhost:3000/app';
  constructor(private http: HttpClient) { }

  getRecargas(){
    return this.http.get(`${this.API_URI}/recargas`);
  }

  getProducto(compania:string){
    return this.http.get(`${this.API_URI}/recargas/${compania}`);
  }

  crearProducto(recargas: Recargas){
    return this.http.post(`${this.API_URI}/recargas`, recargas);

  }
  deleteProducto(compania:string){
    return this.http.delete(`${this.API_URI}/recargas/${compania}`);
  }
  updateProducto(compania:string, updateRecargas: Recargas): Observable<Recargas>{
    return this.http.put(`${this.API_URI}/recargas/${compania}`, updateRecargas);
  }
}

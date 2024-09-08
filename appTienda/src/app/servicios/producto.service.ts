import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../modelos/producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  API_URI = 'http://localhost:3000/app';
  constructor(private http: HttpClient) { }

  getProductos(){
    return this.http.get(`${this.API_URI}/produstos`);
  }

  getProducto(codigo:string){
    return this.http.get(`${this.API_URI}/productos/${codigo}`);
  }

  crearProducto(producto: Producto){
    return this.http.post(`${this.API_URI}/productos`, producto);

  }
  deleteProducto(codigo:string){
    return this.http.delete(`${this.API_URI}/productos/${codigo}`);
  }
  updateProducto(codigo:string, updateProducto: Producto): Observable<Producto>{
    return this.http.put(`${this.API_URI}/productos/${codigo}`, updateProducto);
  }
}

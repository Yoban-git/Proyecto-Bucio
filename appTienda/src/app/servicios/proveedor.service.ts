import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proveedor } from '../modelos/proveedor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  API_URI = 'http://localhost:3000/app';
  constructor(private http: HttpClient) { }

  getProveedores(){
    return this.http.get(`${this.API_URI}/proveedor`);
  }

  getProveedor(nombre:string){
    return this.http.get(`${this.API_URI}/proveedores/${nombre}`);
  }

  crearProducto(proveedor: Proveedor){
    return this.http.post(`${this.API_URI}/proveedores`, proveedor);

  }
  deleteProducto(nombre:string){
    return this.http.delete(`${this.API_URI}/proveedores/${nombre}`);
  }
  updateProducto(nombre:string, updateProveedor: Proveedor): Observable<Proveedor>{
    return this.http.put(`${this.API_URI}/proveedores/${nombre}`, updateProveedor);
  }
}

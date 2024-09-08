import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Factura } from '../modelos/factura';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  API_URI = 'http://localhost:3000/app';
  constructor(private http: HttpClient) { }

  getFacturas(){
    return this.http.get(`${this.API_URI}/facturas`);
  }

  getFactura(folio:string){
    return this.http.get(`${this.API_URI}/facturas/${folio}`);
  }

  crearFactura(factura: Factura){
    return this.http.post(`${this.API_URI}/facturas`, factura);

  }
  deleteFactura(folio:string){
    return this.http.delete(`${this.API_URI}/facturas/${folio}`);
  }
  updateFactura(folio:string, updateFactura: Factura): Observable<Factura>{
    return this.http.put(`${this.API_URI}/facturas/${folio}`, updateFactura);
  }
}
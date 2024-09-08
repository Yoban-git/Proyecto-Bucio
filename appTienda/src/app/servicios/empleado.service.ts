import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../modelos/empleado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  API_URI = 'http://localhost:3000/app';
  constructor(private http: HttpClient) { }

  getEmpleados(){
    return this.http.get(`${this.API_URI}/empleados`);
  }

  getEmpleado(rfc:string){
    return this.http.get(`${this.API_URI}/empleados/${rfc}`);
  }

  crearEmpelado(empleado: Empleado){
    return this.http.post(`${this.API_URI}/empleados`, empleado);

  }
  deleteEmpleado(rfc:string){
    return this.http.delete(`${this.API_URI}/empelados/${rfc}`);
  }
  updateEmpleado(rfc:string, updateEmpleado: Empleado): Observable<Empleado>{
    return this.http.put(`${this.API_URI}/empleados/${rfc}`, updateEmpleado);
  }
}
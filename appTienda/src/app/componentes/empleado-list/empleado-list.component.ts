import { Component, HostBinding, OnInit } from '@angular/core';
import { EmpleadoService } from '../../servicios/empleado.service';

@Component({
  selector: 'app-empleado-list',
  standalone: true,
  imports: [],
  templateUrl: './empleado-list.component.html',
  styleUrl: './empleado-list.component.css'
})
export class EmpleadoListComponent implements OnInit{
@HostBinding('class') classes = 'row';

empleados: any = [];

constructor(private empleadoService: EmpleadoService){ }

ngOnInit(): void {
    this.empleadoService.getEmpleados().subscribe(
      res => {
        this.empleados = res;
      },
      err => console.log(err)
    );
}
}

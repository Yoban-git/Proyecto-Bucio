import { Component, HostBinding, OnInit } from '@angular/core';

import { ProveedorService } from '../../servicios/proveedor.service';
@Component({
  selector: 'app-proveedor-list',
  standalone: true,
  imports: [],
  templateUrl: './proveedor-list.component.html',
  styleUrl: './proveedor-list.component.css'
})
export class ProveedorListComponent implements OnInit{

@HostBinding('class') classes = 'row';
  proveedores: any = [];

  constructor(private proveedorService: ProveedorService){ }

  ngOnInit(): void {
      this.proveedorService.getProveedores().subscribe(
        res => {
          this.proveedores = res;
        },
        err => console.log(err)
      );
  }
}

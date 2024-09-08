import { Component, HostBinding, OnInit } from '@angular/core';

import { FacturaService } from '../../servicios/factura.service';
@Component({
  selector: 'app-factura-list',
  standalone: true,
  imports: [],
  templateUrl: './factura-list.component.html',
  styleUrl: './factura-list.component.css'
})
export class FacturaListComponent implements OnInit{

@HostBinding('class') classes = 'row';
  facturas: any = [];

  constructor(private facturaService: FacturaService) { }
  ngOnInit(): void {
    this.facturaService.getFacturas().subscribe(
      res => {
       this.facturas = res;
      },
     err => console.log(err)
    );
  }
}

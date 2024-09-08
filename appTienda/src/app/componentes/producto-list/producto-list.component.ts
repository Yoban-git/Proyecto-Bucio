import { Component, HostBinding, OnInit } from '@angular/core';
//importar el aarchivo de producto.service
import { ProductoService } from '../../servicios/producto.service';
@Component({
  selector: 'app-producto-list',
  standalone: true,
  imports: [],
  templateUrl: './producto-list.component.html',
  styleUrl: './producto-list.component.css'
})
export class ProductoListComponent implements OnInit{

@HostBinding('class') classes = 'row';  
  productos: any = [];

  constructor(private productoService: ProductoService){ }

  ngOnInit(): void {
      this.productoService.getProductos().subscribe(
        res => {
          this.productos = res;
        },
        err => console.error(err)
      );
  }
}

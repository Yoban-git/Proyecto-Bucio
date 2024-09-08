import { Component, HostBinding, OnInit } from '@angular/core';

import { RecargasService } from '../../servicios/recargas.service';
@Component({
  selector: 'app-recargas-list',
  standalone: true,
  imports: [],
  templateUrl: './recargas-list.component.html',
  styleUrl: './recargas-list.component.css'
})
export class RecargasListComponent implements OnInit{

@HostBinding('class') classes = 'row';
  recargas: any = [];

  constructor(private recargaService: RecargasService) { }

  ngOnInit(): void {
      this.recargaService.getRecargas().subscribe(
        res => {
          this.recargas = res;
        },
        err => console.log(err)
      );
  }
}

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavigationComponent } from "./componentes/navigation/navigation.component";
import { ProductoFormComponent } from "./componentes/producto-form/producto-form.component";
import { ProductoListComponent } from "./componentes/producto-list/producto-list.component";

import { ProductoService } from "./servicios/producto.service";

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        ProductoFormComponent,
        ProductoListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [
        ProductoService
    ]
})
export class AppModule { }
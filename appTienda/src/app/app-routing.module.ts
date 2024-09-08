import { NgModule } from "@angular/core";
//importacion que permite definir las rutas de la app
import { RouterModule, Routes } from "@angular/router";
//importamos el archivo que viene en la ruta sig.
import { ProductoListComponent } from "./componentes/producto-list/producto-list.component";

const routes: Routes = [
    //creamos objetos
    {
        path: '',
        redirectTo: '/productos',
        pathMatch: "full"
    },
    {
        path: 'productos', //se crea la ruta para abrir un componente
        component: ProductoListComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
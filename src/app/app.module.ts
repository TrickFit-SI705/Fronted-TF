import { EjercicioDialogoComponent } from './page/ejercicio/ejercicio-listar/ejercicio-dialogo/ejercicio-dialogo.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AlimentoComponent } from './page/alimento/alimento.component';
import { AlimentoListarComponent } from './page/alimento/alimento-listar/alimento-listar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule} from '@angular/material/table';
import { UsuarioComponent } from './page/usuario/usuario.component';
import { UsuarioListarComponent } from './page/usuario/usuario-listar/usuario-listar.component';
import { PreguntaComponent } from './page/pregunta/pregunta.component';
import { PreguntaListarComponent } from './page/pregunta/pregunta-listar/pregunta-listar.component';
import { PlanComponent } from './page/plan/plan.component';
import { PlanListarComponent } from './page/plan/plan-listar/plan-listar.component';
import { RecetaComponent } from './page/receta/receta.component';
import { RecetaListarComponent } from './page/receta/receta-listar/receta-listar.component';
import { EjercicioComponent } from './page/ejercicio/ejercicio.component';
import { EjercicioListarComponent } from './page/ejercicio/ejercicio-listar/ejercicio-listar.component';
import { BancoComponent } from './page/banco/banco.component';
import { BancoListarComponent } from './page/banco/banco-listar/banco-listar.component';
import { CitaComponent } from './page/cita/cita.component';
import { CitaListarComponent } from './page/cita/cita-listar/cita-listar.component';
import { SuscripcionComponent } from './page/suscripcion/suscripcion.component';
import { SuscripcionListarComponent } from './page/suscripcion/suscripcion-listar/suscripcion-listar.component';
import { AlimentoCreaeditaComponent } from './page/alimento/alimento-creaedita/alimento-creaedita.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from'@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { PlanCreaeditaComponent } from './page/plan/plan-creaedita/plan-creaedita.component';
import { RecetaCreaeditaComponent } from './page/receta/receta-creaedita/receta-creaedita.component';
import { EjercicioBuscarComponent } from './page/ejercicio/ejercicio-buscar/ejercicio-buscar.component';
import { EjercicioCreaeditaComponent } from './page/ejercicio/ejercicio-creaedita/ejercicio-creaedita.component';
import { TipousuarioComponent } from './page/tipousuario/tipousuario.component';
import { TipousuarioListarComponent } from './page/tipousuario/tipousuario-listar/tipousuario-listar.component';
import { TipousuarioDialogoComponent } from './page/tipousuario/tipousuario-listar/tipousuario-dialogo/tipousuario-dialogo.component';
import { TipousuarioBuscarComponent } from './page/tipousuario/tipousuario-buscar/tipousuario-buscar.component';
import { TipousuarioCreaeditaComponent } from './page/tipousuario/tipousuario-creaedita/tipousuario-creaedita.component';
import { BancoBuscarComponent } from './page/banco/banco-buscar/banco-buscar.component';
import { BancoCreaeditaComponent } from './page/banco/banco-creaedita/banco-creaedita.component';
import { BancoDialogoComponent } from './page/banco/banco-listar/banco-dialogo/banco-dialogo.component';
import { PlanBuscarComponent } from './page/plan/plan-buscar/plan-buscar.component';
import { PlanDialogoComponent } from './page/plan/plan-listar/plan-dialogo/plan-dialogo.component';
import { AlimentoBuscarComponent } from './page/alimento/alimento-buscar/alimento-buscar.component';
import { AlimentoDialogoComponent } from './page/alimento/alimento-listar/alimento-dialogo/alimento-dialogo.component';
import { RecetaBuscarComponent } from './page/receta/receta-buscar/receta-buscar.component';
import { RecetaDialogoComponent } from './page/receta/receta-listar/receta-dialogo/receta-dialogo.component';
import { RutinaComponent } from './page/rutina/rutina.component';
import { RutinaListarComponent } from './page/rutina/rutina-listar/rutina-listar.component';
import { RutinaejercicioComponent } from './page/rutinaejercicio/rutinaejercicio.component';
import { RutinaejercicioListarComponent } from './page/rutinaejercicio/rutinaejercicio-listar/rutinaejercicio-listar.component';
import { DietaComponent } from './page/dieta/dieta.component';
import { DietaListarComponent } from './page/dieta/dieta-listar/dieta-listar.component';
import { DietarecetaListarComponent } from './page/dietareceta/dietareceta-listar/dietareceta-listar.component';
import { DietarecetaComponent } from './page/dietareceta/dietareceta.component';
import { TarjetaComponent } from './page/tarjeta/tarjeta.component';
import { TarjetaListarComponent } from './page/tarjeta/tarjeta-listar/tarjeta-listar.component';
import { RecetaalimentoComponent } from './page/recetaalimento/recetaalimento.component';
import { RecetaalimentoListarComponent } from './page/recetaalimento/recetaalimento-listar/recetaalimento-listar.component';
import { DietaCreaeditaComponent } from './page/dieta/dieta-creaedita/dieta-creaedita.component';
import { DietaDialogoComponent } from './page/dieta/dieta-listar/dieta-dialogo/dieta-dialogo.component';
import { UsuarioCreaeditaComponent } from './page/usuario/usuario-creaedita/usuario-creaedita.component';
import { UsuarioDialogoComponent } from './page/usuario/usuario-listar/usuario-dialogo/usuario-dialogo.component';
import { CitaCreaeditaComponent } from './page/cita/cita-creaedita/cita-creaedita.component';
import { CitaDialogoComponent } from './page/cita/cita-listar/cita-dialogo/cita-dialogo.component';
import { CitaBuscarComponent } from './page/cita/cita-buscar/cita-buscar.component';
import { DietarecetaDialogoComponent } from './page/dietareceta/dietareceta-listar/dietareceta-dialogo/dietareceta-dialogo.component';
import { DietarecetaCreaeditaComponent } from './page/dietareceta/dietareceta-creaedita/dietareceta-creaedita.component';
import { SuscripcionDialogoComponent } from './page/suscripcion/suscripcion-listar/suscripcion-dialogo/suscripcion-dialogo.component';
import { SuscripcionCreaeditaComponent } from './page/suscripcion/suscripcion-creaedita/suscripcion-creaedita.component';
import { TarjetaDialogoComponent } from './page/tarjeta/tarjeta-listar/tarjeta-dialogo/tarjeta-dialogo.component';
import { TarjetaCreaeditaComponent } from './page/tarjeta/tarjeta-creaedita/tarjeta-creaedita.component';
import { RecetaalimentoDialogoComponent } from './page/recetaalimento/recetaalimento-listar/recetaalimento-dialogo/recetaalimento-dialogo.component';
import { RecetaalimentoCreaeditaComponent } from './page/recetaalimento/recetaalimento-creaedita/recetaalimento-creaedita.component';
import { PreguntaDialogoComponent } from './page/pregunta/pregunta-listar/pregunta-dialogo/pregunta-dialogo.component';
import { PreguntaCreaeditaComponent } from './page/pregunta/pregunta-creaedita/pregunta-creaedita.component';
import { RutinaDialogoComponent } from './page/rutina/rutina-listar/rutina-dialogo/rutina-dialogo.component';
import { RutinaCreaeditaComponent } from './page/rutina/rutina-creaedita/rutina-creaedita.component';
import { RutinaejercicioDialogoComponent } from './page/rutinaejercicio/rutinaejercicio-listar/rutinaejercicio-dialogo/rutinaejercicio-dialogo.component';
import { RutinaejercicioCreaeditaComponent } from './page/rutinaejercicio/rutinaejercicio-creaedita/rutinaejercicio-creaedita.component';
import { DietaBuscarComponent } from './page/dieta/dieta-buscar/dieta-buscar.component';
import { SuscripcionBuscarComponent } from './page/suscripcion/suscripcion-buscar/suscripcion-buscar.component';
import { PreguntaBuscarComponent } from './page/pregunta/pregunta-buscar/pregunta-buscar.component';
import { RutinaBuscarComponent } from './page/rutina/rutina-buscar/rutina-buscar.component';
import { RutinaejercicioBuscarComponent } from './page/rutinaejercicio/rutinaejercicio-buscar/rutinaejercicio-buscar.component';
import { DietarecetaBuscarComponent } from './page/dietareceta/dietareceta-buscar/dietareceta-buscar.component';
import { TarjetaBuscarComponent } from './page/tarjeta/tarjeta-buscar/tarjeta-buscar.component';
import { RecetaalimentoBuscarComponent } from './page/recetaalimento/recetaalimento-buscar/recetaalimento-buscar.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { CustomDateAdapter } from './custom-adapter';
import { UsuarioBuscarComponent } from './page/usuario/usuario-buscar/usuario-buscar.component';
import { UsuarioReporte1Component } from './page/usuario/usuario-reporte1/usuario-reporte1.component';
import { UsuarioReporte2Component } from './page/usuario/usuario-reporte2/usuario-reporte2.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DietaReporteComponent } from './page/dieta/dieta-reporte/dieta-reporte.component';
import { PreguntaReporteComponent } from './page/pregunta/pregunta-reporte/pregunta-reporte.component';
import { RecetaalimentoReporteComponent } from './page/recetaalimento/recetaalimento-reporte/recetaalimento-reporte.component';
import { TipousuarioReporteComponent } from './page/tipousuario/tipousuario-reporte/tipousuario-reporte.component';
import { RutinaReporteComponent } from './page/rutina/rutina-reporte/rutina-reporte.component';
import { TipousuarioReporte2Component } from './page/tipousuario/tipousuario-reporte2/tipousuario-reporte2.component';
import { SuscripcionReporteComponent } from './page/suscripcion/suscripcion-reporte/suscripcion-reporte.component';
import { TarjetaReporteComponent } from './page/tarjeta/tarjeta-reporte/tarjeta-reporte.component';
import { PlanReporteComponent } from './page/plan/plan-reporte/plan-reporte.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    AlimentoComponent,
    AlimentoListarComponent,
    UsuarioComponent,
    UsuarioListarComponent,
    PreguntaComponent,
    PreguntaListarComponent,
    PlanComponent,
    PlanListarComponent,
    RecetaComponent,
    RecetaListarComponent,
    EjercicioComponent,
    EjercicioListarComponent,
    BancoComponent,
    BancoListarComponent,
    CitaComponent,
    CitaListarComponent,
    SuscripcionComponent,
    SuscripcionListarComponent,
    AlimentoCreaeditaComponent,
    PlanCreaeditaComponent,
    RecetaCreaeditaComponent,
    EjercicioCreaeditaComponent,
    EjercicioBuscarComponent,
    EjercicioDialogoComponent,
    TipousuarioComponent,
    TipousuarioListarComponent,
    TipousuarioDialogoComponent,
    TipousuarioBuscarComponent,
    TipousuarioCreaeditaComponent,
    BancoBuscarComponent,
    BancoCreaeditaComponent,
    BancoDialogoComponent,
    PlanBuscarComponent,
    PlanDialogoComponent,
    AlimentoBuscarComponent,
    AlimentoDialogoComponent,
    RecetaBuscarComponent,
    RecetaDialogoComponent,
    RutinaComponent,
    RutinaListarComponent,
    RutinaejercicioComponent,
    RutinaejercicioListarComponent,
    DietaComponent,
    DietaListarComponent,
    DietarecetaListarComponent,
    DietarecetaComponent,
    TarjetaComponent,
    TarjetaListarComponent,
    RecetaalimentoComponent,
    RecetaalimentoListarComponent,
    DietaCreaeditaComponent,
    DietaDialogoComponent,
    UsuarioCreaeditaComponent,
    UsuarioDialogoComponent,
    CitaCreaeditaComponent,
    CitaDialogoComponent,
    CitaBuscarComponent,
    DietarecetaDialogoComponent,
    DietarecetaCreaeditaComponent,
    SuscripcionDialogoComponent,
    SuscripcionCreaeditaComponent,
    TarjetaDialogoComponent,
    TarjetaCreaeditaComponent,
    RecetaalimentoDialogoComponent,
    RecetaalimentoCreaeditaComponent,
    PreguntaDialogoComponent,
    PreguntaCreaeditaComponent,
    RutinaDialogoComponent,
    RutinaCreaeditaComponent,
    RutinaejercicioDialogoComponent,
    RutinaejercicioCreaeditaComponent,
    DietaBuscarComponent,
    SuscripcionBuscarComponent,
    PreguntaBuscarComponent,
    RutinaBuscarComponent,
    RutinaejercicioBuscarComponent,
    DietarecetaBuscarComponent,
    TarjetaBuscarComponent,
    RecetaalimentoBuscarComponent,
    UsuarioBuscarComponent,
    UsuarioReporte1Component,
    UsuarioReporte2Component,
    DietaReporteComponent,
    PreguntaReporteComponent,
    RecetaalimentoReporteComponent,
    TipousuarioReporteComponent,
    RutinaReporteComponent,
    TipousuarioReporte2Component,
    SuscripcionReporteComponent,
    TarjetaReporteComponent,
    PlanReporteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSnackBarModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-ES'},
  { provide: DateAdapter, useClass: CustomDateAdapter}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

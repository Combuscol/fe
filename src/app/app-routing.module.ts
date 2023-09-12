import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { ToastComponent } from './components/toast/toast.component';
import { ConfirmarComponent } from '../app/components/confirmar/confirmar.component';
import { RegistrarComponent } from '../app/components/registrar/registrar.component';


const routes: Routes= [
    { path: '', component: SigninComponent },
    { path: 'confirmar', component: ConfirmarComponent },
    { path: 'registrar', component: RegistrarComponent },
    { path: '', redirectTo: '/signin', pathMatch: 'full'},
    { path: '**', component: SigninComponent},
    { path: 'toast', component: ToastComponent}
]


@NgModule({
    imports: [
    RouterModule.forRoot(routes)
      ],
      exports:[ RouterModule ]
})
export class AppRoutingModule { }






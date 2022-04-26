import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { ToastComponent } from './components/toast/toast.component';


const routes: Routes= [
    { path: 'singin', component: SigninComponent },
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

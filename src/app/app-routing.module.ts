import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { IncomeComponent } from './income/income.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'income', component: IncomeComponent},
  {path: 'expenses', component: ExpensesComponent},
  {path: 'main', component: MainComponent},
  {path: '**', redirectTo: '/main'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

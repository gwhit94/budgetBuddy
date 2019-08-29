import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { IncomeComponent } from './income/income.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { MainComponent } from './main/main.component';
import { GraphComponent } from './graph/graph.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'income', component: IncomeComponent, canActivate: [AuthGuard]},
  {path: 'expenses', component: ExpensesComponent, canActivate: [AuthGuard]},
  {path: 'main', component: MainComponent, canActivate: [AuthGuard]},
  {path: 'graph', component: GraphComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: '/main', canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

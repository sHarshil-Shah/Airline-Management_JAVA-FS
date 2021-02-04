import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAirlinesComponent } from './components/list-airlines/list-airlines.component';
import { CreateAirlinesComponent } from './components/create-airlines/create-airlines.component';
import { ModifyAirlinesComponent } from './components/modify-airlines/modify-airlines.component';
import { DeleteAirlinesComponent } from './components/delete-airlines/delete-airlines.component';

const routes: Routes = [
  { path: "create", component: CreateAirlinesComponent },
  { path: "modify", component: ModifyAirlinesComponent },
  { path: "delete", component: DeleteAirlinesComponent },
  { path: "view", component: ListAirlinesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

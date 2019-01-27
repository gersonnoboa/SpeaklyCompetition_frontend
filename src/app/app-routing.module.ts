import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStreakComponent } from './add-streak/add-streak.component';
import { StreaksComponent } from './streaks/streaks.component';

const routes: Routes = [
    {
        path: "add",
        component: AddStreakComponent
    },
    {
        path: "",
        component: StreaksComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

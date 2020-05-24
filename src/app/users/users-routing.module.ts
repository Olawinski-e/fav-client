import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponentUsers } from "../users/layout/layout.component";
import { ListComponent } from "./list/list.component";
import { AddEditComponent } from "./add-edit/add-edit.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponentUsers,
    children: [
      { path: "", component: ListComponent },
      { path: "add", component: AddEditComponent },
      { path: "edit/:id", component: AddEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}

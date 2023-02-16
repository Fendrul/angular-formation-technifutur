import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent} from "./modules/demo/main-demo/demo.component";
import { ExerciceComponent } from './modules/exercice/exercice.component';
import { BindingsComponent } from './modules/demo/bindings/bindings.component';
import {PipesComponentComponent} from "./modules/demo/pipes/pipes.component/pipes.component.component";
import {ChronometreComponent} from "./modules/exercice/chronometre/chronometre.component";
import {
  ComponentDirectiveComponent
} from "./modules/demo/component-directive/component-directive.component";
import {StructuralDirectiveComponent} from "./modules/demo/structural-directive/structural-directive.component";
import {CustomDirectiveComponent} from "./modules/demo/custom-directive/custom-directive.component";
import {TableauComponent} from "./modules/exercice/tableau/tableau.component";
import {InputOutputComponent} from "./modules/demo/input-output/input-output.component";
import {ShoppinglistComponent} from "./modules/exercice/shoppinglist/shoppinglist.component";

const routes: Routes = [
  {path: 'demo', component: DemoComponent, children: [
      {path: 'bindings', component: BindingsComponent},
      {path: 'pipes', component: PipesComponentComponent},
      {path: 'component-directive', component: ComponentDirectiveComponent},
      {path: 'structural-directive', component: StructuralDirectiveComponent},
      {path: 'custom-directive', component: CustomDirectiveComponent},
      {path: 'input-output', component: InputOutputComponent}
    ]},
  {path: 'exercice', component: ExerciceComponent, children: [
      {path: 'chronometre', component: ChronometreComponent},
      {path: 'tableau', component: TableauComponent},
      {path: 'shopping-list', component: ShoppinglistComponent, children: [

        ]}
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

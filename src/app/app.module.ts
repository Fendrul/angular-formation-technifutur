import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExerciceComponent } from './modules/exercice/exercice.component';
import { DemoComponent } from './modules/demo/main-demo/demo.component';
import { BannerComponent } from './shared/components/banner/banner.component';
import { BindingsComponent } from './modules/demo/bindings/bindings.component';
import {FormsModule} from "@angular/forms";
import { PipesComponentComponent } from './modules/demo/pipes/pipes.component/pipes.component.component';
import { TempPipe } from './shared/pipes/temp.pipe';
import { ChronometreComponent } from './modules/exercice/chronometre/chronometre.component';
import { TimeFormatPipe } from './modules/exercice/chronometre/time/time-format.pipe';
import { ComponentDirectiveComponent } from './modules/demo/component-directive/component-directive.component';
import { StructuralDirectiveComponent } from './modules/demo/structural-directive/structural-directive.component';
import { CustomDirectiveComponent } from './modules/demo/custom-directive/custom-directive.component';
import { HoverColorDirective } from './modules/demo/custom-directive/hover-color.directive';
import { TableauComponent } from './modules/exercice/tableau/tableau.component';
import { InputOutputComponent } from './modules/demo/input-output/input-output.component';
import { EnfantComponent } from './modules/demo/input-output/enfant/enfant.component';
import { ShoppinglistComponent } from './modules/exercice/shoppinglist/shoppinglist.component';
import { ShowProductsComponent } from './modules/exercice/shoppinglist/show-products/show-products.component';

@NgModule({
  declarations: [
    AppComponent,
    ExerciceComponent,
    DemoComponent,
    BannerComponent,
    BindingsComponent,
    PipesComponentComponent,
    TempPipe,
    ChronometreComponent,
    TimeFormatPipe,
    ComponentDirectiveComponent,
    StructuralDirectiveComponent,
    CustomDirectiveComponent,
    HoverColorDirective,
    TableauComponent,
    InputOutputComponent,
    EnfantComponent,
    ShoppinglistComponent,
    ShowProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

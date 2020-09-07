import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ SalaryCalc} from './salaryCalc/salCalc.component';

import { AppComponent } from './app.component';
import { SalaryService } from './salaryCalc/salary.service';
import { ShopComponent } from './shop/shop.component';
import { PreFixPipe } from './salaryCalc/prefix.pipe';
import { ShopPipe } from './shop.pipe';

@NgModule({
  declarations: [
    AppComponent, SalaryCalc, ShopComponent,PreFixPipe, ShopPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [SalaryService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log("app  module loaded...");
  }
}

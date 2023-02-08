import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { IndexComponent } from './components/index/index.component';
import { UserComponent } from './user/user.component';
import { DepositFoodComponent } from './food/deposit-food/deposit-food.component';
import { FoodBankComponent } from './food/food-bank/food-bank.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'user', component: UserComponent },
  { path: 'depositFood', component: DepositFoodComponent },
  { path: 'foodBank', component: FoodBankComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    IndexComponent,
    UserComponent,
    DepositFoodComponent,
    FoodBankComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

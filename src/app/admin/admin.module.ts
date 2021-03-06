import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
  MatTooltipModule,
  MatFormFieldModule
} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ColorPickerModule } from 'ngx-color-picker';

import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../material';
import { CoinComponent } from './components/coin/coin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LightboxComponent } from './components/lightbox/lightbox.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { TableIcoComponent } from './components/table-ico/table-ico.component';
import { TableNewsComponent } from './components/table-news/table-news.component';
import { TableComponent } from './components/table/table.component';
import { SellingComponent } from './components/selling/selling.component';
import { SellRequestsComponent } from './components/sell-requests/sell-requests.component';
import { SellRequestsListingComponent } from './components/sell-requests-listing/sell-requests-listing.component';
import { ScheduledCronsComponent } from './components/scheduled-crons/scheduled-crons.component';
import { ScheduledCronsListingComponent } from './components/scheduled-crons-listing/scheduled-crons-listing.component';
import { UpdateCronComponent } from './components/update-cron/update-cron.component';
import { CoinContainerComponent } from './containers/coin-container/coin-container.component';
import { LightboxContainerComponent } from './containers/lightbox-container/lightbox-container.component';
import { LoginContainerComponent } from './containers/login-container/login-container.component';
import { MainPageComponent } from './containers/main-page/main-page.component';
import { QuizContainerComponent } from './containers/quiz-container/quiz-container.component';
import { TableIcoContainerComponent } from './containers/table-ico-container/table-ico-container.component';
import { AdminEffects } from './effects/admin.effects';
import { CoinEffects } from './effects/coin.effects';
import { IcoEffects } from './effects/ico.effects';
import { QuizEffects } from './effects/quiz.effects';
import { AdminRoutingModule } from './modules/admin-routing.module';
import * as fromAdmin from './reducers';
import { PortfolioEffects } from './effects/portfolio.effects';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PortfolioContainerComponent } from './containers/portfolio-container/portfolio-container.component';
import { MaybeOptPipe } from './pipes/maybe-opt.pipe';
import { CoinValuePipe } from './pipes/coin-value.pipe';
import { QuizService } from './services/quiz.service';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { CryptoDistributionsComponent } from './components/crypto-distributions/crypto-distributions.component';
import { CryptoDistributionsListingComponent } from './components/crypto-distributions-listing/crypto-distributions-listing.component';
import { CryptoPollingsComponent } from './components/crypto-pollings/crypto-pollings.component';
import { CryptoPollingsListingComponent } from './components/crypto-pollings-listing/crypto-pollings-listing.component';
import { ViewPollingsComponent } from './components/view-pollings/view-pollings.component';

export const COMPONENTS = [
  LoginContainerComponent,
  LoginComponent,
  TableComponent,
  SellingComponent,
  DashboardComponent,
  NavComponent,
  MainPageComponent,
  LightboxContainerComponent,
  LightboxComponent,
  TableNewsComponent,
  QuizContainerComponent,
  QuizComponent,
  TableIcoComponent,
  TableIcoContainerComponent,
  CoinComponent,
  CoinContainerComponent,
  PortfolioComponent,
  PortfolioContainerComponent,
  MaybeOptPipe,
  CoinValuePipe,
  SellRequestsComponent,
  SellRequestsListingComponent,
  ScheduledCronsComponent,
  ScheduledCronsListingComponent,
  CryptoDistributionsComponent,
  CryptoDistributionsListingComponent,
  CryptoPollingsComponent,
  CryptoPollingsListingComponent,
  UpdateCronComponent,
  ViewPollingsComponent
];
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    AdminRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatExpansionModule,
    CoreModule,
    MatDatepickerModule,
    MatMomentDateModule,
    ColorPickerModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  declarations: COMPONENTS,
  entryComponents: [LightboxComponent, UpdateCronComponent, ViewPollingsComponent],
  exports: COMPONENTS,
})
export class AdminModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RootAdminModule,
    };
  }
}

@NgModule({
  imports: [
    EffectsModule.forFeature([
      AdminEffects,
      QuizEffects,
      IcoEffects,
      CoinEffects,
      PortfolioEffects,
    ]),
    StoreModule.forFeature('admin', fromAdmin.reducers, {
      metaReducers: fromAdmin.metaReducers,
    }),
  ],
  providers: [QuizService],
})
export class RootAdminModule {}

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginContainerComponent } from '../containers/login-container/login-container.component';
import { MainPageComponent } from '../containers/main-page/main-page.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { TableComponent } from '../components/table/table.component';
import { SellingComponent } from '../components/selling/selling.component';
import { SellRequestsComponent } from '../components/sell-requests/sell-requests.component';
import { ScheduledCronsComponent } from '../components/scheduled-crons/scheduled-crons.component';
import { AdminAuthGuard } from '../guards/auth.guard';
import { AdminPublicGuard } from '../guards/public.guard';
import { TableNewsComponent } from '../components/table-news/table-news.component';
import { QuizContainerComponent } from '../containers/quiz-container/quiz-container.component';
import { TableIcoContainerComponent } from '../containers/table-ico-container/table-ico-container.component';
import { CoinContainerComponent } from '../containers/coin-container/coin-container.component';
import { PortfolioContainerComponent } from '../containers/portfolio-container/portfolio-container.component';
import { CryptoDistributionsComponent } from '../components/crypto-distributions/crypto-distributions.component';
import { CryptoPollingsComponent } from '../components/crypto-pollings/crypto-pollings.component';

export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'prefix',
      },
      // {
      //   path: 'dashboard',
      //   component: DashboardComponent,
      //   data: { title: 'Dashboard' },
      //   canActivate: [AdminAuthGuard],
      // },
      {
        path: 'users',
        component: TableComponent,
        data: { title: 'Users' },
        canActivate: [AdminAuthGuard],
      },
      {
        path: 'selling',
        // component: SellingComponent,
        component: SellRequestsComponent,
        data: { title: 'Selling Requests' },
        canActivate: [AdminAuthGuard],
      },
      {
        path: 'news',
        component: TableNewsComponent,
        data: { title: 'News' },
        canActivate: [AdminAuthGuard],
      },
      {
        path: 'quiz',
        component: QuizContainerComponent,
        data: { title: 'Quiz Settings' },
        canActivate: [AdminAuthGuard],
      },
      {
        path: 'ico',
        component: TableIcoContainerComponent,
        data: { title: 'Ico' },
        canActivate: [AdminAuthGuard],
      },
      {
        path: 'coins',
        component: CoinContainerComponent,
        data: { title: 'Coins' },
        canActivate: [AdminAuthGuard],
      },
      {
        path: 'portfolios',
        component: PortfolioContainerComponent,
        data: { title: 'Portfolios' },
        canActivate: [AdminAuthGuard],
      },
      {
        path: 'scheduler-settings',
        component: ScheduledCronsComponent,
        data: { title: 'Scheduler Settings' },
        canActivate: [AdminAuthGuard],
      },
      {
        path: 'crypto-distributions',
        component: CryptoDistributionsComponent,
        data: { title: 'Crypto Distributions' },
        canActivate: [AdminAuthGuard],
      },
      {
        path: 'crypto-pollings',
        component: CryptoPollingsComponent,
        data: { title: 'Crypto Pollings' },
        canActivate: [AdminAuthGuard],
      },
    ],
  },
  {
    path: 'login',
    component: LoginContainerComponent,
    canActivate: [AdminPublicGuard],
    data: { title: 'Admin Login' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

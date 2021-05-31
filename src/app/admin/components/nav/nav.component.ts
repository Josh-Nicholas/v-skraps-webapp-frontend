import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  @Output() public OnLogout = new EventEmitter();
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));

  currentPageTitle = '';

  constructor(private breakpointObserver: BreakpointObserver,
              private router: Router) {}


  ngOnInit() {
    switch (this.router.url) {
      case '/admin/users':
          this.currentPageTitle = "Users";
          break;
      case '/admin/selling':
        this.currentPageTitle = "Selling Requests";
          break;
      case '/admin/crypto-distributions':
          this.currentPageTitle = "Crypto-Distribution";
          break;
      case '/admin/crypto-pollings':
          this.currentPageTitle = "Crypto-Pooling";
          break;
      case '/admin/news':
          this.currentPageTitle = "News";
          break;
      case '/admin/quiz':
          this.currentPageTitle = "Quiz";
          break;
      case '/admin/ico':
          this.currentPageTitle = "Ico";
          break;
      case '/admin/coins':
          this.currentPageTitle = "Coins";
          break;
      case '/admin/portfolios':
        this.currentPageTitle = "Portfolios";
        break;
      case '/admin/scheduler-settings':
        this.currentPageTitle = "Scheduler-Settings";
        break;
      default:

          break;
    }
  }

  setTopBarTitle(strVal: string) {
    this.currentPageTitle = strVal;
  }
}
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Logout } from '../../../auth/actions/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit {
  constructor(private store: Store<any>,
              private router: Router) {}

  ngOnInit() {}
  logout() {
    this.store.dispatch(new Logout());
    this.router.navigate(['/admin/login'], {});
  }
}

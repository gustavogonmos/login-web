import { Component } from '@angular/core';
import {BreakpointObserver, Breakpoints, LayoutModule} from '@angular/cdk/layout';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.sass']
})
export class FormLoginComponent {
  hide = true;

  public colSize = 2;
  public isMobile: boolean = false;

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.HandsetLandscape
    ]).subscribe(result => {
      this.isMobile = result.matches;
      if(this.isMobile) {
        this.colSize = 1;
      } else {
        this.colSize = 2;
      }
    })
  }

  login() {
    alert('Bienvenido!');
  }


}

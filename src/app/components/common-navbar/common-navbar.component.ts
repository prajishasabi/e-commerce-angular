import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-navbar',
  templateUrl: './common-navbar.component.html',
  styleUrls: ['./common-navbar.component.scss']
})
export class CommonNavbarComponent {
@Input() tokenExist: boolean = false
}

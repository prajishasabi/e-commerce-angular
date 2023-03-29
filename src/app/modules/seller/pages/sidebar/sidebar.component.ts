import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor (private route:Router){}

  logout()
{
  localStorage.removeItem('seller_token')
  this.route.navigateByUrl('/home')



}
}

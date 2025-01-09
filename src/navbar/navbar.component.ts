import { Component, ElementRef, HostListener, ViewChild, viewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink , RouterLinkActive ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
 
  @ViewChild('navbar') nav!:ElementRef

  @HostListener('window:scroll') scrollchang():void
  {
    if(scrollY>100)
    {

      this.nav.nativeElement.classlist.replace('p-3','p-1')
    }
    else{
      this.nav.nativeElement.classlist.replace('p-1','p-3')
    }
  }
}

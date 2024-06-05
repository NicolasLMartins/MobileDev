import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/Home', icon: 'home' },
    { title: 'Empresa', url: '/Empresa', icon: 'bag' },
    { title: 'Produtos', url: '/Produtos', icon: 'cart' },
    { title: 'Contato', url: '/Contato', icon: 'call' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}

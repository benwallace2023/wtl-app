import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },

    {
      title: 'team',
      url: '/team',
      icon: 'people-circle-outline'
    },
   
    {
      title: 'contact',
      url: '/contact',
      icon: 'id-card-outline'
    },

    {
      title: 'news',
      url: '/news',
      icon: 'newspaper-outline'
    },

    {
      title: 'order',
      url: '/order',
      icon: 'reader-outline'
    },
  ];
  constructor() {}
}

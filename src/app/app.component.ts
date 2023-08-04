import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular Media Player';
  navLinks = [
    {
      title: "Video's",
      href: '/',
    },
    {
      title: 'Search',
      href: '/search',
    },
    {
      title: 'Add',
      href: '/add',
    },
  ];
}

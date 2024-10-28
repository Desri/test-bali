import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenubarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test-recharge-bali';
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        url: '/'
      },
      {
        label: 'Finansial',
        url: '/finansial'
      },
      {
        label: 'Tekno',
        url: '/tekno'
      },
      {
        label: 'Lifestyle',
        url: '/lifestyle'
      },
      {
        label: 'Movies',
        url: '/movies'
      },
      {
        label: 'World',
        url: '/world'
      },
      {
        label: 'Arts',
        url: '/arts'
      }
    ]
  }
}

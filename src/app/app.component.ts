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
        label: 'Home'
      },
      {
        label: 'Finansial'
      },
      {
        label: 'Tekno'
      },
      {
        label: 'Lifestyle'
      },
      {
        label: 'Bisnis'
      },
      {
        label: 'Otomotif'
      },
      {
        label: 'World'
      },
      {
        label: 'Opinion'
      },
      {
        label: 'Arts'
      }
    ]
  }
}

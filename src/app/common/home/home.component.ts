import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterOutlet, ImageModule, CardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderModule } from '../stories/header.module';
import { HeaderComponent } from '../stories/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-tour-of-heroes';
}

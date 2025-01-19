import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemperatureWidgetComponent } from './temperature-widget/temperature-widget.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TemperatureWidgetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'devices';
}

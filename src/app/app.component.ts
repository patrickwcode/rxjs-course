import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { from, fromEvent, Observable, of } from 'rxjs';
import { CustomObserver } from './custom-observer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor() {
    const numbers$ = from([1, 2, 3, 4, 5]);
    numbers$.subscribe(new CustomObserver());
  }
}

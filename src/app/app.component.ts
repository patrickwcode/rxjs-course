import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { from, fromEvent, of } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor() {
    const messagePromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Server Error');
      }, 1000);
    });

    const message$ = from(messagePromise);

    message$.subscribe({
      next: (message) => {
        console.log('message', message);
      },
      error: (err) => {
        console.error('err', err);
      },
      complete: () => {
        console.log('Finished!');
      },
    });
  }
}

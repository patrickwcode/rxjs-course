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
    const users = [
      { id: '1', name: 'John', age: 30 },
      { id: '2', name: 'Jack', age: 35 },
      { id: '3', name: 'Mike', age: 25 },
    ];

    const messagePromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('Promise resolved');
      }, 1000);
    });

    const users$ = of(users);
    const message$ = from(messagePromise);
    const bodyClick$ = fromEvent(document, 'click');

    users$.subscribe((users) => {
      console.log('users', users);
    });

    message$.subscribe((message) => {
      console.log('message', message);
    });

    bodyClick$.subscribe((event) => {
      console.log('event', event);
    });
  }
}

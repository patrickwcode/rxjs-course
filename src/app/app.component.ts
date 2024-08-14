import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { from, fromEvent, Observable, of } from 'rxjs';

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
      { id: '2', name: 'James', age: 31 },
      { id: '3', name: 'Mike', age: 33 },
    ];

    const users$ = new Observable((observer) => {
      users.forEach((user) => {
        observer.next(user);
      });
    });

    users$.subscribe({
      next: (users) => {
        console.log('users', users);
      },
      complete: () => {
        console.log('finished!');
      },
    });
  }
}

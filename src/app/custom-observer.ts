import { Observer } from 'rxjs';

export class CustomObserver implements Observer<number> {
  next(data: number) {
    console.log('next', data);
  }
  error(err: string) {
    console.log('err', err);
  }
  complete() {
    console.log('complete');
  }
}

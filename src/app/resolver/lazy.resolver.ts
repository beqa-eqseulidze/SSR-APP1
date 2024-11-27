import { ResolveFn } from '@angular/router';
import { map, timer } from 'rxjs';

export const lazyResolver: ResolveFn<boolean> = (route, state) => {
  return timer(3000).pipe(map(()=>true));
};

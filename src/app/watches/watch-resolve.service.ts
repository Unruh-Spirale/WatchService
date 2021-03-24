import {WatchesService} from './watches.service';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Watch} from './models/watch';
import {Injectable} from '@angular/core';

@Injectable()
export class WatchResolveService implements Resolve<Watch>{
  constructor(
    private watchesService: WatchesService
  ) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.watchesService.getWatch(route.params['id']);
  }
}

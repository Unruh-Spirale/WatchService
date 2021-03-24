import { Component, OnInit } from '@angular/core';
import {Watch} from '../models/watch';
import {WatchesService} from '../watches.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-watches-list',
  templateUrl: './watches-list.component.html',
  styleUrls: ['./watches-list.component.css']
})
export class WatchesListComponent implements OnInit {

  totalCost: number;
  watches: Watch[];

  constructor(
    private watchesService: WatchesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadWatches();

  }

  loadWatches(): void{
    this.watchesService.getWatches().subscribe((watches) => {
      this.watches = watches;
      this.countTotalCost();
    });
  }

  countTotalCost(): void{
    this.totalCost = this.watches.map((watch) => watch.cost).reduce((prev, next) => prev + next);
  }

  goToWatchDetails(watch: Watch): void{
    this.router.navigate(['/watches', watch.idWatch]);
  }
  removeWatch(watch: Watch, event): void{
    event.stopPropagation();
    this.watchesService.deleteWatch(watch.idWatch).subscribe(() => {
     this.loadWatches();
    });
  }
  reload(): void{
    window.location.reload();
  }
}

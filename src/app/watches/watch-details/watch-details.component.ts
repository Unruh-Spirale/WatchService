import { Component, OnInit } from '@angular/core';
import {WatchesService} from '../watches.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Watch} from '../models/watch';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-watch-details',
  templateUrl: './watch-details.component.html',
  styleUrls: ['./watch-details.component.css']
})
export class WatchDetailsComponent implements OnInit {

  watch: Watch;
  watchUpdateForm: FormGroup;

  constructor(
    private watchService: WatchesService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loadWatch();
    this.watchUpdateForm = this.buildUpdateWatchForm();
  }

  buildUpdateWatchForm(){
    return this.formBuilder.group({
      company: [this.watch.company, Validators.required],
      country: this.watch.country,
      model:  [this.watch.model, Validators.required],
      movement: this.watch.movement,
      movementModel: this.watch.movementModel,
      toRepair: [this.watch.toRepair, Validators.required],
      deadline: this.watch.deadline,
      cost: [this.watch.cost, Validators.required]
    });
  }

  loadWatch(): void{
    this.watch = this.route.snapshot.data['watch'];
    }

  updateWatch(): void{
    this.watchService.updateWatch(this.watch.idWatch, this.watchUpdateForm.value).subscribe(() => {
      this.router.navigate(['/watches']);
    });
  }

  }


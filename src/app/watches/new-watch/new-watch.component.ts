import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {WatchesService} from '../watches.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-watch.component.html',
  styleUrls: ['./new-watch.component.css']
})
export class NewWatchComponent implements OnInit {

  watchForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private watchesService: WatchesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.watchForm = this.buildWatchForm();
  }

  addWatch(): void{
    this.watchesService.addWatch(this.watchForm.value).subscribe(() =>{
      this.router.navigate(['/watches']);
    });
  }

  buildWatchForm(): FormGroup{
    return this.formBuilder.group({
      company: ['', Validators.required],
      country: '',
      model: ['', Validators.required],
      movement: '',
      movementModel: '',
      toRepair: ['', Validators.required],
      deadline: '',
      cost: [0, Validators.required],
    });
  }

}

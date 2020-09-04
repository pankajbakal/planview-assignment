import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimeSheetService } from './time-sheet.service';
import { ITimesheet } from './timesheet.model';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-time-sheet-entry',
  templateUrl: './time-sheet-entry.component.html',
  styleUrls: ['./time-sheet-entry.component.css']
})
export class TimeSheetEntryComponent implements OnInit {

  currentTimesheet: ITimesheet = {
    id: 0,
    userId: 0,
    sunday: 0,
    monday: 0,
    tuesday: 0,
    wednesday: 0,
    thursday: 0,
    friday: 0,
    saturday: 0
  }

  constructor(private router: Router,
    private timeSheetService: TimeSheetService,
    private loginService: LoginService) { }

  ngOnInit(): void {
  }

  submitTimesheet(timesheetForm: NgForm) {
    if (timesheetForm && timesheetForm.valid) {
      console.log(this.currentTimesheet);
      this.currentTimesheet.userId = this.loginService.currentUser.id;
      this.timeSheetService.createTimesheet(this.currentTimesheet).subscribe((data) => {
        console.log('timesheet savaed');
        this.router.navigateByUrl('/landing');
      });
    }
  }

}

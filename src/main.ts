import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
 
  <div class="timeline">
  <div class="status" *ngFor="let status of statusArray; let i = index; let last = last">
    <div class="circle" [ngClass]="{ 'completed': status.completed }">
      <span *ngIf="status.completed">&#10003;</span>
    </div>
    <div class="vertical-line" [ngClass]="{ 'completed': status.completed, 'no-line': !status.completed }" *ngIf="!last"></div>
    <div class="additional-line" *ngIf="!last && !status.completed  " ></div>

    <div class="status-message">
      {{ status.message }}
    </div>
  </div>
</div>



  `,
})
export class App {
  statusArray: any[] = [
    { completed: true, message: 'Status 1' },
    { completed: true, message: 'Status 2' },
    { completed: false, message: 'Status 3' },
    { completed: false, message: 'Status 4' },
  ];
}

bootstrapApplication(App);

import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject, interval, Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit, OnDestroy {

  secondes: number;
  counterSubscription: Subscription;

  ngOnInit() {
   const counter = interval(1000);
   this.counterSubscription = counter.subscribe(
     (value) => {
       this.secondes = value;
     },
     (error) => {
       console.log('Woh Mad-AGN !!, an error occurred! : ' + error );
     },
     () => {
       console.log('Obsevable complete!');
     }
   );
 }

 ngOnDestroy() {
    this.counterSubscription.unsubscribe();
 }

}

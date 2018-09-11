import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Observer, Subscription} from 'rxjs';
import 'rxjs-compat/add/observable/interval';
import set = Reflect.set;




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  numbersObservableSubscription: Subscription;

  constructor() { }

  ngOnInit() {

    // const myNumber = Observable.interval(1000);
    // myNumber.subscribe(
    //  (number: number) => {
    //    console.log(number);
    //  }
    // );

    const myObservable = Observable.create(
      (observe: Observer<string>) => {
        setTimeout(() => {observe.next('first package');}, 2000);
        setTimeout(() => {observe.next('seconde package');}, 4000);
        setTimeout(() => {observe.error('this does not work');}, 6000);
      });
    this.numbersObservableSubscription = myObservable.subscribe(
      (data: String) => {console.log(data);},
      (error: String) => {console.log(error);}
    );
  }

  ngOnDestroy(): void {
    this.numbersObservableSubscription.unsubscribe();
    console.log('destroyed');
  }

}

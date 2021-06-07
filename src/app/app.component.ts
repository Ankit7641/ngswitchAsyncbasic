import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  greeting: Promise<string>|null = null;
  arrived: boolean = false;

  private resolve: Function|null = null;

  title = 'switchAsync';
  employee = [
    { id: 1, name:"Test 1", currency: "India", status: "Active", date: "4th of April 2021" },
    { id: 2, name:"Test 2", currency: "Euro", status: "Active", date: "5th of April 2021" },
    { id: 3, name:"Test 3", currency: "Pound", status: "Active", date: "6th of April 2018" },
    { id: 4, name:"Test 4", currency: "India", status: "Active", date: "7th of April 2019" },
     { id: 5, name:"Test 5", currency: "Euro", status: "Active", date: "8nd of May 2020" }
  ];

  constructor() { 
    this.reset();
  }
 
  ngOnInit() {
    
 
    for (var i = 0; i < this.employee.length; i++) {
      switch (this.employee[i].currency) {
        case "India": {
          console.log(this.employee[i].currency);
          break;
        }
        case "USA": {
          console.log(this.employee[i].currency);
          break;
        }
        case "UK": {
          console.log(this.employee[i].currency);
          break;
        }
        case "Euro": {
          console.log(this.employee[i].currency);
          break;
        }
        default: {
          console.log("City not in the list");
          break;
        }
      }
    }
  }

  

  reset() {
    this.arrived = false;
    this.greeting = new Promise<string>((resolve, reject) => {
      this.resolve = resolve;
    });
  }

  clicked() {
    if (this.arrived) {
      this.reset();
    } else {
      this.resolve!('hi there!');
      this.arrived = true;
    }
  }
  

}

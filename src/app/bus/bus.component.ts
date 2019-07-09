import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {

  public busForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  searchBusName(){}

  searchBus(){}

}

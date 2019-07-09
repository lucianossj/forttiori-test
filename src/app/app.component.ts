import { Component, OnInit } from '@angular/core';
import { MinibusLinesService } from './services/minibus-lines.service';
import { BusLinesService } from './services/bus-lines.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'forttiori-test';

  minibusLines: Array<any>;
  busLines: Array<any>;
  searchResult: Array<any>;
  list: Array<any>;

  constructor(
    private minibusLinesService: MinibusLinesService,
    private busLinesService: BusLinesService) {}

  ngOnInit() {

    this.minibusLinesService.search().subscribe(data => this.list = data);

  }

  searchMinibus() {

    this.minibusLines = null;
    this.busLines     = null;
    this.searchResult = null;

    this.minibusLinesService.search().subscribe(data => this.minibusLines = data);

  }

  searchBus() {

    this.minibusLines = null;
    this.busLines     = null;
    this.searchResult = null;

    this.busLinesService.search().subscribe(data => this.busLines = data);

  }

}

import { Component, OnInit } from '@angular/core';
import { MinibusLinesService } from './services/minibus-lines.service';
import { BusLinesService } from './services/bus-lines.service';
import { FormGroup } from '@angular/forms';
import { MinibusNameForm } from './forms/minibusNameForm';
import { BusNameForm } from './forms/busNameForm';
import { IdForm } from './forms/idForm';
import { GetItineraryService } from './services/get-itinerary.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'forttiori-test';

  minibusLines: Array<any>;
  busLines: Array<any>;
  itineraries: Array<any>;
  searchResult: Array<any>;
  list: Array<any>;
  peopleArray: Array<any>;

  public formMinibus: FormGroup;
  public formBus: FormGroup;
  public formItinerary: FormGroup;

  constructor(
    private minibusLinesService: MinibusLinesService,
    private busLinesService: BusLinesService,
    private getItineraryService: GetItineraryService,
    private minibusNameForm: MinibusNameForm,
    private busNameForm: BusNameForm,
    private idForm: IdForm) {

      this.formMinibus    = this.minibusNameForm.createForm();
      this.formBus        = this.busNameForm.createForm();
      this.formItinerary  = this.idForm.createForm();

    }

  ngOnInit() {

    this.minibusLinesService.search().subscribe(data => this.list = data);

  }

  searchMinibus() {

    this.minibusLines = null;
    this.busLines     = null;
    this.searchResult = null;
    this.peopleArray  = null;

    this.minibusLinesService.search().subscribe(data => this.minibusLines = data);

  }

  searchBus() {

    this.minibusLines = null;
    this.busLines     = null;
    this.searchResult = null;
    this.peopleArray  = null;

    this.busLinesService.search().subscribe(data => this.busLines = data);

  }

  searchMinibusByName() {

    const search = this.formMinibus.controls.name.value;
    this.minibusLinesService.search().subscribe(data => this.list = data);
    this.filterMinibusName(search);

  }

  filterMinibusName(search) {

    this.busLines     = null;
    this.peopleArray  = null;
    this.minibusLines = this.list.filter(data => data.nome.toLowerCase().indexOf(search.toLowerCase()) >= 0);

  }

  searchBusByName() {

    const search = this.formBus.controls.name.value;
    this.busLinesService.search().subscribe(data => this.list = data);
    this.filterBusName(search);

  }

  filterBusName(search) {

    this.minibusLines = null;
    this.busLines = this.list.filter(data => data.nome.toLowerCase().indexOf(search.toLowerCase()) >= 0);

  }

  searchItinerary() {

    this.minibusLines = null;
    this.busLines     = null;
    this.itineraries  = null;

    const id = this.formItinerary.controls.id.value;
    this.getItineraryService.search(id).subscribe(data => {
      this.itineraries = data;
      this.peopleArray = Object.keys(this.itineraries).map(i => this.itineraries[i]);
      console.log(this.peopleArray);
      });
  }

  public searchByLine(id) {
    this.minibusLines = null;
    this.busLines = null;
    this.itineraries = null;
    this.getItineraryService.search(id).subscribe(data => {
      this.itineraries = data;
      this.peopleArray = Object.keys(this.itineraries).map(i => this.itineraries[i]);
      console.log(this.peopleArray);
      });
  }

}

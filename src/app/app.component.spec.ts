import { IdForm } from './forms/idForm';
import { GetItineraryService } from './services/get-itinerary.service';
import { MinibusLinesService } from './services/minibus-lines.service';
import { AppComponent } from './app.component';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { BusLinesService } from './services/bus-lines.service';
import { BusNameForm } from './forms/busNameForm';
import { AppComponentStub as stub } from './app.component.stub';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MinibusNameForm } from './forms/minibusNameForm';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let minibusLinesService: MinibusLinesService;
  let busLinesService: BusLinesService;
  let getItineraryService: GetItineraryService;
  let miniBusNameForm: MinibusNameForm;
  let busNameForm: BusNameForm;
  let idForm: IdForm;
  let formMinibus: FormGroup;
  let formBus: FormGroup;
  let formItinerary: FormGroup;

  let formBuilder: FormBuilder = new FormBuilder();

  miniBusNameForm

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ AppComponent ],
      providers: [
        FormBuilder,
        { provide: MinibusLinesService },
        { provide: BusLinesService },
        { provide: GetItineraryService },
        MinibusNameForm,
        BusNameForm,
        IdForm,
        { provide: FormGroup, useValue: formMinibus },
        { provide: FormGroup, useValue: formBus },
        { provide: FormGroup, useValue: formItinerary },
      ],
    }).compileComponents()
    .then(() => {
      formMinibus = TestBed.get(FormGroup);
      formBus = TestBed.get(FormGroup);
      formItinerary = TestBed.get(FormGroup);

      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;

      fixture.detectChanges();
    });
  }));

  it('The component has been defined', () => {
    expect(component).toBeTruthy();
  });

  /*describe('searchMinibus: ', () => {
    it('Test', () => {
      expect();
    });
  });

  describe('searchBus: ', () => {
    it('Test', () => {
      expect();
    });
  });

  describe('searchMinibusByName: ', () => {
    it('Test', () => {
      expect();
    });
  });

  describe('filterMinibusName: ', () => {
    it('Test', () => {
      expect();
    });
  });

  describe('searchBusByName: ', () => {
    it('Test', () => {
      expect();
    });
  });

  describe('searchItinerary: ', () => {
    it('Test', () => {
      expect();
    });
  });

  describe('searchByLine: ', () => {
    it('Test', () => {
      expect();
    });
  });*/

});


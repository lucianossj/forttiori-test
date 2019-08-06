import { TestSuite } from '../../../pip-frontend/client/src/angular5/test-utils/test-suite';
import { IdForm } from './forms/idForm';
import { GetItineraryService } from './services/get-itinerary.service';
import { MinibusLinesService } from './services/minibus-lines.service';
import { AppComponent } from './app.component';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { BusLinesService } from './services/bus-lines.service';
import { BusNameForm } from './forms/busNameForm';
import { AppComponentStub as stub } from './app.component.stub';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let minibusLinesService: MinibusLinesService;
  let busLinesService: BusLinesService;
  let getItineraryService: GetItineraryService;
  let busNameForm: BusNameForm;
  let idForm: IdForm;

  TestSuite.configure();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: MinibusLinesService, useClass: stub ,},
        { provide: BusLinesService, useClass: stub },
        { provide: GetItineraryService, useClass: stub },
        { provide: BusNameForm, useClass: stub },
        { provide: IdForm, useClass: stub }
      ],
    }).compileComponents()
    .then(() => {
      minibusLinesService = TestBed.get(MinibusLinesService);
      busLinesService = TestBed.get(BusLinesService);
      getItineraryService = TestBed.get(GetItineraryService);
      busNameForm = TestBed.get(BusNameForm);
      idForm = TestBed.get(IdForm);

      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
    });
  }));

  it('The component has been defined', () => {
    expect(component).toHaveBeenCalled();
  });
});


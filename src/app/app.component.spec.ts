import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { MinibusLinesService } from './services/minibus-lines.service';

import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BusNameForm } from './forms/busNameForm';
import { MinibusNameForm } from './forms/minibusNameForm';
import { IdForm } from '../../../pocdimed/src/app/forms/Idform';

describe('AppComponent - Tests', () => {

  let component: AppComponent;
  let minibusLinesService: MinibusLinesService;
  let http: HttpClient;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    minibusLinesService = new MinibusLinesService(http);

  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should test if the request has response', () => {

    let array = minibusLinesService.search();

    expect(array).not.toBeNull();

  });

});

/*

private minibusLinesService: MinibusLinesService,
  private busLinesService: BusLinesService,
  private getItineraryService: GetItineraryService,
  private minibusNameForm: MinibusNameForm,
  private busNameForm: BusNameForm,
  private idForm: IdForm

beforeEach(async(() => {
  TestBed.configureTestingModule({
    imports: [
      RouterTestingModule
    ],
    declarations: [
      AppComponent
    ],
  }).compileComponents();
}));

it('should create the app', () => {
  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.debugElement.componentInstance;
  expect(app).toBeTruthy();
});

it(`should have as title 'forttiori-test'`, () => {
  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.debugElement.componentInstance;
  expect(app.title).toEqual('forttiori-test');
});

it('should render title in a h1 tag', () => {
  const fixture = TestBed.createComponent(AppComponent);
  fixture.detectChanges();
  const compiled = fixture.debugElement.nativeElement;
  expect(compiled.querySelector('h1').textContent).toContain('Welcome to forttiori-test!');
});*/

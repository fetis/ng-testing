import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { DataServiceService } from '../data-service.service';

const dataServiceMock: Partial<DataServiceService> = {
  country: 'DE'
};

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let nativeEl: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: DataServiceService, useValue: dataServiceMock }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    nativeEl = fixture.debugElement.nativeElement;
  });

  fit('should render other country', () => {
    const service: DataServiceService = TestBed.get(DataServiceService);
    service.country = 'FR';

    fixture.detectChanges();

    expect(nativeEl.textContent).toContain('other country');
  });

  fit('should render country name', () => {
    fixture.detectChanges();

    expect(nativeEl.textContent).toContain('Germany');
  });

});

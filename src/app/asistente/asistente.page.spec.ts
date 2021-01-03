import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AsistentePage } from './asistente.page';

describe('AsistentePage', () => {
  let component: AsistentePage;
  let fixture: ComponentFixture<AsistentePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsistentePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AsistentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

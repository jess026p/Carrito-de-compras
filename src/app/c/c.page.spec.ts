import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CPage } from './c.page';

describe('CPage', () => {
  let component: CPage;
  let fixture: ComponentFixture<CPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

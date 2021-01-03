import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComenzarCompraPage } from './comenzar-compra.page';

describe('ComenzarCompraPage', () => {
  let component: ComenzarCompraPage;
  let fixture: ComponentFixture<ComenzarCompraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComenzarCompraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComenzarCompraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdicionalcuestionariomedicoPage } from './adicionalcuestionariomedico.page';

describe('AdicionalcuestionariomedicoPage', () => {
  let component: AdicionalcuestionariomedicoPage;
  let fixture: ComponentFixture<AdicionalcuestionariomedicoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionalcuestionariomedicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdicionalcuestionariomedicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SScreenPage } from './sscreen.page';

describe('SScreenPage', () => {
  let component: SScreenPage;
  let fixture: ComponentFixture<SScreenPage>;
   
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SScreenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

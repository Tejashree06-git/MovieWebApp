import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoviespagePage } from './moviespage.page';

describe('MoviespagePage', () => {
  let component: MoviespagePage;
  let fixture: ComponentFixture<MoviespagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviespagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoviespagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

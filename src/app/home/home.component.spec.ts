import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home.component';
import { SquareComponent } from './square/square.component';
import { PropertiesComponent } from './list/properties/properties.component';
import { SharedModule } from '../shared/shared.module';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, ListComponent, SquareComponent, PropertiesComponent ],
      imports: [SharedModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { ShowComponent } from './show.component';

describe('ShowComponent', () => {
  let component: ShowComponent;
  let fixture: ComponentFixture<ShowComponent>;

  const fakeActivatedRoute = {
    snapshot: {
      paramMap: convertToParamMap({ id: 0 })
    }
  } as ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ ShowComponent ],
      providers: [ { provide: ActivatedRoute, useValue: fakeActivatedRoute } ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

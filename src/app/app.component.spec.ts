import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { ApplyButtonComponent } from './apply-button/apply-button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { GroupsService } from './groups.service';
import { ProductGroupComponent } from './product-group/product-group.component';
import { SearchInputComponent } from './search-input/search-input.component';

const GROUPS_MOCK = ['Muziek', 'Lp&#x27;s', 'Dvd&#x27;s &amp; Blu-rays'];

const groupsServiceStub: Partial<GroupsService> = {
  getGroups: () => of(GROUPS_MOCK),
};

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ProductGroupComponent,
        ApplyButtonComponent,
        SearchInputComponent,
        CheckboxComponent,
      ],
      providers: [{ provide: GroupsService, useValue: groupsServiceStub }],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'bol-product-group'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('bol-product-group');
  });
});

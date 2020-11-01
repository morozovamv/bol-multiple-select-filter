import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ApplyButtonComponent } from '../apply-button/apply-button.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { GroupsService } from '../groups.service';
import { SearchInputComponent } from '../search-input/search-input.component';

import { ProductGroupComponent } from './product-group.component';

const GROUPS_MOCK = ['Muziek', 'Lp&#x27;s', 'Dvd&#x27;s &amp; Blu-rays'];

const groupsServiceStub: Partial<GroupsService> = {
  getGroups: () => of(GROUPS_MOCK),
};

describe('ProductGroupComponent', () => {
  let component: ProductGroupComponent;
  let fixture: ComponentFixture<ProductGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductGroupComponent,
        ApplyButtonComponent,
        SearchInputComponent,
        CheckboxComponent,
      ],
      providers: [{ provide: GroupsService, useValue: groupsServiceStub }],
    }).compileComponents();
  }));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductGroupComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

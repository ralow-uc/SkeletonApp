import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TimerPage } from "./timer.page";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { NumberFactService } from "src/services/number-fact.service";

describe("TimerPage", () => {
  let component: TimerPage;
  let fixture: ComponentFixture<TimerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimerPage],
      imports: [HttpClientTestingModule],
      providers: [NumberFactService],
    }).compileComponents();

    fixture = TestBed.createComponent(TimerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

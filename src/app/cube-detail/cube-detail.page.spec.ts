import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CubeDetailPage } from "./cube-detail.page";
import { ActivatedRoute } from "@angular/router";
import { of } from "rxjs";

describe("CubeDetailPage", () => {
  let component: CubeDetailPage;
  let fixture: ComponentFixture<CubeDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CubeDetailPage],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ cubeId: "1" }),
            snapshot: { paramMap: new Map() },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CubeDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

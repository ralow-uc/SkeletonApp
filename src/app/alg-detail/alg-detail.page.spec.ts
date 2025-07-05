import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AlgDetailPage } from "./alg-detail.page";
import { ActivatedRoute, Router } from "@angular/router";
import { of } from "rxjs";

describe("AlgDetailPage", () => {
  let component: AlgDetailPage;
  let fixture: ComponentFixture<AlgDetailPage>;

  const mockAllCubes = [
    {
      id: "1",
      sets: [
        {
          id: "1",
          cases: [
            {
              id: "1",
              name: "Caso 1",
              algs: ["R U R'"],
            },
          ],
        },
      ],
    },
  ];

  const mockRouter = {
    getCurrentNavigation: () => ({
      extras: {
        state: {
          allCubes: mockAllCubes,
        },
      },
    }),
  };

  beforeEach(async () => {
    // Simula correctamente history.state
    spyOnProperty(history, "state", "get").and.returnValue({
      allCubes: mockAllCubes,
    });

    await TestBed.configureTestingModule({
      declarations: [AlgDetailPage],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => "1",
              },
            },
          },
        },
        {
          provide: Router,
          useValue: mockRouter,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AlgDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

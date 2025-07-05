import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CubeSetDetailPage } from "./cube-set-detail.page";
import { ActivatedRoute, Router } from "@angular/router";
import { of } from "rxjs";

describe("CubeSetDetailPage", () => {
  let component: CubeSetDetailPage;
  let fixture: ComponentFixture<CubeSetDetailPage>;

  const mockAllCubes = {
    "1": {
      sets: [
        {
          id: "1",
          name: "OLL",
          cases: [
            {
              id: "1",
              name: "Caso 1",
              image: "https://example.com/image.png",
              algs: ["R U R'"],
            },
          ],
        },
      ],
    },
  };

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
    // Sobreescribimos el getter de history.state solo dentro del test
    spyOnProperty(history, "state", "get").and.returnValue({
      allCubes: mockAllCubes,
    });

    await TestBed.configureTestingModule({
      declarations: [CubeSetDetailPage],
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

    fixture = TestBed.createComponent(CubeSetDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

export interface CubeData {
  name: string;
  image: string;
  sets: {
    id: string;
    name: string;
    image: string;
    cases: {
      id: string;
      name: string;
      image: string;
      algs: string[];
    }[];
  }[];
}

export type CubeId = "3x3" | "sq1";

export const allCubes: Record<CubeId, CubeData> = {
  "3x3": {
    name: "3x3",
    image: "assets/3x3/3x3.png",
    sets: [
      {
        id: "oll",
        name: "OLL",
        image: "assets/3x3/oll/L.png",
        cases: [
          {
            id: "1",
            name: "1",
            image: "assets/3x3/oll/OLL-01.png",
            algs: ["U R U' R'", "y U R U2 R' U' R"],
          },
          {
            id: "2",
            name: "2",
            image: "assets/3x3/oll/OLL-02.png",
            algs: ["y' U2 R U R' U", "R' F R F'"],
          },
        ],
      },
    ],
  },
  "sq1": {
    name: "Square-1",
    image: "assets/square-1.jpg",
    sets: [],
  },
};

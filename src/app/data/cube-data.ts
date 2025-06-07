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
            name: "OLL 1",
            image: "assets/3x3/oll/OLL-01.png",
            algs: ["U R U' R'", "y U R U2 R' U' R"],
          },
          {
            id: "2",
            name: "OLL 2",
            image: "assets/3x3/oll/OLL-02.png",
            algs: ["y' U2 R U R' U", "R' F R F'"],
          },
          {
            id: "3",
            name: "OLL 3",
            image: "assets/3x3/oll/OLL-02.png",
            algs: ["y' U2 R U R' U", "R' F R F'"],
          },
          {
            id: "4",
            name: "OLL 2",
            image: "assets/3x3/oll/OLL-02.png",
            algs: ["y' U2 R U R' U", "R' F R F'"],
          },
          {
            id: "5",
            name: "OLL 2",
            image: "assets/3x3/oll/OLL-02.png",
            algs: ["y' U2 R U R' U", "R' F R F'"],
          },
          {
            id: "6",
            name: "OLL 2",
            image: "assets/3x3/oll/OLL-02.png",
            algs: ["y' U2 R U R' U", "R' F R F'"],
          },
          {
            id: "7",
            name: "OLL 2",
            image: "assets/3x3/oll/OLL-02.png",
            algs: ["y' U2 R U R' U", "R' F R F'"],
          },
          {
            id: "8",
            name: "OLL 2",
            image: "assets/3x3/oll/OLL-02.png",
            algs: ["y' U2 R U R' U", "R' F R F'"],
          },
          {
            id: "9",
            name: "OLL 2",
            image: "assets/3x3/oll/OLL-02.png",
            algs: ["y' U2 R U R' U", "R' F R F'"],
          },
          {
            id: "10",
            name: "OLL 2",
            image: "assets/3x3/oll/OLL-02.png",
            algs: ["y' U2 R U R' U", "R' F R F'"],
          },
          {
            id: "11",
            name: "OLL 2",
            image: "assets/3x3/oll/OLL-02.png",
            algs: ["y' U2 R U R' U", "R' F R F'"],
          },
          {
            id: "12",
            name: "OLL 2",
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
    sets: [
    ],
  },
};

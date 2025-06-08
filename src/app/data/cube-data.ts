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
      image: string | string[];
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
        image: "assets/3x3/oll/OLL-01.png",
        cases: [
          {
            id: "1",
            name: "OLL 1",
            image: "assets/3x3/oll/OLL-01.png",
            algs: ["R U R' U R U2 R'", "y' R' U2 R U R' U R"],
          },
          {
            id: "2",
            name: "OLL 2",
            image: "assets/3x3/oll/OLL-02.png",
            algs: ["R U2 R' U' R U' R'", "y' R' U' R U' R' U2 R"],
          },
          {
            id: "3",
            name: "OLL 3",
            image: "assets/3x3/oll/OLL-03.png",
            algs: ["R U2 R' U' R U R' U' R U' R'", "F R U R' U' R U R' U' R U R' U' F'", "y R U R' U R U' R' U R U2 R'"],
          },
          {
            id: "4",
            name: "OLL 4",
            image: "assets/3x3/oll/OLL-04.png",
            algs: ["R U2 R2 U' R2 U' R2 U2 R", "y R U R' U R U' R' U R U2 R'"],
          },
          {
            id: "5",
            name: "OLL 5",
            image: "assets/3x3/oll/OLL-05.png",
            algs: ["r U R' U' r' F R F'", "y' x' R U R' D R U' R' D' x"],
          },
          {
            id: "6",
            name: "OLL 6",
            image: "assets/3x3/oll/OLL-06.png",
            algs: ["F' r U R' U' r' F R", "y2 x' R U' R' D R U R' D' x", "y' F R' F' r U R U' r'"],
          },
          {
            id: "7",
            name: "OLL 7",
            image: "assets/3x3/oll/OLL-07.png",
            algs: ["R2 D' R U2 R' D R U2 R", "y2 R2 D R' U2 R D' R' U2 R'"],
          },
          {
            id: "8",
            name: "OLL 8",
            image: "assets/3x3/oll/OLL-08.png",
            algs: ["R U' R2 D' r U' r' D R2 U R'", "R U' R2 D' r U' r' D R2 U R'"],
          },
          {
            id: "9",
            name: "OLL 9",
            image: "assets/3x3/oll/OLL-09.png",
            algs: ["r U r' U2 R U2 R' U2 r U' r'", "y2 R U' R2 D' r U r' D R2 U R'", "y' F R U R' U' F' f R U R' U' f'"],
          },
          {
            id: "10",
            name: "OLL 10",
            image: "assets/3x3/oll/OLL-10.png",
            algs: ["R' F2 R2 U2 R' F R U2 R2 F2 R", "y' r' R2 U R' U r U2 r' U M'", "y2 f R U R' U' f' U' F R U R' U' F'"],
          },
          {
            id: "11",
            name: "OLL 11",
            image: "assets/3x3/oll/OLL-11.png",
            algs: ["R' F2 R2 U2 R' F' R U2 R2 F2 R", "f R U R' U' f' U F R U R' U' F'", "y l L2 U' L U' l' U2 l U' M'"],
          },
          {
            id: "12",
            name: "OLL 12",
            image: "assets/3x3/oll/OLL-12.png",
            algs: ["r U R' U R U2 r2 U' R U' R' U2 r", "y R U2 R2 F R F' U2 M' U R U' r'"],
          },
          {
            id: "13",
            name: "OLL 13",
            image: "assets/3x3/oll/OLL-13.png",
            algs: ["R r' U R U R' U' M' R' F R F'"],
          },
          {
            id: "14",
            name: "OLL 14",
            image: "assets/3x3/oll/OLL-14.png",
            algs: ["F R' F' R2 r' U R U' R' U' M'", "F R' F' R2 r' U R U' R' U' M'"],
          },
          {
            id: "15",
            name: "OLL 15",
            image: "assets/3x3/oll/OLL-15.png",
            algs: ["r U R' U' R2 r2 U R U' R' U' M'", "R r' U R U R' U' R2 r2 U R U' r'"],
          },
          {
            id: "16",
            name: "OLL 16",
            image: "assets/3x3/oll/OLL-16.png",
            algs: ["R' U' R' F R F' U R"],
          },
          {
            id: "17",
            name: "OLL 17",
            image: "assets/3x3/oll/OLL-17.png",
            algs: ["F R U R' U' R' F' r U R U' r'", "y2 R U R2 U' R' F R U R U' F'"],
          },
          {
            id: "18",
            name: "OLL 18",
            image: "assets/3x3/oll/OLL-18.png",
            algs: ["F U R U' R' U R U' R' F'", "y2 f R U R' U' R U R' U' f'"],
          },
          {
            id: "19",
            name: "OLL 19",
            image: "assets/3x3/oll/OLL-19.png",
            algs: ["r U r' U R U' R' U R U' R' r U' r'", "F R U R' U' R F' r U R' U' r'"],
          },
          {
            id: "20",
            name: "OLL 20",
            image: "assets/3x3/oll/OLL-20.png",
            algs: ["R' F' U' F U' R U R' U R", "y2 R U R' U R d' R U' R' F'"],
          },
          {
            id: "21",
            name: "OLL 21",
            image: "assets/3x3/oll/OLL-21.png",
            algs: ["R' F R U R U' R2 F' R2 U' R' U R U R'", "R' F R U R U' R2 F' R2 U' R' U R U R'"],
          },
          {
            id: "22",
            name: "OLL 22",
            image: "assets/3x3/oll/OLL-22.png",
            algs: ["F U R U2 R' U' R U R' F'"],
          },
          {
            id: "23",
            name: "OLL 23",
            image: "assets/3x3/oll/OLL-23.png",
            algs: ["r U R' U' r' F R2 U R' U' F'", "R' F R U R' F' R F U' F'"],
          },
          {
            id: "24",
            name: "OLL 24",
            image: "assets/3x3/oll/OLL-24.png",
            algs: ["r U r' R U R' U' r U' r'"],
          },
          {
            id: "25",
            name: "OLL 25",
            image: "assets/3x3/oll/OLL-25.png",
            algs: ["l' U' l L' U' L U l' U l", "y2 r' U' r R' U' R U r' U r"],
          },
          {
            id: "26",
            name: "OLL 26",
            image: "assets/3x3/oll/OLL-26.png",
            algs: ["R' F R U R' U' F' U R"],
          },
          {
            id: "27",
            name: "OLL 27",
            image: "assets/3x3/oll/OLL-27.png",
            algs: ["R U R' F' U' F U R U2 R'", "y2 L F' L' U' L U F U' L'"],
          },
          {
            id: "28",
            name: "OLL 28",
            image: "assets/3x3/oll/OLL-28.png",
            algs: ["R U R' U' R' F R F'"],
          },
          {
            id: "29",
            name: "OLL 29",
            image: "assets/3x3/oll/OLL-29.png",
            algs: ["F R U R' U' F'", "y R' F' U' F U R"],
          },
          {
            id: "30",
            name: "OLL 30",
            image: "assets/3x3/oll/OLL-30.png",
            algs: ["R U R' U' M' U R U' r'"],
          },
          {
            id: "31",
            name: "OLL 31",
            image: "assets/3x3/oll/OLL-31.png",
            algs: ["r U R' U' R r' U R U' R'", "y' R r' U R U R' U' M' U R U' R'", "y2 M' U M U2 M' U M", "y' M' U' M U2 M' U' M"],
          },
          {
            id: "32",
            name: "OLL 32",
            image: "assets/3x3/oll/OLL-32.png",
            algs: ["R' U' F U R U' R' F' R"],
          },
          {
            id: "33",
            name: "OLL 33",
            image: "assets/3x3/oll/OLL-33.png",
            algs: ["R U2 R' U' F' U F R U' R'", "y2 L U F' U' L' U L F L'", "S R U R' U' R' F R f'"],
          },
          {
            id: "34",
            name: "OLL 34",
            image: "assets/3x3/oll/OLL-34.png",
            algs: ["F U R U' R' F'"],
          },
          {
            id: "35",
            name: "OLL 35",
            image: "assets/3x3/oll/OLL-35.png",
            algs: ["R' U' F' U F R", "y F' U' L' U L F"],
          },
          {
            id: "36",
            name: "OLL 36",
            image: "assets/3x3/oll/OLL-36.png",
            algs: ["R U R' U R U' R' U' R' F R F'"],
          },
          {
            id: "37",
            name: "OLL 37",
            image: "assets/3x3/oll/OLL-37.png",
            algs: ["R U R' F' R U R' U' R' F R U' R' F R F'", "y2 R' U' R U' R' U2 R2 U R' U' R' F R F'", "y2 R' U' R U' R' U2 R2 U R' U' R' F R F'"],
          },
          {
            id: "38",
            name: "OLL 38",
            image: "assets/3x3/oll/OLL-38.png",
            algs: ["r U2 R' U' R U' r'", "y2 R U R2 F R F2 U F"],
          },
          {
            id: "39",
            name: "OLL 39",
            image: "assets/3x3/oll/OLL-39.png",
            algs: ["r' U2 R U R' U r", "y2 R' F2 r U r' F R"],
          },
          {
            id: "40",
            name: "OLL 40",
            image: "assets/3x3/oll/OLL-40.png",
            algs: ["F R U R' U' R U R' U' F'"],
          },
          {
            id: "41",
            name: "OLL 41",
            image: "assets/3x3/oll/OLL-41.png",
            algs: ["F U R U' R' F' R U R' U R U2 R'", "y F' L' U' L U L' U' L U F", "F R' F' R U2 R U' R' U R U2 R'"],
          },
          {
            id: "42",
            name: "OLL 42",
            image: "assets/3x3/oll/OLL-42.png",
            algs: ["r U' r2 U r2 U r2 U' r", "y2 l U' l2 U l2 U l2 U' l"],
          },
          {
            id: "43",
            name: "OLL 43",
            image: "assets/3x3/oll/OLL-43.png",
            algs: ["r' U r2 U' r2 U' r2 U r'", "y2 l' U l2 U' l2 U' l2 U l'"],
          },
          {
            id: "44",
            name: "OLL 44",
            image: "assets/3x3/oll/OLL-44.png",
            algs: ["r U2 R' U' R U R' U' R U' r'", "r U2 R' U' R U R' U' R U' r'"],
          },
          {
            id: "45",
            name: "OLL 45",
            image: "assets/3x3/oll/OLL-45.png",
            algs: ["r' U2 R U R' U' R U R' U r", "y l' U' L U' L' U L U' L' U2 l"],
          },
          {
            id: "46",
            name: "OLL 46",
            image: "assets/3x3/oll/OLL-46.png",
            algs: ["R U R' U' R' F R2 U R' U' F'"],
          },
          {
            id: "47",
            name: "OLL 47",
            image: "assets/3x3/oll/OLL-47.png",
            algs: ["R U R' U R' F R F' R U2 R'"],
          },
          {
            id: "48",
            name: "OLL 48",
            image: "assets/3x3/oll/OLL-48.png",
            algs: ["F R U' R' U' R U R' F'"],
          },
          {
            id: "49",
            name: "OLL 49",
            image: "assets/3x3/oll/OLL-49.png",
            algs: ["R U2 R2 F R F' R U2 R'"],
          },
          {
            id: "50",
            name: "OLL 50",
            image: "assets/3x3/oll/OLL-50.png",
            algs: ["r' D' r U' r' D r2 U' r' U r U r'", "y' F U R U2 R' U' R U2 R' U' F'"],
          },
          {
            id: "51",
            name: "OLL 51",
            image: "assets/3x3/oll/OLL-51.png",
            algs: ["r2 D' r U r' D r2 U' r' U' r", "y R U R' U' R U' R' F' U' F R U R'"],
          },
          {
            id: "52",
            name: "OLL 52",
            image: "assets/3x3/oll/OLL-52.png",
            algs: ["R U R' U R U2 R' F R U R' U' F'"],
          },
          {
            id: "53",
            name: "OLL 53",
            image: "assets/3x3/oll/OLL-53.png",
            algs: ["R' U' R U' R' U2 R F R U R' U' F'"],
          },
          {
            id: "54",
            name: "OLL 54",
            image: "assets/3x3/oll/OLL-54.png",
            algs: ["r U R' U R U2 r'", "y2 l U L' U L U2 l'"],
          },
          {
            id: "55",
            name: "OLL 55",
            image: "assets/3x3/oll/OLL-55.png",
            algs: ["r' U' R U' R' U2 r", "y2 R' F' r U' r' F2 R", "y2 R U2 R' U2 R' F R F'"],
          },
          {
            id: "56",
            name: "OLL 56",
            image: "assets/3x3/oll/OLL-56.png",
            algs: ["r' R2 U R' U R U2 R' U M'", "y2 r U R' U R' F R F' R U2 r'"],
          },
          {
            id: "57",
            name: "OLL 57",
            image: "assets/3x3/oll/OLL-57.png",
            algs: ["r R2 U' R U' R' U2 R U' R r'", "y F R U R' U' F' U F R U R' U' F'"],
          },
        ],
      },
      {
        id: "pll",
        name: "PLL",
        image: "assets/3x3/pll/5-T.png",
        cases: [
          {
            id: "1",
            name: "Ua",
            image: "assets/3x3/pll/1-Ua.png",
            algs: ["M2 U M U2 M' U M2", "y2 M2 U M' U2 M U M2", "R U' R U R U R U' R' U' R2", "y2 R2 U' R' U' R U R U R U' R"],
          },
          {
            id: "2",
            name: "Ub",
            image: "assets/3x3/pll/2-Ub.png",
            algs: ["M2 U' M U2 M' U' M2", "y2 M2 U' M' U2 M U' M2", "R2′ U R U R' U' R3 U' R' U R'", "y2 R' U R' U' R3 U' R' U R U R2"],
          },
          {
            id: "3",
            name: "H",
            image: "assets/3x3/pll/3-H.png",
            algs: ["M2 U' M2 U2 M2 U' M2", "M2 U M2 U2 M2 U M2"],
          },
          {
            id: "4",
            name: "Z",
            image: "assets/3x3/pll/4-Z.png",
            algs: ["M2 U' M2 U' M' U2 M2 U2 M'", "y M2 U M2 U M' U2 M2 U2 M'", "y M' U' M2′ U' M2′ U' M' U2′ M2′"],
          },
          {
            id: "5",
            name: "T",
            image: "assets/3x3/pll/5-T.png",
            algs: ["R U R' U' R' F R2 U' R' U' R U R' F'", "R U R' U' R' F R2 U' R' U F' L' U L"],
          },
          {
            id: "6",
            name: "Y",
            image: "assets/3x3/pll/6-Y.png",
            algs: ["F R U' R' U' R U R' F' R U R' U' R' F R F'", "F R' F R2 U' R' U' R U R' F' R U R' U' F'"],
          },
          {
            id: "7",
            name: "Ja",
            image: "assets/3x3/pll/7-Ja.png",
            algs: ["L' U R' z R2 U R' U' R2 U D", "y' x R2 F R F' R U2 r' U r U2 x'", "y L' U' L F L' U' L U L F' L2 U L", "y2 R' U L' U2 R U' R' U2 R L"],
          },
          {
            id: "8",
            name: "Jb",
            image: "assets/3x3/pll/8-Jb.png",
            algs: ["R U R' F' R U R' U' R' F R2 U' R'", "R U2 R' U' R U2 L' U R' U' L"],
          },
          {
            id: "9",
            name: "Aa",
            image: "assets/3x3/pll/9-Aa.png",
            algs: ["x R' U R' D2 R U' R' D2 R2 x'", "y x' R2 D2 R' U' R D2 R' U R' x"],
          },
          {
            id: "10",
            name: "Ab",
            image: "assets/3x3/pll/10-Ab.png",
            algs: ["x R2 D2 R U R' D2 R U' R x'", "y x' R U' R D2 R' U R D2 R2 x"],
          },
          {
            id: "11",
            name: "Ra",
            image: "assets/3x3/pll/11-Ra.png",
            algs: ["R U' R2 D' R U R' D R U' R U' R' U R U R'", "y' R U' R' U' R U R D R' U' R D' R' U2 R'", "y' R U R' F' R U2 R' U2 R' F R U R U2 R'"],
          },
          {
            id: "12",
            name: "Rb",
            image: "assets/3x3/pll/12-Rb.png",
            algs: ["R' U2 R' D' R U' R' D R U R U' R' U' R", "R' U2 R U2 R' F R U R' U' R' F' R2", "y R' U R U R' U' R' D' R U R' D R U2 R"],
          },
          {
            id: "13",
            name: "E",
            image: "assets/3x3/pll/13-E.png",
            algs: ["x' R U' R' D R U R' D' R U R' D R U' R' D' x", "R' U' R' D' R U' R' D R U R' D' R U R' D R2"],
          },
          {
            id: "14",
            name: "F",
            image: "assets/3x3/pll/14-F.png",
            algs: ["R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R", "R2′ F R F' R' U' F' U F R2 U R' U' R"],
          },
          {
            id: "15",
            name: "Ga",
            image: "assets/3x3/pll/15-Ga.png",
            algs: ["D' R2 U R' U R' U' R U' R2 U' D R' U R", "R2 U R' U R' U' R U' R2 D U' R' U R D'", "R2 u R' U R' U' R u' R2 y' R' U R"],
          },
          {
            id: "16",
            name: "Gb",
            image: "assets/3x3/pll/16-Gb.png",
            algs: ["D R' U' R U D' R2 U R' U R U' R U' R2", "R' U' R U D' R2 U R' U R U' R U' R2 D", "R' U' R y R2 u R' U R U' R u' R2"],
          },
          {
            id: "17",
            name: "Gc",
            image: "assets/3x3/pll/17-Gc.png",
            algs: ["R2 u' R U' R U R' u R2 f R' f'", "y2 R2 F2 R U2 R U2 R' F R U R' U' R' F R2", "R2 U' R U' R U R' U R2 D' U R U' R' D"],
          },
          {
            id: "18",
            name: "Gd",
            image: "assets/3x3/pll/18-Gd.png",
            algs: ["D' R U R' U' D R2 U' R U' R' U R' U R2", "R U R' U' D R2 U' R U' R' U R' U R2 D'", "R U R' y' R2 u' R U' R' U R' u R2"],
          },
          {
            id: "19",
            name: "Na",
            image: "assets/3x3/pll/19-Na.png",
            algs: ["L' U R' z R2 U R' U' D R D' R2 U R' D", "L' U R' z R2 U R' U' D R D' R2 U R' D", "R' U R U' R' F' U' F R U R' F R' F' R U' R", "R' U L' U2 R U' L R' U L' U2 R U' L"],
          },
          {
            id: "20",
            name: "Nb",
            image: "assets/3x3/pll/20-Nb.png",
            algs: ["R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'", "L U' R U2 L' U R' L U' R U2 L' U R'"],
          },
          {
            id: "21",
            name: "V",
            image: "assets/3x3/pll/21-V.png",
            algs: ["R' U R U' R' f' U' R U2 R' U' R U' R' f R", "R' U R' d' R' F' R2 U' R' U R' F R F", "R' U R' U' R D' R' D R' U D' R2 U' R2′ D R2"],
          },
        ],
      },
    ],
  },
  sq1: {
    name: "Square-1",
    image: "assets/sq1/sq1.png",
    sets: [
      {
        id: "co",
        name: "CO",
        image: "assets/sq1/CO/CO1.png",
        cases: [
          {
            id: "1",
            name: "Adj/Adj",
            image: ["assets/sq1/CO/CO1.png", "assets/sq1/CO/CO2.png"],
            algs: ["1,0 /"],
          },
          {
            id: "2",
            name: "3/1",
            image: ["assets/sq1/CO/CO3.png", "assets/sq1/CO/CO4.png"],
            algs: ["1,0 / -3,0 /"],
          },
          {
            id: "3",
            name: "1/3",
            image: ["assets/sq1/CO/CO5.png", "assets/sq1/CO/CO6.png"],
            algs: ["1,0 / 6,3 /"],
          },
          {
            id: "4",
            name: "Diag/Diag",
            image: ["assets/sq1/CO/CO7.png", "assets/sq1/CO/CO8.png"],
            algs: ["1,0 / 3,3 /"],
          },
          {
            id: "5",
            name: "Diag/Adj",
            image: ["assets/sq1/CO/CO9.png", "assets/sq1/CO/CO10.png"],
            algs: ["1,0 / -3,0 / -3,0 /"],
          },
          {
            id: "6",
            name: "Adj/Diag",
            image: ["assets/sq1/CO/CO11.png", "assets/sq1/CO/CO12.png"],
            algs: ["1,0 / 0,3 / 0,3 /"],
          },
          {
            id: "7",
            name: "4/4",
            image: ["assets/sq1/CO/CO13.png", "assets/sq1/CO/CO14.png"],
            algs: ["/ 6,6 /"],
          },
        ],
      },
      {
        id: "eo",
        name: "EO",
        image: "assets/sq1/EO/2aa.png",
        cases: [
          {
            id: "1",
            name: "1/1",
            image: ["assets/sq1/EO/1a.png", "assets/sq1/EO/1b.png"],
            algs: ["1,0 / -4,-1 / 4,1 / -1,-1 / -3,0 / 3,0 / 0,1"],
          },
          {
            id: "2",
            name: "Adj/Adj",
            image: ["assets/sq1/EO/2aa.png", "assets/sq1/EO/2bb.png"],
            algs: ["1,0 / 3,0 / -1,-1 / -3,0 / 0,1"],
          },
          {
            id: "3",
            name: "Opp/Opp",
            image: ["assets/sq1/EO/3a.png", "assets/sq1/EO/3b.png"],
            algs: ["1,0 / -1,-1 / 0,1"],
          },
          {
            id: "4",
            name: "3/3",
            image: ["assets/sq1/EO/4a.png", "assets/sq1/EO/4b.png"],
            algs: ["0,-1 / 3,0 / 3,0 / 1,1 / -3,0 / -3,0 / -1,0"],
          },
          {
            id: "5",
            name: "Opp/Adj",
            image: ["assets/sq1/EO/5a.png", "assets/sq1/EO/5bb.png"],
            algs: ["1,0 / -3,0 / 3,0 / -1,-1 / -3,0 / 3,0 / 0,1"],
          },
          {
            id: "6",
            name: "Adj/Opp",
            image: ["assets/sq1/EO/6a.png", "assets/sq1/EO/6b.png"],
            algs: ["1,0 / 3,0 / 3,0 / -1,-1 / -2,1 / -4,1 / 0,1"],
          },
          {
            id: "7",
            name: "4/4",
            image: ["assets/sq1/EO/7a.png", "assets/sq1/EO/7b.png"],
            algs: ["1,0 / -1,-1 / -2,4 / -1,-1 / 0,1"],
          },
        ],
      },
      {
        id: "cp",
        name: "CP",
        image: "assets/sq1/CP/CPAdj2.png",
        cases: [
          {
            id: "1",
            name: "J/-",
            image: ["assets/sq1/CP/CPAdj1.png", "assets/sq1/CP/CPS2.png"],
            algs: ["3,-3 / -3,0 / 0,3 / 0,-3 / 0,3 /"],
          },
          {
            id: "2",
            name: "-/J",
            image: ["assets/sq1/CP/CPS1.png", "assets/sq1/CP/CPAdj2.png"],
            algs: ["/ 3,-3 / 0,3 / -3,0 / 3,0 / -3,0 /"],
          },
          {
            id: "3",
            name: "N/-",
            image: ["assets/sq1/CP/CPDiag1.png", "assets/sq1/CP/CPS2.png"],
            algs: ["3,0 / -3,0 / 0,3 / -3,0 / 3,0 /"],
          },
          {
            id: "4",
            name: "-/N",
            image: ["assets/sq1/CP/CPS1.png", "assets/sq1/CP/CPDiag2.png"],
            algs: ["/ 0,-3 / 0,3 / -3,0 / -3,0 / 0,3 / 0,3 /"],
          },
          {
            id: "5",
            name: "J/J",
            image: ["assets/sq1/CP/CPAdj1.png", "assets/sq1/CP/CPAdj2.png"],
            algs: ["/ -3,0 / 3,3 / 0,-3 /"],
          },
          {
            id: "6",
            name: "N/N",
            image: ["assets/sq1/CP/CPDiag1.png", "assets/sq1/CP/CPDiag2.png"],
            algs: ["/ -3,3 / 3,-3 /"],
          },
          {
            id: "7",
            name: "J/N",
            image: ["assets/sq1/CP/CPAdj3.png", "assets/sq1/CP/CPDiag2.png"],
            algs: ["/ 0,3 / 0,-3 / 0,3 / 0,-3 /"],
          },
          {
            id: "8",
            name: "N/J",
            image: ["assets/sq1/CP/CPDiag1.png", "assets/sq1/CP/CPAdj4.png"],
            algs: ["/ -3,0 / 3,0 / -3,0 / 3,0 /"],
          },

        ],
      }
    ],
  },
};

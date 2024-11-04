import { createSlice } from "@reduxjs/toolkit";
import img1 from "../assets/circleT.avif";
import img2 from "../assets/cushion1.avif";
import img3 from "../assets/cushion2.avif";
import img4 from "../assets/img2.webp";
import img5 from "../assets/swinghanging.avif";
import img6 from "../assets/officeF2.avif";
import img7 from "../assets/kitchen2.jpg";
import img8 from "../assets/officeF5.avif";
import img9 from "../assets/cushion7.jpg";
import img10 from "../assets/Best Seller/chair-realistic-illustration_1284-9507.avif";
import img11 from "../assets/Best Seller/cushion1.avif";
import img12 from "../assets/Best Seller/sittingR6.avif";
import img13 from "../assets/Best Seller/cushion6.webp";
import img14 from "../assets/Best Seller/officeF8.avif";
import img15 from "../assets/Best Seller/officeF9.avif";
import img16 from "../assets/Best Seller/sittingR4.avif";
import img17 from "../assets/Bedroom/bed/baby-bed.avif";
import img18 from "../assets/Bedroom/bed/bed1.avif";
import img19 from "../assets/Bedroom/bed/bed2.avif";
import img20 from "../assets/Bedroom/bed/doublebed.avif";
import img21 from "../assets/Bedroom/bed/estlle.avif";
import img22 from "../assets/Bedroom/bed/jumiper-bed.avif";
import img23 from "../assets/Bedroom/bed/leather-bed.avif";
import img24 from "../assets/Bedroom/bed/mockup.avif";
import img25 from "../assets/Bedroom/Dresser/abbey-medium-chest.avif";
import img26 from "../assets/Bedroom/Dresser/ackley-dresser.avif";
import img27 from "../assets/Bedroom/Dresser/commode.avif";
import img28 from "../assets/Bedroom/Dresser/blanklargeframe.avif";
import img29 from "../assets/Bedroom/Dresser/black-eliza-dresser.avif";
import img30 from "../assets/Bedroom/Dresser/drawer.avif";
import img31 from "../assets/Bedroom/Dresser/everson-dresser.avif";
import img32 from "../assets/Bedroom/Dresser/longtv stand.avif";
import img33 from "../assets/Bedroom/Dresser/plantdesk (1).avif";
import img34 from "../assets/Bedroom/Dresser/Roque-Dresser-T1-0101.avif";
import img35 from "../assets/Bedroom/Dresser/setchair.avif";
import img36 from "../assets/Bedroom/Nightstand/Abbey-Small.avif";
import img37 from "../assets/Bedroom/Nightstand/Abbey-Small.avif";
// import img24 from "../assets/Bedroom/Nightstand/about.png";
import img38 from "../assets/Bedroom/Nightstand/Ackley.avif";
import img39 from "../assets/Bedroom/Nightstand/Abbey-Small.avif";
import img40 from "../assets/Bedroom/Nightstand/Colette.avif";
import img41 from "../assets/Bedroom/Nightstand/everson.avif";
import img42 from "../assets/Bedroom/Nightstand/Isla.avif";
import img43 from "../assets/Bedroom/Nightstand/soffia.avif";
import img44 from "../assets/Bedroom/Nightstand/tina.avif";

import img45 from "../assets/Living Room/Living Chair/bell-chair.avif";
import img46 from "../assets/Living Room/Living Chair/-lounge-chair.avif";
import img47 from "../assets/Living Room/Living Chair/bondi-outdoor-chair.avif";
import img48 from "../assets/Living Room/Living Chair/bryant-chair.avif";
import img49 from "../assets/Living Room/Living Chair/collins-chair.avif";
import img50 from "../assets/Living Room/Living Chair/eastwood-swivel-chair.avif";
// import img51 from "../assets/Living Room/Living Chair/hughes-swivel-chair.avif";
import img52 from "../assets/Living Room/Living Chair/nina-glider.avif";
import img53 from "../assets/Living Room/Living Chair/sittingR1.avif";
import img54 from "../assets/Living Room/Living Chair/sittingR2.avif";
import img55 from "../assets/Living Room/Living Chair/sittingR3.avif";
import img56 from "../assets/Living Room/Living Chair/sittingR4.avif";
import img57 from "../assets/Living Room/Living Chair/sittingR5.avif";
import img58 from "../assets/Living Room/Living Chair/sittingR6.avif";
import img59 from "../assets/Living Room/Living Sofaa/anton daybed.avif";
import img60 from "../assets/Living Room/Living Sofaa/brier sleeper.avif";
import img61 from "../assets/Living Room/Living Sofaa/bryant sofa.avif";
import img62 from "../assets/Living Room/Living Sofaa/bryant U-sofa.avif";
import img63 from "../assets/Living Room/Living Sofaa/holt sectional.avif";
import img64 from "../assets/Living Room/Living Sofaa/lewis section.avif";
import img65 from "../assets/Living Room/Living Sofaa/lewis sofa2.avif";
// import img24 from "../assets/Bedroom/Nightstand/about.png";
import img66 from "../assets/Living Room/Living Sofaa/pillow-sofa_74190-3846.avif";
import img67 from "../assets/Living Room/Living Sofaa/sittingR.avif";
import img68 from "../assets/Living Room/Living Sofaa/sofa1.avif";
import img69 from "../assets/Living Room/Living Table/ane nesting.avif";
import img70 from "../assets/Living Room/Living Table/declan-coffee-table.avif";
import img71 from "../assets/Living Room/Living Table/florence-desk.avif";
import img72 from "../assets/Living Room/Living Table/gabriella-coffee-table.avif";
import img73 from "../assets/Living Room/Living Table/iren cofee table.png";
import img74 from "../assets/Living Room/Living Table/mitzi-expandable-dining-table.avif";
import img75 from "../assets/Living Room/Living Table/nestin table.avif";
import img76 from "../assets/Living Room/Living Table/nestin table.avif";
import img77 from "../assets/Living Room/Living Table/prange.avif";
import img78 from "../assets/Living Room/Living Table/xavier-apartment.avif";
import img79 from "../assets/Dinner/Dinner Chair/ayla.avif";
import img80 from "../assets/Dinner/Dinner Chair/doris.avif";
import img81 from "../assets/Dinner/Dinner Chair/ellise.avif";
import img82 from "../assets/Dinner/Dinner Chair/joyce.avif";
import img83 from "../assets/Dinner/Dinner Chair/kian.avif";
import img84 from "../assets/Dinner/Dinner Chair/magill.avif";
import img85 from "../assets/Dinner/Dinner Chair/morgan.avif";
import img86 from "../assets/Dinner/Dinner Chair/poaha.avif";
import img87 from "../assets/Dinner/Dinner Table/dinning1.avif";
import img88 from "../assets/Dinner/Dinner Table/dinning3.avif";
import img89 from "../assets/Dinner/Dinner Table/dinning4.avif";
import img90 from "../assets/Dinner/Dinner Table/dinning5.avif";
import img91 from "../assets/Dinner/Dinner Table/dinning6.avif";
import img92 from "../assets/Dinner/Dinner Table/dinning7.avif";
import img93 from "../assets/Dinner/Dinner Table/dinning9.avif";
import img94 from "../assets/Dinner/Dinner Table/dinning10.avif";
import img95 from "../assets/Dinner/Dinner Table/dinning8.avif";
import img96 from "../assets/Dinner/Dinner Table/toscano.avif";
import img97 from "../assets/Dinner/Dinner Cabinet/cabinet.avif";
import img98 from "../assets/Dinner/Dinner Cabinet/mordencabinet.avif";
import img99 from "../assets/Dinner/Dinner Cabinet/suppercool.avif";
import img100 from "../assets/Dinner/Dinner Cabinet/vendinemachine.avif";
import img101 from "../assets/Dinner/Dinner Cabinet/nice.avif";
import img102 from "../assets/Office/Office Chair/gerd desk.avif";
import img103 from "../assets/Office/Office Chair/juneChaiir.avif";
import img104 from "../assets/Office/Office Chair/liaChair.avif";
import img105 from "../assets/Office/Office Chair/officeF.avif";
import img106 from "../assets/Office/Office Chair/officeF1-(1).avif";
import img107 from "../assets/Office/Office Chair/officeF1.avif";
import img108 from "../assets/Office/Office Chair/officeF2.avif";
import img109 from "../assets/Office/Office Chair/officeF3.avif";
import img110 from "../assets/Office/Office Chair/officeF4.avif";
import img111 from "../assets/Office/Office Chair/officeF5.avif";
import img112 from "../assets/Office/Office Chair/officeF6.avif";
import img113 from "../assets/Office/Office Chair/officeF7.avif";
import img114 from "../assets/Office/Office Chair/officeF8.avif";
import img115 from "../assets/Office/Office Chair/officeF9.avif";
import img116 from "../assets/Office/Office Chair/rae.avif";
import img117 from "../assets/Office/Office desk/apartment.avif";
import img118 from "../assets/Office/Office desk/ardel.avif";
import img119 from "../assets/Office/Office desk/florence.avif";
import img120 from "../assets/Office/Office desk/griffit.avif";
import img121 from "../assets/Office/Office desk/isla.avif";
import img122 from "../assets/Office/Office desk/ringo.avif";
import img123 from "../assets/Office/Office desk/roqque.avif";
import img124 from "../assets/Office/Office desk/somer.avif";
import img125 from "../assets/Office/Office shelve/bookShelf.avif";
import img126 from "../assets/Office/Office shelve/crosley.avif";
import img127 from "../assets/Office/Office shelve/hazel.avif";
import img128 from "../assets/Office/Office shelve/lois.avif";
import img129 from "../assets/Office/Office shelve/owen.avif";
import img130 from "../assets/Office/Office shelve/roque.avif";
import img131 from "../assets/Office/Office shelve/rigo.avif";
// Decor/Ligths
import img132 from "../assets/Decor/Light/bria-table-lamp.avif";
import img133 from "../assets/Decor/Light/burke-floor-lamp.avif";
import img134 from "../assets/Decor/Light/carrie-table-lamp.avif";
import img135 from "../assets/Decor/Light/dame-table-lamp.avif";
import img136 from "../assets/Decor/Light/lili-table-lamp.avif";
import img137 from "../assets/Decor/Light/mandi-pendant.avif";
import img138 from "../assets/Decor/Light/quincy-floor-lamp.avif";
import img139 from "../assets/Decor/Light/savannah-table-lamp.avif";
// Decor/Pillows
import img140 from "../assets/Decor/Pillow/blsck pillow.avif";
import img141 from "../assets/Decor/Pillow/jive-pillow.avif";
import img142 from "../assets/Decor/Pillow/minka-lumbar-pillow.avif";
import img143 from "../assets/Decor/Pillow/minka-pleated-round-pillow.avif";
import img144 from "../assets/Decor/Pillow/peacock-decorative-knife-edge-pillows.avif";
import img145 from "../assets/Decor/Pillow/pillow1.avif";
import img146 from "../assets/Decor/Pillow/square-pillow.avif";
import img147 from "../assets/Decor/Pillow/sunny-chevy-decorative-knife-edge-pillows.avif";
//Decor/Rug
import img148 from "../assets/Decor/Throw/aspen-throw.avif";
import img149 from "../assets/Decor/Throw/boucle-stripe-throw.avif";
import img150 from "../assets/Decor/Throw/brooklyn-throw.avif";
import img151 from "../assets/Decor/Throw/giana-throw.avif";
import img152 from "../assets/Decor/Throw/piper-throw.avif";
import img153 from "../assets/Decor/Throw/pom-pom-slub-throw.avif";
import img154 from "../assets/Decor/Throw/yukimi-throw.avif";
import img155 from "../assets/Decor/Throw/zola-throw.avif";
// Kitchen Products
import img156 from "../assets/Kitchen/kitchen.avif";
import img157 from "../assets/Kitchen/kitchen1.avif";
import img158 from "../assets/Kitchen/kitchen2.jpg";
import img159 from "../assets/Kitchen/kitchen3.jpg";
import img160 from "../assets/Kitchen/kitchen4.avif";
import img161 from "../assets/Kitchen/kitchen5.avif";
import img162 from "../assets/Kitchen/kitchen6.avif";
import img163 from "../assets/Kitchen/kitchen7.avif";
import { toast } from "react-toastify";

let allItemsData = [
  {
    category: "New_Arrival",
    id: 0,
    name: "Stool",
    img: img1,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 250,
    actualPrice: 240,
  },
  {
    category: "New_Arrival",
    id: 1,
    name: "SOFA",
    img: img2,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 270,
    actualPrice: 250,
  },
  {
    category: "New_Arrival",
    id: 2,
    name: "EXPENSIVE",
    img: img3,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 300,
    actualPrice: 250,
  },
  {
    category: "New_Arrival",
    id: 3,
    name: "COFEE TABLE",
    img: img4,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 320,
    actualPrice: 290,
  },
  {
    category: "New_Arrival",
    id: 4,
    name: "OFFICE CHAIR",
    img: img5,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 150,
    actualPrice: 135,
  },
  {
    category: "New_Arrival",
    id: 5,
    name: "OUTDOOR",
    img: img6,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 210,
    actualPrice: 190,
  },
  {
    category: "New_Arrival",
    id: 6,
    name: "KITCHEN CABINET",
    img: img7,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 270,
    actualPrice: 250,
  },
  {
    category: "New_Arrival",
    id: 7,
    name: "OFFICE",
    img: img8,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 350,
    actualPrice: 320,
  },
  {
    category: "Best_Seller",
    id: 8,
    name: "QUALTIY RED",
    img: img9,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 250,
    actualPrice: 240,
  },
  {
    category: "Best_Seller",
    id: 9,
    name: "QUALITY RED",
    img: img10,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 270,
    actualPrice: 250,
  },
  {
    category: "Best_Seller",
    id: 10,
    name: "QUALITY INTEROR",
    img: img11,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 300,
    actualPrice: 250,
  },
  {
    category: "Best_Seller",
    id: 11,
    name: "EXPENSIVE SOFA",
    img: img12,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 320,
    actualPrice: 290,
  },
  {
    category: "Best_Seller",
    id: 12,
    name: "FULL INTEROR",
    img: img13,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 150,
    actualPrice: 135,
  },
  {
    category: "Best_Seller",
    id: 13,
    name: "HOME TABLE",
    img: img14,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 210,
    actualPrice: 190,
  },
  {
    category: "Best_Seller",
    id: 14,
    name: "READING SETUP",
    img: img15,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 270,
    actualPrice: 250,
  },
  {
    category: "Best_Seller",
    id: 15,
    name: "SMOOTH SOFA",
    img: img16,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 350,
    actualPrice: 320,
  },
  {
    category: "BEDS",
    id: 16,
    name: "BABY BED",
    img: img17,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 250,
    actualPrice: 240,
  },
  {
    category: "BEDS",
    id: 17,
    name: "JUMIPER BED",
    img: img18,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 270,
    actualPrice: 250,
  },
  {
    category: "BEDS",
    id: 18,
    name: "ESTLLE BED",
    img: img19,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 300,
    actualPrice: 250,
  },
  {
    category: "BEDS",
    id: 19,
    name: "DOUBLE BED",
    img: img20,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 320,
    actualPrice: 290,
  },
  {
    category: "BEDS",
    id: 20,
    name: "LEATHER BED",
    img: img21,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 150,
    actualPrice: 135,
  },
  {
    category: "BEDS",
    id: 21,
    name: "AUTHENTIC BED",
    img: img22,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 210,
    actualPrice: 190,
  },
  {
    category: "BEDS",
    id: 22,
    name: "PURE WHITE",
    img: img23,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 270,
    actualPrice: 250,
  },
  {
    category: "BEDS",
    id: 23,
    name: "LEATHER BED",
    img: img24,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 350,
    actualPrice: 320,
  },
  {
    category: "DRESSERS",
    id: 24,
    name: "Roque Dresser",
    img: img25,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 100,
    actualPrice: 120,
  },
  {
    category: "DRESSERS",
    id: 25,
    name: "Large frame",
    img: img26,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 150,
    actualPrice: 190,
  },
  {
    category: "DRESSERS",
    id: 26,
    name: "Commode",
    img: img27,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 100,
    actualPrice: 150,
  },
  {
    category: "DRESSERS",
    id: 27,
    name: "Portable drawer",
    img: img28,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 110,
    actualPrice: 130,
  },
  {
    category: "DRESSERS",
    id: 28,
    name: "Industrial Metal",
    img: img29,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 100,
    actualPrice: 120,
  },
  {
    category: "DRESSERS",
    id: 29,
    name: "Chic Glass-Top",
    img: img30,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 120,
    actualPrice: 150,
  },
  {
    category: "DRESSERS",
    id: 30,
    name: "Vintage Charm",
    img: img31,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 110,
    actualPrice: 130,
  },
  {
    category: "DRESSERS",
    id: 31,
    name: "Modern Minimalist",
    img: img32,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 130,
    actualPrice: 160,
  },
  {
    category: "DRESSERS",
    id: 32,
    name: "Urban Loft",
    img: img33,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 70,
    actualPrice: 100,
  },
  {
    category: "DRESSERS",
    id: 33,
    name: "Nordic Wood",
    img: img34,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 100,
    actualPrice: 125,
  },
  {
    category: "DRESSERS",
    id: 34,
    name: "Contemporary Sleek",
    img: img35,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 80,
    actualPrice: 100,
  },
  {
    category: "DRESSERS",
    id: 35,
    name: "Elegant Edge",
    img: img36,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 50,
    actualPrice: 75,
  },
  {
    category: "DRESSERS",
    id: 36,
    name: "Rustic Farmhouse",
    img: img37,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 150,
    actualPrice: 170,
  },
  {
    category: "NIGHTSTANDS",
    id: 37,
    name: "abbay small",
    img: img38,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 120,
    actualPrice: 150,
  },
  {
    category: "NIGHTSTANDS",
    id: 38,
    name: "Ackley",
    img: img39,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 70,
    actualPrice: 100,
  },
  {
    category: "NIGHTSTANDS",
    id: 39,
    name: "Isla Stand",
    img: img40,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 100,
    actualPrice: 120,
  },
  {
    category: "NIGHTSTANDS",
    id: 40,
    name: "Colette",
    img: img41,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 100,
    actualPrice: 120,
  },
  {
    category: "NIGHTSTANDS",
    id: 41,
    name: "Rogue stand",
    img: img42,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 120,
    actualPrice: 160,
  },
  {
    category: "NIGHTSTANDS",
    id: 42,
    name: "Everson",
    img: img43,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 80,
    actualPrice: 120,
  },
  {
    category: "NIGHTSTANDS",
    id: 43,
    name: "Soffia",
    img: img44,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 100,
    actualPrice: 160,
  },
  {
    category: "Chair",
    id: 44,
    name: "BABY BED",
    img: img45,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 250,
    actualPrice: 240,
  },
  {
    category: "Chair",
    id: 45,
    name: "JUMIPER BED",
    img: img46,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 270,
    actualPrice: 250,
  },
  {
    category: "Chair",
    id: 46,
    name: "ESTLLE BED",
    img: img47,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 300,
    actualPrice: 250,
  },
  {
    category: "Chair",
    id: 47,
    name: "DOUBLE BED",
    img: img48,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 320,
    actualPrice: 290,
  },
  {
    category: "Chair",
    id: 48,
    name: "LEATHER BED",
    img: img49,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 150,
    actualPrice: 135,
  },
  {
    category: "Chair",
    id: 49,
    name: "AUTHENTIC BED",
    img: img50,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 210,
    actualPrice: 190,
  },
  {
    category: "Chair",
    id: 50,
    name: "PURE WHITE",
    img: img52,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 270,
    actualPrice: 250,
  },
  {
    category: "Chair",
    id: 51,
    name: "LEATHER BED",
    img: img53,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 350,
    actualPrice: 320,
  },
  {
    category: "Chair",
    id: 52,
    name: "Roque Dresser",
    img: img54,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 100,
    actualPrice: 120,
  },
  {
    category: "Chair",
    id: 53,
    name: "Large frame",
    img: img55,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 150,
    actualPrice: 190,
  },
  {
    category: "Chair",
    id: 54,
    name: "Commode",
    img: img56,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 100,
    actualPrice: 150,
  },
  {
    category: "Chair",
    id: 55,
    name: "Portable drawer",
    img: img57,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 110,
    actualPrice: 130,
  },
  {
    category: "Chair",
    id: 56,
    name: "Industrial Metal",
    img: img58,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 100,
    actualPrice: 120,
  },
  {
    category: "Chair",
    id: 57,
    name: "Chic Glass-Top",
    img: img59,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 120,
    actualPrice: 150,
  },
  {
    category: "Chair",
    id: 58,
    name: "Vintage Charm",
    img: img60,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 110,
    actualPrice: 130,
  },
  {
    category: "sofa",
    id: 59,
    name: "Modern Minimalist",
    img: img61,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 130,
    actualPrice: 160,
  },
  {
    category: "sofa",
    id: 60,
    name: "Urban Loft",
    img: img62,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 70,
    actualPrice: 100,
  },
  {
    category: "sofa",
    id: 61,
    name: "Nordic Wood",
    img: img63,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 100,
    actualPrice: 125,
  },
  {
    category: "sofa",
    id: 62,
    name: "Contemporary Sleek",
    img: img64,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 80,
    actualPrice: 100,
  },
  {
    category: "sofa",
    id: 63,
    name: "Elegant Edge",
    img: img65,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 50,
    actualPrice: 75,
  },
  {
    category: "sofa",
    id: 64,
    name: "Rustic Farmhouse",
    img: img66,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 150,
    actualPrice: 170,
  },
  {
    category: "sofa",
    id: 65,
    name: "abbay small",
    img: img67,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 120,
    actualPrice: 150,
  },
  {
    category: "sofa",
    id: 66,
    name: "Ackley",
    img: img68,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 70,
    actualPrice: 100,
  },
  {
    category: "sofa",
    id: 67,
    name: "Isla Stand",
    img: img69,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 100,
    actualPrice: 120,
  },
  {
    category: "sofa",
    id: 68,
    name: "Colette",
    img: img70,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 100,
    actualPrice: 120,
  },
  {
    category: "Table",
    id: 69,
    name: "Rogue stand",
    img: img71,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 120,
    actualPrice: 160,
  },
  {
    category: "Table",
    id: 70,
    name: "Everson",
    img: img72,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 80,
    actualPrice: 120,
  },
  {
    category: "Table",
    id: 71,
    name: "Soffia",
    img: img73,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 100,
    actualPrice: 160,
  },
  {
    category: "Table",
    id: 72,
    name: "Abbey Small",
    img: img74,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 50,
    actualPrice: 100,
  },
  {
    category: "Table",
    id: 73,
    name: "Abbey Small",
    img: img75,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 50,
    actualPrice: 100,
  },
  {
    category: "Table",
    id: 74,
    name: "Abbey Small",
    img: img76,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 50,
    actualPrice: 100,
  },
  {
    category: "Table",
    id: 75,
    name: "Abbey Small",
    img: img77,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 50,
    actualPrice: 100,
  },
  {
    category: "Table",
    id: 76,
    name: "Abbey Small",
    img: img78,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 50,
    actualPrice: 100,
  },
  {
    category: "Dinning Chair",
    id: 77,
    name: "Ayla",
    img: img79,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 50,
    actualPrice: 90,
  },
  {
    category: "Dinning Chair",
    id: 78,
    name: "Doris",
    img: img80,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 50,
    actualPrice: 100,
  },
  {
    category: "Dinning Chair",
    id: 79,
    name: "Ellise",
    img: img81,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 80,
    actualPrice: 100,
  },
  {
    category: "Dinning Chair",
    id: 80,
    name: "joyce",
    img: img82,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 70,
    actualPrice: 120,
  },
  {
    category: "Dinning Chair",
    id: 81,
    name: "Kian",
    img: img83,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 50,
    actualPrice: 100,
  },
  {
    category: "Dinning Chair",
    id: 82,
    name: "Magill",
    img: img84,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 80,
    actualPrice: 130,
  },
  {
    category: "Dinning Chair",
    id: 83,
    name: "Morgin",
    img: img85,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 50,
    actualPrice: 150,
  },
  {
    category: "Dinning Chair",
    id: 84,
    name: "Poaha",
    img: img86,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 50,
    actualPrice: 100,
  },
  {
    category: "Dinning Table",
    id: 85,
    name: "Bauer",
    img: img87,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 100,
    actualPrice: 150,
  },
  {
    category: "Dinning Table",
    id: 86,
    name: "Blaes",
    img: img88,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 60,
    actualPrice: 100,
  },
  {
    category: "Dinning Table",
    id: 87,
    name: "haven",
    img: img89,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 120,
    actualPrice: 150,
  },
  {
    category: "Dinning Table",
    id: 88,
    name: "lana",
    img: img90,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 200,
    actualPrice: 150,
  },
  {
    category: "Dinning Table",
    id: 89,
    name: "Monetery",
    img: img91,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 120,
    actualPrice: 160,
  },
  {
    category: "Dinning Table",
    id: 90,
    name: "Prenge",
    img: img92,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 120,
    actualPrice: 170,
  },
  {
    category: "Dinning Table",
    id: 91,
    name: "Poaha",
    img: img93,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 150,
    actualPrice: 200,
  },
  {
    category: "Dinning Table",
    id: 92,
    name: "reed",
    img: img94,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 130,
    actualPrice: 170,
  },
  {
    category: "Dinning Table",
    id: 93,
    name: "Poaha",
    img: img95,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 170,
    actualPrice: 250,
  },
  {
    category: "Dinning Table",
    id: 94,
    name: "toscano",
    img: img96,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 100,
    actualPrice: 130,
  },
  {
    category: "Dinning Cabinet",
    id: 95,
    name: "Cabinet",
    img: img97,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 470,
    actualPrice: 510,
  },
  {
    category: "Dinning Cabinet",
    id: 96,
    name: "Modern",
    img: img98,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 310,
    actualPrice: 348,
  },
  {
    category: "Dinning Cabinet",
    id: 97,
    name: "Nice",
    img: img99,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 370,
    actualPrice: 400,
  },
  {
    category: "Dinning Cabinet",
    id: 98,
    name: "Supercool",
    img: img100,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 400,
    actualPrice: 450,
  },
  {
    category: "Dinning Cabinet",
    id: 99,
    name: "toscano",
    img: img101,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 280,
    actualPrice: 330,
  },
  {
    category: "Office Chair",
    id: 100,
    name: "Gerd Desk",
    img: img102,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 200,
    actualPrice: 250,
  },
  {
    category: "Office Chair",
    id: 101,
    name: "Lia Chair",
    img: img103,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 280,
    actualPrice: 330,
  },
  {
    category: "Office Chair",
    id: 102,
    name: "toscano",
    img: img103,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 280,
    actualPrice: 330,
  },
  {
    category: "Office Chair",
    id: 103,
    name: "rae",
    img: img104,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 280,
    actualPrice: 330,
  },
  {
    category: "Office Chair",
    id: 104,
    name: "June Chair",
    img: img105,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 280,
    actualPrice: 330,
  },
  {
    category: "Office Chair",
    id: 105,
    name: "toscano",
    img: img106,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 280,
    actualPrice: 330,
  },
  {
    category: "Office Chair",
    id: 106,
    name: "June Chair",
    img: img107,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 280,
    actualPrice: 330,
  },
  {
    category: "Office Chair",
    id: 107,
    name: "toscano",
    img: img108,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 280,
    actualPrice: 330,
  },
  {
    category: "Office Chair",
    id: 108,
    name: "toscano",
    img: img109,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 280,
    actualPrice: 330,
  },
  {
    category: "Office Chair",
    id: 109,
    name: "toscano",
    img: img110,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 280,
    actualPrice: 330,
  },
  {
    category: "Office Chair",
    id: 110,
    name: "toscano",
    img: img111,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 280,
    actualPrice: 330,
  },
  // {
  //   category: "Office Chair",
  //   id: 111,
  //   name: "toscano",
  //   img: img112,
  //   description:
  //     "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
  //   price: 280,
  //   actualPrice: 330,
  // },
  {
    category: "Office Chair",
    id: 111,
    name: "toscano",
    img: img113,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 280,
    actualPrice: 330,
  },
  {
    category: "Office Chair",
    id: 112,
    name: "toscano",
    img: img114,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 280,
    actualPrice: 330,
  },
  {
    category: "Office Chair",
    id: 113,
    name: "toscano",
    img: img115,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 280,
    actualPrice: 330,
  },
  {
    category: "Office Chair",
    id: 114,
    name: "toscano",
    img: img116,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 280,
    actualPrice: 330,
  },
  {
    category: "Office Desk",
    id: 115,
    name: "Apartment",
    img: img117,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 200,
    actualPrice: 230,
  },
  {
    category: "Office Desk",
    id: 116,
    name: "Ardel",
    img: img118,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 150,
    actualPrice: 210,
  },
  {
    category: "Office Desk",
    id: 117,
    name: "florence",
    img: img119,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 170,
    actualPrice: 210,
  },
  {
    category: "Office Desk",
    id: 118,
    name: "griffit",
    img: img120,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 190,
    actualPrice: 250,
  },
  {
    category: "Isla Stand",
    id: 119,
    name: "toscano",
    img: img121,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 150,
    actualPrice: 200,
  },
  {
    category: "Office Desk",
    id: 120,
    name: "ringo",
    img: img122,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 160,
    actualPrice: 80,
  },
  {
    category: "Office Desk",
    id: 121,
    name: "roqque",
    img: img123,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 150,
    actualPrice: 200,
  },
  {
    category: "Office Desk",
    id: 122,
    name: "toscano",
    img: img124,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 50,
    actualPrice: 70,
  },
  {
    category: "Office Shelves",
    id: 123,
    name: "crosley",
    img: img125,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 50,
    actualPrice: 70,
  },
  {
    category: "Office Shelves",
    id: 124,
    name: "hazel",
    img: img126,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 50,
    actualPrice: 70,
  },
  {
    category: "Office Shelves",
    id: 125,
    name: "lois",
    img: img127,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 50,
    actualPrice: 70,
  },
  {
    category: "Office Shelves",
    id: 126,
    name: "rigo",
    img: img128,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 50,
    actualPrice: 70,
  },
  {
    category: "Office Shelves",
    id: 127,
    name: "toscano",
    img: img129,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 50,
    actualPrice: 70,
  },
  {
    category: "Office Shelves",
    id: 128,
    name: "toscano",
    img: img130,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 50,
    actualPrice: 70,
  },
  {
    category: "Office Shelves",
    id: 129,
    name: "toscano",
    img: img131,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 50,
    actualPrice: 70,
  },
  {
    category: "LIGHTS",
    id: 130,
    name: "bria tableLamp",
    img: img132,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 50,
    actualPrice: 70,
  },
  {
    category: "LIGHTS",
    id: 131,
    name: "Burke FloorLamp",
    img: img133,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 50,
    actualPrice: 70,
  },
  {
    category: "LIGHTS",
    id: 132,
    name: "carrie TableLamp",
    img: img134,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 50,
    actualPrice: 70,
  },
  {
    category: "LIGHTS",
    id: 133,
    name: "dame TableLamp",
    img: img135,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 50,
    actualPrice: 70,
  },
  {
    category: "LIGHTS",
    id: 134,
    name: "lili TableLamp",
    img: img136,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 50,
    actualPrice: 70,
  },
  {
    category: "LIGHTS",
    id: 135,
    name: "mandi Pendant",
    img: img137,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 50,
    actualPrice: 70,
  },
  {
    category: "LIGHTS",
    id: 136,
    name: "Quincy FloorLamp",
    img: img138,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 50,
    actualPrice: 70,
  },
  {
    category: "LIGHTS",
    id: 137,
    name: "savannah TableLamp",
    img: img139,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 50,
    actualPrice: 70,
  },
  {
    category: "Pillows",
    id: 138,
    name: "Black Pillow",
    img: img140,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 50,
    actualPrice: 70,
  },
  {
    category: "Pillows",
    id: 139,
    name: "jive Pillow",
    img: img141,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 50,
    actualPrice: 70,
  },
  {
    category: "Pillows",
    id: 140,
    name: "Minka Lumbar",
    img: img142,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 100,
    actualPrice: 130,
  },
  {
    category: "Pillows",
    id: 141,
    name: "Black Pillow",
    img: img143,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 50,
    actualPrice: 70,
  },
  {
    category: "Pillows",
    id: 142,
    name: "minka Pleat",
    img: img144,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 60,
    actualPrice: 100,
  },
  {
    category: "Pillows",
    id: 143,
    name: "peacock",
    img: img145,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 70,
    actualPrice: 130,
  },
  {
    category: "square PIllow",
    id: 144,
    name: "Black Pillow",
    img: img146,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 100,
    actualPrice: 150,
  },
  {
    category: "Pillows",
    id: 145,
    name: "chevy Pillow",
    img: img147,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 100,
    actualPrice: 150,
  },
  {
    category: "Throw",
    id: 146,
    name: "aspen Throw",
    img: img148,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 100,
    actualPrice: 150,
  },
  {
    category: "Throw",
    id: 147,
    name: "boucle Throw",
    img: img149,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 100,
    actualPrice: 150,
  },
  {
    category: "Throw",
    id: 148,
    name: "brooklyn Throw",
    img: img150,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 100,
    actualPrice: 150,
  },
  {
    category: "Throw",
    id: 149,
    name: "giana Throw",
    img: img151,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 100,
    actualPrice: 150,
  },
  {
    category: "Throw",
    id: 150,
    name: "chevy Pillow",
    img: img152,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 100,
    actualPrice: 150,
  },
  {
    category: "Throw",
    id: 151,
    name: "piper Throw",
    img: img153,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 100,
    actualPrice: 150,
  },
  {
    category: "Throw",
    id: 152,
    name: "pompom Throw",
    img: img154,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 100,
    actualPrice: 150,
  },
  {
    category: "Throw",
    id: 153,
    name: "vukimi Throw",
    img: img155,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 100,
    actualPrice: 150,
  },
  {
    category: "KITCHEN",
    id: 154,
    name: "Good cabinet",
    img: img156,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 300,
    actualPrice: 350,
  },
  {
    category: "KITCHEN",
    id: 155,
    name: "Kitchen cabinet",
    img: img157,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 200,
    actualPrice: 260,
  },
  {
    category: "KITCHEN",
    id: 156,
    name: "Perfect",
    img: img158,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 450,
    actualPrice: 630,
  },
  {
    category: "KITCHEN",
    id: 157,
    name: "Quality Cabinet",
    img: img159,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 300,
    actualPrice: 350,
  },
  {
    category: "KITCHEN",
    id: 158,
    name: "Cabinet",
    img: img160,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 400,
    actualPrice: 450,
  },
  {
    category: "KITCHEN",
    id: 159,
    name: "white",
    img: img161,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 300,
    actualPrice: 350,
  },
  {
    category: "KITCHEN",
    id: 160,
    name: "Expensive",
    img: img162,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 1350,
    actualPrice: 185,
  },
  {
    category: "KITCHEN",
    id: 161,
    name: "Quality",
    img: img163,
    description:
      "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    price: 600,
    actualPrice: 800,
  },
];

let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
let wishListProduct = JSON.parse(localStorage.getItem("Wishlist")) || [];

let eachStepPercentage = 100 / 4 + 7;

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: cartItems,
    allProducts: allItemsData,
    userFavProducts: wishListProduct,
    progressSteps: 0,
    percentageCompleted: 0,

    shippingAddress: {},
    billingAddress: {},
    currStep: 0,
  },
  reducers: {
    addToCart(state, action) {
      let product = action.payload;
      let existItems = state.data.find((items) => items.id === product.id);
      if (existItems) {
        existItems.quantity += product.quantity || 1;
      } else {
        state.data.push({ ...product, quantity: product.quantity || 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.data));
    },
    removeItemCart(state, action) {
      let productId = action.payload;
      state.data = state.data.filter((items) => items.id !== productId);
      localStorage.setItem("cart", JSON.stringify(state.data));
    },
    increamentQuantity(state, action) {
      let productId = action.payload;
      const product = state.data.find((items) => items.id === productId);

      if (product && product.quantity < 20) {
        product.quantity += 1;
      }
    },
    decreamentQuantity(state, action) {
      const productId = action.payload;
      const product = state.data.find((items) => items.id === productId);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
    addProductWishList(state, action) {
      let products = action.payload;
      const existItems = state.userFavProducts.find(
        (items) => items.id === products.id
      );
      if (existItems) {
        existItems.price = products.price;
      } else {
        state.userFavProducts.push({ ...products });
      }
      localStorage.setItem("Wishlist", JSON.stringify(state.userFavProducts));
    },
    removeProductsWishList(state, action) {
      let productId = action.payload;
      state.userFavProducts = state.userFavProducts.filter(
        (items) => items.id !== productId
      );
      localStorage.setItem("Wishlist", JSON.stringify(state.userFavProducts));
    },
    nextStep(state) {
      (state.progressSteps += 1),
        (state.percentageCompleted += eachStepPercentage);
    },
    prevStep(state) {
      if (state.progressSteps > 0) {
        state.progressSteps -= 1;
        state.percentageCompleted -= eachStepPercentage;
      }
    },
    resetCheckOut(state) {
      (state.progressSteps = 0), (state.percentageCompleted = 0);
    },

    setShippingAddress(state, action) {
      state.shippingAddress = action.payload;
    },
    setBillingAddress(state, action) {
      state.billingAddress = action.payload;
    },
    setCurrStep(state, action) {
      state.currStep = action.payload;
    },
  },
});

export const {
  addToCart,
  removeItemCart,
  increamentQuantity,
  decreamentQuantity,
  addProductWishList,
  removeProductsWishList,
  nextStep,
  prevStep,
  resetCheckOut,
  setShippingAddress,
  setBillingAddress,
  setCurrStep,
} = cartSlice.actions;
export default cartSlice.reducer;

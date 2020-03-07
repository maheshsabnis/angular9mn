export class CategoryMaster {
  constructor(
    public CatId: number,
    public CatName: string
  ){}
}
export const CatData = [
  {CatId:1,CatName:'A'},
  {CatId:2,CatName:'B'},
  {CatId:3,CatName:'C'},
];

export class ProductChild {
  constructor(
    public ProdId: number,
    public ProdName: string,
    public CatId: number
  ){}
}

export const PrdData = [
   {ProdId:101, ProdName:'P1', CatId:1},
   {ProdId:102, ProdName:'P2', CatId:2},
   {ProdId:103, ProdName:'P3', CatId:3},
   {ProdId:104, ProdName:'P4', CatId:1},
   {ProdId:105, ProdName:'P5', CatId:2},
   {ProdId:106, ProdName:'P6', CatId:3}
];

function addVAT(price: number, vat: number = 0.2): number {
  return price * (1 + vat);
}

const vatPrice = addVAT(30, 0.2);
const vatPriceWithDefault = addVAT(30);
// const vatPriceWrong = addVAT('hi friends!');

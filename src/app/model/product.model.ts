export class Product {
  public category;
  public code;
  public name;
  public description;
  constructor(
    public product
  ) {
    this.category = product['Cat_Name'];
    this.code = product['Code'];
    this.name = product['Name'];
    this.description = product['Description'];
  }
}

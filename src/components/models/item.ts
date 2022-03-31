class Item {
  id: string;
  name: string;
  price: number;
  imgUrl: string;

  constructor(id: string, name: string, price: number, imgUrl: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.imgUrl = imgUrl
  }

  
}

export default Item;
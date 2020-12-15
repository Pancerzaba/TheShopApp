import { Platform } from "react-native";
import products from "../store/reducers/products";

class Product{
    constructor(id, ownerId, title, imageURL, description, price){
        this.id=id;
        this.ownerId=ownerId;
        this.title=title;
        this.imageURL=imageURL
        this.description=description;
        this.price=price
    }
}
export default Products
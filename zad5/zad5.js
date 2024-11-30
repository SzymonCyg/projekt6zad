class Cart {
    constructor() {
        this.produkty = [];
    }
    addProduct(produkt) {
        this.produkty = [...this.produkty, produkt];
        console.log(`Dodano produkt: ${produkt}`);
    }
    removeProduct(productDoKasacji) {
        this.produkty = this.produkty.filter(produkt => produkt != productDoKasacji);
        console.log(`Kasacja produktu: ${productDoKasacji}`);
    }
    showCart() {
        console.log(`Lista produktów w koszyku: ${this.produkty}`);
    }
}

console.log("Przed usunięciem");
const Koszyczek = new Cart();  
Koszyczek.addProduct("Jaja"); 
Koszyczek.addProduct("Majonez");
Koszyczek.addProduct("Ser");
Koszyczek.showCart();  
console.log("Po usunięciu");
Koszyczek.removeProduct("Jaja");  
Koszyczek.removeProduct("Majonez");
Koszyczek.showCart();  
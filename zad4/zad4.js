const produkty =[
    {name: "Iphone16Pro", price: 6000, category: "elektronika"},
    {name: "AirpodsMax", price: 1500, category: "elektronika"},
    {name: "AirpodsPro", price: 6000, category: "elektronika"},
    {name: "KoszulkaLegia", price: 60, category: "ubrania"},
    {name: "KoszulkaWidzew", price: 60, category: "ubrania"},
    {name: "KoszulkaStomil", price: 200, category: "ubrania"},
    {name: "DiorSauvageElixir", price: 800, category: "perfumy"},
    {name: "ArmaniStronerWithYou", price: 350, category: "perfumy"},
    {name: "VersaceEros", price: 300, category: "perfumy"},
]
function filter(category, minPrice, maxPrice) {
    return produkty.filter(product => {
        const categoryMatch = category ? product.category === category : true;
        const minPriceMatch = minPrice ? product.price >= minPrice : true;
        const maxPriceMatch = maxPrice ? product.price <= maxPrice : true;
        return categoryMatch && minPriceMatch && maxPriceMatch;
    });
}

const filteredProducts = filter('', 0,700);
console.log(filteredProducts);




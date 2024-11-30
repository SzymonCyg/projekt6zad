class sprawdziany{
    constructor(oceny){
        this.oceny =oceny;
    }
    najwieksza(){
        console.log(`największa ocena to: ${Math.max(...this.oceny)}`);
    }
    najmniejsza(){
        console.log(`najmniejsza ocena to: ${Math.min(...this.oceny)}`);
    }
    srednia(){
        console.log(`Średnia ocen wynosi: ${this.oceny.reduce((acc,num) => acc + num, 0) / this.oceny.length}`);
    }

}
const klasowka = new sprawdziany([1,2,2,2,3,6,6,6,6])
klasowka.najmniejsza()
klasowka.najwieksza()
klasowka.srednia()
class Student {
    constructor(imie, wiek, oceny = []) {
        this.imie = imie;
        this.wiek = wiek;
        this.oceny = oceny;
    }

    addGrade(dodaj) {
        this.ocenyPoDodaniu = [...this.oceny, ...dodaj];  
        console.log(`Nowe oceny: ${dodaj}`);
        console.log(`Oceny po dodaniu: ${this.ocenyPoDodaniu}`);
    }

    wypiszDane() {
        console.log(`Imię: ${this.imie}`);
        console.log(`Wiek: ${this.wiek}`);
        console.log(`Oceny: ${this.oceny}`);
    }

    getAverage() {
        let a = this.oceny.reduce((acc, num) => acc + num, 0);
        let b = this.oceny.length;
        let srednia = a / b;
        console.log(`Średnia ocen przed dodaniem ocen: ${srednia}`);

        let d = this.ocenyPoDodaniu.reduce((acc, num) => acc + num, 0);
        let e = this.ocenyPoDodaniu.length;
        let sredniaPoDodaniu = d / e;
        console.log(`Średnia ocen po dodaniu: ${sredniaPoDodaniu}`);
    }
}

const uczen = new Student();

uczen.imie = "Szymon";
uczen.wiek = 16;
uczen.oceny = [6, 6];  
uczen.wypiszDane();
uczen.addGrade([5, 5, 6]);
uczen.getAverage();

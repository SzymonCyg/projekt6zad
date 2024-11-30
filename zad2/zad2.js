
class kalkulator{
    add(a,b){
        console.log(`Wynik dodawania to: ${a + b}`)
    }
    substruct(a,b){
        console.log(`Wynik odjemowania to: ${a - b}`)
    }
    multipy(a,b){
        console.log(`Wynik mnożenia to: ${a * b}`)
    }
    divide(a,b){
        console.log(`Wynik dzielenia to: ${a / b}`)
    }
}
const dzialanie = new kalkulator();
let pierwszaLiczba = 200;// Użytkownik inputem podawałby liczbe
let drugaLiczba = 10;// Użytkownik inputem podawałby liczbe
let podana = "*"; // Użytkownik inputem podawałby jakie działa chce wykonać
switch (podana)
{
    case "+":

        dzialanie.add(pierwszaLiczba, drugaLiczba);
        break;

    case "-":
        dzialanie.substruct(pierwszaLiczba, drugaLiczba);
        break;

    case "*":
        dzialanie.multipy(pierwszaLiczba, drugaLiczba);
        break;

    case "/":
        dzialanie.divide(pierwszaLiczba, drugaLiczba)
        break;

    default:
        console.log(`nasz kalkulator nie obsługuje takiego działania!`);
        break;
    }
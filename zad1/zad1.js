
const processText = (text, { uppercase = false, reverse = false, removeSpecialChars = false } = {}) =>{
    if(uppercase == true){
        text = text.toUpperCase();
    }
    if(reverse == false){
        text = text.split('').reverse().join('')
    }
    if(removeSpecialChars == true){
        text = text.replace(/[&\/#,+()$~%.'":*?<>{}]/, '')
    }
    console.log(`twój tekst po zmianach: ${text}`)
} 

processText('Przykładowy%tekst', { uppercase: true,reverse: true ,removeSpecialChars: true });
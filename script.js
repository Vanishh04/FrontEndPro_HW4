const userBirthAge = +prompt('Enter your age', 2004);
const userLocation = prompt('Enter your location', 'Жешув');
const userPreferSport = prompt('Enter your favourite sport', 'спортивна акробатика');

if(userBirthAge === null || userLocation === null || userPreferSport === null){
    alert('Шкода, що Ви не захотіли ввести свій(ю) рік народження, своє місто чи свій улюблений спорт')
}
else{
    let message;
    const currentYear = new Date().getFullYear();
    const currentAge = currentYear - userBirthAge;
    
    message = `Ваш рік становить ${currentAge}\n`;

    if(userLocation.toLowerCase() === 'київ' || userLocation.toLowerCase() === 'лондон' || userLocation.toLowerCase() === 'вашингтон'){
       let country;
        switch(userLocation.toLowerCase()){
            case 'київ':
                country = 'Україна';
                break;
            case 'вашингтон':
                country = 'CША';
                break;
            case 'лондон':
                country = 'Великої Британії';
                break;  
            default:
                country = 'інакшої країни';  
        }
        message += `Ти живеш у столиці ${country}`;
    }
    else{
        message += `Ти живеш у місті ${userLocation}`;
    }
    alert(message);
}

const sportChampions = {
    'футбол':'Андрій Шевченко',
    'спортивна акробатика': 'Микола Щербак та Сергій Попов',
    'баскетбол':'Леброн Джеймс'
};
if(userPreferSport.toLowerCase() in sportChampions){
    const champion = sportChampions[userPreferSport.toLocaleLowerCase()];
    const sportMessage = `Круто! Хочеш стати як ${champion}?"`;
    alert(sportMessage);
}


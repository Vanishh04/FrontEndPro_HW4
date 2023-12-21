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

    
    let country;
    const capitalCityAnswer = `Ти живеш у столиці ${country}`;
    const anotherCityAnswer = `Ти живеш у місті ${userLocation}`;
    const userLocationLowerCase = userLocation.toLocaleLowerCase();
    switch(userLocationLowerCase){
        case 'київ':
            country = 'Україна';
            message += capitalCityAnswer;
            break;
        case 'вашингтон':
            country = 'CША';
            message += capitalCityAnswer;
            break;
        case 'лондон':
            country = 'Великої Британії';
            message += capitalCityAnswer;
            break;  
        default:
            message += anotherCityAnswer; 
    }
    alert(message);
}

const userPreferSportLowerCase = userPreferSport.toLowerCase();
const sportChampions = {
    'футбол':'Андрій Шевченко',
    'спортивна акробатика': 'Микола Щербак та Сергій Попов',
    'баскетбол':'Леброн Джеймс'
};
if(userPreferSportLowerCase in sportChampions){
    const champion = sportChampions[userPreferSportLowerCase];
    const sportMessage = `Круто! Хочеш стати як ${champion}?"`;
    alert(sportMessage);
}


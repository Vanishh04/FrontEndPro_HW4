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
    function capitalCityAnswer(country){
        const capitalCityAnswer = `Ти живеш у столиці ${country}`;
        return capitalCityAnswer;
    }
    const anotherCityAnswer = `Ти живеш у місті ${userLocation}`;
    const userLocationLowerCase = userLocation.toLocaleLowerCase();
    switch(userLocationLowerCase){
        case 'київ':
            country = 'Україна';
            message += capitalCityAnswer(country);
            break;
        case 'вашингтон':
            country = 'CША';
            message += capitalCityAnswer(country);
            break;
        case 'лондон':
            country = 'Великої Британії';
            message += capitalCityAnswer(country);
            break;  
        default:
            message += anotherCityAnswer; 
    }
    alert(message);
}

const userPreferSportLowerCase = userPreferSport.toLowerCase();
const sportChampions = {
    football:'Андрій Шевченко',
    acrobaticsGymnastics: 'Микола Щербак та Сергій Попов',
    basketball:'Леброн Джеймс'
};
if(userPreferSportLowerCase === 'футбол'){
    const champion = sportChampions.football;
    const favouriteSportAnswer = `Круто, хочеш бути як ${champion}`;
    alert(favouriteSportAnswer);
}
if(userPreferSportLowerCase === 'спортивна акробатика'){
    const champion = sportChampions.acrobaticsGymnastics;
    const favouriteSportAnswer = `Круто, хочеш бути як ${champion}`;
    alert(favouriteSportAnswer);
}
if(userPreferSportLowerCase === 'баскетбол'){
    const champion = sportChampions.basketball;
    const favouriteSportAnswer = `Круто, хочеш бути як ${champion}`;
    alert(favouriteSportAnswer);
}


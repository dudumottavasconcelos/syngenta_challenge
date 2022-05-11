const _hotels = require("./hotels");
const hotels = _hotels.hotels;

function getBestPriceHotelIndex (allHotelPrices) {
    let auxBestPriceHotel = allHotelPrices[0];
    let auxBestPriceIndex = 0;

    allHotelPrices.map((getPrice, index) => {
        if (auxBestPriceHotel > getPrice) {
            auxBestPriceHotel = getPrice;
            auxBestPriceIndex = index;
        } else {
            if (auxBestPriceHotel == getPrice) {
                if (hotels[auxBestPriceIndex].starRating < hotels[index].starRating) {
                    auxBestPriceHotel = getPrice;
                    auxBestPriceIndex = index;
                }
            }
        }
    });

    return auxBestPriceIndex;
}

function getCheapestHotel(input) { //DO NOT change the function's name.
    // variáveis para fazer busca no input passado
    const consumerType = input.split(':');
    let day = consumerType[1].split(',');    

    /*
    declarando array para somar cada diária
    nota-se a importância de deixar os valores em 0
    para não retornar como NaN
    */
    let allHotelPrices = [];
    hotels.map(() => allHotelPrices.push(0));

    switch (consumerType[0].toLowerCase()) {
        case 'regular':
            day.map(getDay => { // um loop em todos os dias da diária
                if (getDay.slice(9).includes('sat') || getDay.slice(9).includes('sun')) { // se for fim de semana
                    hotels.map((getHotel, index) => { 
                        allHotelPrices[index] += hotels[index].regular.weekendPrice; // vai somar as diárias de fim de semana em cada index de hotel
                    });                    
                } else { // se for dia de semana
                    hotels.map((getHotel, index) => {
                        allHotelPrices[index] += hotels[index].regular.weekDayPrice; // vai somar as diárias de dia de semana em cada index de hotel
                    });  
                }
            });

            let indexOfHotelRegular = getBestPriceHotelIndex(allHotelPrices); // busca o melhor preço e retorna o index do hotel

            return hotels[indexOfHotelRegular].name;
            break;

        case 'rewards':
            day.map(getDay => { // um loop em todos os dias da diária
                if (getDay.slice(9).includes('sat') || getDay.slice(9).includes('sun')) { // se for fim de semana
                    hotels.map((getHotel, index) => {
                        allHotelPrices[index] += hotels[index].reward.weekendPrice; // vai somar as diárias de fim de semana em cada index de hotel
                    });                    
                } else {
                    hotels.map((getHotel, index) => { // se for dia de semana
                        allHotelPrices[index] += hotels[index].reward.weekDayPrice; // vai somar as diárias de dia de semana em cada index de hotel
                    });  
                }
            });

            let indexOfHotelReward = getBestPriceHotelIndex(allHotelPrices); // busca o melhor preço e retorna o index do hotel

            return hotels[indexOfHotelReward].name;
            break;

        default:
            return 'Desculpe, mas esse tipo cliente não existe.';
    }
}

exports.getCheapestHotel = getCheapestHotel;
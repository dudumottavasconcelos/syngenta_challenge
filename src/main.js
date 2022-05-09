const _hotels = require("./hotels");
const hotels = _hotels.hotels;

function getCheapestHotel(input) { //DO NOT change the function's name.
    // variáveis para fazer busca no input passado
    const consumerType = input.split(':');
    let day = consumerType[1].split(',');
    let sizeOfDay = day.length;

    // variáveis para cálculo da diária
    let getPriceOfLakewood = 0.0;
    let getPriceOfBridgewood = 0.0;
    let getPriceOfRidgewood = 0.0;

    // variáveis auxiliares para retornar o melhor preço
    let allHotelPrices = [];
    let auxBestPriceHotel;
    let auxBestPriceIndex;

    // calcular os valores
    switch (consumerType[0].toLowerCase()) {
        case 'regular':
            for (let i = 0; i < sizeOfDay; i++) {
                if (day[i].slice(9).includes('sat') || day[i].slice(9).includes('sun')) {
                    // regular: caso fim de semana
                    getPriceOfLakewood += hotels[0].regular.weekendPrice;
                    getPriceOfBridgewood += hotels[1].regular.weekendPrice;
                    getPriceOfRidgewood += hotels[2].regular.weekendPrice;
                } else {
                    // regular: caso dia de semana                   
                    getPriceOfLakewood += hotels[0].regular.weekDayPrice;                    
                    getPriceOfBridgewood += hotels[1].regular.weekDayPrice;
                    getPriceOfRidgewood += hotels[2].regular.weekDayPrice;
                }
            }

            // verificando melhor hotel pelo melhor preço e melhor rating
            allHotelPrices = [getPriceOfLakewood, getPriceOfBridgewood, getPriceOfRidgewood];
            auxBestPriceHotel = getPriceOfLakewood;
            auxBestPriceIndex = 0;

            for (let i = 1; i < hotels.length; i++) {
                if (auxBestPriceHotel > allHotelPrices[i]) {
                    auxBestPriceHotel = allHotelPrices[i];
                    auxBestPriceIndex = i;
                } else {
                    if (auxBestPriceHotel === allHotelPrices[i]) { // se os valores forem iguais
                        if (hotels[auxBestPriceIndex].starRating < hotels[i].starRating) { // retorna o melhor star rating
                            auxBestPriceHotel = allHotelPrices[i];
                            auxBestPriceIndex = i;
                        }
                    }
                }
            }

            return hotels[auxBestPriceIndex].name;
            break;

        case 'rewards':
            for (let i = 0; i < sizeOfDay; i++) {
                if (day[i].slice(9).includes('sat') || day[i].slice(9).includes('sun')) {
                    // reward: caso fim de semana
                    getPriceOfLakewood += hotels[0].reward.weekendPrice;
                    getPriceOfBridgewood += hotels[1].reward.weekendPrice;
                    getPriceOfRidgewood += hotels[2].reward.weekendPrice;
                } else {
                    // reward: caso dia de semana
                    getPriceOfLakewood += hotels[0].reward.weekDayPrice;
                    getPriceOfBridgewood += hotels[1].reward.weekDayPrice;
                    getPriceOfRidgewood += hotels[2].reward.weekDayPrice;
                }
            }

            // verificando melhor hotel pelo melhor preço e melhor rating
            allHotelPrices = [getPriceOfLakewood, getPriceOfBridgewood, getPriceOfRidgewood];
            auxBestPriceHotel = getPriceOfLakewood;
            auxBestPriceIndex = 0;

            for (let i = 1; i < hotels.length; i++) {
                if (auxBestPriceHotel > allHotelPrices[i]) {
                    auxBestPriceHotel = allHotelPrices[i];
                    auxBestPriceIndex = i;
                } else {
                    if (auxBestPriceHotel === allHotelPrices[i]) { // se os valores forem iguais
                        if (hotels[auxBestPriceIndex].starRating < hotels[i].starRating) { // retorna o melhor star rating
                            auxBestPriceHotel = allHotelPrices[i];
                            auxBestPriceIndex = i;
                        }
                    }
                }
            }

            return hotels[auxBestPriceIndex].name;
            break;

        default:
            return 'Desculpe, mas esse tipo cliente não existe.';
    }
}

exports.getCheapestHotel = getCheapestHotel;

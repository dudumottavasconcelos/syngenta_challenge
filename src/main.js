const _hotels = require("./hotels");
const hotels = _hotels.hotels;

function getCheapestHotel(input) { //DO NOT change the function's name.
    // variáveis para fazer busca no input passado
    const consumerType = input.split(':');
    let day = consumerType[1].split(',');
    let sizeOfDay = day.length;

    // variáveis para cálculo do melhor hotel
    let getPriceOfLakewood = 0.0;
    let getPriceOfBridgewood = 0.0;
    let getPriceOfRidgewood = 0.0;

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
            let allHotelPricesRegular = [getPriceOfLakewood, getPriceOfBridgewood, getPriceOfRidgewood];
            let bestHotelPriceRegular = getPriceOfLakewood;
            let bestHotelIndexRegular = 0;

            for (let i = 1; i < allHotelPricesRegular.length; i++) {
                if (bestHotelPriceRegular > allHotelPricesRegular[i]) {
                    bestHotelPriceRegular = allHotelPricesRegular[i];
                    bestHotelIndexRegular = i;
                } else {
                    if (bestHotelPriceRegular === allHotelPricesRegular[i]) {
                        if (hotels[bestHotelIndexRegular].starRating < hotels[i].starRating) {
                            bestHotelPriceRegular = allHotelPricesRegular[i];
                            bestHotelIndexRegular = i;
                        }
                    }
                }
            }

            return hotels[bestHotelIndexRegular].name;
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
            let allHotelPricesRewards = [getPriceOfLakewood, getPriceOfBridgewood, getPriceOfRidgewood];
            let bestHotelPriceRewards = getPriceOfLakewood;
            let bestHotelIndexRewards = 0;

            for (let i = 1; i < allHotelPricesRewards.length; i++) {
                if (bestHotelPriceRewards > allHotelPricesRewards[i]) {
                    bestHotelPriceRewards = allHotelPricesRewards[i];
                    bestHotelIndexRewards = i;
                } else {
                    if (bestHotelPriceRewards === allHotelPricesRewards[i]) {
                        if (hotels[bestHotelIndexRewards].starRating < hotels[i].starRating) {
                            bestHotelPriceRewards = allHotelPricesRewards[i];
                            bestHotelIndexRewards = i;
                        }
                    }
                }
            }

            return hotels[bestHotelIndexRewards].name;
            break;

        default:
            return 'Desculpe, mas esse tipo cliente não existe.';
    }
}

exports.getCheapestHotel = getCheapestHotel;

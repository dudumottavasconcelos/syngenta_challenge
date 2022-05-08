const hotels = [
    {
        name: "Lakewood",
        starRating: 3,
        regular: {
            weekDayPrice: 110.0,
            weekendPrice: 90.0
        },
        reward: {
            weekDayPrice: 80.0,
            weekendPrice: 80.0
        }
    },

    {
        name: "Bridgewood",
        starRating: 4,
        regular: {
            weekDayPrice: 160.0,
            weekendPrice: 60.0
        },
        reward: {
            weekDayPrice: 110.0,
            weekendPrice: 50.0
        }
    },

    {
        name: "Ridgewood",
        starRating: 5,
        regular: {
            weekDayPrice: 220.0,
            weekendPrice: 150
        },
        reward: {
            weekDayPrice: 100.0,
            weekendPrice: 40.0
        }
    }
]

exports.hotels = hotels;
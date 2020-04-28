const brain = require('brain.js');

const restaurant = {
    "ACK": "Senin",
    "JFC": "Selasa",
    "KFC": "Rabu",
    "MCD": "Kamis",
    "Pan Tantri": "Jumat",
    "Be Genyol": "Sabtu",
    "Canny": "Minggu",
}

const trainingData = [];

for(let restaurantName in restaurant){
    const day = restaurant[restaurantName];
    trainingData.push({
        input : {
            [day] : 1
        },

        output:{
            [restaurantName] : 1
        }
    })
}

const net = new brain.NeuralNetwork({
    hiddenLayers : [3]
});

const stat = net.train(trainingData);

console.log(stat);

const prediksi = net.run({
    "Minggu" :1
})

function getRestaurantReal(day){
    const hasil = net.run({
        [day]:1
    })
    let tertinggi = 0;
    let restaurantTertinggi = '';

    for(restaurantName in hasil){
        if(hasil[restaurantName] > tertinggi){
            tertinggi = hasil[restaurantName];
            restaurantTertinggi = restaurantName;
        }
    }
    return restaurantTertinggi;

}

console.log(getRestaurantReal('Minggu'));
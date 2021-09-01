const geo = require('./utils/geocode.js');
const fore = require('./utils/forecast.js');

const input_city = process.argv[2];

if(input_city){
geo.geocode(input_city, (err , {lat, lon, loc} = {}) => {
    if(err) return console.log(err);
    fore.forecast(lat, lon, (err , {temp, feels_like} = {}) => {
            if(err) return console.log(error);
            console.log(temp);
            console.log(feels_like);
            console.log(loc);
        }) 
})
}else {
    console.log('Enter a city');
}









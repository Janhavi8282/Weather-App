import axios from 'axios';

const forecastEndpoint = params => `https://api.weatherapi.com/v1/forecast.json?key=5ffef590920b43cb9ae174100240102&q=${params.cityName}&days=${params.days}`;
const locationsEndpoint = params => `https://api.weatherapi.com/v1/search.json?key=5ffef590920b43cb9ae174100240102&q=${params.cityName}`;

const apiCall = async(endpoint)=>{
    const options = {
        method: 'GET',
        url: endpoint
    }
    try{
        const response = await axios.request(options);
        return response.data;
    }
    catch(error){
        console.log("Error", error);
        return null;
    }
}

export const fetchWeatherForecast = params =>{
    return apiCall(forecastEndpoint(params));
}

export const fetchLocations = params =>{
    return apiCall(locationsEndpoint(params));
}
import { IFood } from './food';

export interface ITableRestaurants {
    id: string;
    restaurant: any;
}

export interface IRestaurants { 
    Company : { 
        companyName: string,
        phoneNumber: number,
        email: string
    },
    Location : {
        streetName: string,
        numberStreet: number,
        postalCode: number,
        cityName: string,
        countryName: string
    },
    Food : IFood[]
};
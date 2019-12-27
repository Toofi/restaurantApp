
export interface IFood
    {
    foodId: number;
    foodName: string;
    foodPrice: number;
}
export class Food {

    constructor(public foodId: number, 
                public foodName: string, 
                public foodPrice: number) {}
}

// import { Company } from './company';

// export interface IModalForm {
//     Company: ICompany;
//     Food: IFood;
//     Location: ILocation;

// }


//     foodId: number;
//     foodName: string;
//     foodPrice: number;
// }

// public testingObject: IFood;

// this.testingObject.foodId = "2";

// export class Food {
//     constructor(public foodId: number, public foodName: string, public foodPrice: number) {
        
//     }
// }

// export interface ICompany {
//     nom: string;
//     numero : number;
// }
// variable.company.name - "ITDM"
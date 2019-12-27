import { Company } from './company';
import { Location } from './location';
import { Food } from './food';

export interface IModalForm {
    Company: Company;
    Location: Location;
    Food: Food[];
}

// function printCompanyName(valueObject: IModalForm) {
//     console.log(valueObject.Company._companyName);   
// }
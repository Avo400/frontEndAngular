import { Adresse } from "../adresse/Adresse";

export class Client {
    id: number = 0;
    name: string = '';
    firstName: string = '';
    adresse: Adresse = new Adresse();
    birthDate: string = '';

}
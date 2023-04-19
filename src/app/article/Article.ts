import { Categorie } from "../categorie/Categorie";

export class Article {
    id: number = 0;
    name: string = '';
    prixUnitaire: number = 0;
    categorie: Categorie = new Categorie();
}
import { Article } from "../article/Article";
import { Commande } from "../commande/Commande";

export class ArticleCommande {
    id: number = 0;
    article: Article = new Article();
    quantite: number = 0;
    commande: Commande = new Commande();
}
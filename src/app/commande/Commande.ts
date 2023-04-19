import { Client } from "../client/Client";

export class Commande {
    id: number = 0;
	numeroCommande: number = 0;
	dateCommande: string = '';
    client: Client = new Client();
	}
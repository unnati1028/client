import { Transaction } from "./transaction";

export class Bank {
    label: string;
    balance: number;
    type: string;
    transactions: Transaction[];
}

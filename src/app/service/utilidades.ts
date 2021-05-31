import { Token } from 'src/app/models/Token';
import { SelectDTO } from '../models/SelectDTO';

export class Utilidades {

    static isEmpty(str: string): boolean {
        return (!str || str.length === 0);
    }

    static isBlank(str: string): boolean {
        return (!str || /^\s*$/.test(str));
    }

    static isValidNumber(num: number): boolean {
        return (num <= 0 || num === undefined);
    }

    static isValidEmail(str: string): boolean {
        const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return !regularExpression.test(String(str).toLowerCase());
    }

    static validSession(): boolean {
        let validToken: boolean = false;

        try {
            let sessionToken: string = sessionStorage.getItem('login');

            if (!Utilidades.isEmpty(sessionToken)) {
                let token = new Token(JSON.parse(sessionToken));

                if (!Utilidades.isEmpty(token.userName) || !Utilidades.isEmpty(token.bearer) || !Utilidades.isEmpty(token.token)) {
                    validToken = true;
                }
            }
        } catch (error) {
            console.error('Here is the error message:', error)
        }
        return validToken;
    }

    static recoverToken(): Token {
        return new Token(localStorage.getItem('login'));
    }

    static getTextSelectById(listSearch: SelectDTO[], idSearch: number): string {
        let resultSearch: string = "";

        listSearch.forEach(item => {
            if (item.id == idSearch) {
                resultSearch = item.text
            }
        });

        return resultSearch;
    }

}

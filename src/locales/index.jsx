import { EN } from "./EN";
import { RU } from "./RU"
import { UZ } from "./UZ";
import { SITE_LANG } from "../tools/constants";

export function getText(word) {
    if(localStorage.getItem(SITE_LANG) === 'En'){
        return EN[word];
    } else if(localStorage.getItem(SITE_LANG) === 'Ru'){
        return RU[word];
    }
    else return UZ[word];
}

export function getLang(){
    return localStorage.getItem(SITE_LANG);
}
export const Lang = getLang();
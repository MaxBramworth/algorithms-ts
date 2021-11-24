import { NO_MATCH } from "../common"

const binarySearch = (items: any[], item: any): number => {
    let index : number;
    let lastitem : number = items.length;
    let firstitem : number = 0;
    let itemrange : number = 0;
    while (true){
        index = (itemrange - (itemrange % 2)) / 2 + (itemrange % 2);
        if (items[index] === item){
            return(index);
        } else if (items[index] > item){
            items
        }
    }
    return NO_MATCH;
}

export default binarySearch;
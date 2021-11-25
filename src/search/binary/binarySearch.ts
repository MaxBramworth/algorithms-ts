import { NO_MATCH } from "../common"

const binarySearch = (items: any[], item: any): number => {
    let index : number; // index we looking at
    let lastitem : number = items.length; // last item in our mini list
    let firstitem : number = 0; // first item in our mini list
    let done : any;
    while (done === null){
        index = Math.floor((firstitem + lastitem) / 2); // sets index to the midpoint of the mini list
        if (items[index] === item){ // if this is the thing
            done = index;
        } else if (firstitem === lastitem){
            done = NO_MATCH;
        } else if (items[index] > item){ // if it is bigger than item
            if (index === 0){
                done = NO_MATCH;
            }
            lastitem = index - 1;
        } else if (items[index] < item){ // if it is smoller than item
            if (index === items.length - 1){
                done = NO_MATCH;
            }
            firstitem = index + 1;
        }
    }
    return done; // return
}

export default binarySearch;
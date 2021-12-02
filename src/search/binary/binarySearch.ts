import { NO_MATCH } from "../common"

const binarySearch = (items: any[], item: any): number => {
    let result: number = -2;
    let lowerPointer: number = 0;
    let higherPointer: number = items.length - 1;

    while (result === -2){
        let middlePointer: number = Math.floor((lowerPointer + higherPointer) / 2);
        if (item === items[middlePointer]){
            result = middlePointer;
        } else if (lowerPointer === higherPointer){
            result = NO_MATCH;
        } else if (item < items[middlePointer]){
            if (middlePointer === 0){
                result = NO_MATCH;
            }
            higherPointer = middlePointer - 1;
        } else if (item > items[middlePointer]) {
            if (middlePointer === (items.length - 1)){
                result = NO_MATCH;
            }
            lowerPointer = middlePointer + 1;
        }
    }
    return result;
}

export default binarySearch;
// transform an array of n items to a  nested array, with each child array having four items 


export function TransformArray(inputArray: unknown[]): unknown[][] {
    const result: unknown[][] = [];

    for (let i = 0; i < inputArray.length; i += 4) {
        result.push(inputArray.slice(i, i + 4));
    }

    return result;
}
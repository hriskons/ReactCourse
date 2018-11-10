// Spec: isLeap
// on every year that is evenly divisible by 4 and not evenly divisible by 100
// or the year is evenly divisible by 400


export function isLeap(year){
    return (!(year % 4) && (year % 100)) || !(year % 400);
}
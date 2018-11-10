// Spec
// count how many words contains a string

export function wordCount(input) {
    if(typeof(input) === typeof('')){
        return (input === "" ? 0 : input.split(' ').length);
    }else{
        throw "Prepei na mas doseis string, re!"
    }
}


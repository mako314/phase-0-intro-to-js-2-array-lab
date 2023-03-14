// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(){
    cats.push("Ralph");
}

function destructivelyPrependCat(){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(){
    let coolCats = [...cats, "Broom"];
    return coolCats;
}

function prependCat(){
    let prepCats = ["Arnold", ...cats];
    return prepCats;
}

function removeLastCat(){
    let sorryLastCat = cats.slice(0, cats.length - 1);
    return sorryLastCat;
}

function removeFirstCat(){
    let sorryFirstCat = cats.slice(1);
    return sorryFirstCat;
}
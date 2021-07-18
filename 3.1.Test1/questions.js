let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " + texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = (texte1, texte2) => {
    let text = texte1 + texte2;
    return text;
}
let afficherCar5 =  (texte) => {
    let char = texte.charAt(4);
    return char;
}
let afficher9Car =  (texte) => {
    let chars = texte.substring(0,9);
    return chars;
}
let majusculeString =  (texte) => {
    return texte.toUpperCase();
}
let minusculeString =  (texte) => {
    return texte.toLowerCase();
}
let SupprEspaceString =  (texte) => {
    return texte.trim();
}
let IsString =  (texte) => {
    if(typeof(texte)){
        return true;
    }
}

let AfficherExtensionString =  (texte) => {
    return texte.split('.').pop();
}
let NombreEspaceString =  (texte) => {
    let spaceCount = texte.split(" ").length - 1;
    return spaceCount;
}
let InverseString =  (texte) => {
    return texte.split('').reverse().join('');
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {
    let power = Math.pow(x,y);
    return power;
}
let valeurAbsolue =  (nombre) => {
    let valAbs = Math.abs(nombre);
    return valAbs;
}
let valeurAbsolueArray =  (array) => {
    let valAbs = [];
    for(number of array){
        valAbs.push(Math.abs(number));
    }
    return valAbs;
}
let sufaceCercle =  (rayon) => {
    let surface = Math.round(Math.PI * rayon * rayon);
    return surface;
}
let hypothenuse =  (ab, ac) => {
    return Math.hypot(ab,ac);
}
let calculIMC =  (poids, taille) => {
    let indice = poids / (taille * taille);
    let imc = (Math.round(indice * 100) / 100);
    return imc;
}
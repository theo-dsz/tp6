function  test_age() {
    let age = prompt("Quelle est votre âge");
    if (age < 18) {
        document.write("Vous êtes mineur");
        document.body.style.backgroundColor="pink"
    }
    else {
        document.write("Vous êtes majeur");
        document.body.style.backgroundColor="green";
    }
}




function calcul_moyenne() {
    var n1 = prompt("Donner la première note :");
    var n2 = prompt("Donner la deuxième note :");
    var n3 = prompt("Donner la troisième note :");

    var somme = Number(n1) + Number(n2) + Number(n3);

    document.write("Voici la sommer : " + somme + "<br>");
    var moyenne = somme/3;

    document.write("Voici la moyenne : " + moyenne + "<br>");

    if (moyenne < 10) {
        document.write("Désolé...Vous êtes redoublant");
        document.body.style.backgroundColor="pink"
    }
    else {
        document.write("Vous êtes admis");
        document.body.style.backgroundColor="green";
    }


    document.write("<hr>");

    if (moyenne < 0 || moyenne > 20) {
        document.write("moyenne non validée");}
        else if (moyenne <10)
        {document.write("Redoublant")}
        else if (moyenne <14)
        {document.write("admis passible")}
        else{document.write("admis bien");}
}

function test_couleur() {
    let couleur = prompt("Donner une couleur");
    if (couleur == "rouge" || couleur == "red") {
document.body.style.backgroundColor = "red"
    }

    else if (couleur == "bleu" || couleur == "blue") {
        document.body.style.backgroundColor = "blue"
    }

    else if (couleur == "vert" || couleur == "green") {
        document.body.style.backgroundColor = "green"
    }

    else if (couleur == "rose" || couleur == "pink") {
        document.body.backgroundColor = "pink"
    }
     else {
        alert("Couleur non comprise")
     }
    
    }


    function simple_affichage() {
        
    }
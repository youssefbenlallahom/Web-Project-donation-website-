function validerEtSoumettre(event) {
    event.preventDefault(); 
    var noms = document.getElementById("noms").value;
    var typs = document.getElementById("typs").value;
    var ide = document.getElementById("ide").value;
    var span1 = document.getElementById("s1");
    var span2 = document.getElementById("s2");
    var span3 = document.getElementById("s3");
    var k = 0;

    // Validation du nom
if (noms.length === 0 || !/^[A-Za-z]+$/.test(noms)) {
    span1.innerHTML = "incorrect";
    span1.style.color = "red";
    event.preventDefault(); 
} else {
    span1.innerHTML = "correct";
    span1.style.color = "green";
    k++;
    // Empêche la soumission automatique
}

// Validation du prénom
if (typs.length === 0 || !/^[A-Za-z]+$/.test(typs)) {
    span2.innerHTML = "incorrect";
    span2.style.color = "red";
    event.preventDefault();
} else {
    span2.innerHTML = "correct";
    span2.style.color = "green";
    k++;
    // Empêche la soumission automatique
}





// Validation du CIN
if (ide.selected(0)==1) {
    span3.innerHTML = "correct";
    span3.style.color = "green";
    k++;
} else {
    span3.innerHTML = "incorrect";
    span3.style.color = "red";
    event.preventDefault(); // Empêche la soumission automatique
}


    if (k === 3) {
        // Soumettre le formulaire
        document.getElementById("form").submit();

        // Rediriger l'utilisateur vers la page initiale
        window.location.href = "eventa.html";
    }
  
}
function verifier() {
    var nom = $("#nom").val();
    var heures = $("#heures").val();
    var taux = $("#taux").val();

    if (nom === "" || heures === "" || taux === "") {
        alert("Tous les champs doivent être renseignés.");
        return false;
    }

    if (!Number.isInteger(parseInt(heures)) || !Number.isInteger(parseInt(taux))) {
        alert("Le Nombre d’heures enseignées et le Taux horaire doivent être des entiers.");
        return false;
    }

    return true;
}

function calculer() {
    if (!verifier()) {
        return;
    }

    var nom = $("#nom").val();
    var heures = parseInt($("#heures").val());
    var taux = parseInt($("#taux").val());

    var salaireBrut = heures * taux;
    var tauxIR = 0.30;
    var montantIR = salaireBrut * tauxIR;
    var salaireNet = salaireBrut - montantIR;

    var tableau = $("#tableauResultats");
    var ligne = $("<tr></tr>");

    ligne.append($("<td></td>").text(nom));
    ligne.append($("<td></td>").text(heures));
    ligne.append($("<td></td>").text(taux));
    ligne.append($("<td></td>").text(salaireBrut.toFixed(2)));
    ligne.append($("<td></td>").text((tauxIR * 100).toFixed(2) + "%"));
    ligne.append($("<td></td>").text(montantIR.toFixed(2)));
    ligne.append($("<td></td>").text(salaireNet.toFixed(2)));
    ligne.append($("<td></td>").html('<button onclick="supprimer(this)">Supprimer</button>'));

    tableau.append(ligne);
}

function supprimer(btn) {
    $(btn).closest("tr").remove();
}

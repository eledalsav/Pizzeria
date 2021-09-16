function calcBill() {
    let checkBoxes = document.querySelectorAll("input[type='checkbox']");

    
    let priceData = document.querySelectorAll("td.price");

    let bill = 0.0;

    for (let i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {
            bill += parseInt(priceData[i].innerHTML)
        }
    }

    if (bill != 0.0)
        localStorage.setItem("conto", bill);
    else {
        alert("Non hai selezionato nessuna pizza!");
        let goOnLink = document.getElementById("goOn"); //recupero il link con id goOn
        goOnLink.setAttribute("href", "MenuPizzeria.html"); //cambio l'attributo href, mettendo come 'destinazione' la pagina Menu stessa
    }
}

function showCardInput() {
    let cardInput = document.getElementById("codiceCarta");

    let cashChoice = document.querySelector("input[value='1']");
    let cardChoice = document.querySelector("input[value='2']");

    if (cardChoice.checked) {
        cardInput.style.display = "";
    }
    else if (cashChoice.checked) {
        cardInput.style.display = "none"
    }
}

function showBill() {
    //recupero elemento paragrafo con id bill nella pagina conferma ordine pizzeria
    let billPar = document.getElementById("bill");

    //recupero il conto dallo storage
    let bill = localStorage.getItem("conto");

    //Cambio il contenuto del paragrafo con il conto recuperato dallo storage
    billPar.innerHTML = "Stai per pagare: " + bill + "€";
}
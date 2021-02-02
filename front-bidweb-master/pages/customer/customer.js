function backMenu() {
    window.location.href = "../menu/menu.html";
}

function logout() {
    window.location.href = "../login/login.html";
}

function selectCustomer() {
    window.location.href = "../importHistory/importHistory.html"
}

window.onload = function(){
    let customersName = [
        "Bidweb Security IT",
        "Cesar",
        "Elcoma Computadores",
        "Instituto de Medicina Integral Professor Fernando Figueira - IMIP",
        "Grupo Dislub Equador",
        "Tribunal de Justiça de Pernambuco - TJPE",
        "Tribunal Regional Eleitoral de Pernambuco - TJPE",
        "Conselho Regional de Engenharia e Agronomia de Pernambuco - CREA - PE",
        "Advanced Micro Devices - AMD",
        "Santa Monica Studio",
        "Crystal Dynamics"
        ];
    
    let importationDate = [
        "24/12/2020",
        "13/12/2020",
        "15/11/2020",
        "11/11/2020",
        "07/11/2020",
        "03/11/2020",
        "28/10/2020",
        "23/10/2020",
        "20/10/2020",
        "10/10/2020",
        "8/10/2020"
    ]

    let quantityRegister = [
        "7200",
        "15655",
        "12000",
        "3100",
        "5900",
        "1428",
        "28550",
        "6005",
        "16000",
        "2200",
        "3700"
    ]

    let tbody = document.getElementById("registers")

    for (let index = 0; index < customersName.length; index++) {
        
        let tdCustomer = document.createElement('td');
        tdCustomer.setAttribute('class', 'customersName')

        let tdDate = document.createElement('td');
        tdDate.setAttribute('class', 'importDate')

        let tdQuantity = document.createElement('td')
        tdQuantity.setAttribute('class', 'quantity')

        let item = document.createElement('tr');

        item.appendChild(tdCustomer).appendChild(document.createTextNode(customersName[index]));
        item.appendChild(tdDate).appendChild(document.createTextNode(importationDate[index]));
        item.appendChild(tdQuantity).appendChild(document.createTextNode(quantityRegister[index]));
        tbody.appendChild(item)
    }
}
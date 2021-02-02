function backMenu() {
    window.location.href = "../menu/menu.html";
}

function logout() {
    window.location.href = "../login/login.html";
}

function backCustomer(){
    window.location.href = "../customer/customer.html";
}

window.onload = function(){
    let archiveName = [
        "scan_24122020",
        "scan_03122020",
        "scanempresaBidweb",
        "scan_11112020",
        "segundo_scan_",
        "primeiro_scan_"
        ];
    
    let importationDate = [
        "24/12/2020",
        "03/12/2020",
        "15/11/2020",
        "11/11/2020",
        "07/11/2020",
        "26/10/2020"
    ];

    let quantityRegister = [
        "3001",
        "3112",
        "3500",
        "4520",
        "5900",
        "7200"
    ];

    let tbody = document.getElementById("registers")

    for (let index = 0; index < archiveName.length; index++) {
        
        let tdArchive = document.createElement('td');
        tdArchive.setAttribute('class', 'customersName')

        let tdDate = document.createElement('td');
        tdDate.setAttribute('class', 'importDate')

        let tdQuantity = document.createElement('td')
        tdQuantity.setAttribute('class', 'quantity')

        let item = document.createElement('tr');

        item.appendChild(tdArchive).appendChild(document.createTextNode(archiveName[index]));
        item.appendChild(tdDate).appendChild(document.createTextNode(importationDate[index]));
        item.appendChild(tdQuantity).appendChild(document.createTextNode(quantityRegister[index]));
        tbody.appendChild(item)
    }
}
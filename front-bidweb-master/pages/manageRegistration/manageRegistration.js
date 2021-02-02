window.onload = function () {
    let customersName = [
        "Bidweb Security IT",
        "Cesar",
        "Elcoma Computadores",
        "Instituto de Medicina Integral Professor Fernando Figueira - IMIP",
        "Grupo Dislub Equador",
        "Tribunal de Justiça de Pernambuco - TJPE",
        "Tribunal Regional Eleitoral de Pernambuco - TJPE",
        "Conselho Regional de Engenharia e Agronomia de Pernambuco - CREA - PE"
        ];
        
        let listCustomers = document.getElementById('listCustomers');

        for(var i = 0; i < customersName.length; i++){

            let liLabel = document.createElement('label');
            liLabel.setAttribute('class', 'customersName')

            let imgEdit = document.createElement('img');
            let imgDelete = document.createElement('img');

            imgEdit.setAttribute('class', 'imageEdit')
            imgDelete.setAttribute('class', 'imageDelete')
         
            imgEdit.src =  "../../assets/imgs/edit.svg";
            imgDelete.src = "../../assets/imgs/delete.svg";

            let item = document.createElement('li');
    
            item.appendChild(liLabel).appendChild(document.createTextNode(customersName[i]));
            item.appendChild(imgEdit);
            item.appendChild(imgDelete);
            listCustomers.appendChild(item);
        }
}

function backMenu() {
    window.location.href = "../menu/menu.html";
}

function logout() {
    window.location.href = "../login/login.html";
}

function openDetails() {
    window.location.href = "../showRegister/showRegister.html";
}

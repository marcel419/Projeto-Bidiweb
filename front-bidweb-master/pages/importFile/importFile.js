function backMenu() {
    window.location.href = "../menu/menu.html";
}

function logout() {
    window.location.href = "../login/login.html";
}

function getNameFile(event) {
    var name = document.getElementById('nameFile');
    name.innerHTML = event.target.files[0].name;
    console.log(event.target.files[0].name)
}
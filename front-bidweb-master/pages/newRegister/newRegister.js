var loadFile = function(event) {
    var image = document.getElementById('image');
    image.src = URL.createObjectURL(event.target.files[0]);
  };

  function logout() {
    window.location.href = "../login/login.html";
}

function backMenu() {
  window.location.href = "../menu/menu.html";
}

function newContracts() {
  document.getElementById('contracts').style.display = 'block';
}

function newUsers() {
  document.getElementById('users').style.display = 'block';
}

function closeNewUsers() {
  document.getElementById('users').style.display = 'none';
}

function closeNewContracts() {
  document.getElementById('contracts').style.display = 'none';
}

function toSalve() {
  Swal.fire({
    title: 'Salvar cadastro?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#f38230',
    cancelButtonColor: '#5DACA5',
    confirmButtonText: 'Sim',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "../manageRegistration/manageRegistration.html";
    }

  })
}


// CRIAR CONTA
const create = document.getElementById("criar");

create.addEventListener("click", (e)=>{
    e.preventDefault();    

    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;
    const confirmPassword = document.getElementById("confirmPasswordInput").value;
    const name = document.getElementById("nameImput").value; 

    if(name.lenght < 5){
        alert("Preencha com um nome válido...");
        return;
    }
    
    if(email.length < 5){
        alert("Preencha o campo com um e-mail válido...");
        return;
    }

    if(password.length < 4){
        alert("Preencha a senha com no mínimo 4 dígitos...");
        return;    
    }

    if(confirmPassword !== password){
        alert("As senhas não são iguais!");
        return;
    }

    saveAccount({
        login: email,
        password: password,
        transactions: []
    });

    alert("Conta criada com sucesso.");
    window.location.href = "index.html";
});

function saveAccount(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
};
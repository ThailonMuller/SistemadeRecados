// LOGAR CONTA
const login = document.getElementById("logar");

login.addEventListener("click", (e)=>{
    e.preventDefault();

    const email = document.getElementById('email_input').value;
    const password = document.getElementById('password_input').value;
    const account = getAccount(email);

if(!account) {
    alert("Opps! verifique o usuário ou senha.");
    return;
}
if(account) {
    if(account.password !== password){
        alert("Verifique o usuário ou senha.");
        return;       
    };        
}window.location.href = "home.html";
});

function getAccount(item) {
const account = localStorage.getItem(item)
if(account) {
    return JSON.parse(account);        
}
};

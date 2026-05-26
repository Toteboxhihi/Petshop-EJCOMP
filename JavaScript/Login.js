let usuarios = [];
for(var i = 0; i < 5; i++){
    let usuario = {};
    usuario.nome = "usuario"+i;
    usuario.senha = "senha"+i;
    usuarios.push(usuario);
}

console.log(usuarios);
const botao = document.getElementById("buttonEntrar");

botao.addEventListener('click', function(event){
    event.preventDefault();
    usuario = document.getElementsByClassName("text_input")[0]; 
    senha = document.getElementsByClassName("text_input")[1]; 

    controle = true;

    for(var i = 0; i < 5; i++){
        if(usuarios.at(i).nome == usuario.value && usuarios.at(i).senha == senha.value){
            alert("Bem vindo!");
            controle = false;
            window.location.href = "home.html";
            break;   
        }
    }
    if(controle)
        alert("Usuário não cadastrado!");
})

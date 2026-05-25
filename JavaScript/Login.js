const submit = document.getElementsByClassName("submit_button")[0];
submit.addEventListener('click', enterUser);

let usuarios = [];

for(var i = 0; i < 5; i++){
    let usuario = {};
    usuario.nome = "usuario"+i;
    usuario.senha = "senha"+i;
    usuarios.push(usuario);
}

console.log(usuarios);

function enterUser(event){
    event.preventDefault();
    text_inputs = event.target.parentElement.parentElement.getElementsByClassName("text_input");

    controle = true;

    for(var i = 0; i < 5; i++){
        if(usuarios.at(i).nome == text_inputs[0].value && usuarios.at(i).senha == text_inputs[1].value){
            alert("Bem vindo!");
            controle = false;
            window.location.href = "home.html";
            break;   
        }
    }
    if(controle)
        alert("Usuário não cadastrado!");
}

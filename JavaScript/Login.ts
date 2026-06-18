interface Usuario {
    nome: string;
    senha: string;
}

const usuarios: Usuario[] = [];

for (let i = 0; i < 5; i++) {
    const usuario: Usuario = {
        nome: "usuario"+i,
        senha: "senha"+i
    };
    usuarios.push(usuario);
}

console.log(usuarios);

const botao = document.getElementById("buttonEntrar") as HTMLButtonElement | null;

if (botao) {
    botao.addEventListener('click', function(event: MouseEvent) {
        event.preventDefault();
        
        const usuarioInput = document.getElementsByClassName("text_input")[0] as HTMLInputElement | undefined; 
        const senhaInput = document.getElementsByClassName("text_input")[1] as HTMLInputElement | undefined; 

        if (!usuarioInput || !senhaInput) {
            console.error("Inputs não encontrados na tela.");
            return;
        }

        let controle = true;

        for (let i = 0; i < 5; i++) {
            const usuarioAtual = usuarios[i];
            if (usuarioAtual && usuarioAtual.nome === usuarioInput.value && usuarioAtual.senha === senhaInput.value) {
                alert("Bem vindo!");
                controle = false;
                window.location.href = "home.html";
                break;   
            }
        }
        if (controle) {
            alert("Usuário não cadastrado!");
        }
    });
}
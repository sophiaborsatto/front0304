const mensagem = document.getElementById('mensagem');
const botao = document.getElementById('meuBotao');
const evento = document.getElementById('evento');

botao.addEventListener('click', imprimir);

botao.addEventListener('mouseover', 
    function(){
        mensagem.textContent = "Você passou por cima";
    }   
);

botao.addEventListener('mouseout', 
    function(){
        mensagem.textContent = "Não volte aqui"
    }
);

botao.addEventListener('mouseover', 
    function(){
        evento.innerHTML = alert ("Você foi invadido.")
    }
);

botao.addEventListener('mouseout',
    function(){
        evento.innerHTML = alert ("Você foi invadido, não adianta correr.")
    }
);

function imprimir(){
    mensagem.textContent = "Você clicou";
} 
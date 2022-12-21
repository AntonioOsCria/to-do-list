let content = document.getElementById('Title');
let title = document.createElement('h1'); 
let text = document.createTextNode("To-Do-List");

title.appendChild(text);
content.appendChild(title);

//let chamando o botao
let elementBtn = document.getElementById('addBtn');
//let chamando a ul
let elementList = document.getElementById('ul');
//let chamando o input
let elementInput = document.getElementById('input');
//chamei o botao e adicionei um evento nele 'click' e uma funcao 
//que ira criar uma nova li dentro da ul e retorna o texto criado no input
elementBtn.addEventListener('click', function(){
    //nesta variavel estou criando o 'li'
    var list = document.createElement('li')
    //estou dizendo aqui, que eu quero retorna o conteúdo de texto do elemento criado no input
    list.innerText = elementInput.value;
    //estou declarando que a variavel "list" e filha da 'ul' variavel declarada como 'elementList'
    elementList.appendChild(list); 

    list.addEventListener
}) 







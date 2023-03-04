ScrollReveal().reveal('.eventos', { delay: 100 });
ScrollReveal().reveal('.html', { delay: 300 });
ScrollReveal().reveal('.css', { delay: 500 });
ScrollReveal().reveal('.js', { delay: 700 });
ScrollReveal().reveal('.c', { delay: 900 });
ScrollReveal().reveal('.python', { delay: 1000 });
ScrollReveal().reveal('.material', { delay: 1500 });
ScrollReveal().reveal('.next', { delay: 1700 });



//EVENTOS DE MOUSE

// DECLARANDO AS VARIASVEIS DOS BOXES
let  html = document.querySelector('.html') 
let css = document.querySelector('.css')
let js = document.querySelector('.js')
let c = document.querySelector('.c')
let python = document.querySelector('.python')
let material = document.querySelector('.material')
let next = document.querySelector('.next')
let evento = document.querySelector('.evento')

//ADICIONANDO EVENTOS
html.addEventListener('mouseenter', entrarHtml)
html.addEventListener('mouseout', sairHtml)
css.addEventListener('mouseenter', entrarCss)
css.addEventListener('mouseout', sairCss)
js.addEventListener('mouseenter', entrarJs)
js.addEventListener('mouseout', sairJs)
c.addEventListener('mouseenter', entrarC)
c.addEventListener('mouseout', sairC)
python.addEventListener('mouseenter', entrarPython)
python.addEventListener('mouseout', sairPython)
material.addEventListener('mouseenter', entrarMaterial)
material.addEventListener('mouseout', sairMaterial)
next.addEventListener('mouseenter', entrarNext)
next.addEventListener('mouseout', sairNext)

//DECLARANDO FUNCTIONS
function entrarHtml(){
evento.innerText = 'O HTML é a base de todo sistema web, é com ele que adicionamos em nossa página os Textos, Imagens, Formulários, Vídeos e etc.'
}
function sairHtml(){
evento.innerText = "Passe o cursor ou click"
}
function entrarCss(){
evento.innerText = 'Com o CSS adicionamos estilos em nossa página: Cores, Tamanhos, Posicionamentos Sombras, Grids, Efeitos, Animações e etc.'
}
function sairCss(){
evento.innerText = "Passe o cursor ou click"
}
function entrarJs(){
evento.innerText = 'Com o Javascript as possibilidades são imensas, validar formularios, processar dados, manipular elementos na tela, consultar APIs, etc.'
}
function sairJs(){
evento.innerText = "Passe o cursor ou click"
}
function entrarC(){
evento.innerText = 'O C# uma linguagem de programação orientada a objetos e orientada a componentes. C# fornece construções de linguagem para dar suporte diretamente a esses conceitos, tornando C# uma linguagem natural para criação e uso de componentes de software.'
}
function sairC(){
evento.innerText = "Passe o cursor ou click"
}
function entrarPython(){
evento.innerText = 'Redux é uma biblioteca JavaScript para gerenciar o estado da aplicação é similar e inspirada pela arquitetura Flux do Facebook, ela pode ser utilizada com o React ou outras bibliotecas JavaScript.'
}
function sairPython(){
evento.innerText = "Passe o cursor ou click"
}
function entrarMaterial(){
evento.innerText = 'Biblioteca de componentes React para um desenvolvimento ágil e fácil. O Material.ui é usado por grande empresas como Nasa, Walmart, Netflix, Amazon, Spotify, entre outras.'
}
function sairMaterial(){
evento.innerText = "passe o cursor no card para ler"
}
function entrarNext(){
evento.innerText = 'O Next.js é o framework mais adotado pela comunidade do React. O seu maior objetivo é tornar nossa aplicação React mais performática e permitir a indexação do conteúdo da página pelos motores de busca.'
}
function sairNext(){
evento.innerText = "passe o cursor no card para ler"
}
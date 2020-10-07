// container do conteúdo
const content = document.querySelector('.content');

// criação da barrinha
let bar = document.createElement("div");

// estilo da barrinha
bar.style.height = "4px";
bar.style.backgroundColor = "#6633CC";
bar.style.position = "fixed";
bar.style.top = "0";
bar.style.left = "0";
bar.style.zIndex = "9999";

// adicionando a barra a page
document.body.append(bar);

// atualizar a barra
function updateBar() {
    // o tamanho da caixa que contém o conteúdo
    const contentHeight = content.offsetHeight;
    // verificar em que posição da página eu estou
    const pageHeight = window.pageYOffset;
    // regra de 3
    const updatedBar = (pageHeight * 100 / contentHeight).toFixed(0);

    bar.style.width = updatedBar + "%";
}

// verificar o movimento do scroll

window.addEventListener('load', () => {
    document.addEventListener("scroll", updateBar);
})
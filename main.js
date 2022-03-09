function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('')
  elemento.innerHTML = ''
  textoArray.forEach((letra, i) => {
    setTimeout(() => {
      elemento.innerHTML += letra
    }, 150 * i)
  })
}

const titulo = document.querySelector('#h2')
typeWriter(titulo)

// GALERIA

let imagens = document.querySelectorAll('.small-img')
let modal = document.querySelector('.modal')
let modalImg = document.querySelector('#modal_img')
let btClose = document.querySelector('#bt_close')
let srcVal = ''

for (let i = 0; i < imagens.length; i++) {
  imagens[i].addEventListener('click', function () {
    srcVal = imagens[i].getAttribute('src')
    modalImg.setAttribute('src', srcVal)
    modal.classList.toggle('active')
  })
}

btClose.addEventListener('click', function () {
  modal.classList.toggle('active')
})

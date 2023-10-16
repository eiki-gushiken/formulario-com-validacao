const campos = document.querySelectorAll('.campo')
const inputs = document.querySelectorAll('.preencher')
const botaoEnviar = document.querySelector('.botao')

botaoEnviar.addEventListener('click', verificarCampos)

inputs.forEach((input, indice) => {
    input.addEventListener('change', () => {
        validarOuInvalidar(input, indice)
    })
})

function verificarCampos() {
    inputs.forEach((input, indice) => {
        validarOuInvalidar(input, indice)
    })
}

function validarOuInvalidar(input, indice) {
    if (input.value !== '') {
        campos[indice].classList.remove('invalido')
        campos[indice].classList.add('valido')
    } else {
        campos[indice].classList.remove('valido')
        campos[indice].classList.add('invalido')
    }
}
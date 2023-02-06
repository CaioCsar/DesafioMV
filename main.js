const app = require("./app");
//import app from "./app.js"

//elementos da pagina
const $button = document.querySelector('.btn');
const $submit = document.querySelector('#submit');
let $refeicao = document.querySelector('.refPessoa');
let $name = document.querySelector('.pessoa');
let $cpf = document.querySelector('#cpf');
console.log($cpf)

//comportamento form
$submit.addEventListener('submit', function eventController(e) {
  e.preventDefault();
})

import {inserirDados} from "./app"
inserirDados($name, $cpf, $refeicao);



//botao
$button.addEventListener('click', () => {

})


//validate cpf
function ValidaCPF() {

  var cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/;
  if (cpfValido.test($cpf) == false) {

    $cpf = $cpf.replace(/\D/g, ""); //Remove tudo o que não é dígito

    if ($cpf.length == 11) {
      $cpf = $cpf.replace(/(\d{3})(\d)/, "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
      $cpf = $cpf.replace(/(\d{3})(\d)/, "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
      //de novo (para o segundo bloco de números)
      $cpf = $cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); //Coloca um hífen entre o terceiro e o quarto dígitos

      var valorValido = document.getElementById(".cpf").value = $cpf;
    } else {
      console.log("CPF invalido");
    }

  }
}

//formate cpf 

function mascara(i) {

  var v = i.value;

  if (isNaN(v[v.length - 1])) { // impede entrar outro caractere que não seja número
    i.value = v.substring(0, v.length - 1);
    return;
  }

  i.setAttribute("maxlength", "14");
  if (v.length == 3 || v.length == 7) i.value += ".";
  if (v.length == 11) i.value += "-";

}

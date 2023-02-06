// connect database
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "usbw",
  database: "cadastrorefeicao"
});

// select
function selecionarDados() {
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "SELECT * FROM pessoa";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Result: " + JSON.stringify(result));
    });
  });
}

// inserir dados na table 

function inserirDados($name, $cpf, $refeicao) {
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = `INSERT INTO pessoa (nome, cpf, refeicao, id) VALUES" (${$name, $cpf, $refeicao})`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      alert('Dados salvos!')
    });
  });

}


function excluirDados(e) {
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = `DELETE FROM  pessoa WHERE id = ${e}`
    con.query(sql, function (err, result) {
      if (err) throw err;
      alert('Dados salvos!')
    });
  });
}

function alterarDados(e, id) {
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = `UPDATE TABLE pessoa SET ${e} WHERE id=${id}`
    con.query(sql, function (err, result) {
      if (err) throw err;
      alert('Dados salvos!')
    });
  });
}


export function inserirDados();
export function excluirDados();
export function alterarDados();
export function selecionarDados();
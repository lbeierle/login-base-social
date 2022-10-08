function validacao() {

    var emailCerto = "aluno@basesocial.org";
    var senhaCerta = "base@2022";


    if (document.getElementById("email").value === emailCerto && document.getElementById("senha").value === senhaCerta) {
        alert("Você entrou");
    } else {
        alert("E-mail e/ou Senha incorretos");
    }
}
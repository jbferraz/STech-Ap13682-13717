/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function mascaraTel(i) {
    const tel = i.value;
    /*verifica se não é número*/
    if (isNaN(tel[tel.length - 1])) {
        i.value = tel.substring(0, tel.length - 1);
        return;
    }

    i.setAttribute("maxlength", "16");

    /*inclui mascara do telefone*/
    if (tel.length == 1) {
        i.value = "(" + i.value;
    }
    if (tel.length == 3) {
        i.value = i.value + ") ";
    }
    if (tel.length == 6) {
        i.value = i.value + " ";
    }
    if (tel.length == 11) {
        i.value = i.value + "-";
    }
}//fim mascaraTel

function mascaraCPF(i) {

}

function mascaraCNPJ(i) {

}

function validar() {
    //var local = imputs do form
    var nome = formUser.nome.value;
    var email = formUser.email.value;
    var tel = formUser.fone.value;
    var end = formUser.end.value;
    var cpf = formUser.cpf.value;
    var cnpj = formUser.cnpj.value;
    var senha = formUser.senha.value;
    var confSenha = formUser.confSenha.value;

    if (nome == "" || nome.length <= 3) {
        alert("Informe o nome completo!");
        formUser.nome.focus();//name do imput do form
        return false;
    }

    if (email == "" || email.length <= 10) {
        alert("Informe o e-mail correto!");
        formUser.email.focus();
        return false;
    }

    if (tel == "" || tel.length <= 15) {
        alert("Informe o celular correto!");
        formUser.fone.focus();
        return false;
    }

    if (end == "" || end.length <= 10) {
        alert("Informe o endereço completo!");
        formUser.end.focus();
        return false;
    }

    if (cpf == "" && cnpj == "") {
        alert("Selecione um documento!");
        return false;
    }

    if (cpf != "" && cnpj == "") {
        if (cpf.length != 14) {
            alert("CPF incorreto!");
            formUser.cpf.focus();
            return false;
        }
    }

    if (cnpj != "" && cpf == "") {
        if (cnpj.length != 18) {
            alert("CNPJ incorreto!");
            formUser.cnpj.focus();
            return false;
        }
    }

    if (senha == "" || senha.length < 8) {
        alert("Senha não atende aos requisitos!");
        formUser.senha.focus();
        return false;
    }

    if (senha != confSenha) {
        alert("Senhas não conferem!");
        formUser.senha.focus();
        return false;
    }

}
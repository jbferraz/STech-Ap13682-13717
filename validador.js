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
    var nome = formUser.nome.value;


    if (nome == "" || nome.length <= 3) {
        alert("Informe o nome completo!");
        formUser.nome.focus();
        return false;
    }
}
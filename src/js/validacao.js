var idade = document.getElementById("idade").value;
if(isNaN(idade) || idade < 0 || idade > 200){
    document.getElementById("erro").innerHTML = "Idade inválida, tente novamente.";
    return false;
}

var informacoes = document.getElementById("informacoes");
if(!informacoes.selectedIndex > 0){
    alert("O campo 'Deseja receber notícias pelo e-mail?' não foi preenchido.");
}

var email = document.getElementById("email").value;
if(email.indexOf("@") == -1 || email.indexOf(".") == -1){
    document.getElementById("erro_email").innerHTML = "E-mail inválido, tente novamente.";
    return false;
}

var telefone = document.getElementById("telefone").value;
var telefonecel = /^[0-9]{10}$/
if(!telefonecel.test(telefone)){
    document.getElementById("erro_telefone").innerHTML = "Número de telefone inválido."
    return false;
}
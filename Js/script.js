// Funçaõ Sair da Pagina de Login
var btnSair = $('#btn-sair');

btnSair.click(() => {

    setTimeout(() => {
        location.href = 'http://localhost/Projeto_Login/index.php'
    }, 3000)
})

btnSair.hover(() => {
    btnSair.css('box-shadow', '0px 0px 20px black').css('transition', '0.5s');
}, function () {
    btnSair.css('box-shadow', '0px 0px 0px')
})


// validação Formulario JS

var nome = $('#nome');
var email = $('#email');
var senha = $('#senha');
var label = $('.form label');
var btnForm = $('#btn-form');

btnForm.click((e) => {
    var nomeVal = nome.val();
    var emailVal = email.val();
    var senhaVal = senha.val();
    if (nomeVal == '' || emailVal == '' || senhaVal == '') {

        nome.css('border', '1px solid red');
        email.css('border', '1px solid red');
        senha.css('border', '1px solid red');
        label.html('Error').css('color', 'red');
        nome.val('');
        email.val('');
        senha.val('');

        setTimeout(() => {
            nome.css('border', '1px solid #ccc');
            email.css('border', '1px solid #ccc');
            senha.css('border', '1px solid #ccc');
            label.html('Faça Seu Login').css('color', '#000')
        }, 2000)
    } else {
        nome.css('border', '1px solid green');
        email.css('border', '1px solid green');
        senha.css('border', '1px solid green');
        label.html('Sucess').css('color', 'green');
    }

})

btnForm.hover(()=>{
    btnForm.css('box-shadow','0px 0px 20px black').css('transition','0.5s');
},function(){
    btnForm.css('box-shadow','0px 0px 0px').css('transition','0.3s');
})






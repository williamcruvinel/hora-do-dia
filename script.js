function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora}h.`
    if(hora >= 0 && hora < 12){
        img.src = 'img/dia.png'
        document.body.style.background = '#D2BF88'
    }else if(hora >= 12 && hora <= 18){
        img.src = 'img/tarde.png'
        document.body.style.background = '#E3834C'
    }else{
        img.src = 'img/noite.png'
        document.body.style.background = '#000D33'
    }
}








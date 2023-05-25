function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var horario = window.document.getElementById('horario')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    horario.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
    msg.innerHTML = ''
    if (hora >= 0 && hora < 12) {
        img.src = 'img/1.png'
        document.body.style.background = '#fdc994'
        msg.innerHTML += '<p><small>"Pode ser que um dia não mais existamos.<br> Mas, se ainda sobrar amizade,<br> nasceremos de novo um para o outro."<br>Desconhecido</small><br><strong>Bom Dia!</strong><p>'
    }else if (hora >= 12 && hora < 18) {
        img.src = 'img/2.png'
        document.body.style.background = '#346BAB'
        msg.innerHTML += '<p><small>"O poeta é um fingidor<br> Finge tão completamente<br> Que chega a fingir que é dor<br> A dor que deveras sente."<br>Fernando Pessoa</small><br> <strong>Boa Tarde!</strong><p>'
    }else {
        img.src = 'img/3.png'
        document.body.style.background = '#021011'
        msg.innerHTML += '<p><small>"E as estrelas ainda vão nos mostrar<br> Que o amor não é inviável<br> Num mundo inacreditável."<br>Cazuza</small><br> <strong>Boa Noite!</strong><p>'
    }
}
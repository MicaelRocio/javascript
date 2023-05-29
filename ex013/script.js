function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'img/CH.png')
            }else if (idade < 20) {
                img.setAttribute('src', 'img/AH.png')
            }else if (idade < 40) {
                img.setAttribute('src', 'img/H.png')
            }else if (idade < 60) {
                img.setAttribute('src', 'img/HM.png')
            }else {
                img.setAttribute('src', 'img/idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'img/CM.png')
            }else if (idade < 20) {
                img.setAttribute('src', 'img/AM.png')
            }else if (idade < 40) {
                img.setAttribute('src', 'img/M.png')
            }else if (idade < 60) {
                img.setAttribute('src', 'img/MM.png')
            }else {
                img.setAttribute('src', 'img/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
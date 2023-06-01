function calcular() {
    var inicio = document.getElementById('intxt')
    var fim = document.getElementById('fimtxt')
    var passo = document.getElementById('passtxt')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Faltam dados!')
    }else {
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f){
          for(let c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} \u{1F449}`
            }
            
        } else {
            for(let c = 1; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
            
        }
       res.innerHTML += `\u{1f3c1}`
    }
}

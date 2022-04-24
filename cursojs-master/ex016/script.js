function contar() {

  let ini = window.document.getElementById('ini')
  let fim = window.document.getElementById('fim')
  let passo = window.document.getElementById('pas')
  let res = window.document.getElementById('res')

  if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    window.alert('[ERRO] faltam dados!')
    res.innerHTML = 'impossivel contar !'
  } else {
    res.innerHTML = 'contando: <br>'
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if (p <= 0){
      window.alert ('Passo inválido! considerando PASSO 1')
      p = 1
    }
    if (i < f) {
          //contagem crescente
      for (let c = i; c <= f; c += p) {
        res.innerHTML += ` ${c} \u{1f449}`
      }
    } else {
          //contagem regressiva
      for(let c = i; c >= f; c -= p) {
          res.innerHTML += `${c} \u{1f449}`

      }
    }
    res.innerHTML += `\u{1f3c1}`
  }
  
}
  

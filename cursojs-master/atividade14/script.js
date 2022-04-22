function carregar() {
  var msg = window.document.getElementById ('msg')
  var img = window.document.getElementById ('imagem')
  var data = new Date()
  var hora = 10
 // var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas.` 
  if (hora >= 0 && hora < 12) {
       //Bom Dia!
       img.src = 'fotomanha.png'
       document.body.style.color = 'green'
       document.body.style.background = 'yellow'
  } else if (hora >= 12 && hora < 18) {
       //Boa Tarde!
       img.src = 'fototarde.png'
       document.body.style.background = 'red'
  } else {
       //boa noite!
      img.src = 'fotonoite.png'
      document.body.style.background ='black'
      document.body.style.color = 'red'
  }
}

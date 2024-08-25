function mudarVideo(idVideo) {
    let novoVideo = "https://www.youtube.com/embed/" + idVideo + "?si=9FpHQIq0M-5SwIYu"
    let iframe = document.getElementById("player")
    let idVideoAntigo = iframe.src.slice(30,41)
    let botao = document.getElementById(idVideo+"_b")
    let imagem = document.getElementById(idVideo+"_i")
    let novo_onclick = "mudarVideo('" + idVideoAntigo + "')"

    botao.id = idVideoAntigo+"_b"
    botao.setAttribute('onclick',novo_onclick)
    imagem.id = idVideoAntigo+"_i"
    imagem.src = "https://img.youtube.com/vi/" + idVideoAntigo + "/maxresdefault.jpg"

    iframe.src = novoVideo
}
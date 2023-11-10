
const tela = document.getElementById('tela')
const dialogo = document.getElementById('dialogo')
const input = document.getElementById('input')
const enviar = document.getElementById('enviar')
const avançar = document.getElementById('avançar')
const voltar = document.getElementById('voltar')
const audio1 = document.getElementById('audio1')
const audio2 = document.getElementById('audio2')
const audio3 = document.getElementById('audio3')
const audio4 = document.getElementById('audio4')

let prepr = 0
let part1 = 0
let part2 = 0
let part3 = 0
let part4 = 0
let part5 = 0
let playerName;
let classe
let subClasse
let player = {}
let skill4Amount
let skill1 = {}
let skill2 = {}
let skill3 = {}
let skill4 = {}
let baseDamage
let baseHp
let baseDefense
let baseSkillAmount

let keys = []

if (part1 == 0) {
    dialogo.innerHTML = ' <p class="dialogoComum">Instruções:<br><br>Enter- Confirmar <br>Space- Avançar<br>ArrowLeft- Trocar de skill<br><br>Obss: Você pode digitar a opção escolhida sem precisar clicar no formulário.</p>'
    voltar.style.visibility = 'hidden'
    enviar.style.visibility = 'hidden'
    input.style.visibility = 'hidden'
    avançar.style.visibility = 'visible'
}







document.addEventListener('keydown', function (ev) {
    ev.preventDefault()

    if (ev.key === "Backspace") {
        input.value = input.value.slice(0, -1)
    }
    if (ev.code === "Enter") {
        enviar.click()
    }
    if (ev.code === "Space") {

        avançar.click()
    }
    if (ev.key === "ArrowLeft") {

        voltar.click()
    }

    if (keys.includes(ev.key)) {
        input.value += ev.key
        return
    }
})







avançar.addEventListener('click', parte1)
function setName() {
    if (input.value.length > 0) {
        playerName = `<span class="name">${input.value}</span>`
        avançar.addEventListener('click', parte1)
        avançar.style.visibility = 'visible'
        dialogo.innerHTML = ` <p class="dialogoComum"><a>Você:<br><br>Meu nome é ${playerName}!</a></p>`
    } else {
        dialogo.innerHTML = ' <p class="dialogoComum"><a>Guarda:<br><br>Você precisa colocar um nome...</a></p>'

    }
}
function setSubClass() {
    subClasse = input.value
    switch (classe) {
        case '1':

            if (subClasse == '1') {
                avançar.addEventListener('click', parte1)
                avançar.style.visibility = 'visible'
                dialogo.innerHTML = `<p class="dialogoComum">Guarda:<br><br> Certo, então pegue esta arma...<br><br>Você Recebeu uma LongSword !</p>`

                baseDamage = 200
                baseHp = 450
                baseDefense = 7
                player = { class: `<span class="className">Cavaleiro dizimador</span>`, arma: `<span class="arma">LongSword</span>`, dano: 200, hp: 450, defesa: 10 }
                skill4Amount = 3
                baseSkillAmount = 3
                skill1 = {
                    nome: 'Corte transversal', totalDan: Math.round(player.dano + (player.dano * 35) / 100), dano: function (lb) {
                        let total = (this.totalDan - lb.defesa)
                        lb.hp -= total

                    }, area: false, des: `Corta o inimigo com sua espada causando <span class="dano">+35%</span> de dano.`,

                    posSkill: function () {
                        return `${playerName} usou ${this.nome} !`
                    }
                }
                skill2 = {
                    nome: 'Ataque esgrima', totalDan: Math.round(player.dano + (player.dano * 25) / 100), dano: function (lb) {
                        let total = (this.totalDan - lb.defesa)
                        lb.hp -= total
                        lb.defesa -= 5
                    }, area: false, des: `Perfura o inimigo com a ponta de sua espada, diminuindo 5 de defesa e causando <span class="dano">+25%</span> de dano.`,
                    posSkill: function () {
                        return `${playerName} usou ${this.nome} !`
                    }
                }
                skill3 = {
                    nome: 'Meia lua', totalDan: Math.round(player.dano + (player.dano * 20) / 100), dano: function (lb) {
                        let total = (this.totalDan - lb.defesa)
                        lb.hp -= total
                    }, area: true, des: `Lança vários projéteis com formato de meia Lua em multiplos inimigos, causando <span class="dano">+20%</span> de dano.`,
                    posSkill: function () {
                        return `${playerName} usou ${this.nome} !`
                    }
                }
                skill4 = {

                    nome: 'Mega meia lua', totalDan: Math.round(player.dano + (player.dano * 60) / 100), dano: function (lb) {
                        let total = (this.totalDan - lb.defesa)
                        lb.hp -= total
                    }, area: true, des: `Lança de sua espada um grande projétil com formato de meia-lua, causando <span class="dano">+60%</span> de dano.`,
                    posSkill: function () {
                        return `${playerName} usou a ultimate ${this.nome} !`
                    }
                }
            } else if (subClasse == '2') {
                avançar.addEventListener('click', parte1)
                avançar.style.visibility = 'visible'
                dialogo.innerHTML = `<p class="dialogoComum">Guarda:<br><br> Certo, então pegue esta arma...<br><br>Você Recebeu uma SwordShild !</p>`
                baseDamage = 120
                baseHp = 650
                baseDefense = 10
                player = { class: `<span class="className">Cavaleiro templário</span>`, arma: `<span class="arma">SwordShild</span>`, dano: 120, hp: 650, defesa: 30 }
                skill4Amount = 4
                baseSkillAmount = 4
                skill1 = {
                    nome: 'Corte lateral', totalDan: Math.round(player.dano + (player.dano * 18) / 100), dano: function (lb) {
                        let total = (this.totalDan - lb.defesa)
                        lb.hp -= total
                    }, area: false, des: 'Corta o inimigo com sua espada, causando <span class="dano">+18%</span> de dano.',
                    posSkill: function () {
                        return `${playerName} usou ${this.nome} !`
                    }
                }
                skill2 = {
                    nome: 'Ataque de escudo', totalDan: Math.round(player.dano + (player.dano * 13) / 100), dano: function (lb) {
                        let total = (this.totalDan - lb.defesa)
                        lb.hp -= total
                        player.defesa += 1
                    }, area: false, des: 'Golpeia o inimigo com seu escudo, aumentando também 1 de defesa e causando <span class="dano">+13%</span> de dano.',
                    posSkill: function () {
                        return `${playerName} usou ${this.nome} !`
                    }
                }
                skill3 = {
                    nome: 'Fissura', totalDan: Math.round(player.dano + (player.dano * 10) / 100), dano: function (lb) {
                        let total = ((this.totalDan - lb.defesa))
                        lb.hp -= total
                        lb.dano -= 1
                    }, area: true, des: 'Golpeia o solo com sua espada, assim abrindo buracos no solo, destabilizando os inimigos, os fazendo perder 1 de ataque e causando <span class="dano">+10%</span> de dano.',
                    posSkill: function () {
                        return `${playerName} usou ${this.nome} !`
                    }
                }
                skill4 = {

                    nome: 'Take Jeruzalém!', totalDan: Math.round(player.dano + (player.dano * 30) / 100), dano: function (lb) {
                        let total = (this.totalDan - lb.defesa)
                        lb.hp -= total
                        player.defesa += 10

                    }, area: true, des: 'Se fortalece com um grito de guerra, atropela os inimigos a sua frente, aumentando 10 pontos de defesa e causando <span class="dano">+30%</span> de dano.',
                    posSkill: function () {
                        return `${playerName} usou ${this.nome} !`
                    }
                }
            }
            break
        case '2':

            if (subClasse == '1') {
                avançar.addEventListener('click', parte1)
                avançar.style.visibility = 'visible'
                dialogo.innerHTML = `<p class="dialogoComum">Guarda:<br><br> Certo, então pegue esta arma...<br><br>Você Recebeu um Livro mágico da destruição !</p>`
                baseDamage = 250
                baseHp = 260
                baseDefense = 0
                player = { class: `<span class="className">Mago destruidor</span>`, arma: `<span class="arma">Livro mágico da destruição</span>`, dano: 200, hp: 260, defesa: 1 }
                skill4Amount = 2
                baseSkillAmount = 2
                skill1 = {
                    nome: 'Lanças de raios', totalDan: Math.round(player.dano + (player.dano * 40) / 100), dano: function (lb) {
                        let total = (this.totalDan - lb.defesa)
                        lb.hp -= total
                    }, area: true, des: `Cria um conjunto de lanças construidas por raios, assim empalando e eletrocutando os inimigos, causando <span class="dano">+40%</span> de dano.`,
                    posSkill: function () {
                        return `${playerName} usou ${this.nome} !`
                    }
                }
                skill2 = {
                    nome: 'Bola de fogo comprimida', totalDan: Math.round(player.dano + (player.dano * 40) / 100), dano: function (lb) {
                        let total = (this.totalDan - lb.defesa)
                        lb.hp -= total
                    }, area: true, des: `Comprime magia de fogo no seu limite e depois a solta nos inmigos, causando uma explossão flamejante queimando os mesmos e causando <span class="dano">+40%</span> de dano.`,
                    posSkill: function () {
                        return `${playerName} usou ${this.nome} !`
                    }
                }
                skill3 = {
                    nome: 'Tornado cortante', totalDan: Math.round(player.dano + (player.dano * 40) / 100), dano: function (lb) {
                        let total = (this.totalDan - lb.defesa)
                        lb.hp -= total
                    }, area: true, des: `Conjura um tornado que vai varrendo os inimigos seja onde por onde passar, causando <span class="dano">+40%</span> de dano..`,
                    posSkill: function () {
                        return `${playerName} usou ${this.nome} !`
                    }
                }
                skill4 = {

                    nome: 'Chuva de meteoros', totalDan: Math.round(player.dano + (player.dano * 85) / 100), dano: function (lb) {
                        let total = (this.totalDan - lb.defesa)
                        lb.hp -= total
                    }, area: true, des: `Invoca uma série de meteoros mágicos, atingindo qualquer inimigo abaixo do céu, causando <span class="dano">+85%</span> de dano.`,
                    posSkill: function () {
                        return `${playerName} usou a ultimate ${this.nome} !`
                    }
                }
            } else if (subClasse == '2') {
                avançar.addEventListener('click', parte1)
                avançar.style.visibility = 'visible'
                dialogo.innerHTML = `<p class="dialogoComum">Guarda:<br><br> Certo, então pegue esta arma...<br><br>Você Recebeu um Livro mágico do controle !</p>`
                baseDamage = 150
                baseHp = 260
                baseDefense = 0
                player = { class: `<span class="className">Mago de controle</span>`, arma: `<span class="arma">Livro mágico do controle</span>`, dano: 150, hp: 260, defesa: 1 }
                skill4Amount = 2
                baseSkillAmount = 2
                skill1 = {
                    nome: 'Congelar', totalDan: Math.round(player.dano + (player.dano * 25) / 100), dano: function (lb) {
                        let total = ((this.totalDan - lb.defesa))
                        lb.hp -= total
                        if (lb.dano > 3) {
                            lb.dano -= 1
                        } else if (lb.dano <= 3) {
                            lb.dano -= 0
                        }

                    }, area: 'true', des: `Muda o clima do ambiente para o 0 absoluto,congela todos os inimigos em campo, E assim fazendo cada um perder 1 de ataque e causando <span class="dano">+25%</span> de dano.`, posSkill: function () {
                        return `${playerName} usou ${this.nome} !`
                    }
                }
                skill2 = {
                    nome: 'Maré', totalDan: Math.round(player.dano + (player.dano * 25) / 100), dano: function (lb) {
                        let total = (this.totalDan - lb.defesa)
                        lb.hp -= total
                        lb.defesa -= 2
                    }, area: false, des: 'Provoca uma maré com fortes correntes de água, causando dano e fazendo os inimigos perderem 2 de defesa e causando <span class="dano">+25%</span> de dano.', posSkill: function () {
                        return `${playerName} usou ${this.nome} !`
                    }
                }
                skill3 = {
                    nome: 'Terremoto', totalDan: Math.round(player.dano + (player.dano * 35) / 100), dano: function (lb) {
                        let total = (this.totalDan - lb.defesa)
                        lb.hp -= total
                    }, area: true, des: 'Manipula as placas tectonicas, fazendo as mesmas provocarem um terremoto e causando <span class="dano">+33%</span> de dano.', posSkill: function () {
                        return `${playerName} usou ${this.nome} !`
                    }
                }
                skill4 = {

                    nome: 'Monte do gelo mágico', totalDan: Math.round(player.dano + (player.dano * 50) / 100), dano: function (lb) {
                        let total = (this.totalDan - lb.defesa)
                        lb.hp -= total
                        lb.dano -= 5

                        if (lb == fenrir) {
                            player.defesa += 5
                        } else if (lb == lobo1) {
                            player.defesa += 0.5
                        }

                    }, area: true, des: 'Conjura um enorme monte de gelo de baixo dos inimigos, diminuindo 4 de dano dos adversários, aumentando 5 da própria defesa e causando <span class="dano">+50%</span> de dano.', posSkill: function () {
                        return `${playerName} usou a ultimate ${this.nome} !`
                    }
                }
            }
            break
        case '3':

            if (subClasse == '1') {
                avançar.addEventListener('click', parte1)
                avançar.style.visibility = 'visible'
                dialogo.innerHTML = `<p class="dialogoComum">Guarda:<br><br> Certo, então pegue esta arma...<br><br>Você Recebeu uma Katana Ninja!</p>`
                baseDamage = 200
                baseHp = 350
                baseDefense = 5
                player = { class: `<span class="className">Assasino ninja</span>`, arma: `<span class="arma">Katana Ninja</span>`, dano: 200, hp: 350, defesa: 5 }

                skill4Amount = 4
                baseSkillAmount = 4
                skill1 = {
                    nome: 'konoha senpuu', totalDan: Math.round(player.dano + (player.dano * 50) / 100), dano: function (lb) {
                        lb.hp -= ((this.totalDan - lb.defesa))
                    }, area: false, des: `Golpea o inimigo com aquela clássica voadora do Rock Lee, causando <span class="dano">+50%</span> de dano.`, posSkill: function () {
                        return `${playerName} usou ${this.nome} !`
                    }
                }


                skill2 = {
                    nome: 'Corte das sombras', totalDan: Math.round(player.dano + (player.dano * 60) / 100), dano: function (lb) {
                        lb.hp -= ((this.totalDan - lb.defesa))
                    }, area: false, des: `Usa um jutsu para cegar o inimigo temporariamente, depois executa um corte rápido e preciso onde ele menos espera, causando <span class="dano">+60%</span> de dano.`, posSkill: function () {
                        return `${playerName} usou ${this.nome} !`
                    }
                }


                skill3 = {
                    nome: 'Shurikens', totalDan: Math.round(player.dano + (player.dano * 40) / 100), dano: function (lb) {
                        lb.hp -= ((this.totalDan - lb.defesa))
                    }, area: true, des: `Lança shurikens nos inimigos, causando <span class="dano">+40%</span> de dano.`, posSkill: function () {
                        return `${playerName} usou ${this.nome} !`
                    }
                }


                skill4 = {

                    nome: 'Assasinato silencioso', totalDan: Math.round(player.dano + (player.dano * 150) / 100), dano: function (lb) {
                        lb.hp -= ((this.totalDan - lb.defesa))

                    }, area: false, des: 'Cria uma área em que o tempo passa mais devagar para inimigo, além do mesmo não poder ouvir ou enchergar nada, e assim acertando todos os pontos vitais do inimigo, causando <span class="dano">+150%</span> de dano.', posSkill: function () {
                        return `${playerName} usou a ultimate ${this.nome} !`
                    }
                }
            } else if (subClasse == '2') {
                avançar.addEventListener('click', parte1)
                avançar.style.visibility = 'visible'
                dialogo.innerHTML = `<p class="dialogoComum">Guarda:<br><br> Certo, então pegue esta arma...<br><br>Você Recebeu as Adagas vampíricas !</p>`
                baseDamage = 150
                baseHp = 350
                baseDefense = 5
                player = { class: `<span class="className">Assasino ladrão</span>`, arma: `<span class="arma">Adagas vampíricas</span>`, dano: 150, hp: 350, defesa: 5 }

                skill4Amount = 2
                baseSkillAmount = 2
                skill1 = {
                    nome: 'Rasteira', totalDan: Math.round(player.dano + (player.dano * 25) / 100), dano: function (lb) {
                        let total = (this.totalDan - lb.defesa)
                        lb.hp -= total
                        lb.dano -= 1
                    }, area: false, des: `Da uma rasteira no inimigo o destabilizando, fazendo-o perder 1 de dano e  causando <span class="dano">+25%</span> de dano.`, posSkill: function () {
                        return `${playerName} usou ${this.nome} !`
                    }
                }
                skill2 = {
                    nome: 'Golpe sujo', totalDan: Math.round(player.dano + (player.dano * 35) / 100), dano: function (lb) {
                        let total = (this.totalDan - lb.defesa)
                        lb.hp -= total
                    }, area: false, des: `Cria ilusões para distrair o inmigo, assim o atacando pelas costas com suas adagas, causando <span class="dano">+35%</span> de dano. .`, posSkill: function () {
                        return `${playerName} usou ${this.nome} !`
                    }
                }
                skill3 = {
                    nome: 'Furto de vitalidade', totalDan: Math.round(player.dano + (player.dano * 25) / 100), dano: function (lb) {
                        let total = (this.totalDan - lb.defesa)
                        lb.hp -= total
                        player.hp += Math.round(((baseHp * 5) / 100) + ((total * 2) / 100))
                    }, area: true, des: `Golpeia os inimigos com suas adagas vampíricas, causando <span class="dano">+25%</span> de dano e drenando 5% da sua vida máxima + 2% do dano total causado a cada inimigo.  `, posSkill: function () {
                        return `${playerName} usou ${this.nome} !`
                    }
                }
                skill4 = {

                    nome: 'Drácula', totalDan: Math.round(player.dano + (player.dano * 80) / 100), dano: function (lb) {
                        let total
                        if (lb.dano == 0) {
                            total = 0
                        } else if (lb.dano > 1) {
                            total = (this.totalDan - lb.defesa)
                        }

                        lb.hp -= total
                        player.hp += Math.round(((baseHp * 20) / 100) + ((total * 10) / 100))

                    }, area: false, des: 'Marca o inimigo ao desferir um golpe, e então a marca começa a drenar vitalidade do mesmo,causando <span class="dano">+80%</span> de dano, além retornando 20% de sua vida máxima + 10% do dano causado !', posSkill: function () {
                        return `${playerName} usou a ultimate ${this.nome} !`
                    }
                }
            }
            break
    }

}
function setClass() {
    classe = input.value
    if (classe == '1') {
        avançar.addEventListener('click', parte1)
        dialogo.innerHTML = `<p class="dialogoComum">Guarda:<br><br>Entendi, então você é um Cavaleiro !</p>`
        avançar.style.visibility = 'visible'

    } else if (classe == '2') {
        avançar.addEventListener('click', parte1)
        dialogo.innerHTML = `<p class="dialogoComum">Guarda do coliseu:<br><br>Entendi, então você é um Mago !</p>`
        avançar.style.visibility = 'visible'

    } else if (classe == '3') {
        avançar.addEventListener('click', parte1)

        dialogo.innerHTML = `<p class="dialogoComum">Guarda do coliseu:<br><br>Entendi, então você é um Assasino !</p>`
        avançar.style.visibility = 'visible'

    }
}
function parte1() {
    setTimeout(() => {
        part1++
        switch (part1) {
            case 1:

                dialogo.innerHTML = '<p class="dialogoComum"><br><br>Esta é a história de um guerreiro, que buscava libertar sua família capturada por um exército nórdico após a invasão do mesmo em sua terra natal, para isso ele teria que participar de um torneio na qual o vencedor ganharia o direito de libertar os prisioneiros......</p>'



                audio1.play()
                break
            case 2:

                dialogo.innerHTML = ' <p class="dialogoComum"><br><br>Este caminhava rumo ao seu objetivo, o frio era alarmante por se tratar do inverno nórdico, frio este que não o afetava, pois seu coração determinado o aquecia!</p>'

                break
            case 3:

                dialogo.innerHTML = ' <p class="dialogoComum"><br><br>Chegado o fim da tarde, o crepúsculo se forma rente aos céus..<br>E o sol se assemelhava a um guarda em seu fim de turno, rumo a seu repouso após a chegada do seu tão aguardado fim de expediente.<br><br>Falando em guardas...<br>Um se encontra logo a frente, guardando as portas do nosso destino....</p>'

                break
            case 4:

                avançar.style.visibility = 'hidden'

                dialogo.innerHTML = ' <p class="dialogoComum"><br><br>!!!</p>'
                tela.innerHTML = '<img src="imagens/guarda.webp" alt="">'
                avançar.style.visibility = 'visible'



                break
            case 5:

                dialogo.innerHTML = '<p class="dialogoComum">Guarda:<br><br> Saudações guerreiro! Por favor, informe seu nome para poder passar, sem ele você não poderá participar do torneio.</p>'
                keys = ['q', 'Q', 'w', 'W', 'e', 'E', 'r', 'R', 't', 'T', 'u', 'U', 'i', 'I', 'o', 'O', 'p', 'P', '´', 'a', 'A', 's', 'S', 'd', 'D', 'f', 'F', 'g', 'G', 'h', 'H', 'j', 'J', 'k', 'K', 'l', 'L', 'ç', 'Ç', 'z', 'Z', 'x', 'X', 'c', 'C', 'v', 'V', 'b', 'B', 'n', 'N', 'm', 'M', ',', '.', ';', '?', '/', '`', '"', '}', '{', '[', ']', '(', ')', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '_', '!', '#', '$', '%', '¨', '&', '|']
                enviar.style.visibility = 'visible'
                input.style.visibility = 'visible'
                avançar.style.visibility = 'hidden'



                avançar.removeEventListener('click', parte1)
                enviar.addEventListener('click', setName)
                break
            case 6:

                dialogo.innerHTML = `<p class="dialogoComum"><a>Guarda:<br> <br>...<br>'${playerName}'.....<br>Este nome não me é estranho .......</a></p>`
                input.value = ''

                enviar.style.visibility = 'hidden'
                input.style.visibility = 'hidden'
                avançar.style.visibility = 'visible'

                enviar.removeEventListener('click', setName)


                break
            case 7:

                dialogo.innerHTML = `<p class="dialogoComum">Guarda:<br><br>Ouvi falar de uma profecia que.....</p>`


                break
            case 8:


                dialogo.innerHTML = `<p class="dialogoComum">Guarda: <br><br>Enfim, deve ser algo da minha cabeça...</p>`

                break
            case 9:


                dialogo.innerHTML = '<p class="dialogoComum">Guarda: <br><br>Agora me responda, qual destas 3 armas você sabe usar:<br><br>1-Espada "Para Cavaleiros"<br>2-Livro mágico "Para Magos"<br>3-Adagas "Para Assasinos"</p>'
                enviar.style.visibility = 'visible'
                input.style.visibility = 'visible'
                avançar.style.visibility = 'hidden'
                keys = ['1', '2', '3']
                input.value = ''



                avançar.removeEventListener('click', parte1)
                enviar.addEventListener('click', setClass)
                break
            case 10:


                if (classe == '1') {
                    dialogo.innerHTML = '<p class="dialogoComum">Guarda: <br><br>Que tipo de cavaleiro você é?<br><br>1- Cavaleiro dizimador<br>2- Cavaleiro templário</p>'
                } else if (classe == '2') {
                    dialogo.innerHTML = '<p class="dialogoComum">Guarda: <br><br>Que tipo de mago você é?<br><br>1- Mago da destruição<br>2- Mago de controle</p>'
                } else if (classe == '3') {
                    dialogo.innerHTML = '<p class="dialogoComum">Guarda: <br><br>Que tipo de assasino você é?<br><br>1- Assasino ninja<br>2- Assasino ladrão</p>'
                }
                enviar.style.visibility = 'visible'
                input.style.visibility = 'visible'
                avançar.style.visibility = 'hidden'
                keys = ['1', '2']
                input.value = ''


                avançar.removeEventListener('click', parte1)
                enviar.removeEventListener('click', setClass)
                enviar.addEventListener('click', setSubClass)



                break
            case 11:

                dialogo.innerHTML = '<p class="dialogoComum"> Guarda:<br><br>Pronto, agora você tem o suficiente</p>'
                enviar.style.visibility = 'hidden'
                input.style.visibility = 'hidden'
                avançar.style.visibility = 'visible'

                enviar.removeEventListener('click', setSubClass)


                break
            case 12:


                dialogo.innerHTML = '<p class="dialogoComum"> Guarda:<br><br>Vá até aquela fogueira e repouse guerreiro, para amanhã estar pronto para sua primeira batalha...</p>'

                break
            default:

                tela.innerHTML = ''
                dialogo.innerHTML = '<p>.................</p>'
                avançar.removeEventListener('click', parte1)
                avançar.addEventListener('click', preparo)
                break
        }
    }, 700)




}

let opçao


function sleep() {
    setTimeout(() => {
        dialogo.innerHTML = '<p>' + playerName + ':' + '<br><br>Zzzzzzzzzzzzzzzzzzzz.....</p>'
    })
    setTimeout(() => {
        dialogo.innerHTML = '<p>' + playerName + ':' + '"Acorda ........."<br><br>' + '"Bocejo ........."</p>'
    }, 1200)
    setTimeout(() => {
        dialogo.innerHTML = '<p>Energias restauradas !</p>'
        enviar.style.visibility = 'hidden'
        input.style.visibility = 'hidden'
        avançar.style.visibility = 'visible'
        avançar.addEventListener('click', preparo)
        prepr = 0
        clearInterval(sleep)
        player.dano = baseDamage
        player.hp = baseHp
        player.defesa = baseDefense
        skill4Amount = baseSkillAmount
        part2 = 0
        part5 = 0
    }, 2200)
}

function choseOption() {

    opçao = input.value
    if (opçao == '1') {
        avançar.addEventListener('click', preparo)
        prepr = 0
        dialogo.innerHTML = `<p class="info"><a>Nome:${playerName}</a><a>Classe/Subclasse:${player.class}</a> <a>Arma:${player.arma}</span></a><a>Hp:<span class="vivo">${player.hp}</span></a><a>Dano:<span class="dano">${player.dano}</span></a><a>Defesa:<span class="def">${player.defesa}</span></a></p>`
        enviar.style.visibility = 'hidden'
        input.style.visibility = 'hidden'
        avançar.style.visibility = 'visible'
    } else if (opçao == '2') {
        avançar.addEventListener('click', preparo)
        prepr = 0
        dialogo.innerHTML = `<p class="skills"><a>1 ${skill1.nome} : ${skill1.des}danototal: ${skill1.totalDan}</a> <a>2 ${skill2.nome} : ${skill2.des} danototal: ${skill2.totalDan}</a><a>3 ${skill3.nome} : ${skill3.des} danototal: ${skill3.totalDan}</a><a>4 ${skill4.nome} : ${skill4.des} danototal: ${skill4.totalDan} quantidade: ${skill4Amount}</a></p>`
        enviar.style.visibility = 'hidden'
        input.style.visibility = 'hidden'
        avançar.style.visibility = 'visible'

    } else if (opçao == '3') {
        setTimeout(sleep, 1000)
        enviar.removeEventListener('click', choseOption)
        avançar.addEventListener('click', preparo)
        input.value = ''
    } else if (opçao == '4') {
        enviar.style.visibility = 'hidden'
        input.style.visibility = 'hidden'
        avançar.style.visibility = 'visible'
        if (player.hp == baseHp) {
            enviar.removeEventListener('click', choseOption)
            dialogo.innerHTML = '<p>Vamos para a batalha !</p>'
            avançar.removeEventListener('click', preparo)
            avançar.addEventListener('click', parte2)
        } else if (player.hp != baseHp) {
            dialogo.innerHTML = '<p>Você ainda está fraco por conta da ultima batalha, descanse um pouco para prosseguir...</p>'
            avançar.addEventListener('click', preparo)
            prepr = 0

        }
    }
}

function preparo() {
    input.value = ''
    setTimeout(() => {
        prepr++


        switch (prepr) {
            case 1:
                keys = ['1', '2', '3', '4']
                audio1.pause()
                audio3.pause()
                audio1.currentTime = 0
                audio3.currentTime = 0
                audio2.play()
                part2 = 0
                part3 = 0
                part4 = 0
                part5 = 0
                avançar.removeEventListener('click', preparo)
                enviar.style.visibility = 'visible'
                input.style.visibility = 'visible'
                avançar.style.visibility = 'hidden'

                tela.innerHTML = '<img src="imagens/fogueira.png" alt="">'
                dialogo.innerHTML = ' <p>Você está na fogueira do descanso !<br> Sente-se relaxe um pouco<br> E quando preparado, escolha sua próxima ação...<br><br><br>1- Detalhes do personagem<br><br>2- Detalhes das skills<br><br>3- Descançar<br><br>4- Ir para o campo de batalha</p>'
                enviar.addEventListener('click', choseOption)

                break

        }
    }, 700)

}

let skillEscolhida
let inimigoAtacado

function parte2() {
    setTimeout(() => {
        part2++
        switch (part2) {
            case 1:
                audio3.play()
                audio2.currentTime = 0
                audio2.pause()
                audio1.pause()
                input.value = ''
                tela.innerHTML = ''
                dialogo.innerHTML = '<p>..............</p>'
                break
            case 2:
                tela.innerHTML = '<img src="imagens/plateia.png">'
                dialogo.innerHTML = `<p class="dialogoComum"><a><br><br>Ao entrar no Torneio,${playerName} se depara com uma grande multidão, bradando em alta voz pelo o espetáculo que estava prestes a acontecer...</a></p>`
                break
            case 3:
                tela.innerHTML = '<img src="imagens/portas.png">'
                dialogo.innerHTML = '<p class="dialogoComum"><br><br>Até que....Do outro lado do coliseu, foram abertos 3 grandes portões...<br><br>Dos portões saiam em torno de 8 lobos<br><br> Mas não eram lobos comuns, eram lobos gigantes com garras de ferro !</p>'
                break
            default:
                tela.innerHTML = '<img src="imagens/lobos.png">'
                dialogo.innerHTML = '<p class="dialogoComum"><br><br>Eles te atacam !<br><br> Que comecem os jogos !</p>'
                avançar.removeEventListener('click', parte2)
                avançar.addEventListener('click', parte3)
                break
        }
    }, 700)

}


let lobo1 = {
    dano: 7, hp: 350, defesa: 0, dead: function () {
        this.dano = 0
        this.hp = `<span class="morto">0</span>`
    }
}
let lobo2 = {
    dano: 7, hp: 350, defesa: 0, dead: function () {
        this.dano = 0
        this.hp = `<span class="morto">0</span>`
    }
}
let lobo3 = {
    dano: 7, hp: 350, defesa: 0, dead: function () {
        this.dano = 0
        this.hp = `<span class="morto">0</span>`
    }
}
let lobo4 = {
    dano: 7, hp: 350, defesa: 0, dead: function () {
        this.dano = 0
        this.hp = `<span class="morto">0</span>`
    }
}
let lobo5 = {
    dano: 7, hp: 350, defesa: 0, dead: function () {
        this.dano = 0
        this.hp = `<span class="morto">0</span>`
    }
}
let lobo6 = {
    dano: 7, hp: 350, defesa: 0, dead: function () {
        this.dano = 0
        this.hp = `<span class="morto">0</span>`
    }
}
let lobo7 = {
    dano: 7, hp: 350, defesa: 0, dead: function () {
        this.dano = 0
        this.hp = `<span class="morto">0</span>`
    }
}
let lobo8 = {
    dano: 7, hp: 350, defesa: 0, dead: function () {
        this.dano = 0
        this.hp = `<span class="morto">0</span>`
    }
}




function turnDamage() {
    inimigoAtacado = input.value
    input.value = ''
    part3 = 0
    voltar.style.visibility = 'hidden'
    setTimeout(() => {
        if (classe == '1') {
            switch (inimigoAtacado) {
                case '1':
                    if (skillEscolhida == "1") {
                        skill1.dano(lobo1)
                        dialogo.innerHTML = `<p>${skill1.posSkill()} <br><br><br>Os lobos revidaram causando: ${lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'

                        avançar.addEventListener('click', parte3)
                    } else if (skillEscolhida == "2") {
                        skill2.dano(lobo1)
                        dialogo.innerHTML = `<p>${skill2.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    } else if (skillEscolhida == "3") {
                        skill3.dano(lobo1)
                        skill3.dano(lobo2)
                        dialogo.innerHTML = `<p>${skill3.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    } else if (skillEscolhida == "4") {
                        skill4.dano(lobo1)
                        skill4.dano(lobo2)
                        skill4.dano(lobo3)
                        skill4.dano(lobo4)
                        dialogo.innerHTML = `<p>${skill4.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    }
                    break
                case '2':

                    if (skillEscolhida == "1") {
                        enviar.removeEventListener('click', turnDamage)
                        skill1.dano(lobo2)
                        dialogo.innerHTML = `<p>${skill1.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    } else if (skillEscolhida == "2") {
                        enviar.removeEventListener('click', turnDamage)
                        skill2.dano(lobo2)
                        dialogo.innerHTML = `<p>${skill2.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    } else if (skillEscolhida == "3") {
                        enviar.removeEventListener('click', turnDamage)
                        skill3.dano(lobo3)
                        skill3.dano(lobo4)
                        dialogo.innerHTML = `<p>${skill3.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    } else if (skillEscolhida == "4") {
                        enviar.removeEventListener('click', turnDamage)
                        skill4.dano(lobo5)
                        skill4.dano(lobo6)
                        skill4.dano(lobo7)
                        skill4.dano(lobo8)
                        dialogo.innerHTML = `<p>${skill4.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    }
                    break
                case '3':

                    if (skillEscolhida == "1") {
                        enviar.removeEventListener('click', turnDamage)
                        skill1.dano(lobo3)
                        dialogo.innerHTML = `<p>${skill1.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    } else if (skillEscolhida == "2") {
                        enviar.removeEventListener('click', turnDamage)
                        skill2.dano(lobo3)
                        dialogo.innerHTML = `<p>${skill1.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    } else if (skillEscolhida == "3") {
                        enviar.removeEventListener('click', turnDamage)
                        skill3.dano(lobo5)
                        skill3.dano(lobo6)
                        dialogo.innerHTML = `<p>${skill3.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    }
                    break
                case '4':

                    if (skillEscolhida == "1") {
                        enviar.removeEventListener('click', turnDamage)
                        skill1.dano(lobo4)
                        dialogo.innerHTML = `<p>${skill1.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    } else if (skillEscolhida == "2") {
                        enviar.removeEventListener('click', turnDamage)
                        skill2.dano(lobo4)
                        dialogo.innerHTML = `<p>${skill2.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    } else if (skillEscolhida == "3") {
                        enviar.removeEventListener('click', turnDamage)
                        skill3.dano(lobo7)
                        skill3.dano(lobo8)
                        dialogo.innerHTML = `<p>${skill3.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    }
                    break
                case '5':

                    if (skillEscolhida == "1") {
                        enviar.removeEventListener('click', turnDamage)
                        skill1.dano(lobo5)
                        dialogo.innerHTML = `<p>${skill1.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    } else if (skillEscolhida == "2") {
                        enviar.removeEventListener('click', turnDamage)
                        skill2.dano(lobo6)
                        dialogo.innerHTML = `<p>${skill1.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    }
                    break
                case '6':

                    if (skillEscolhida == "1") {
                        skill1.dano(lobo6)
                        dialogo.innerHTML = `<p>${skill1.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    } else if (skillEscolhida == "2") {
                        skill2.dano(lobo6)
                        dialogo.innerHTML = `<p>${skill1.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    }
                    break
                case '7':

                    if (skillEscolhida == "1") {
                        skill1.dano(lobo7)
                        dialogo.innerHTML = `<p>${skill1.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    } else if (skillEscolhida == "2") {
                        skill2.dano(lobo7)
                        dialogo.innerHTML = `<p>${skill2.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    }
                    break
                case '8':


                    if (skillEscolhida == "1") {
                        skill1.dano(lobo8)
                        dialogo.innerHTML = `<p>${skill1.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)

                    } else if (skillEscolhida == "2") {

                        skill2.dano(lobo8)
                        dialogo.innerHTML = `<p>${skill2.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)

                    }
                    break
            }
        } else if (classe == '2') {
            switch (inimigoAtacado) {
                case '1':
                    if (skillEscolhida == "1") {
                        skill1.dano(lobo1)
                        skill1.dano(lobo2)
                        skill1.dano(lobo3)
                        skill1.dano(lobo4)
                        enviar.removeEventListener('click', turnDamage)
                        dialogo.innerHTML = `<p>${skill1.posSkill()} <br><br><br>Os lobos revidaram causando: ${lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    } else if (skillEscolhida == "2") {
                        skill2.dano(lobo1)
                        skill2.dano(lobo2)
                        skill2.dano(lobo3)
                        skill2.dano(lobo4)
                        lobo1.hp -= (player.dano + skill2.dano)
                        dialogo.innerHTML = `<p>${skill2.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    } else if (skillEscolhida == "3") {
                        skill3.dano(lobo1)
                        skill3.dano(lobo2)
                        skill3.dano(lobo3)
                        skill3.dano(lobo4)
                        enviar.removeEventListener('click', turnDamage)

                        dialogo.innerHTML = `<p>${skill3.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    } else if (skillEscolhida == "4") {
                        skill4.dano(lobo1)
                        skill4.dano(lobo2)
                        skill4.dano(lobo3)
                        skill4.dano(lobo4)
                        skill4.dano(lobo5)
                        skill4.dano(lobo6)
                        skill4.dano(lobo7)
                        skill4.dano(lobo8)
                        enviar.removeEventListener('click', turnDamage)
                        dialogo.innerHTML = `<p>${skill4.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    }
                    break
                case '2':

                    if (skillEscolhida == "1") {
                        enviar.removeEventListener('click', turnDamage)
                        skill1.dano(lobo5)
                        skill2.dano(lobo6)
                        skill3.dano(lobo7)
                        skill4.dano(lobo8)
                        dialogo.innerHTML = `<p>${skill1.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    } else if (skillEscolhida == "2") {
                        skill2.dano(lobo5)
                        skill2.dano(lobo6)
                        skill2.dano(lobo7)
                        skill2.dano(lobo8)
                        enviar.removeEventListener('click', turnDamage)
                        lobo2.hp -= (player.dano + skill2.dano)
                        dialogo.innerHTML = `<p>${skill2.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    } else if (skillEscolhida == "3") {
                        skill3.dano(lobo5)
                        skill3.dano(lobo6)
                        skill3.dano(lobo7)
                        skill3.dano(lobo8)
                        enviar.removeEventListener('click', turnDamage)

                        dialogo.innerHTML = `<p>${skill3.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    }
                    break
            }
        } else if (classe == '3') {
            switch (inimigoAtacado) {
                case '1':

                    if (skillEscolhida == "1") {
                        skill1.dano(lobo1)
                        dialogo.innerHTML = `<p>${skill1.posSkill()} <br><br><br>Os lobos revidaram causando: ${lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    } else if (skillEscolhida == "2") {
                        skill2.dano(lobo1)
                        dialogo.innerHTML = `<p>${skill2.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    } else if (skillEscolhida == "3") {
                        skill3.dano(lobo1)
                        skill3.dano(lobo2)

                        dialogo.innerHTML = `<p>${skill3.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    } else if (skillEscolhida == "4") {
                        skill4.dano(lobo1)
                        dialogo.innerHTML = `<p>${skill4.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    }
                    break
                case '2':

                    if (skillEscolhida == "1") {
                        enviar.removeEventListener('click', turnDamage)
                        skill1.dano(lobo2)
                        dialogo.innerHTML = `<p>${skill1.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    } else if (skillEscolhida == "2") {
                        enviar.removeEventListener('click', turnDamage)
                        skill2.dano(lobo2)
                        dialogo.innerHTML = `<p>${skill2.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    } else if (skillEscolhida == "3") {
                        enviar.removeEventListener('click', turnDamage)
                        skill3.dano(lobo3)
                        skill3.dano(lobo4)
                        dialogo.innerHTML = `<p>${skill3.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    } else if (skillEscolhida == "4") {
                        enviar.removeEventListener('click', turnDamage)
                        skill4.dano(lobo2)
                        dialogo.innerHTML = `<p>${skill4.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    }
                    break
                case '3':

                    if (skillEscolhida == "1") {
                        enviar.removeEventListener('click', turnDamage)
                        skill1.dano(lobo3)
                        dialogo.innerHTML = `<p>${skill1.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    } else if (skillEscolhida == "2") {
                        enviar.removeEventListener('click', turnDamage)
                        skill2.dano(lobo3)
                        dialogo.innerHTML = `<p>${skill1.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    } else if (skillEscolhida == "3") {
                        enviar.removeEventListener('click', turnDamage)
                        skill3.dano(lobo5)
                        skill3.dano(lobo6)
                        dialogo.innerHTML = `<p>${skill3.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    } else if (skillEscolhida == "4") {
                        enviar.removeEventListener('click', turnDamage)
                        skill4.dano(lobo3)
                        dialogo.innerHTML = `<p>${skill4.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    }
                    break
                case '4':

                    if (skillEscolhida == "1") {
                        enviar.removeEventListener('click', turnDamage)
                        skill1.dano(lobo4)
                        dialogo.innerHTML = `<p>${skill1.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    } else if (skillEscolhida == "2") {
                        enviar.removeEventListener('click', turnDamage)
                        skill2.dano(lobo4)
                        dialogo.innerHTML = `<p>${skill2.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    } else if (skillEscolhida == "3") {
                        enviar.removeEventListener('click', turnDamage)
                        skill3.dano(lobo7)
                        skill3.dano(lobo8)
                        dialogo.innerHTML = `<p>${skill3.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    } else if (skillEscolhida == "4") {
                        enviar.removeEventListener('click', turnDamage)
                        skill4.dano(lobo4)
                        dialogo.innerHTML = `<p>${skill4.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    }
                    break
                case '5':

                    if (skillEscolhida == "1") {
                        enviar.removeEventListener('click', turnDamage)
                        skill1.dano(lobo5)
                        dialogo.innerHTML = `<p>${skill1.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    } else if (skillEscolhida == "2") {
                        enviar.removeEventListener('click', turnDamage)
                        skill2.dano(lobo6)
                        dialogo.innerHTML = `<p>${skill1.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    } else if (skillEscolhida == "4") {
                        enviar.removeEventListener('click', turnDamage)
                        skill4.dano(lobo5)
                        dialogo.innerHTML = `<p>${skill4.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    }
                    break
                case '6':

                    if (skillEscolhida == "1") {
                        skill1.dano(lobo6)
                        dialogo.innerHTML = `<p>${skill1.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    } else if (skillEscolhida == "2") {
                        skill2.dano(lobo6)
                        dialogo.innerHTML = `<p>${skill1.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    } else if (skillEscolhida == "4") {
                        enviar.removeEventListener('click', turnDamage)
                        skill4.dano(lobo6)
                        dialogo.innerHTML = `<p>${skill4.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    }
                    break
                case '7':

                    if (skillEscolhida == "1") {
                        skill1.dano(lobo7)
                        dialogo.innerHTML = `<p>${skill1.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    } else if (skillEscolhida == "2") {
                        skill2.dano(lobo7)
                        dialogo.innerHTML = `<p>${skill2.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    } else if (skillEscolhida == "4") {
                        enviar.removeEventListener('click', turnDamage)
                        skill4.dano(lobo7)
                        dialogo.innerHTML = `<p>${skill4.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    }
                    break
                case '8':


                    if (skillEscolhida == "1") {
                        skill1.dano(lobo8)
                        dialogo.innerHTML = `<p>${skill1.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)

                    } else if (skillEscolhida == "2") {

                        skill2.dano(lobo8)
                        dialogo.innerHTML = `<p>${skill2.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)

                    } else if (skillEscolhida == "4") {
                        enviar.removeEventListener('click', turnDamage)
                        skill4.dano(lobo8)
                        dialogo.innerHTML = `<p>${skill4.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                        player.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - player.defesa
                        enviar.style.visibility = 'hidden'
                        input.style.visibility = 'hidden'
                        avançar.style.visibility = 'visible'
                        avançar.addEventListener('click', parte3)
                    }
                    break
            }
        }
    }, 500)


}
function atacarLobo() {
    skillEscolhida = input.value
    input.value = ''
    voltar.style.visibility = 'visible'
    voltar.addEventListener('click', parte3)
    part3 = 0
    switch (classe) {
        case '1':

            if (skillEscolhida == "1") {
                keys = ['1', '2', '3', '4', '5', '6', '7', '8']
                dialogo.innerHTML = `<p>Escolha o lobo que você quer atacar: <br><br><br> 1 Lobo1-<span>${lobo1.hp}</span> | 2 Lobo2-<span>${lobo2.hp}</span> | 3 Lobo3-<span>${lobo3.hp}</span> | 4 Lobo4-<span>${lobo4.hp}</span> | 5 Lobo5-<span>${lobo5.hp}</span> | 6 Lobo6-<span>${lobo6.hp}</span>  7 Lobo7-<span>${lobo7.hp}</span> | 8 Lobo8-<span>${lobo8.hp}</span><br><br>${playerName} HP: <span>${player.hp}</span></p>`
                enviar.removeEventListener('click', atacarLobo)
                enviar.addEventListener('click', turnDamage)
            } else if (skillEscolhida == "2") {
                keys = ['1', '2', '3', '4', '5', '6', '7', '8']
                dialogo.innerHTML = `<p>Escolha o lobo que você quer atacar: <br><br><br> 1 Lobo1-<span>${lobo1.hp}</span> | 2 Lobo2-<span>${lobo2.hp}</span> | 3 Lobo3-<span>${lobo3.hp}</span> | 4 Lobo4-<span>${lobo4.hp}</span> | 5 Lobo5-<span>${lobo5.hp}</span> | 6 Lobo6-<span>${lobo6.hp}</span>  7 Lobo7-<span>${lobo7.hp}</span> | 8 Lobo8-<span>${lobo8.hp}</span><br><br>${playerName} HP: <span>${player.hp}</span></p>`
                enviar.removeEventListener('click', atacarLobo)
                enviar.addEventListener('click', turnDamage)
            } else if (skillEscolhida == "3") {
                keys = ['1', '2', '3', '4']
                dialogo.innerHTML = `<p>Escolha a dupla de lobos que você quer atacar: <br><br><br>1 Lobo1-<span>${lobo1.hp}</span> |  Lobo2-<span>${lobo2.hp}</span><br>2 Lobo3-<span>${lobo3.hp}</span> | Lobo4-<span>${lobo4.hp}</span><br>3 Lobo5-<span>${lobo5.hp}</span> | Lobo6-<span>${lobo6.hp}</span><br>4 Lobo7-<span>${lobo7.hp}</span> | Lobo8-<span>${lobo8.hp}</span><br><br>${playerName} HP: <span>${player.hp}</span></p>`
                enviar.removeEventListener('click', atacarLobo)
                enviar.addEventListener('click', turnDamage)
            } else if (skillEscolhida == "4") {
                if (skill4Amount < 1) {
                    keys = []
                    dialogo.innerHTML = `<p>Você não pode mais usar esta skill!</p>`
                    enviar.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    avançar.style.visibility = 'visible'
                    avançar.addEventListener('click', parte3)
                    skillEscolhida = ''
                    enviar.removeEventListener('click', atacarLobo)
                    enviar.removeEventListener('click', turnDamage)
                    avançar.addEventListener('click', parte3)
                    part3 = 0
                } else if (skill4Amount >= 1) {
                    skill4Amount -= 1
                    keys = ['1', '2']
                    dialogo.innerHTML = `<p>Escolha a leva de lobos você quer atacar: <br><br><br>1 Lobo1-<span>${lobo1.hp}</span> | Lobo2-<span>${lobo2.hp}</span> | Lobo3-<span>${lobo3.hp}</span> | Lobo4-<span>${lobo4.hp}</span><br>2 Lobo5-<span>${lobo5.hp}</span> | Lobo6-<span>${lobo6.hp}</span> | Lobo7-<span>${lobo7.hp}</span> | Lobo8-<span>${lobo8.hp}</span><br><br>${playerName} HP: <span>${player.hp}</span></p>`
                    enviar.removeEventListener('click', atacarLobo)
                    enviar.addEventListener('click', turnDamage)
                }

            }

            break
        case '2':
            if (skillEscolhida == "1") {
                keys = ['1', '2']
                dialogo.innerHTML = `<p>Escolha a leva de lobos você quer atacar: <br><br><br>1 Lobo1-<span>${lobo1.hp}</span> | Lobo2-<span>${lobo2.hp}</span> | Lobo3-<span>${lobo3.hp}</span> | Lobo4-<span>${lobo4.hp}</span><br>2 Lobo5-<span>${lobo5.hp}</span> | Lobo6-<span>${lobo6.hp}</span> | Lobo7-<span>${lobo7.hp}</span> | Lobo8-<span>${lobo8.hp}</span><br><br>${playerName} HP: <span>${player.hp}</span></p>`
                enviar.removeEventListener('click', atacarLobo)
                enviar.addEventListener('click', turnDamage)
            } else if (skillEscolhida == "2") {
                keys = ['1', '2']
                dialogo.innerHTML = `<p>Escolha a leva de lobos você quer atacar: <br><br><br>1 Lobo1-<span>${lobo1.hp}</span> | Lobo2-<span>${lobo2.hp}</span> | Lobo3-<span>${lobo3.hp}</span> | Lobo4-<span>${lobo4.hp}</span><br>2 Lobo5-<span>${lobo5.hp}</span> | Lobo6-<span>${lobo6.hp}</span> | Lobo7-<span>${lobo7.hp}</span> | Lobo8-<span>${lobo8.hp}</span><br><br>${playerName} HP: <span>${player.hp}</span></p>`
                enviar.removeEventListener('click', atacarLobo)
                enviar.addEventListener('click', turnDamage)
            } else if (skillEscolhida == "3") {
                keys = ['1', '2']
                dialogo.innerHTML = `<p>Escolha a leva de lobos você quer atacar: <br><br><br>1 Lobo1-<span>${lobo1.hp}</span> | Lobo2-<span>${lobo2.hp}</span> | Lobo3-<span>${lobo3.hp}</span> | Lobo4-<span>${lobo4.hp}</span><br>2 Lobo5-<span>${lobo5.hp}</span> | Lobo6-<span>${lobo6.hp}</span> | Lobo7-<span>${lobo7.hp}</span> | Lobo8-<span>${lobo8.hp}</span><br><br>${playerName} HP: <span>${player.hp}</span></p>`
                enviar.removeEventListener('click', atacarLobo)
                enviar.addEventListener('click', turnDamage)
            } else if (skillEscolhida == "4") {
                if (skill4Amount < 1) {
                    keys = []
                    dialogo.innerHTML = `<p>Você não pode mais usar esta skill!</p>`
                    enviar.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    avançar.style.visibility = 'visible'
                    avançar.addEventListener('click', parte3)
                    skillEscolhida = ''
                    enviar.removeEventListener('click', atacarLobo)
                    enviar.removeEventListener('click', turnDamage)
                    part3 = 0
                } else if (skill4Amount >= 1) {
                    skill4Amount -= 1
                    keys = ['1']
                    dialogo.innerHTML = `<p>Ataque os lobos: <br><br><br>1 Lobo1-<span>${lobo1.hp}</span> | Lobo2-<span>${lobo2.hp}</span> | Lobo3-<span>${lobo3.hp}</span> | Lobo4-<span>${lobo4.hp}</span> Lobo5-<span>${lobo5.hp}</span> | Lobo6-<span>${lobo6.hp}</span> | Lobo7-<span>${lobo7.hp}</span> | Lobo8-<span>${lobo8.hp}</span></p>`
                    enviar.removeEventListener('click', atacarLobo)
                    enviar.addEventListener('click', turnDamage)
                }

            }

            break
        case '3':

            if (skillEscolhida == "1") {
                keys = ['1', '2', '3', '4', '5', '6', '7', '8']
                dialogo.innerHTML = `<p>Escolha o lobo que você quer atacar: <br><br><br> 1 Lobo1-<span>${lobo1.hp}</span> | 2 Lobo2-<span>${lobo2.hp}</span> | 3 Lobo3-<span>${lobo3.hp}</span> | 4 Lobo4-<span>${lobo4.hp}</span> | 5 Lobo5-<span>${lobo5.hp}</span> | 6 Lobo6-<span>${lobo6.hp}</span>  7 Lobo7-<span>${lobo7.hp}</span> | 8 Lobo8-<span>${lobo8.hp}</span><br><br>${playerName} HP: <span>${player.hp}</span></p>`
                enviar.removeEventListener('click', atacarLobo)
                enviar.addEventListener('click', turnDamage)
            } else if (skillEscolhida == "2") {
                keys = ['1', '2', '3', '4', '5', '6', '7', '8']
                dialogo.innerHTML = `<p>Escolha o lobo que você quer atacar: <br><br><br> 1 Lobo1-<span>${lobo1.hp}</span> | 2 Lobo2-<span>${lobo2.hp}</span> | 3 Lobo3-<span>${lobo3.hp}</span> | 4 Lobo4-<span>${lobo4.hp}</span> | 5 Lobo5-<span>${lobo5.hp}</span> | 6 Lobo6-<span>${lobo6.hp}</span>  7 Lobo7-<span>${lobo7.hp}</span> | 8 Lobo8-<span>${lobo8.hp}</span><br><br>${playerName} HP: <span>${player.hp}</span></p>`
                enviar.removeEventListener('click', atacarLobo)
                enviar.addEventListener('click', turnDamage)
            } else if (skillEscolhida == "3") {
                keys = ['1', '2', '3', '4']
                dialogo.innerHTML = `<p>Escolha a dupla de lobos que você quer atacar: <br><br><br>1 Lobo1-<span>${lobo1.hp}</span> |  Lobo2-<span>${lobo2.hp}</span><br>2 Lobo3-<span>${lobo3.hp}</span> | Lobo4-<span>${lobo4.hp}</span><br>3 Lobo5-<span>${lobo5.hp}</span> | Lobo6-<span>${lobo6.hp}</span><br>4 Lobo7-<span>${lobo7.hp}</span> | Lobo8-<span>${lobo8.hp}</span><br><br>${playerName} HP: <span>${player.hp}</span></p>`
                enviar.removeEventListener('click', atacarLobo)
                enviar.addEventListener('click', turnDamage)
            } else if (skillEscolhida == "4") {
                if (skill4Amount < 1) {
                    keys = []
                    dialogo.innerHTML = `<p>Você não pode mais usar esta skill!</p>`
                    enviar.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    avançar.style.visibility = 'visible'
                    avançar.addEventListener('click', parte3)
                    skillEscolhida = ''
                    enviar.removeEventListener('click', atacarLobo)
                    enviar.removeEventListener('click', turnDamage)
                    avançar.addEventListener('click', parte3)
                    part3 = 0
                } else if (skill4Amount >= 1) {
                    skill4Amount -= 1
                    keys = ['1', '2', '3', '4', '5', '6', '7', '8']
                    dialogo.innerHTML = `<p>Escolha o lobo que você quer atacar: <br><br><br> 1 Lobo1-<span>${lobo1.hp}</span> | 2 Lobo2-<span>${lobo2.hp}</span> | 3 Lobo3-<span>${lobo3.hp}</span> | 4 Lobo4-<span>${lobo4.hp}</span> | 5 Lobo5-<span>${lobo5.hp}</span> | 6 Lobo6-<span>${lobo6.hp}</span>  7 Lobo7-<span>${lobo7.hp}</span> | 8 Lobo8-<span>${lobo8.hp}</span><br><br>${playerName} HP: <span>${player.hp}</span></p>`
                    enviar.removeEventListener('click', atacarLobo)
                    enviar.addEventListener('click', turnDamage)
                }

            }

            break
    }

}

function inimigosMortos(enemy) {

    if (enemy.hp < 1 || enemy.dano < 1) {
        enemy.dead()
    }
}
function inimigosSemDefesa(enemy) {
    if (enemy.defesa < 1) {
        enemy.defesa = 0
    }

}
function parte3() {
    part3++
    input.value = ''

    switch (part3) {
        case 1:

            if (skill4Amount <= 0) {
                skill4Amount = 0
            }
            inimigosMortos(lobo1)
            inimigosMortos(lobo2)
            inimigosMortos(lobo3)
            inimigosMortos(lobo4)
            inimigosMortos(lobo5)
            inimigosMortos(lobo6)
            inimigosMortos(lobo7)
            inimigosMortos(lobo8)
            inimigosSemDefesa(lobo1)
            inimigosSemDefesa(lobo2)
            inimigosSemDefesa(lobo3)
            inimigosSemDefesa(lobo4)
            inimigosSemDefesa(lobo5)
            inimigosSemDefesa(lobo6)
            inimigosSemDefesa(lobo7)
            inimigosSemDefesa(lobo8)
            voltar.style.visibility = 'hidden'
            skillEscolhida = ''
            inimigoAtacado = ''
            voltar.removeEventListener('click', parte3)
            enviar.addEventListener('click', atacarLobo)
            enviar.removeEventListener('click', turnDamage)
            avançar.removeEventListener('click', parte3)
            batalha = 0
            enviar.style.visibility = 'visible'
            input.style.visibility = 'visible'
            avançar.style.visibility = 'hidden'
            voltar.style.visibility = 'hidden'
            keys = ['1', '2', '3', '4']
            dialogo.innerHTML = `<p class="dialogoBatalha"><a class="enemysName">Lobo1-<span>${lobo1.hp}</span> | Lobo2-<span>${lobo2.hp}</span> | Lobo3-<span>${lobo3.hp}</span> | Lobo4-<span>${lobo4.hp}</span> | Lobo5-<span>${lobo5.hp}</span> | Lobo6-<span>${lobo6.hp}</span> | Lobo7-<span>${lobo7.hp}</span> | Lobo8-<span>${lobo8.hp}</span></a><a>1 ${skill1.nome} : ${skill1.des} danototal: ${skill1.totalDan}</a><a>2 ${skill2.nome} : ${skill2.des} danototal: ${skill2.totalDan}</a><a>3 ${skill3.nome} : ${skill3.des} danototal: ${skill3.totalDan}</a><a>4 ${skill4.nome} : ${skill4.des} danototal: ${skill4.totalDan} restam: ${skill4Amount}</a><a class="statisticas">${playerName} HP: <span>${player.hp}</span> Def:<span><span class="def">${player.defesa}</span></span> Atk:<span><span class="dano">${player.dano}</span></span></a></p>`

            if (lobo1.dano == 0 && lobo2.dano == 0 && lobo3.dano == 0 && lobo4.dano == 0 && lobo5.dano == 0 && lobo6.dano == 0 && lobo7.dano == 0 && lobo8.dano == 0) {
                enviar.removeEventListener('click', atacarLobo)
                enviar.removeEventListener('click', turnDamage)
                avançar.addEventListener('click', parte4)
                voltar.removeEventListener('click', parte3)
                batalha = 0
                enviar.style.visibility = 'hidden'
                input.style.visibility = 'hidden'
                avançar.style.visibility = 'visible'
                keys = []
                dialogo.innerHTML = `<p>Você matou todos os lobos !<br><br><br>${playerName} ganhou 500Xp</p>`
            }
            if (player.hp < 1) {
                player.hp = 0
                voltar.removeEventListener('click', parte3)
                avançar.addEventListener('click', preparo)
                enviar.removeEventListener('click', turnDamage)
                enviar.removeEventListener('click', atacarLobo)
                prepr = 0
                enviar.style.visibility = 'hidden'
                input.style.visibility = 'hidden'
                avançar.style.visibility = 'visible'
                keys = []
                enviar.removeEventListener('click', turnDamage)
                dialogo.innerHTML = '<p><br><br>Você perdeu...<br>Volte para o acampamento, se recupere e tente novamente!</p>'
                voltar.removeEventListener('click', parte3)
                fenrir.dano = 30
                fenrir.hp = 1000
                fenrir.defesa = 20
                lobo1.dano = 7
                lobo1.hp = 350
                lobo1.defesa = 0
                lobo2.dano = 7
                lobo2.hp = 350
                lobo2.defesa = 0
                lobo3.dano = 7
                lobo3.hp = 350
                lobo3.defesa = 0
                lobo4.dano = 7
                lobo4.hp = 350
                lobo4.defesa = 0
                lobo5.dano = 7
                lobo5.hp = 350
                lobo5.defesa = 0
                lobo6.dano = 7
                lobo6.hp = 350
                lobo6.defesa = 0
                lobo7.dano = 7
                lobo7.hp = 350
                lobo7.defesa = 0
                lobo8.dano = 7
                lobo8.hp = 350
                lobo8.defesa = 0
            }
            if (lobo1.dano == 0 && lobo2.dano == 0 && lobo3.dano == 0 && lobo4.dano == 0 && lobo5.dano == 0 && lobo6.dano == 0 && lobo7.dano == 0 && lobo8.dano == 0 && player.hp < 1) {
            
                dialogo.innerHTML = `<p class="dialogoComum">Empate!, retorne ao acampamento, descanse e tente novamente.</p>`
                player.hp = 0
                voltar.removeEventListener('click', parte3)
                avançar.addEventListener('click', preparo)
                enviar.removeEventListener('click', turnDamage)
                enviar.removeEventListener('click', atacarLobo)
                prepr = 0
                enviar.style.visibility = 'hidden'
                input.style.visibility = 'hidden'
                avançar.style.visibility = 'visible'
                keys = []
                enviar.removeEventListener('click', turnDamage)
                voltar.removeEventListener('click', parte3)
                fenrir.dano = 30
                fenrir.hp = 1100
                fenrir.defesa = 20
                lobo1.dano = 7
                lobo1.hp = 350
                lobo1.defesa = 0
                lobo2.dano = 7
                lobo2.hp = 350
                lobo2.defesa = 0
                lobo3.dano = 7
                lobo3.hp = 350
                lobo3.defesa = 0
                lobo4.dano = 7
                lobo4.hp = 350
                lobo4.defesa = 0
                lobo5.dano = 7
                lobo5.hp = 350
                lobo5.defesa = 0
                lobo6.dano = 7
                lobo6.hp = 350
                lobo6.defesa = 0
                lobo7.dano = 7
                lobo7.hp = 350
                lobo7.defesa = 0
                lobo8.dano = 7
                lobo8.hp = 350
                lobo8.defesa = 0
            }
            break

    }
}




function parte4() {
    input.value = ''
    setTimeout(() => {
        part4++
        switch (part4) {


            case 1:
                tela.innerHTML = `<img src="imagens/portas.png" alt="">`
                dialogo.innerHTML = `<p class="dialogoComum"><br><br>Após a derrota dos lobos, de um dos grandes portões</p>`
                break
            case 2:
                dialogo.innerHTML = `<p class="dialogoComum"><br><br>Surge uma criatura com grandes olhos vermelhos e garras 3 vezes maiores do que a dos lobos que você enfrentou...</p>`
                break
            case 3:
                tela.innerHTML = `<img src="imagens/fenrir.png" alt="">`
                dialogo.innerHTML = `<p class="dialogoComum">A criatura se revela !<br><br>O nome dela é Fenrir, o grande lobo da mitologia nórdica !</p>`
                break
            case 4:
                dialogo.innerHTML = `<p class="dialogoComum">'Fenrir te ataca ! <br><br>Que comece a batalha !</p>`
                avançar.removeEventListener('click', parte4)
                avançar.addEventListener('click', parte5)
                inimigoAtacado = ''
                skillEscolhida = ''
                break
        }
    }, 700)
}


let fenrir = {
    dano: 30, hp: 1100, defesa: 20, dead: function () {
        this.dano = 0
        this.hp = `<span class="morto">0</span>`
        this.defesa = 0
    }
}



function turnDamageFenrir() {
    inimigoAtacado = input.value
    input.value = ''
    part5 = 0
    setTimeout(() => {
        switch (inimigoAtacado) {
            case '1':
                if (skillEscolhida == '1') {
                    skill1.dano(fenrir)
                    dialogo.innerHTML = `<p class="dialogoComum"><a>${skill1.posSkill()}</a><a>Fenrir revidou causando: <span class="dano">${fenrir.dano}</span> de Dano !</a></p>`
                    player.hp -= (fenrir.dano)
                    enviar.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    avançar.style.visibility = 'visible'
                    voltar.style.visibility = 'hidden'
                    keys = []
                    avançar.addEventListener('click', parte5)
                    enviar.removeEventListener('click', turnDamageFenrir)
                } else if (skillEscolhida == '2') {
                    skill2.dano(fenrir)
                    dialogo.innerHTML = `<p class="dialogoComum"><a>${skill2.posSkill()}</a><a><span class="dano">${fenrir.dano}</span> de Dano !</a></p>`
                    player.hp -= (fenrir.dano)
                    enviar.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    avançar.style.visibility = 'visible'
                    voltar.style.visibility = 'hidden'
                    keys = []
                    avançar.addEventListener('click', parte5)
                    enviar.removeEventListener('click', turnDamageFenrir)
                } else if (skillEscolhida == '3') {
                    fenrir.hp -= skill3.totalDan
                    dialogo.innerHTML = `<p class="dialogoComum"><a>${skill3.posSkill()}</a><a><span class="dano">${fenrir.dano}</span> de Dano !</a></p>`
                    player.hp -= (fenrir.dano)
                    enviar.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    avançar.style.visibility = 'visible'
                    voltar.style.visibility = 'hidden'
                    keys = []
                    avançar.addEventListener('click', parte5)
                    enviar.removeEventListener('click', turnDamageFenrir)
                } else if (skillEscolhida == '4') {
                    skill4.dano(fenrir)
                    dialogo.innerHTML = `<p class="dialogoComum"><a>${skill4.posSkill()}</a><a><span class="dano">${fenrir.dano}</span> de Dano !</a></p>`
                    player.hp -= (fenrir.dano)
                    enviar.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    avançar.style.visibility = 'visible'
                    voltar.style.visibility = 'hidden'
                    keys = []
                    avançar.addEventListener('click', parte5)
                    enviar.removeEventListener('click', turnDamageFenrir)
                }
                break
        }
    }, 500)



}
function atacarFenrir() {
    skillEscolhida = input.value
    input.value = ''
    part5 = 0
    voltar.style.visibility = 'visible'
    voltar.addEventListener('click', parte5)
    if (skillEscolhida == "1") {
        keys = ['1']
        dialogo.innerHTML = `<p class="ataque"><a>Ataque o Fenrir: <br><br>1  Fenrir"Boss"- <span>${fenrir.hp}</span></a><a>${playerName} HP: <span>${player.hp}</span></a></p>`
        enviar.removeEventListener('click', atacarFenrir)
        enviar.addEventListener('click', turnDamageFenrir)
    } else if (skillEscolhida == "2") {
        keys = ['1']
        dialogo.innerHTML = `<p class="ataque"><a>Ataque o Fenrir: <br><br>1  Fenrir"Boss"- <span>${fenrir.hp}</span></a><a>${playerName} HP: <span>${player.hp}</span></a></p>`
        enviar.removeEventListener('click', atacarFenrir)
        enviar.addEventListener('click', turnDamageFenrir)
    } else if (skillEscolhida == "3") {
        keys = ['1']
        dialogo.innerHTML = `<p class="ataque"><a>Ataque o Fenrir: <br><br>1  Fenrir"Boss"- <span>${fenrir.hp}</span></a><a>${playerName} HP: <span>${player.hp}</span></a></p>`
        enviar.removeEventListener('click', atacarFenrir)
        enviar.addEventListener('click', turnDamageFenrir)
    } else if (skillEscolhida == "4") {
        if (skill4Amount < 1) {
            keys = []
            dialogo.innerHTML = `<p class="dialogoComum">Você não pode mais usar esta skill!</p>`
            enviar.style.visibility = 'hidden'
            input.style.visibility = 'hidden'
            avançar.style.visibility = 'visible'
            avançar.addEventListener('click', parte5)
            skillEscolhida = ''
            enviar.removeEventListener('click', atacarFenrir)
            enviar.removeEventListener('click', turnDamageFenrir)
            part5 = 0
        } else if (skill4Amount >= 1) {
            skill4Amount -= 1
            keys = ['1']
            dialogo.innerHTML = `<p class="ataque"><a>Ataque o Fenrir: <br><br>1- Fenrir"Boss"- <span>${fenrir.hp}</span></a><a>>${playerName} HP: <spa</a>n>${player.hp}</span></p>`
            enviar.removeEventListener('click', atacarFenrir)
            enviar.addEventListener('click', turnDamageFenrir)
        }

    }
}


function parte5() {
    part5++

    input.value = ''
    switch (part5) {
        case 1:
            if (skill4Amount <= 0) {
                skill4Amount = 0
            }
            if (fenrir.hp < 1 || fenrir.dano < 1) {
                fenrir.dead()
            }
            voltar.style.visibility = 'hidden'
            voltar.removeEventListener('click', parte5)
            skillEscolhida = ''
            inimigoAtacado = ''
            enviar.addEventListener('click', atacarFenrir)
            enviar.removeEventListener('click', turnDamageFenrir)
            avançar.removeEventListener('click', parte5)
            enviar.style.visibility = 'visible'
            input.style.visibility = 'visible'
            avançar.style.visibility = 'hidden'

            keys = ['1', '2', '3', '4']
            dialogo.innerHTML = `<p class="dialogoBatalhaBoss"><a class="bossName">Fenrir-<span>${fenrir.hp}</span></a><a>1 ${skill1.nome} : ${skill1.des} danototal: ${skill1.totalDan}</a><a>2 ${skill2.nome} : ${skill2.des} danototal: ${skill2.totalDan}</a><a>3 ${skill3.nome} : ${skill3.des} danototal: ${skill3.totalDan}</a><a>4 ${skill4.nome} : ${skill4.des} danototal: ${skill4.totalDan} restam: ${skill4Amount}</a><a class="statisticas">${playerName} HP: <span>${player.hp}</span> Def:<span><span class="def">${player.defesa}</span></span> Atk:<span><span class="dano">${player.dano}</span></span></a></p>`

            if (fenrir.dano < 1 || fenrir.hp == `<span class="morto">0</span>`) {
                tela.innerHTML = `<img src="imagens/fenrirDead.png" alt="">`
                avançar.addEventListener('click', parte6)
                enviar.style.visibility = 'hidden'
                input.style.visibility = 'hidden'
                avançar.style.visibility = 'visible'
                keys = []
                dialogo.innerHTML = `<p class="dialogoComum"><a>Parabéns você derrotou a lendária fera Fenrir!${playerName} ganhou 1000xp</a></p>`
                enviar.removeEventListener('click', turnDamageFenrir)
                enviar.removeEventListener('click', atacarFenrir)
            }
            if (player.hp < 1) {
                voltar.removeEventListener('click', parte5)
                player.hp = 0
                avançar.addEventListener('click', preparo)
                prepr = 0
                enviar.removeEventListener('click', turnDamageFenrir)
                enviar.removeEventListener('click', atacarFenrir)
                enviar.style.visibility = 'hidden'
                input.style.visibility = 'hidden'
                avançar.style.visibility = 'visible'
                keys = []
                enviar.removeEventListener('click', turnDamageFenrir)
                dialogo.innerHTML = '<p class="dialogoComum">Você perdeu...<br>Volte para o acampamento, se recupere e tente novamente!</p>'
                fenrir.dano = 30
                fenrir.hp = 1100
                fenrir.defesa = 20
                lobo1.dano = 7
                lobo1.hp = 350
                lobo1.defesa = 0
                lobo2.dano = 7
                lobo2.hp = 350
                lobo2.defesa = 0
                lobo3.dano = 7
                lobo3.hp = 350
                lobo3.defesa = 0
                lobo4.dano = 7
                lobo4.hp = 350
                lobo4.defesa = 0
                lobo5.dano = 7
                lobo5.hp = 350
                lobo5.defesa = 0
                lobo6.dano = 7
                lobo6.hp = 350
                lobo6.defesa = 0
                lobo7.dano = 7
                lobo7.hp = 350
                lobo7.defesa = 0
                lobo8.dano = 7
                lobo8.hp = 350
                lobo8.defesa = 0
            }
            if (fenrir.defesa < 1) {
                fenrir.defesa = 0
            }

            if (fenrir.dano < 1 && player.hp < 1 && player.hp > 1 ) {
                tela.innerHTML = ``

                keys = []
                dialogo.innerHTML = `<p class="dialogoComum">Empate!, retorne ao acampamento, descanse e tente novamente.</p>`
                voltar.removeEventListener('click', parte5)
                player.hp = 0
                avançar.addEventListener('click', preparo)
                prepr = 0
                enviar.removeEventListener('click', turnDamageFenrir)
                enviar.removeEventListener('click', atacarFenrir)
                enviar.style.visibility = 'hidden'
                input.style.visibility = 'hidden'
                avançar.style.visibility = 'visible'
                keys = []
                enviar.removeEventListener('click', turnDamageFenrir)

                fenrir.dano = 30
                fenrir.hp = 1100
                fenrir.defesa = 20
                lobo1.dano = 7
                lobo1.hp = 350
                lobo1.defesa = 0
                lobo2.dano = 7
                lobo2.hp = 350
                lobo2.defesa = 0
                lobo3.dano = 7
                lobo3.hp = 350
                lobo3.defesa = 0
                lobo4.dano = 7
                lobo4.hp = 350
                lobo4.defesa = 0
                lobo5.dano = 7
                lobo5.hp = 350
                lobo5.defesa = 0
                lobo6.dano = 7
                lobo6.hp = 350
                lobo6.defesa = 0
                lobo7.dano = 7
                lobo7.hp = 350
                lobo7.defesa = 0
                lobo8.dano = 7
                lobo8.hp = 350
                lobo8.defesa = 0

            }



            break
    }
}


function parte6() {
    tela.innerHTML = ``
    dialogo.innerHTML = `<p>Aguarde a parte 2!</p>`
    avançar.removeEventListener('click', parte5)
}

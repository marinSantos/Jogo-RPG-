
const tela = document.getElementById('tela')
const dialogo = document.getElementById('dialogo')
const input = document.getElementById('input')
const submit = document.getElementById('submit')
const btn = document.getElementById('btn')

const audio1 = document.getElementById('audio1')
const audio2 = document.getElementById('audio2')
const audio3 = document.getElementById('audio3')
const audio4 = document.getElementById('audio4')
const separador2 = document.getElementById('separador2')

let part1 = 0
let prepr = 0
let part2 = 0
let part3 = 0
let part4 = 0
let part5 = 0
let playerName;
let classe
let subClasse
let guerreiro = {}
let quantidade
let habilidade1 = {}
let habilidade2 = {}
let habilidade3 = {}
let habilidade4 = {}
let baseDamage
let baseHp
let baseDefense
let baseQuantity

let keys = []

if (part1 == 0) {
    dialogo.innerHTML = '<p><br><br>Esta é uma história de um  guerreiro, que buscava libertar sua esposa e seus filhos presos em um reino rival, após uma invasão do mesmo em sua terra natal, para isso ele teria que participar de um torneio na qual o vencedor teria direito de libertar alguns prisioneiros, qual será o desenrolar desta história?...............</p>'

    submit.style.visibility = 'hidden'
    input.style.visibility = 'hidden'
    btn.style.visibility = 'visible'
}







document.addEventListener('keydown', function (ev) {
    ev.preventDefault()

    if (ev.key === "Backspace") {
        input.value = input.value.slice(0, -1)
    }
    if (ev.code === "Space") {
        submit.click()
    }
    if (ev.key === "Enter") {

        btn.click()
    }

    if (keys.includes(ev.key)) {
        input.value += ev.key
        return
    }
})







btn.addEventListener('click', parte1)
function setName() {
    if (input.value.length > 0) {
        playerName = input.value
        btn.addEventListener('click', parte1)
        btn.style.visibility = 'visible'
        dialogo.innerHTML = ` <p>Você:<br><br>Meu nome é ${playerName}!</p>`
    } else {
        dialogo.innerHTML = ' <p>Guarda:<br><br>Você precisa colocar um nome...</p>'

    }
}
function subClasseName() {
    subClasse = input.value
    switch (classe) {
        case '1':
          
            if (subClasse == '1') {
                btn.addEventListener('click', parte1)
                btn.style.visibility = 'visible'
                dialogo.innerHTML = `<p>Guarda:<br><br> Certo, então pegue esta arma...<br><br>Você Recebeu uma LongSword !</p>`

                baseDamage = 150
                baseHp = 450
                baseDefense = 10
                guerreiro = { class: 'Cavaleiro dizimador', arma: 'LongSword', dano: 150, hp: 450, defesa: 10 }
                quantidade = 4
                baseQuantity = 4
                habilidade1 = {
                    nome: 'Corte transversal', totalDan: Math.round(guerreiro.dano + (guerreiro.dano * 35) / 100), dano: function (lb) {
                        let total = this.totalDan - lb.defesa
                        lb.hp -= total

                    }, area: false, des: `Corta o inimigo com sua espada causando <span class="dano">+35%</span> de dano.`,

                    posSkill: function () {
                        return `${playerName} usou ${this.nome} !`
                    }
                }
                habilidade2 = {
                    nome: 'Ataque esgrima', totalDan: Math.round(guerreiro.dano + (guerreiro.dano * 25) / 100), dano: function (lb) {
                        let total = this.totalDan - lb.defesa
                        lb.hp -= total
                        lb.defesa -= 5
                    }, area: false, des: `Perfura o inimigo com a ponta de sua espada, diminuindo 5 de defesa e causando <span class="dano">+25%</span> de dano.`,
                    posSkill: function () {
                        return `${playerName} usou ${this.nome} !`
                    }
                }
                habilidade3 = {
                    nome: 'Meia lua', totalDan: Math.round(guerreiro.dano + (guerreiro.dano * 20) / 100), dano: function (lb) {
                        let total = this.totalDan - lb.defesa
                        lb.hp -= total
                    }, area: true, des: `Lança vários projéteis com formato de meia Lua em multiplos inimigos, causando <span class="dano">+20%</span> de dano.`,
                    posSkill: function () {
                        return `${playerName} usou ${this.nome} !`
                    }
                }
                habilidade4 = {

                    nome: 'Mega meia lua', totalDan: Math.round(guerreiro.dano + (guerreiro.dano * 50) / 100), dano: function (lb) {
                        let total = this.totalDan - lb.defesa
                        lb.hp -= total
                    }, area: true, des: `Lança de sua espada um grande projétil com formato de meia-lua, causando <span class="dano">+50%</span> de dano.`,
                    posSkill: function () {
                        return `${playerName} usou a ultimate ${this.nome} !`
                    }
                }
            } else if (subClasse == '2') {
                btn.addEventListener('click', parte1)
                btn.style.visibility = 'visible'
                dialogo.innerHTML = `<p>Guarda:<br><br> Certo, então pegue esta arma...<br><br>Você Recebeu uma SwordShild !</p>`
                baseDamage = 120
                baseHp = 650
                baseDefense = 30
                guerreiro = { class: 'Cavaleiro Templário', arma: 'SwordShild ', dano: 120, hp: 650, defesa: 30 }
                quantidade = 4
                baseQuantity = 4
                habilidade1 = {
                    nome: 'Corte lateral', totalDan: Math.round(guerreiro.dano + (guerreiro.dano * 18) / 100), dano: function (lb) {
                        let total = this.totalDan - lb.defesa
                        lb.hp -= total
                    }, area: false, des: 'Corta o inimigo com sua espada, causando <span class="dano">+18%</span> de dano.',
                    posSkill: function () {
                        return `${playerName} usou ${this.nome} !`
                    }
                }
                habilidade2 = {
                    nome: 'Ataque de escudo', totalDan: Math.round(guerreiro.dano + (guerreiro.dano * 13) / 100), dano: function (lb) {
                        let total = this.totalDan - lb.defesa
                        lb.hp -= total
                        guerreiro.defesa += 5
                    }, area: false, des: 'Golpeia o inimigo com seu escudo, aumentando também 5 de defesa e causando <span class="dano">+13%</span> de dano.',
                    posSkill: function () {
                        return `${playerName} usou ${this.nome} !`
                    }
                }
                habilidade3 = {
                    nome: 'Fissura', totalDan: Math.round(guerreiro.dano + (guerreiro.dano * 10) / 100), dano: function (lb) {
                        let total = this.totalDan - lb.defesa
                        lb.hp -= total
                        lb.dano -= 1
                    }, area: true, des: 'Golpeia o solo com sua espada, assim abrindo buracos no solo, destabilizando os inimigos, os fazendo perder 1 de ataque e causando <span class="dano">+10%</span> de dano.',
                    posSkill: function () {
                        return `${playerName} usou ${this.nome} !`
                    }
                }
                habilidade4 = {

                    nome: 'Take Jeruzalém!', totalDan: Math.round(guerreiro.dano + (guerreiro.dano * 30) / 100), dano: function (lb) {
                        let total = this.totalDan - lb.defesa
                        lb.hp -= total
                        guerreiro.defesa += 20

                    }, area: true, des: 'Se fortalece com um grito de guerra, atropela os inimigos a sua frente, aumentando 20 pontos de defesa e causando <span class="dano">+30%</span> de dano.',
                    posSkill: function () {
                        return `${playerName} usou ${this.nome} !`
                    }
                }
            }
            break
        case '2':
           
            if (subClasse == '1') {
                btn.addEventListener('click', parte1)
                btn.style.visibility = 'visible'
                dialogo.innerHTML = `<p>Guarda:<br><br> Certo, então pegue esta arma...<br><br>Você Recebeu um Livro mágico da destruição !</p>`
                baseDamage = 250
                baseHp = 250
                baseDefense = 0
                guerreiro = { class: 'Mago destruidor', arma: 'Livro mágico da destruição ', dano: 200, hp: 250, defesa: 1 }
                quantidade = 4
                baseQuantity = 4
                habilidade1 = {
                    nome: 'Lanças de raios', totalDan: Math.round(guerreiro.dano + (guerreiro.dano * 40) / 100), dano: function (lb) {
                        let total = this.totalDan - lb.defesa
                        lb.hp -= total
                    }, area: true, des: `Cria um conjunto de lanças construidas por raios, assim empalando e eletrocutando os inimigos, causando <span class="dano">+40%</span> de dano.`,
                    posSkill: function () {
                        return `${playerName} usou ${this.nome} !`
                    }
                }
                habilidade2 = {
                    nome: 'Bola de fogo comprimida', totalDan: Math.round(guerreiro.dano + (guerreiro.dano * 40) / 100), dano: function (lb) {
                        let total = this.totalDan - lb.defesa
                        lb.hp -= total
                    }, area: true, des: `Comprime magia de fogo no seu limite e depois a solta nos inmigos, causando uma explossão flamejante queimando os mesmos e causando <span class="dano">+40%</span> de dano.`,
                    posSkill: function () {
                        return `${playerName} usou ${this.nome} !`
                    }
                }
                habilidade3 = {
                    nome: 'Tornado cortante', totalDan: Math.round(guerreiro.dano + (guerreiro.dano * 40) / 100), dano: function (lb) {
                        let total = this.totalDan - lb.defesa
                        lb.hp -= total
                    }, area: true, des: `Conjura um tornado que vai varrendo os inimigos seja onde por onde passar, causando <span class="dano">+40%</span> de dano..`,
                    posSkill: function () {
                        return `${playerName} usou ${this.nome} !`
                    }
                }
                habilidade4 = {

                    nome: 'Chuva de meteoros', totalDan: Math.round(guerreiro.dano + (guerreiro.dano * 70) / 100), dano: function (lb) {
                        let total = this.totalDan - lb.defesa
                        lb.hp -= total
                    }, area: true, des: `Invoca uma série de meteoros mágicos, atingindo qualquer inimigo abaixo do céu, causando <span class="dano">+70%</span> de dano.`,
                    posSkill: function () {
                        return `${playerName} usou a ultimate ${this.nome} !`
                    }
                }
            } else if (subClasse == '2') {
                btn.addEventListener('click', parte1)
                btn.style.visibility = 'visible'
                dialogo.innerHTML = `<p>Guarda:<br><br> Certo, então pegue esta arma...<br><br>Você Recebeu um Livro mágico do controle !</p>`
                baseDamage = 150
                baseHp = 250
                baseDefense = 0
                guerreiro = { class: 'Mago de controle', arma: 'Livro mágico do controle ', dano: 150, hp: 250, defesa: 1 }
                quantidade = 2
                baseQuantity = 4
                habilidade1 = {
                    nome: 'Congelar', totalDan: Math.round(guerreiro.dano + (guerreiro.dano * 25) / 100), dano: function (lb) {
                        let total = (this.totalDan - lb.defesa)
                        lb.hp -= total
                        if(lb.dano > 3){
                            lb.dano -= 1
                        }else if(lb.dano <= 3){
                            lb.dano -= 0
                        }
                       
                    }, area: 'true', des: `Muda o clima do ambiente para o 0 absoluto,congela todos os inimigos em campo, E assim fazendo cada um perder 1 de ataque e causando <span class="dano">+25%</span> de dano.`, posSkill: function () {
                        return `${playerName} usou ${this.nome} !`
                    }
                }
                habilidade2 = {
                    nome: 'Maré', totalDan: Math.round(guerreiro.dano + (guerreiro.dano * 25) / 100), dano: function (lb) {
                        let total = this.totalDan - lb.defesa
                        lb.hp -= total
                        lb.defesa -= 2
                    }, area: false, des: 'Provoca uma maré com fortes correntes de água, causando dano e fazendo os inimigos perderem 2 de defesa e causando <span class="dano">+25%</span> de dano.', posSkill: function () {
                        return `${playerName} usou ${this.nome} !`
                    }
                }
                habilidade3 = {
                    nome: 'Terremoto', totalDan: Math.round(guerreiro.dano + (guerreiro.dano * 35) / 100), dano: function (lb) {
                        let total = this.totalDan - lb.defesa
                        lb.hp -= total
                    }, area: true, des: 'Manipula as placas tectonicas, fazendo as mesmas provocarem um terremoto e causando <span class="dano">+33%</span> de dano.', posSkill: function () {
                        return `${playerName} usou ${this.nome} !`
                    }
                }
                habilidade4 = {

                    nome: 'Monte do gelo mágico', totalDan: Math.round(guerreiro.dano + (guerreiro.dano * 50) / 100), dano: function (lb) {
                        let total = this.totalDan - lb.defesa
                        lb.hp -= total
                        lb.dano -= 5
                        guerreiro.defesa += 5

                    }, area: true, des: 'Conjura um enorme monte de gelo de baixo dos inimigos, diminuindo 5 de dano dos adversários, aumentando 5 a própria defesa e causando <span class="dano">+50%</span> de dano.', posSkill: function () {
                        return `${playerName} usou a ultimate ${this.nome} !`
                    }
                }
            }
            break
        case '3':
      
            if (subClasse == '1') {
                btn.addEventListener('click', parte1)
                btn.style.visibility = 'visible'
                dialogo.innerHTML = `<p>Guarda:<br><br> Certo, então pegue esta arma...<br><br>Você Recebeu uma Katana !</p>`
                baseDamage = 200
                baseHp = 350
                baseDefense = 5
                guerreiro = { class: 'Assasino ninja', arma: 'Katana', dano: 200, hp: 350, defesa: 5 }

                quantidade = 4
                baseQuantity = 4
                habilidade1 = {
                    nome: 'konoha senpuu', totalDan: Math.round(guerreiro.dano + (guerreiro.dano * 50) / 100), dano: function (lb) {
                        lb.hp -= (this.totalDan - lb.defesa)
                    }, area: false, des: `Golpea o inimigo com aquela clássica voadora do Rock Lee, causando <span class="dano">+50%</span> de dano.`, posSkill: function () {
                        return `${playerName} usou ${this.nome} !`
                    }
                }


                habilidade2 = {
                    nome: 'Corte das sombras', totalDan: Math.round(guerreiro.dano + (guerreiro.dano * 60) / 100), dano: function (lb) {
                        lb.hp -= (this.totalDan - lb.defesa)
                    }, area: false, des: `Usa um jutsu para cegar o inimigo temporariamente, depois executa um corte rápido e preciso onde ele menos espera, causando <span class="dano">+60%</span> de dano.`, posSkill: function () {
                        return `${playerName} usou ${this.nome} !`
                    }
                }


                habilidade3 = {
                    nome: 'Shurikens', totalDan: Math.round(guerreiro.dano + (guerreiro.dano * 40) / 100), dano: function (lb) {
                        lb.hp -= (this.totalDan - lb.defesa)
                    }, area: true, des: `Lança shurikens nos inimigos, causando <span class="dano">+40%</span> de dano.`, posSkill: function () {
                        return `${playerName} usou ${this.nome} !`
                    }
                }


                habilidade4 = {

                    nome: 'Assasinato silencioso', totalDan: Math.round(guerreiro.dano + (guerreiro.dano * 150) / 100), dano: function (lb) {
                        lb.hp -= (this.totalDan - lb.defesa)

                    }, area: false, des: 'Cria uma área em que o tempo passa mais devagar para inimigo, além do mesmo não poder ouvir ou enchergar nada, e assim acertando todos os pontos vitais do inimigo, causando <span class="dano">+150%</span> de dano.', posSkill: function () {
                        return `${playerName} usou a ultimate ${this.nome} !`
                    }
                }
            } else if (subClasse == '2') {
                btn.addEventListener('click', parte1)
                btn.style.visibility = 'visible'
                dialogo.innerHTML = `<p>Guarda:<br><br> Certo, então pegue esta arma...<br><br>Você Recebeu as Adagas vampíricas !</p>`
                baseDamage = 150
                baseHp = 350
                baseDefense = 5
                guerreiro = { class: 'Assasino ladrão', arma: 'Adagas vampíricas', dano: 150, hp: 350, defesa: 5 }

                quantidade = 4
                baseQuantity = 4
                habilidade1 = {
                    nome: 'Rasteira', totalDan: Math.round(guerreiro.dano + (guerreiro.dano * 25) / 100), dano: function (lb) {
                        let total = this.totalDan - lb.defesa
                        lb.hp -= total
                        lb.dano -= 1
                    }, area: false, des: `Da uma rasteira no inimigo o destabilizando, fazendo-o perder 1 de dano e  causando <span class="dano">+25%</span> de dano.`, posSkill: function () {
                        return `${playerName} usou ${this.nome} !`
                    }
                }
                habilidade2 = {
                    nome: 'Golpe sujo', totalDan: Math.round(guerreiro.dano + (guerreiro.dano * 35) / 100), dano: function (lb) {
                        let total = this.totalDan - lb.defesa
                        lb.hp -= total
                    }, area: false, des: `Cria ilusões para distrair o inmigo, assim o atacando pelas costas com suas adagas, causando <span class="dano">+35%</span> de dano. .`, posSkill: function () {
                        return `${playerName} usou ${this.nome} !`
                    }
                }
                habilidade3 = {
                    nome: 'Furto de vitalidade', totalDan: Math.round(guerreiro.dano + (guerreiro.dano * 25) / 100), dano: function (lb) {                     
                        let total = this.totalDan - lb1.defesa
                        lb.hp -= total
                        guerreiro.hp += Math.round(((baseHp * 5) / 100) + ((total * 2) / 100))
                    }, area: true, des: `Golpeia os inimigos com suas adagas vampíricas, causando <span class="dano">+25%</span> de dano e drenando 5% da sua vida máxima + 2% do dano total causado a cada inimigo.  `, posSkill: function () {
                        return `${playerName} usou ${this.nome} !`
                    }
                }
                habilidade4 = {

                    nome: 'Drácula', totalDan: Math.round(guerreiro.dano + (guerreiro.dano * 80) / 100), dano: function (lb) {
                        let total
                        if (lb.dano == 0) {
                            total = 0
                        } else if (lb.dano > 1) {
                            total = this.totalDan - lb.defesa
                        }

                        lb.hp -= total
                        guerreiro.hp += Math.round(((baseHp * 20) / 100) + ((total * 10) / 100))

                    }, area: false, des: 'Marca o inimigo ao desferir um golpe, e então a marca começa a drenar vitalidade do mesmo,causando <span class="dano">+80%</span> de dano, além retornando 20% de sua vida máxima + 10% do dano causado !', posSkill: function () {
                        return `${playerName} usou a ultimate ${this.nome} !`
                    }
                }
            }
            break
    }

}
function classeName() {
    classe = input.value
    if (classe == '1') {
          btn.addEventListener('click', parte1)
        dialogo.innerHTML = `<p>Guarda:<br><br>Entendi, então você é um Cavaleiro !</p>`
        btn.style.visibility = 'visible'

    } else if (classe == '2') {
          btn.addEventListener('click', parte1)
        dialogo.innerHTML = `<p>Guarda do coliseu:<br><br>Entendi, então você é um Mago !</p>`
        btn.style.visibility = 'visible'

    } else if (classe == '3') {
          btn.addEventListener('click', parte1)

        dialogo.innerHTML = `<p>Guarda do coliseu:<br><br>Entendi, então você é um Assasino !</p>`
        btn.style.visibility = 'visible'

    }
}
function parte1() {
    part1++

    switch (part1) {
        case 1:
            dialogo.innerHTML = ' <p>Instruções:<br><br>Enter- Avançar<br>Space- Confirmar <br><br>Obss: Você pode digitar a opção escolhida sem precisar clicar no input.</p>'
            audio1.play()
            break
        case 2:
            dialogo.innerHTML = ' <p><br><br>Em um fim de tarde, em época de inverno, o crepúsculo se forma nos céus..<br>Com o sol  Lembrando um guarda saindo de seu posto para enfim repousar, após a chegada do seu tão aguardado fim de expediente...</p>'
            break
        case 3:
            dialogo.innerHTML = ' <p><br><br>Falando em guardas...<br>Um se encontra logo a frente, guardando as portas do nosso destino.<br></p>'
            break
        case 4:
            tela.innerHTML = '<img src="imagens/guarda.webp" alt="">'
            break
        case 5:

            dialogo.innerHTML = '<p>Guarda: <br><br>Saudações guerreiro! Por favor, informe seu nome para poder passar, sem ele você não poderá participar do torneio.</p>'
            keys = ['q', 'Q', 'w', 'W', 'e', 'E', 'r', 'R', 't', 'T', 'u', 'U', 'i', 'I', 'o', 'O', 'p', 'P', '´', 'a', 'A', 's', 'S', 'd', 'D', 'f', 'F', 'g', 'G', 'h', 'H', 'j', 'J', 'k', 'K', 'l', 'L', 'ç', 'Ç', 'z', 'Z', 'x', 'X', 'c', 'C', 'v', 'V', 'b', 'B', 'n', 'N', 'm', 'M', ',', '.', ';', '?', '/', '`', '"', '}', '{', '[', ']', '(', ')', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '_', '!', '#', '$', '%', '¨', '&', '|']
            submit.style.visibility = 'visible'
            input.style.visibility = 'visible'
            btn.style.visibility = 'hidden'
            btn.removeEventListener('click', parte1)
            submit.addEventListener('click', setName)
            break
        case 6:
            submit.removeEventListener('click', setName)
            input.value = ''
            dialogo.innerHTML = `<p>Guarda:<br> <br>...<br>'${playerName}'.....<br>Este nome não me é estranho .......</p>`
            submit.style.visibility = 'hidden'
            input.style.visibility = 'hidden'
            btn.style.visibility = 'visible'

            break
        case 7:
            dialogo.innerHTML = `<p>Guarda:<br><br>Ouvi falar de uma história que.....</p>`
            break
        case 8:
            dialogo.innerHTML = `<p>Guarda: <br><br>Enfim, deve ser algo da minha cabeça...</p>`
            break
        case 9:
            keys = ['1', '2', '3']
            input.value = ''
            dialogo.innerHTML = '<p>Guarda: <br><br>Agora me responda, qual destas 3 armas você sabe usar:<br><br>1-Espada "Para Cavaleiros"<br>2-Livro mágico "Para Magos"<br>3-Adagas "Para Assasinos"</p>'
            submit.style.visibility = 'visible'
            input.style.visibility = 'visible'
            btn.style.visibility = 'hidden'
            btn.removeEventListener('click', parte1)
            submit.addEventListener('click', classeName)
            break
        case 10:
            keys = ['1', '2']
            if (classe == '1') {
                dialogo.innerHTML = '<p>Guarda: <br><br>Que tipo de cavaleiro você é?<br><br>1- Cavaleiro dizimador<br>2- Cavaleiro templário</p>'
            } else if (classe == '2') {
                dialogo.innerHTML = '<p>Guarda: <br><br>Que tipo de mago você é?<br><br>1- Mago da destruição<br>2- Mago de controle</p>'
            } else if (classe == '3') {
                dialogo.innerHTML = '<p>Guarda: <br><br>Que tipo de assasino você é?<br><br>1- Assasino ninja<br>2- Assasino ladrão</p>'
            }
            input.value = ''
            btn.removeEventListener('click', parte1)
            submit.removeEventListener('click', classeName)
            submit.addEventListener('click', subClasseName)

            submit.style.visibility = 'visible'
            input.style.visibility = 'visible'
            btn.style.visibility = 'hidden'

            break
        case 11:
            submit.removeEventListener('click', subClasseName)
            dialogo.innerHTML = '<p> Guarda:<br><br>Pronto, agora você tem o suficiente</p>'
            submit.style.visibility = 'hidden'
            input.style.visibility = 'hidden'
            btn.style.visibility = 'visible'
            break
        case 12:
            dialogo.innerHTML = '<p> Guarda:<br><br>Vá até aquela fogueira e repouse guerreiro, para amanhã estar pronto para sua primeira batalha...</p>'
            break
        default:

            tela.innerHTML = ''
            dialogo.innerHTML = '<p>.................</p>'
            btn.removeEventListener('click', parte1)
            btn.addEventListener('click', preparo)
            break
    }
}

let opçao
let sleepcicle = 0

function sleep() {
    sleepcicle++
    if (sleepcicle == 1) {
        dialogo.innerHTML = '<p>' + playerName + ':' + '<br><br>Zzzzzzzzzzzzzzzzzzzz.....</p>'
    }
    if (sleepcicle == 2) {
        dialogo.innerHTML = '<p>' + playerName + ':' + '"Acorda ........."<br><br>' + '"Bocejo ........."</p>'
    }
    if (sleepcicle == 3) {
        dialogo.innerHTML = '<p>Energias restauradas !</p>'
        submit.style.visibility = 'hidden'
        input.style.visibility = 'hidden'
        btn.style.visibility = 'visible'
        btn.addEventListener('click', preparo)
        prepr = 0
        clearInterval(sleep)
        guerreiro.dano = baseDamage
        guerreiro.hp = baseHp
        guerreiro.defesa = baseDefense
        quantidade = baseQuantity
    }



}

function choseOption() {

    opçao = input.value
    if (opçao == '1') {
        btn.addEventListener('click', preparo)
        prepr = 0
        dialogo.innerHTML = '<p>Nome: ' + playerName + '<br>Classe/Subclasse: ' + guerreiro.class + '<br>Arma: ' + guerreiro.arma + '<br>Dano: ' + guerreiro.dano + '<br>Hp: ' + guerreiro.hp + '<br>Defesa: ' + guerreiro.defesa + '</p>'
        submit.style.visibility = 'hidden'
        input.style.visibility = 'hidden'
        btn.style.visibility = 'visible'
    } else if (opçao == '2') {
        input.value = ''
        sleepcicle = 0

        setInterval(sleep, 1200)
        submit.removeEventListener('click', choseOption)
        btn.addEventListener('click', preparo)
        part2 = 0
    } else if (opçao == '3') {
        submit.style.visibility = 'hidden'
        input.style.visibility = 'hidden'
        btn.style.visibility = 'visible'
        if (guerreiro.hp == baseHp) {
            submit.removeEventListener('click', choseOption)
            dialogo.innerHTML = '<p>Vamos para a batalha !</p>'
            btn.removeEventListener('click', preparo)
            btn.addEventListener('click', parte2)
        } else if (guerreiro.hp != baseHp) {
            dialogo.innerHTML = '<p>Você ainda está fraco por conta da ultima batalha, descanse um pouco para prosseguir...</p>'
            btn.addEventListener('click', preparo)
            prepr = 0

        }
    } else if (opçao == '4') {
        dialogo.innerHTML = '<p>Saindo do jogo...</p>'
        submit.removeEventListener('click', choseOption)
        btn.removeEventListener('click', preparo)

    }
}

function preparo() {
    prepr++

    input.value = ''
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
            btn.removeEventListener('click', preparo)
            submit.style.visibility = 'visible'
            input.style.visibility = 'visible'
            btn.style.visibility = 'hidden'

            tela.innerHTML = '<img src="imagens/fogueira.png" alt="">'
            dialogo.innerHTML = ' <p>Você está na fogueira do descanso !<br> Sente-se relaxe um pouco<br> E quando preparado, escolha sua próxima ação...<br><br>1- Ver informações do personagem<br>2- Descansar<br>3- Ir para a batalha<br>4- Sair do jogo</p>'
            submit.addEventListener('click', choseOption)

            break

    }
}

let skillEscolhida
let loboAtacado

function parte2() {
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
            dialogo.innerHTML = '<p>Ao entrar no Torneio, ' + playerName + ' se depara com uma grande multidão, bradando em alta voz pelo o espetáculo que estava prestes a acontecer...</p>'
            break
        case 3:
            tela.innerHTML = '<img src="imagens/portas.png">'
            dialogo.innerHTML = '<p>Até que....Do outro lado do Torneio, foram abertos 3 grandes portões...<br><br>Dos portões saiam em torno de 8 lobos<br><br> Mas não eram lobos comuns, eram lobos gigantes com garras de ferro !</p>'
            break
        default:
            tela.innerHTML = '<img src="imagens/lobos.png">'
            dialogo.innerHTML = '<p>Eles te atacam !<br><br> Que comecem os jogos !</p>'
            btn.removeEventListener('click', parte2)
            btn.addEventListener('click', parte3)
            break
    }
}


let lobo1 = {
    dano: 5, hp: 400, defesa: 0, dead1: function () {
        this.dano = 0
        this.hp = `<span class="morto">0</span>`
    }
}
let lobo2 = {
    dano: 5, hp: 400, defesa: 0, dead2: function () {
        this.dano = 0
        this.hp = `<span class="morto">0</span>`
    }
}
let lobo3 = {
    dano: 5, hp: 400, defesa: 0, dead3: function () {
        this.dano = 0
        this.hp = `<span class="morto">0</span>`
    }
}
let lobo4 = {
    dano: 5, hp: 400, defesa: 0, dead4: function () {
        this.dano = 0
        this.hp = `<span class="morto">0</span>`
    }
}
let lobo5 = {
    dano: 5, hp: 400, defesa: 0, dead5: function () {
        this.dano = 0
        this.hp = `<span class="morto">0</span>`
    }
}
let lobo6 = {
    dano: 5, hp: 400, defesa: 0, dead6: function () {
        this.dano = 0
        this.hp = `<span class="morto">0</span>`
    }
}
let lobo7 = {
    dano: 5, hp: 400, defesa: 0, dead7: function () {
        this.dano = 0
        this.hp = `<span class="morto">0</span>`
    }
}
let lobo8 = {
    dano: 5, hp: 400, defesa: 0, dead8: function () {
        this.dano = 0
        this.hp = `<span class="morto">0</span>`
    }
}





function atacarLobo() {
    loboAtacado = input.value
    input.value = ''
    part3 = 0

    if (classe == '1') {
        switch (loboAtacado) {
            case '1':
                if (skillEscolhida == "1") {
                    habilidade1.dano(lobo1)
                    dialogo.innerHTML = `<p>${habilidade1.posSkill()} <br><br><br>Os lobos revidaram causando: ${lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                } else if (skillEscolhida == "2") {
                    habilidade2.dano(lobo1)
                    dialogo.innerHTML = `<p>${habilidade2.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                } else if (skillEscolhida == "3") {
                    habilidade3.dano(lobo1)
                    habilidade3.dano(lobo2)
                    dialogo.innerHTML = `<p>${habilidade3.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                } else if (skillEscolhida == "4") {
                    habilidade4.dano(lobo1)
                    habilidade4.dano(lobo2)
                    habilidade4.dano(lobo3)
                    habilidade4.dano(lobo4)
                    dialogo.innerHTML = `<p>${habilidade4.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                }
                break
            case '2':

                if (skillEscolhida == "1") {
                    submit.removeEventListener('click', atacarLobo)
                    habilidade1.dano(lobo2)
                    dialogo.innerHTML = `<p>${habilidade1.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                } else if (skillEscolhida == "2") {
                    submit.removeEventListener('click', atacarLobo)
                    habilidade2.dano(lobo2)
                    dialogo.innerHTML = `<p>${habilidade2.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                } else if (skillEscolhida == "3") {
                    submit.removeEventListener('click', atacarLobo)
                    habilidade3.dano(lobo3)
                    habilidade3.dano(lobo4)
                    dialogo.innerHTML = `<p>${habilidade3.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                } else if (skillEscolhida == "4") {
                    submit.removeEventListener('click', atacarLobo)
                    habilidade4.dano(lobo5)
                    habilidade4.dano(lobo6)
                    habilidade4.dano(lobo7)
                    habilidade4.dano(lobo8)
                    dialogo.innerHTML = `<p>${habilidade4.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                }
                break
            case '3':

                if (skillEscolhida == "1") {
                    submit.removeEventListener('click', atacarLobo)
                    habilidade1.dano(lobo3)
                    dialogo.innerHTML = `<p>${habilidade1.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                } else if (skillEscolhida == "2") {
                    submit.removeEventListener('click', atacarLobo)
                    habilidade2.dano(lobo3)
                    dialogo.innerHTML = `<p>${habilidade1.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                } else if (skillEscolhida == "3") {
                    submit.removeEventListener('click', atacarLobo)
                    habilidade3.dano(lobo5)
                    habilidade3.dano(lobo6)
                    dialogo.innerHTML = `<p>${habilidade3.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                }
                break
            case '4':

                if (skillEscolhida == "1") {
                    submit.removeEventListener('click', atacarLobo)
                    habilidade1.dano(lobo4)
                    dialogo.innerHTML = `<p>${habilidade1.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                } else if (skillEscolhida == "2") {
                    submit.removeEventListener('click', atacarLobo)
                    habilidade2.dano(lobo4)
                    dialogo.innerHTML = `<p>${habilidade2.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                } else if (skillEscolhida == "3") {
                    submit.removeEventListener('click', atacarLobo)
                    habilidade3.dano(lobo7)
                    habilidade3.dano(lobo8)
                    dialogo.innerHTML = `<p>${habilidade3.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                }
                break
            case '5':

                if (skillEscolhida == "1") {
                    submit.removeEventListener('click', atacarLobo)
                    habilidade1.dano(lobo5)
                    dialogo.innerHTML = `<p>${habilidade1.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                } else if (skillEscolhida == "2") {
                    submit.removeEventListener('click', atacarLobo)
                    habilidade2.dano(lobo6)
                    dialogo.innerHTML = `<p>${habilidade1.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                }
                break
            case '6':

                if (skillEscolhida == "1") {
                    habilidade1.dano(lobo6)
                    dialogo.innerHTML = `<p>${habilidade1.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                } else if (skillEscolhida == "2") {
                    habilidade2.dano(lobo6)
                    dialogo.innerHTML = `<p>${habilidade1.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                }
                break
            case '7':

                if (skillEscolhida == "1") {
                    habilidade1.dano(lobo7)
                    dialogo.innerHTML = `<p>${habilidade1.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                } else if (skillEscolhida == "2") {
                    habilidade2.dano(lobo7)
                    dialogo.innerHTML = `<p>${habilidade2.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                }
                break
            case '8':


                if (skillEscolhida == "1") {
                    habilidade1.dano(lobo8)
                    dialogo.innerHTML = `<p>${habilidade1.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)

                } else if (skillEscolhida == "2") {

                    habilidade2.dano(lobo8)
                    dialogo.innerHTML = `<p>${habilidade2.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)

                }
                break
        }
    } else if (classe == '2') {
        switch (loboAtacado) {
            case '1':
                if (skillEscolhida == "1") {
                    habilidade1.dano(lobo1)
                    habilidade1.dano(lobo2)
                    habilidade1.dano(lobo3)
                    habilidade1.dano(lobo4)
                    submit.removeEventListener('click', atacarLobo)
                    dialogo.innerHTML = `<p>${habilidade1.posSkill()} <br><br><br>Os lobos revidaram causando: ${lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                } else if (skillEscolhida == "2") {
                    habilidade2.dano(lobo1)
                    habilidade2.dano(lobo2)
                    habilidade2.dano(lobo3)
                    habilidade2.dano(lobo4)
                    lobo1.hp -= (guerreiro.dano + habilidade2.dano)
                    dialogo.innerHTML = `<p>${habilidade2.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                } else if (skillEscolhida == "3") {
                    habilidade3.dano(lobo1)
                    habilidade3.dano(lobo2)
                    habilidade3.dano(lobo3)
                    habilidade3.dano(lobo4)
                    submit.removeEventListener('click', atacarLobo)

                    dialogo.innerHTML = `<p>${habilidade3.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                } else if (skillEscolhida == "4") {
                    habilidade4.dano(lobo1)
                    habilidade4.dano(lobo2)
                    habilidade4.dano(lobo3)
                    habilidade4.dano(lobo4)
                    habilidade4.dano(lobo5)
                    habilidade4.dano(lobo6)
                    habilidade4.dano(lobo7)
                    habilidade4.dano(lobo8)
                    submit.removeEventListener('click', atacarLobo)
                    dialogo.innerHTML = `<p>${habilidade4.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                }
                break
            case '2':

                if (skillEscolhida == "1") {
                    submit.removeEventListener('click', atacarLobo)
                    habilidade1.dano(lobo5)
                    habilidade2.dano(lobo6)
                    habilidade3.dano(lobo7)
                    habilidade4.dano(lobo8)
                    dialogo.innerHTML = `<p>${habilidade1.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                } else if (skillEscolhida == "2") {
                    habilidade2.dano(lobo5)
                    habilidade2.dano(lobo6)
                    habilidade2.dano(lobo7)
                    habilidade2.dano(lobo8)
                    submit.removeEventListener('click', atacarLobo)
                    lobo2.hp -= (guerreiro.dano + habilidade2.dano)
                    dialogo.innerHTML = `<p>${habilidade2.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                } else if (skillEscolhida == "3") {
                    habilidade3.dano(lobo5)
                    habilidade3.dano(lobo6)
                    habilidade3.dano(lobo7)
                    habilidade3.dano(lobo8)
                    submit.removeEventListener('click', atacarLobo)

                    dialogo.innerHTML = `<p>${habilidade3.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                }
                break
        }
    } else if (classe == '3') {
        switch (loboAtacado) {
            case '1':

                if (skillEscolhida == "1") {
                    habilidade1.dano(lobo1)
                    dialogo.innerHTML = `<p>${habilidade1.posSkill()} <br><br><br>Os lobos revidaram causando: ${lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                } else if (skillEscolhida == "2") {
                    habilidade2.dano(lobo1)
                    dialogo.innerHTML = `<p>${habilidade2.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                } else if (skillEscolhida == "3") {
                    habilidade3.dano(lobo1)
                    habilidade3.dano(lobo2)
                    
                    dialogo.innerHTML = `<p>${habilidade3.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                } else if (skillEscolhida == "4") {
                    habilidade4.dano(lobo1)
                    dialogo.innerHTML = `<p>${habilidade4.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                }
                break
            case '2':

                if (skillEscolhida == "1") {
                    submit.removeEventListener('click', atacarLobo)
                    habilidade1.dano(lobo2)
                    dialogo.innerHTML = `<p>${habilidade1.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                } else if (skillEscolhida == "2") {
                    submit.removeEventListener('click', atacarLobo)
                    habilidade2.dano(lobo2)
                    dialogo.innerHTML = `<p>${habilidade2.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                } else if (skillEscolhida == "3") {
                    submit.removeEventListener('click', atacarLobo)
                    habilidade3.dano(lobo3)
                    habilidade3.dano(lobo4)
                    dialogo.innerHTML = `<p>${habilidade3.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                } else if (skillEscolhida == "4") {
                    submit.removeEventListener('click', atacarLobo)
                    habilidade4.dano(lobo2)
                    dialogo.innerHTML = `<p>${habilidade4.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                }
                break
            case '3':

                if (skillEscolhida == "1") {
                    submit.removeEventListener('click', atacarLobo)
                    habilidade1.dano(lobo3)
                    dialogo.innerHTML = `<p>${habilidade1.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                } else if (skillEscolhida == "2") {
                    submit.removeEventListener('click', atacarLobo)
                    habilidade2.dano(lobo3)
                    dialogo.innerHTML = `<p>${habilidade1.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                } else if (skillEscolhida == "3") {
                    submit.removeEventListener('click', atacarLobo)
                    habilidade3.dano(lobo5)
                    habilidade3.dano(lobo6)
                    dialogo.innerHTML = `<p>${habilidade3.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                } else if (skillEscolhida == "4") {
                    submit.removeEventListener('click', atacarLobo)
                    habilidade4.dano(lobo3)
                    dialogo.innerHTML = `<p>${habilidade4.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                }
                break
            case '4':

                if (skillEscolhida == "1") {
                    submit.removeEventListener('click', atacarLobo)
                    habilidade1.dano(lobo4)
                    dialogo.innerHTML = `<p>${habilidade1.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                } else if (skillEscolhida == "2") {
                    submit.removeEventListener('click', atacarLobo)
                    habilidade2.dano(lobo4)
                    dialogo.innerHTML = `<p>${habilidade2.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                } else if (skillEscolhida == "3") {
                    submit.removeEventListener('click', atacarLobo)
                    habilidade3.dano(lobo7)
                    habilidade3.dano(lobo8)
                    dialogo.innerHTML = `<p>${habilidade3.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                } else if (skillEscolhida == "4") {
                    submit.removeEventListener('click', atacarLobo)
                    habilidade4.dano(lobo4)
                    dialogo.innerHTML = `<p>${habilidade4.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                }
                break
            case '5':

                if (skillEscolhida == "1") {
                    submit.removeEventListener('click', atacarLobo)
                    habilidade1.dano(lobo5)
                    dialogo.innerHTML = `<p>${habilidade1.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                } else if (skillEscolhida == "2") {
                    submit.removeEventListener('click', atacarLobo)
                    habilidade2.dano(lobo6)
                    dialogo.innerHTML = `<p>${habilidade1.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                } else if (skillEscolhida == "4") {
                    submit.removeEventListener('click', atacarLobo)
                    habilidade4.dano(lobo5)
                    dialogo.innerHTML = `<p>${habilidade4.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                }
                break
            case '6':

                if (skillEscolhida == "1") {
                    habilidade1.dano(lobo6)
                    dialogo.innerHTML = `<p>${habilidade1.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                } else if (skillEscolhida == "2") {
                    habilidade2.dano(lobo6)
                    dialogo.innerHTML = `<p>${habilidade1.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                } else if (skillEscolhida == "4") {
                    submit.removeEventListener('click', atacarLobo)
                    habilidade4.dano(lobo6)
                    dialogo.innerHTML = `<p>${habilidade4.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                }
                break
            case '7':

                if (skillEscolhida == "1") {
                    habilidade1.dano(lobo7)
                    dialogo.innerHTML = `<p>${habilidade1.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                } else if (skillEscolhida == "2") {
                    habilidade2.dano(lobo7)
                    dialogo.innerHTML = `<p>${habilidade2.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                } else if (skillEscolhida == "4") {
                    submit.removeEventListener('click', atacarLobo)
                    habilidade4.dano(lobo7)
                    dialogo.innerHTML = `<p>${habilidade4.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                }
                break
            case '8':


                if (skillEscolhida == "1") {
                    habilidade1.dano(lobo8)
                    dialogo.innerHTML = `<p>${habilidade1.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)

                } else if (skillEscolhida == "2") {

                    habilidade2.dano(lobo8)
                    dialogo.innerHTML = `<p>${habilidade2.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)

                } else if (skillEscolhida == "4") {
                    submit.removeEventListener('click', atacarLobo)
                    habilidade4.dano(lobo8)
                    dialogo.innerHTML = `<p>${habilidade4.posSkill()} <br><br><br>Os lobos revidaram causando: ${(lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano)} de Dano !</p>`
                    guerreiro.hp -= (lobo1.dano + lobo2.dano + lobo3.dano + lobo4.dano + lobo5.dano + lobo6.dano + lobo7.dano + lobo8.dano) - guerreiro.defesa
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                }
                break
        }
    }

}
function escolherSkill() {
    skillEscolhida = input.value
    input.value = ''
    switch (classe) {
        case '1':

            if (skillEscolhida == "1") {
                keys = ['1', '2', '3', '4', '5', '6', '7', '8']
                dialogo.innerHTML = `<p>Escolha o lobo que você quer atacar: <br><br><br> 1 Lobo1-<span>${lobo1.hp}</span> | 2 Lobo2-<span>${lobo2.hp}</span> | 3 Lobo3-<span>${lobo3.hp}</span> | 4 Lobo4-<span>${lobo4.hp}</span> | 5 Lobo5-<span>${lobo5.hp}</span> | 6 Lobo6-<span>${lobo6.hp}</span>  7 Lobo7-<span>${lobo7.hp}</span> | 8 Lobo8-<span>${lobo8.hp}</span><br><br>${playerName} HP: <span>${guerreiro.hp}</span></p>`
                submit.removeEventListener('click', escolherSkill)
                submit.addEventListener('click', atacarLobo)
            } else if (skillEscolhida == "2") {
                keys = ['1', '2', '3', '4', '5', '6', '7', '8']
                dialogo.innerHTML = `<p>Escolha o lobo que você quer atacar: <br><br><br> 1 Lobo1-<span>${lobo1.hp}</span> | 2 Lobo2-<span>${lobo2.hp}</span> | 3 Lobo3-<span>${lobo3.hp}</span> | 4 Lobo4-<span>${lobo4.hp}</span> | 5 Lobo5-<span>${lobo5.hp}</span> | 6 Lobo6-<span>${lobo6.hp}</span>  7 Lobo7-<span>${lobo7.hp}</span> | 8 Lobo8-<span>${lobo8.hp}</span><br><br>${playerName} HP: <span>${guerreiro.hp}</span></p>`
                submit.removeEventListener('click', escolherSkill)
                submit.addEventListener('click', atacarLobo)
            } else if (skillEscolhida == "3") {
                keys = ['1', '2', '3', '4']
                dialogo.innerHTML = `<p>Escolha a dupla de lobos que você quer atacar: <br><br><br>1 Lobo1-<span>${lobo1.hp}</span> |  Lobo2-<span>${lobo2.hp}</span><br>2 Lobo3-<span>${lobo3.hp}</span> | Lobo4-<span>${lobo4.hp}</span><br>3 Lobo5-<span>${lobo5.hp}</span> | Lobo6-<span>${lobo6.hp}</span><br>4 Lobo7-<span>${lobo7.hp}</span> | Lobo8-<span>${lobo8.hp}</span><br><br>${playerName} HP: <span>${guerreiro.hp}</span></p>`
                submit.removeEventListener('click', escolherSkill)
                submit.addEventListener('click', atacarLobo)
            } else if (skillEscolhida == "4") {
                if (quantidade < 1) {
                    keys = []
                    dialogo.innerHTML = `<p>Você não pode mais usar esta skill!</p>`
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                    skillEscolhida = ''
                    submit.removeEventListener('click', escolherSkill)
                    submit.removeEventListener('click', atacarLobo)
                    btn.addEventListener('click', parte3)
                    part3 = 0
                } else if (quantidade >= 1) {
                    quantidade -= 1
                    keys = ['1', '2']
                    dialogo.innerHTML = `<p>Escolha a leva de lobos você quer atacar: <br><br><br>1 Lobo1-<span>${lobo1.hp}</span> | Lobo2-<span>${lobo2.hp}</span> | Lobo3-<span>${lobo3.hp}</span> | Lobo4-<span>${lobo4.hp}</span><br>2 Lobo5-<span>${lobo5.hp}</span> | Lobo6-<span>${lobo6.hp}</span> | Lobo7-<span>${lobo7.hp}</span> | Lobo8-<span>${lobo8.hp}</span><br><br>${playerName} HP: <span>${guerreiro.hp}</span></p>`
                    submit.removeEventListener('click', escolherSkill)
                    submit.addEventListener('click', atacarLobo)
                }

            }

            break
        case '2':
            if (skillEscolhida == "1") {
                keys = ['1', '2']
                dialogo.innerHTML = `<p>Escolha a leva de lobos você quer atacar: <br><br><br>1 Lobo1-<span>${lobo1.hp}</span> | Lobo2-<span>${lobo2.hp}</span> | Lobo3-<span>${lobo3.hp}</span> | Lobo4-<span>${lobo4.hp}</span><br>2 Lobo5-<span>${lobo5.hp}</span> | Lobo6-<span>${lobo6.hp}</span> | Lobo7-<span>${lobo7.hp}</span> | Lobo8-<span>${lobo8.hp}</span><br><br>${playerName} HP: <span>${guerreiro.hp}</span></p>`
                submit.removeEventListener('click', escolherSkill)
                submit.addEventListener('click', atacarLobo)
            } else if (skillEscolhida == "2") {
                keys = ['1', '2']
                dialogo.innerHTML = `<p>Escolha a leva de lobos você quer atacar: <br><br><br>1 Lobo1-<span>${lobo1.hp}</span> | Lobo2-<span>${lobo2.hp}</span> | Lobo3-<span>${lobo3.hp}</span> | Lobo4-<span>${lobo4.hp}</span><br>2 Lobo5-<span>${lobo5.hp}</span> | Lobo6-<span>${lobo6.hp}</span> | Lobo7-<span>${lobo7.hp}</span> | Lobo8-<span>${lobo8.hp}</span><br><br>${playerName} HP: <span>${guerreiro.hp}</span></p>`
                submit.removeEventListener('click', escolherSkill)
                submit.addEventListener('click', atacarLobo)
            } else if (skillEscolhida == "3") {
                keys = ['1', '2']
                dialogo.innerHTML = `<p>Escolha a leva de lobos você quer atacar: <br><br><br>1 Lobo1-<span>${lobo1.hp}</span> | Lobo2-<span>${lobo2.hp}</span> | Lobo3-<span>${lobo3.hp}</span> | Lobo4-<span>${lobo4.hp}</span><br>2 Lobo5-<span>${lobo5.hp}</span> | Lobo6-<span>${lobo6.hp}</span> | Lobo7-<span>${lobo7.hp}</span> | Lobo8-<span>${lobo8.hp}</span><br><br>${playerName} HP: <span>${guerreiro.hp}</span></p>`
                submit.removeEventListener('click', escolherSkill)
                submit.addEventListener('click', atacarLobo)
            } else if (skillEscolhida == "4") {
                if (quantidade < 1) {
                    keys = []
                    dialogo.innerHTML = `<p>Você não pode mais usar esta skill!</p>`
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                    skillEscolhida = ''
                    submit.removeEventListener('click', escolherSkill)
                    submit.removeEventListener('click', atacarLobo)
                    btn.addEventListener('click', parte3)
                    part3 = 0
                } else if (quantidade >= 1) {
                    quantidade -= 1
                    keys = ['1']
                    dialogo.innerHTML = `<p>Ataque os lobos: <br><br><br>1 Lobo1-<span>${lobo1.hp}</span> | Lobo2-<span>${lobo2.hp}</span> | Lobo3-<span>${lobo3.hp}</span> | Lobo4-<span>${lobo4.hp}</span> Lobo5-<span>${lobo5.hp}</span> | Lobo6-<span>${lobo6.hp}</span> | Lobo7-<span>${lobo7.hp}</span> | Lobo8-<span>${lobo8.hp}</span></p>`
                    submit.removeEventListener('click', escolherSkill)
                    submit.addEventListener('click', atacarLobo)
                }

            }

            break
        case '3':

            if (skillEscolhida == "1") {
                keys = ['1', '2', '3', '4', '5', '6', '7', '8']
                dialogo.innerHTML = `<p>Escolha o lobo que você quer atacar: <br><br><br> 1 Lobo1-<span>${lobo1.hp}</span> | 2 Lobo2-<span>${lobo2.hp}</span> | 3 Lobo3-<span>${lobo3.hp}</span> | 4 Lobo4-<span>${lobo4.hp}</span> | 5 Lobo5-<span>${lobo5.hp}</span> | 6 Lobo6-<span>${lobo6.hp}</span>  7 Lobo7-<span>${lobo7.hp}</span> | 8 Lobo8-<span>${lobo8.hp}</span><br><br>${playerName} HP: <span>${guerreiro.hp}</span></p>`
                submit.removeEventListener('click', escolherSkill)
                submit.addEventListener('click', atacarLobo)
            } else if (skillEscolhida == "2") {
                keys = ['1', '2', '3', '4', '5', '6', '7', '8']
                dialogo.innerHTML = `<p>Escolha o lobo que você quer atacar: <br><br><br> 1 Lobo1-<span>${lobo1.hp}</span> | 2 Lobo2-<span>${lobo2.hp}</span> | 3 Lobo3-<span>${lobo3.hp}</span> | 4 Lobo4-<span>${lobo4.hp}</span> | 5 Lobo5-<span>${lobo5.hp}</span> | 6 Lobo6-<span>${lobo6.hp}</span>  7 Lobo7-<span>${lobo7.hp}</span> | 8 Lobo8-<span>${lobo8.hp}</span><br><br>${playerName} HP: <span>${guerreiro.hp}</span></p>`
                submit.removeEventListener('click', escolherSkill)
                submit.addEventListener('click', atacarLobo)
            } else if (skillEscolhida == "3") {
                keys = ['1', '2', '3', '4']
                dialogo.innerHTML = `<p>Escolha a dupla de lobos que você quer atacar: <br><br><br>1 Lobo1-<span>${lobo1.hp}</span> |  Lobo2-<span>${lobo2.hp}</span><br>2 Lobo3-<span>${lobo3.hp}</span> | Lobo4-<span>${lobo4.hp}</span><br>3 Lobo5-<span>${lobo5.hp}</span> | Lobo6-<span>${lobo6.hp}</span><br>4 Lobo7-<span>${lobo7.hp}</span> | Lobo8-<span>${lobo8.hp}</span><br><br>${playerName} HP: <span>${guerreiro.hp}</span></p>`
                submit.removeEventListener('click', escolherSkill)
                submit.addEventListener('click', atacarLobo)
            } else if (skillEscolhida == "4") {
                if (quantidade < 1) {
                    keys = []
                    dialogo.innerHTML = `<p>Você não pode mais usar esta skill!</p>`
                    submit.style.visibility = 'hidden'
                    input.style.visibility = 'hidden'
                    btn.style.visibility = 'visible'
                    btn.addEventListener('click', parte3)
                    skillEscolhida = ''
                    submit.removeEventListener('click', escolherSkill)
                    submit.removeEventListener('click', atacarLobo)
                    btn.addEventListener('click', parte3)
                    part3 = 0
                } else if (quantidade >= 1) {
                    quantidade -= 1
                    keys = ['1', '2', '3', '4', '5', '6', '7', '8']
                    dialogo.innerHTML = `<p>Escolha o lobo que você quer atacar: <br><br><br> 1 Lobo1-<span>${lobo1.hp}</span> | 2 Lobo2-<span>${lobo2.hp}</span> | 3 Lobo3-<span>${lobo3.hp}</span> | 4 Lobo4-<span>${lobo4.hp}</span> | 5 Lobo5-<span>${lobo5.hp}</span> | 6 Lobo6-<span>${lobo6.hp}</span>  7 Lobo7-<span>${lobo7.hp}</span> | 8 Lobo8-<span>${lobo8.hp}</span><br><br>${playerName} HP: <span>${guerreiro.hp}</span></p>`
                    submit.removeEventListener('click', escolherSkill)
                    submit.addEventListener('click', atacarLobo)
                }

            }

            break
    }

}
function parte3() {
    part3++

    input.value = ''

    switch (part3) {
        case 1:
            if (quantidade <= 0) {
                quantidade = 0
            }
            if (lobo1.hp < 1 || lobo1.dano < 1) {
                lobo1.dead1()
            }
            if (lobo2.hp < 1 || lobo2.dano < 1) {
                lobo2.dead2()
            }
            if (lobo3.hp < 1 || lobo3.dano < 1) {
                lobo3.dead3()
            }
            if (lobo4.hp < 1 || lobo4.dano < 1) {
                lobo4.dead4()
            }
            if (lobo5.hp < 1 || lobo5.dano < 1) {
                lobo5.dead5()
            }
            if (lobo6.hp < 1 || lobo6.dano < 1) {
                lobo6.dead6()
            }
            if (lobo7.hp < 1 || lobo7.dano < 1) {
                lobo7.dead7()
            }
            if (lobo8.hp < 1 || lobo8.dano < 1) {
                lobo8.dead8()
            }

            if (lobo1.defesa < 1) {
                lobo1.defesa = 0
            }
            if (lobo2.defesa < 1) {
                lobo2.defesa = 0
            }
            if (lobo3.defesa < 1) {
                lobo3.defesa = 0
            }
            if (lobo4.defesa < 1) {
                lobo4.defesa = 0
            }
            if (lobo5.defesa < 1) {
                lobo5.defesa = 0
            }
            if (lobo6.defesa < 1) {
                lobo6.defesa = 0
            }
            if (lobo7.defesa < 1) {
                lobo7.defesa = 0
            }
            if (lobo8.defesa < 1) {
                lobo8.defesa = 0
            }


            skillEscolhida = ''
            loboAtacado = ''
            submit.addEventListener('click', escolherSkill)
            submit.removeEventListener('click', atacarLobo)
            btn.removeEventListener('click', parte3)
            submit.style.visibility = 'visible'
            input.style.visibility = 'visible'
            btn.style.visibility = 'hidden'
            keys = ['1', '2', '3', '4']
            dialogo.innerHTML = `<p>Lobo1-<span>${lobo1.hp}</span> | Lobo2-<span>${lobo2.hp}</span> | Lobo3-<span>${lobo3.hp}</span> | Lobo4-<span>${lobo4.hp}</span> | Lobo5-<span>${lobo5.hp}</span> | Lobo6-<span>${lobo6.hp}</span>  Lobo7-<span>${lobo7.hp}</span> | Lobo8-<span>${lobo8.hp}</span><br><br>1 ${habilidade1.nome} : ${habilidade1.des} danototal: ${habilidade1.totalDan}<br>2 ${habilidade2.nome} : ${habilidade2.des} danototal: ${habilidade2.totalDan}<br>3 ${habilidade3.nome} : ${habilidade3.des} danototal: ${habilidade3.totalDan}<br>4 ${habilidade4.nome} : ${habilidade4.des} danototal: ${habilidade4.totalDan} restam: ${quantidade} <br>${playerName} HP: <span>${guerreiro.hp}</span></p>`

            if (lobo1.dano == 0 && lobo2.dano == 0 && lobo3.dano == 0 && lobo4.dano == 0 && lobo5.dano == 0 && lobo6.dano == 0 && lobo7.dano == 0 && lobo8.dano == 0) {
                submit.removeEventListener('click', escolherSkill)
                submit.removeEventListener('click', atacarLobo)
                btn.addEventListener('click', parte4)
                submit.style.visibility = 'hidden'
                input.style.visibility = 'hidden'
                btn.style.visibility = 'visible'
                keys = []
                dialogo.innerHTML = `<p>Você matou todos os lobos !<br><br><br>${playerName} ganhou 500Xp</p>`
            }
            if (guerreiro.hp < 1) {
                guerreiro.hp = 0
                btn.addEventListener('click', preparo)
                submit.removeEventListener('click', atacarLobo)
                submit.removeEventListener('click', escolherSkill)
                prepr = 0
                submit.style.visibility = 'hidden'
                input.style.visibility = 'hidden'
                btn.style.visibility = 'visible'
                keys = []
                submit.removeEventListener('click', atacarLobo)
                dialogo.innerHTML = '<p><br><br>Você perdeu...<br>Volte para o acampamento, se recupere e tente novamente!<p/>'
                fenrir.dano = 30
                fenrir.hp = 2000
                fenrir.defesa = 20
                lobo1.dano = 10
                lobo1.hp = 300
                lobo1.defesa = 0
                lobo2.dano = 10
                lobo2.hp = 300
                lobo2.defesa = 0
                lobo3.dano = 10
                lobo3.hp = 300
                lobo3.defesa = 0
                lobo4.dano = 10
                lobo4.hp = 300
                lobo4.defesa = 0
                lobo5.dano = 10
                lobo5.hp = 300
                lobo5.defesa = 0
                lobo6.dano = 10
                lobo6.hp = 300
                lobo6.defesa = 0
                lobo7.dano = 10
                lobo7.hp = 300
                lobo7.defesa = 0
                lobo8.dano = 10
                lobo8.hp = 300
                lobo8.defesa = 0
            }
            break
    }
}




function parte4() {
    part4++
    input.value = ''
    switch (part4) {

        case 1:
            tela.innerHTML = `<img src="imagens/portas.png" alt="">`
            dialogo.innerHTML = `<p><br><br>Após a derrota dos lobos, de um dos grandes portões</p>`
            break
        case 2:
            dialogo.innerHTML = `<p><br><br>Surge uma criatura com grandes olhos vermelhos e garras 3 vezes maiores do que a dos lobos que você enfrentou...</p>`
            break
        case 3:
            tela.innerHTML = `<img src="imagens/fenrir.png" alt="">`
            dialogo.innerHTML = `<p>A criatura se revela !<br><br>O nome dela é Fenrir, o grande lobo da mitologia nórdica !</p>`
            break
        case 4:
            dialogo.innerHTML = `<p>'Fenrir te ataca ! <br><br>Que comece a batalha !</p>`
            btn.removeEventListener('click', parte4)
            btn.addEventListener('click', parte5)
            break
    }
}


let fenrir = {
    dano: 20, hp: 1500, defesa: 20, dead:function () {
        this.dano = 0
        this.hp = `<span class="morto">0</span>`
        this.defesa = 0
    }
}

let loboAtacado2
let skillEscolhida2

function atacarFenrir() {
    loboAtacado2 = input.value
    input.value = ''
    part5 = 0
    switch (loboAtacado2) {
        case '1':
            if (skillEscolhida2 == '1') {
                habilidade1.dano(fenrir)
                dialogo.innerHTML = `<p>${habilidade1.posSkill()} <br><br><br>Fenrir revidou causando: ${fenrir.dano} de Dano !</p>`
                guerreiro.hp -= (fenrir.dano)
                submit.style.visibility = 'hidden'
                input.style.visibility = 'hidden'
                btn.style.visibility = 'visible'
                keys = []
                btn.addEventListener('click', parte5)
                submit.removeEventListener('click', atacarFenrir)
            } else if (skillEscolhida2 == '2') {
                habilidade2.dano(fenrir)
                dialogo.innerHTML = `<p>${habilidade2.posSkill()} <br><br><br>Fenrir revidou causando: ${fenrir.dano} de Dano !</p>`
                guerreiro.hp -= (fenrir.dano)
                submit.style.visibility = 'hidden'
                input.style.visibility = 'hidden'
                btn.style.visibility = 'visible'
                keys = []
                btn.addEventListener('click', parte5)
                submit.removeEventListener('click', atacarFenrir)
            } else if (skillEscolhida2 == '3') {
                fenrir.hp -= habilidade3.totalDan
                dialogo.innerHTML = `<p>${habilidade3.posSkill()} <br><br><br>Fenrir revidou causando: ${fenrir.dano} de Dano !</p>`
                guerreiro.hp -= (fenrir.dano)
                submit.style.visibility = 'hidden'
                input.style.visibility = 'hidden'
                btn.style.visibility = 'visible'
                keys = []
                btn.addEventListener('click', parte5)
                submit.removeEventListener('click', atacarFenrir)
            } else if (skillEscolhida2 == '4') {
                habilidade4.dano(fenrir)
                dialogo.innerHTML = `<p>${habilidade4.posSkill()} <br><br><br>Fenrir revidou causando: ${fenrir.dano} de Dano !</p>`
                guerreiro.hp -= (fenrir.dano)
                submit.style.visibility = 'hidden'
                input.style.visibility = 'hidden'
                btn.style.visibility = 'visible'
                keys = []
                btn.addEventListener('click', parte5)
                submit.removeEventListener('click', atacarFenrir)
            }
            break
    }


}
function escolherSkill2() {
    skillEscolhida2 = input.value
    input.value = ''
    part5 = 0

    if (skillEscolhida2 == "1") {
        keys = ['1']
        dialogo.innerHTML = `<p>Ataque o Fenrir: <br><br><br> 1 Fenrir"Boss"-<span>${fenrir.hp}</span><br><br><br>${playerName} HP: <span>${guerreiro.hp}</span></p>`
        submit.removeEventListener('click', escolherSkill2)
        submit.addEventListener('click', atacarFenrir)
    } else if (skillEscolhida2 == "2") {
        keys = ['1']
        dialogo.innerHTML = `<p>Ataque o Fenrir: <br><br><br> 1 Fenrir"Boss"-<span>${fenrir.hp}</span><br><br><br>${playerName} HP: <span>${guerreiro.hp}</span></p>`
        submit.removeEventListener('click', escolherSkill2)
        submit.addEventListener('click', atacarFenrir)
    } else if (skillEscolhida2 == "3") {
        keys = ['1']
        dialogo.innerHTML = `<p>Ataque o Fenrir: <br><br><br> 1 Fenrir"Boss"-<span>${fenrir.hp}</span><br><br><br>${playerName} HP: <span>${guerreiro.hp}</span></p>`
        submit.removeEventListener('click', escolherSkill2)
        submit.addEventListener('click', atacarFenrir)
    } else if (skillEscolhida2 == "4") {
        if (quantidade < 1) {
            keys = []
            dialogo.innerHTML = `<p>Você não pode mais usar esta skill!</p>`
            submit.style.visibility = 'hidden'
            input.style.visibility = 'hidden'
            btn.style.visibility = 'visible'
            btn.addEventListener('click', parte5)
            skillEscolhida2 = ''
            submit.removeEventListener('click', escolherSkill2)
            submit.removeEventListener('click', atacarFenrir)
            part5 = 0
        } else if (quantidade >= 1) {
            quantidade -= 1
            keys = ['1']
            dialogo.innerHTML = `<p>Ataque o Fenrir: <br><br><br> 1 Fenrir"Boss"-<span>${fenrir.hp}</span><br><br><br>${playerName} HP: <span>${guerreiro.hp}</span></p>`
            submit.removeEventListener('click', escolherSkill2)
            submit.addEventListener('click', atacarFenrir)
        }

    }
}


function parte5() {
    part5++

    input.value = ''
    switch (part5) {
        case 1:
            if (quantidade <= 0) {
                quantidade = 0
            }
            if (fenrir.hp < 1) {
                fenrir.dead()
            }
            skillEscolhida2 = ''
            loboAtacado2 = ''
            submit.addEventListener('click', escolherSkill2)
            submit.removeEventListener('click', atacarFenrir)
            btn.removeEventListener('click', parte5)
            submit.style.visibility = 'visible'
            input.style.visibility = 'visible'
            btn.style.visibility = 'hidden'

            keys = ['1', '2', '3', '4']
            dialogo.innerHTML = `<p>Fenrir-<span>${fenrir.hp}</span><br><br>1 ${habilidade1.nome} : ${habilidade1.des} danototal: ${habilidade1.totalDan}<br>2 ${habilidade2.nome} : ${habilidade2.des} danototal: ${habilidade2.totalDan}<br>3 ${habilidade3.nome} : ${habilidade3.des} danototal: ${habilidade3.totalDan}<br>4 ${habilidade4.nome} : ${habilidade4.des} danototal: ${habilidade4.totalDan} restam: ${quantidade} <br>${playerName} HP: <span>${guerreiro.hp}</span></p>`

            if (fenrir.dano < 1 ) {
                tela.innerHTML = `<img src="imagens/fenrirDead.png" alt="">`
                btn.addEventListener('click', parte6)
                submit.style.visibility = 'hidden'
                input.style.visibility = 'hidden'
                btn.style.visibility = 'visible'
                keys = []
                dialogo.innerHTML = `<p>Parabéns você derrotou a lendária fera Fenrir!<br><br><br>${playerName} ganhou 1000xp</p>`
                submit.removeEventListener('click', atacarFenrir)
                submit.addEventListener('click', escolherSkill2)
            }
            if (guerreiro.hp < 1) {
                guerreiro.hp = 0
                btn.addEventListener('click', preparo)
                prepr = 0
                submit.removeEventListener('click', atacarFenrir)
                submit.removeEventListener('click', escolherSkill2)
                submit.style.visibility = 'hidden'
                input.style.visibility = 'hidden'
                btn.style.visibility = 'visible'
                keys = []
                submit.removeEventListener('click', atacarFenrir)
                dialogo.innerHTML = '<p><br><br>Você perdeu...<br>Volte para o acampamento, se recupere e tente novamente!<p/>'
                fenrir.dano = 30
                fenrir.hp = 2000
                fenrir.defesa = 20
                lobo1.dano = 10
                lobo1.hp = 300
                lobo1.defesa = 0
                lobo2.dano = 10
                lobo2.hp = 300
                lobo2.defesa = 0
                lobo3.dano = 10
                lobo3.hp = 300
                lobo3.defesa = 0
                lobo4.dano = 10
                lobo4.hp = 300
                lobo4.defesa = 0
                lobo5.dano = 10
                lobo5.hp = 300
                lobo5.defesa = 0
                lobo6.dano = 10
                lobo6.hp = 300
                lobo6.defesa = 0
                lobo7.dano = 10
                lobo7.hp = 300
                lobo7.defesa = 0
                lobo8.dano = 10
                lobo8.hp = 300
                lobo8.defesa = 0
            }
            if (fenrir.defesa < 1) {
                fenrir.defesa = 0
            }
           


            break
    }
}


function parte6() {
    tela.innerHTML = ``
    dialogo.innerHTML = `<p>Aguarde a parte 2!</p>`
}














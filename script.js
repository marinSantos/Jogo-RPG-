
alert('Era uma vez um nobre guerreiro escohido para combater o mal do mundo, certo dia ficou comovido com as barbaridades que o rei do reino em que morava andou cometendo, e decidiu participar de um coliseu que o rei avia aberto para terem a oportunidade de enfrenta-lo, qual será o final desta decisão ? ...')

let nomeGuerreiro = prompt('Guarda do coliseu:\n\nSaudações guerreiro! Por favor, informe seu nome para poder participar do combate: ')

alert('Guarda do coliseu:\n \n...\n' + nomeGuerreiro + '... \nEste nome não me é estranho ... \nOuvi falar de uma profecia que... \nEnfim, deve ser algo da minha cabeça !')

let classe
let subClasse
let guerreiro = {}
let abilidade1
let abilidade2
let abilidade3
let abilidade4

while (classe != '1' && classe != '2' && classe != '3') {
    classe = prompt('Guarda do coliseu:\n\nAgora me responda, quais destas 3 armas você sabe usar melhor? \n\n1- Espada "Para cavaleiros"\n2- Adaga "Para assasinos"\n3- Livro mágico "Para magos" ')
}

while (subClasse != '1' && subClasse != '2') {
    switch (classe) {
        case '1':
            alert('Guarda do coliseu:\n\nEntendi! Então você é um cavaleiro !')
            subClasse = prompt('Guarda do coliseu:\n\nMasque tipo de cavaleiro você é ?\n\n1-Cavaleiro dizimador\n2-Cavaleiro templário')
            if (subClasse == 1) {

                alert('Guarda do coliseu:\n\n Certo ! Pegue esta arma...\n\nVocê Recebeu uma LongSword !')
                guerreiro = { class: 'Cavaleiro dizimador', arma: 'LongSword', dano: 150, hp: 450, defesa: 50 }
                abilidade1 = { nome: 'Corte transversal', dano: 100, quantidade: 30, area: false, efeito: 0, des: 'Corta o inimigo com sua espada !' }
                abilidade2 = { nome: 'Ataque esgrima', dano: 100, quantidade: 30, area: false, efeito: 10, des: 'Perfura o inimigo com a ponta de sua espada, diminuindo 5 de defesa !' }
                abilidade3 = { nome: 'Meia Lua', dano: 50, quantidade: 25, area: true, efeito: 0, des: 'Lança diversos projéteis com forma de lua de sua espada !' }
                abilidade4 = {
                    nome: 'Mega meia lua', dano: 150, quantidade: 1, area: true, efeito: 0, des: 'Lança um GRANDE projétil em forma de lua de sua espada ! "Referecia de Bleach"'
                }
            } else if (subClasse == 2) {

                alert('Guarda do coliseu:\n\n Certo ! Pegue esta arma...\n\n\nVocê recebeu uma SwordShild !')
                guerreiro = { class: 'Cavaleiro Templário', arma: 'SwordShild ', dano: 50, hp: 650, defesa: 200 }
                abilidade1 = { nome: 'Corte lateral', dano: 50, quantidade: 50, area: false, efeito: 0, des: 'Corta o inimigo com sua espada !' }
                abilidade2 = { nome: 'Ataque de escudo', dano: 20, quantidade: 30, area: false, efeito: 5, des: 'Golpeia o inimigo com seu escudo !' }
                abilidade3 = { nome: 'Fissura', dano: 25, quantidade: 25, area: true, efeito: 1, des: 'Golpeia o solo com sua espada, assim abrindo buracos no solo, destabilizando os inimigos, os fazendo perder 1 de ataque.' }
                abilidade4 = { nome: 'Take Jeruzalem', dano: 100, quantidade: 1, area: true, efeito: 50, des: 'Se fortalece com orações para retomar Jeruzalém!  Deus vult ! Aumentando 50 pontos na defesa.' }
            }
            break
        case '2':
            alert('Guarda do coliseu:\n\nEntendi! Então você é um assasino !')
            subClasse = prompt('Guarda do coliseu:\n\nMas que tipo de assasino você é ?\n\n1-Assasino ninja\n2-Assasino ladrão')
            if (subClasse == 1) {

                alert('Guarda do coliseu:\n\n Certo ! Pegue esta arma...\n\n\nVocê recebeu uma Katana !')
                guerreiro = { class: 'Assasino ninja', arma: 'Katana', dano: 200, hp: 350, defesa: 50 }
                abilidade1 = { nome: 'konoha senpuu', dano: 50, quantidade: 100, area: false, des: 'Golpea o inimigo com aquela clássica voadora do Rock Lee ! "Referencia de Naruto"' }
                abilidade2 = { nome: 'Corte das sombras', dano: 100, quantidade: 20, area: false, des: 'Usa um jutsu para cegar o inimigo temporariamente, depois executa um corte rápido e preciso onde ele menos espera . ' }
                abilidade3 = { nome: 'Shurikens', dano: 50, quantidade: 20, area: true, des: " " }
                abilidade4 = { nome: 'Assasinato silencioso', dano: 250, quantidade: 1, area: false, des: 'Cria uma área em que o tempo passa mais devagar para inimigo, além do mesmo não poder ouvir ou enchergar absolutamentenada, e assim acertando todos os pontos vitais do inimigo ! Quem apagou a luz ?!' }
            } else if (subClasse == 2) {

                alert('Guarda do coliseu:\n\n Certo ! Pegue esta arma...\n\n\nVocê recebeu duas Adagas vampíricas !')
                guerreiro = { class: 'Assasino ladrão', arma: 'Adagas vampíricas', dano: 150, hp: 400, defesa: 50 }
                abilidade1 = { nome: 'Rasteira', dano: 50, quantidade: 100, area: false, des: 'Da uma rasteira no inimigo o destabilizando, fazendo-o perder 1 de ataque .' }
                abilidade2 = { nome: 'Golpe sujo', dano: 100, quantidade: 20, area: false, des: 'Cria ilusões para distrair o inmigo, assim o atacando pelas costas com suas adagas .' }
                abilidade3 = { nome: 'Furto de vitalidade', dano: 50, quantidade: 20, area: true, des: 'Golpeia o inimigo com suas adagas vampiricas, sugando a vitalidade dos mesmos ! Ganhando assim 5 de vida' }
                abilidade4 = { nome: 'Drácula', dano: 150, quantidade: 1, area: false, des: 'Marca o inimigo ao desferir um golpe, e então a marca começa a drenar vitalidade do mesmo, reornando 50 de vida ao usuário !' }
            }
            break
        case '3':
            alert('Guarda do coliseu:\n\nEntendi! Então você é um mago !')
            subClasse = prompt('Guarda do coliseu:\n\nMas que tipo de mago você é ?\n\n\n1-Mago destruidor\n2-Mago de controle')
            if (subClasse == 1) {

                alert('Guarda do coliseu:\n\n Certo ! Pegue esta arma...\n\n\nVocê recebeu o Livro mágico da destruição !')

                guerreiro = { class: 'Mago destruidor', arma: 'Livro mágico da destruição ', dano: 500, hp: 200, defesa: 0 }
                abilidade1 = { nome: 'Lanças de raios', dano: 100, quantidade: 20, area: true, des: 'Cria um conjunto de lanças consruidas por raios, assim empalando e eletrocutando os inimigos' }
                abilidade2 = { nome: 'Bola de fogo comprimida', dano: 100, quantidade: 50, area: true, des: 'Comprime magia de fogo no seu limite e depois a solta nos inmigos, causando uma explossão flamejante queimando os mesmos.' }
                abilidade3 = { nome: 'Tornado cortante', dano: 100, quantidade: 50, area: true, des: 'Conjura um tornado que vai varrendo os inimigos seja onde por onde passar !.' }
                abilidade4 = { nome: 'Chuva de meteoros', dano: 200, quantidade: 1, area: true, des: 'Invoca uma série de meteoros mágicos, atingindo qualquer inimigo abaixo do céu !' }
            } else if (subClasse == 2) {

                alert('Guarda do coliseu:\n\n Certo ! Pegue esta arma...\n\n\nVocê recebeu o Livro mágico do controle !')

                guerreiro = { class: 'Mago de controle', arma: 'Livro mágico do controle ', dano: 400, hp: 400, defesa: 0 }
                abilidade1 = { nome: 'Congelar', dano: 50, quantidade: 50, area: 'true', des: 'Muda o clima do ambiente para o 0 absoluto,congela todos os inimigos em campo, E assim fazendo cada um perder 5 de ataque !' }
                abilidade2 = { nome: 'Maré', dano: 50, quantidade: 50, area: 'false', des: 'Provoca uma maré com fortes correntes de água, causando dano e fazendo os inimigos perderem 5 de defesa' }
                abilidade3 = { nome: 'Terremoto', dano: 50, quantidade: 20, area: 'true', des: 'Manipula as placas tectonicas, fazendo as mesmas provocarem um terremoto.' }
                abilidade4 = { nome: 'Monte do gelo mágico', dano: 100, quantidade: 1, area: 'true', des: 'Invoca um enorme monte com diversor recursos para dificultar a batalha para o inimigo e dar vantagens ao conjurador, aumentando assim 20 pontos de ataque 20 de defesa e tirando 20 pontos de ataque e 20 pontos de defesa dos inimigo. ' }
            }
            break
    }
}


alert('Guarda do coliseu: \nTudo certo !\n Agora aguarde junto a aquela fogueira o início sua primeira batalha...')




let opçaoEscolhida1

function preparo() {
    let opçao
    while (opçao != '1' && opçao != '2' && opçao != '3' && opçao != '4') {
        opçao = prompt('Você está na fogueira do descanso !\n Sente-se relaxe um pouco\n E quando preparado, escolha sua próxima ação...\n\n\n1- Ver informações do personagem\n2- Descansar\n3- Ir para a batalha\n4- Sair do jogo')
    }
    return opçao

}
let vidaQuantidade = guerreiro['hp']
do {
    opçaoEscolhida1 = preparo()
    switch (opçaoEscolhida1) {
        case '1':
            alert('Nome: ' + nomeGuerreiro + '\nClasse/Subclasse: ' + guerreiro['class'] + '\nArma: ' + guerreiro['arma'] + '\nDano: ' + guerreiro['dano'] + '\nHp: ' + guerreiro['hp'] + '\nDefesa: ' + guerreiro['defesa'])
            break
        case '2':

            alert(nomeGuerreiro + ':' + '\n\nZzzzzzzzzzzzzzzzzzzz.....')
            alert(nomeGuerreiro + '\n\n\n"Acorda ........."\n\n' + '"Bocejo ........."')
            alert('Energias restauradas !')
            break
        case '3':
            alert('Vamos para a batalha !')
            break
        default:
            alert('Saindo do jogo...')
    }


} while (opçaoEscolhida1 != '4' && opçaoEscolhida1 != '3')

    let lobo1 = { dano: 5, hp: 150, defesa: 0 }
    let lobo2 = { dano: 5, hp: 150, defesa: 0 }
    let lobo3 = { dano: 5, hp: 150, defesa: 0 }
    let lobo4 = { dano: 5, hp: 150, defesa: 0 }
    let lobo5 = { dano: 5, hp: 150, defesa: 0 }
    let lobo6 = { dano: 5, hp: 150, defesa: 0 }
    let lobo7 = { dano: 5, hp: 150, defesa: 0 }
    let lobo8 = { dano: 5, hp: 150, defesa: 0 }
    let lobo9 = { dano: 5, hp: 150, defesa: 0 }
    let lobo10 = { dano: 5, hp: 50, defesa: 0 }
    let lobos = lobo1['dano'] + lobo2['dano'] + lobo3['dano'] + lobo4['dano'] + lobo5['dano'] + lobo6['dano'] + lobo7['dano'] + lobo8['dano'] + lobo9['dano'] + lobo10['dano']

    let lobosDef = 0


    let skillEscolhida

    let danoCausado

    let opçaoEscolhida

    alert('Ao entrar no coliseu, ' + nomeGuerreiro + ' se depara com uma grande multidão, bradando em alta voz pelo o espetáculo que iria ter...')
    alert('Até que....Do outro lado do coliseu, foram abertos 3 grandes portões...\n\nDos portões saiam em torno de 10 lobos\n\n Mas não eram lobos comuns, eram lobos gigantes com garras de ferro !')
    alert('Eles te atacam !\n\n Que comecem os jogos !')



    function skill() {
        let skill
        skill = prompt('Quantidade de vida atual:' + guerreiro['hp'] + '\n\n\n Escolha uma skill:\n1- ' + abilidade1['nome'] + ' dano: ' + abilidade1['dano'] + '\n' + abilidade1['des'] + '\n2- ' + abilidade2['nome'] + ' dano: ' + abilidade2['dano'] + '\n' + abilidade2['des'] + '\n3- ' + abilidade3['nome'] + ' dano: ' + abilidade3['dano'] + '\n' + abilidade3['des'] + '\n4 "Ultimate"- ' + abilidade4['nome'] + ' dano: ' + abilidade4['dano'] + '\n' + abilidade4['des'])
        return skill
    }
    function atacarLobo() {
        let opçao
        switch (skillEscolhida) {

            case '1':
                if (classe == '1') {
                    while (opçao != '1' && opçao != '2' && opçao != '3' && opçao != '4' && opçao != '5' && opçao != '6' && opçao != '7' && opçao != '8' && opçao != '9' && opçao != '10') {
                        opçao = prompt('Quantidade de vida atual:' + guerreiro['hp'] + '\n\n\n' + 'Escolha a o lobo que você deseja atacar:\n\n1- lobo1 HP: ' + lobo1['hp'] + '  2- lobo2 HP: ' + lobo2['hp'] + '\n3- lobo3 HP: ' + lobo3['hp'] + '  4- lobo4 HP: ' + lobo4['hp'] + '\n5- lobo5 HP: ' + lobo5['hp'] + '  6- lobo6 HP: ' + lobo6['hp'] + '\n7- lobo7 HP: ' + lobo7['hp'] + '  8- lobo8 HP: ' + lobo8['hp'] + '\n9- lobo9 HP: ' + lobo9['hp'] + '  10- lobo10 HP: ' + lobo10['hp'])
                    }
                } else if (classe == '2') {
                    while (opçao != '1' && opçao != '2' && opçao != '3' && opçao != '4' && opçao != '5' && opçao != '6' && opçao != '7' && opçao != '8' && opçao != '9' && opçao != '10') {
                        opçao = prompt('Quantidade de vida atual:' + guerreiro['hp'] + '\n\n\n' + 'Escolha a o lobo que você deseja atacar:\n\n1- lobo1 HP: ' + lobo1['hp'] + '  2- lobo2 HP: ' + lobo2['hp'] + '\n3- lobo3 HP: ' + lobo3['hp'] + '  4- lobo4 HP: ' + lobo4['hp'] + '\n5- lobo5 HP: ' + lobo5['hp'] + '  6- lobo6 HP: ' + lobo6['hp'] + '\n7- lobo7 HP: ' + lobo7['hp'] + '  8- lobo8 HP: ' + lobo8['hp'] + '\n9- lobo9 HP: ' + lobo9['hp'] + '  10- lobo10 HP: ' + lobo10['hp'])
                    }
                }
                else if (classe == '3') {
                    while (opçao != '1' && opçao != '2' && opçao != '3' && opçao != '4' && opçao != '5') {
                        opçao = prompt('Quantidade de vida atual:' + guerreiro['hp'] + '\n\n\n' + 'Escolha o par de lobos que você deseja atacar:\n\n1- lobo1 HP: ' + lobo1['hp'] + '  lobo2 HP: ' + lobo2['hp'] + '\n2- lobo3 HP: ' + lobo3['hp'] + '  lobo4 HP: ' + lobo4['hp'] + '\n3- lobo5 HP: ' + lobo5['hp'] + '  lobo6 HP: ' + lobo6['hp'] + '\n4- lobo7 HP: ' + lobo7['hp'] + '  lobo8 HP: ' + lobo8['hp'] + '\n5- lobo9 HP: ' + lobo9['hp'] + '  lobo10 HP: ' + lobo10['hp'])
                    }
                }
                break
            case '2':
                if (classe == '1') {
                    while (opçao != '1' && opçao != '2' && opçao != '3' && opçao != '4' && opçao != '5' && opçao != '6' && opçao != '7' && opçao != '8' && opçao != '9' && opçao != '10') {

                        ////
                        opçao = prompt('Quantidade de vida atual:' + guerreiro['hp'] + '\n\n\n' + 'Escolha a o lobo que você deseja atacar:\n\n1- lobo1 HP: ' + lobo1['hp'] + '  2- lobo2 HP: ' + lobo2['hp'] + '\n3- lobo3 HP: ' + lobo3['hp'] + '  4- lobo4 HP: ' + lobo4['hp'] + '\n5- lobo5 HP: ' + lobo5['hp'] + '  6- lobo6 HP: ' + lobo6['hp'] + '\n7- lobo7 HP: ' + lobo7['hp'] + '  8- lobo8 HP: ' + lobo8['hp'] + '\n9- lobo9 HP: ' + lobo9['hp'] + '  10- lobo10 HP: ' + lobo10['hp'])
                    }
                } else if (classe == '2') {
                    while (opçao != '1' && opçao != '2' && opçao != '3' && opçao != '4' && opçao != '5' && opçao != '6' && opçao != '7' && opçao != '8' && opçao != '9' && opçao != '10' && opçao != '0') {
                        opçao = prompt('Quantidade de vida atual:' + guerreiro['hp'] + '\n\n\n' + 'Escolha a o lobo que você deseja atacar:\n\n1- lobo1 HP: ' + lobo1['hp'] + '  2- lobo2 HP: ' + lobo2['hp'] + '\n3- lobo3 HP: ' + lobo3['hp'] + '  4- lobo4 HP: ' + lobo4['hp'] + '\n5- lobo5 HP: ' + lobo5['hp'] + '  6- lobo6 HP: ' + lobo6['hp'] + '\n7- lobo7 HP: ' + lobo7['hp'] + '  8- lobo8 HP: ' + lobo8['hp'] + '\n9- lobo9 HP: ' + lobo9['hp'] + '  10- lobo10 HP: ' + lobo10['hp'])
                    }
                } else if (classe == '3') {
                    while (opçao != '1' && opçao != '2' && opçao != '3' && opçao != '4' && opçao != '5' && opçao != '0') {
                        opçao = prompt('Quantidade de vida atual:' + guerreiro['hp'] + '\n\n\n' + 'Escolha o par de lobos que você deseja atacar:\n\n1- lobo1 HP: ' + lobo1['hp'] + '  lobo2 HP: ' + lobo2['hp'] + '\n2- lobo3 HP: ' + lobo3['hp'] + '  lobo4 HP: ' + lobo4['hp'] + '\n3- lobo5 HP: ' + lobo5['hp'] + '  lobo6 HP: ' + lobo6['hp'] + '\n4- lobo7 HP: ' + lobo7['hp'] + '  lobo8 HP: ' + lobo8['hp'] + '\n5- lobo9 HP: ' + lobo9['hp'] + '  lobo10 HP: ' + lobo10['hp'])
                    }
                }
                break
            case '3':

                while (opçao != '1' && opçao != '2' && opçao != '0') {


                    opçao = prompt('Quantidade de vida atual:' + guerreiro['hp'] + '\n\n\n' + 'Escolha a leva de lobos que você deseja atacar:\n\n1- lobo1- HP: ' + lobo1['hp'] + '   lobo2- HP: ' + lobo2['hp'] + '   lobo3- HP: ' + lobo3['hp'] + '   lobo4- HP: ' + lobo4['hp'] + '   lobo5- HP: ' + lobo5['hp'] + '\n\n2- lobo6- HP: ' + lobo6['hp'] + '   lobo7- HP: ' + lobo7['hp'] + '  lobo8- HP: ' + lobo8['hp'] + '   lobo9- HP: ' + lobo9['hp'] + '  lobo10- HP: ' + lobo10['hp'])
                }

                break

            case '4':
                if (classe == '1') {
                    while (opçao != '1' && opçao != '2' && opçao != '0') {


                        opçao = prompt('Quantidade de vida atual:' + guerreiro['hp'] + '\n\n\n' + 'Escolha a leva de lobos que você deseja atacar:\n\n1- lobo1- HP: ' + lobo1['hp'] + '   lobo2- HP: ' + lobo2['hp'] + '   lobo3- HP: ' + lobo3['hp'] + '   lobo4- HP: ' + lobo4['hp'] + '   lobo5- HP: ' + lobo5['hp'] + '\n\n2- lobo6- HP: ' + lobo6['hp'] + '   lobo7- HP: ' + lobo7['hp'] + '  lobo8- HP: ' + lobo8['hp'] + '   lobo9- HP: ' + lobo9['hp'] + '  lobo10- HP: ' + lobo10['hp'])
                    }
                } else if (classe == '2') {
                    while (opçao != '1' && opçao != '2' && opçao != '3' && opçao != '4' && opçao != '5' && opçao != '6' && opçao != '7' && opçao != '8' && opçao != '9' && opçao != '10' && opçao != '0') {


                        opçao = prompt('Quantidade de vida atual:' + guerreiro['hp'] + '\n\n\n' + 'Escolha a o lobo que você deseja atacar:\n\n1- lobo1 HP: ' + lobo1['hp'] + '  2- lobo2 HP: ' + lobo2['hp'] + '\n3- lobo3 HP: ' + lobo3['hp'] + '  4- lobo4 HP: ' + lobo4['hp'] + '\n5- lobo5 HP: ' + lobo5['hp'] + '  6- lobo6 HP: ' + lobo6['hp'] + '\n7- lobo7 HP: ' + lobo7['hp'] + '  8- lobo8 HP: ' + lobo8['hp'] + '\n9- lobo9 HP: ' + lobo9['hp'] + '  10- lobo10 HP: ' + lobo10['hp'])
                    }
                } else if (classe == '3') {
                    while (opçao != '1' && opçao != '2' && opçao != '3' && opçao != '4' && opçao != '5') {
                        opçao = prompt('Quantidade de vida atual:' + guerreiro['hp'] + '\n\n\n' + 'Escolha a leva de lobos que você deseja atacar:\n\n1- lobo1 HP: ' + lobo1['hp'] + '  lobo2 HP: ' + lobo2['hp'] + '  lobo3 HP: ' + lobo3['hp'] + '  lobo4 HP: ' + lobo4['hp'] + '  lobo5 HP: ' + lobo5['hp'] + '  lobo6 HP: ' + lobo6['hp'] + '  lobo7 HP: ' + lobo7['hp'] + '  lobo8 HP: ' + lobo8['hp'] + '  lobo9 HP: ' + lobo9['hp'] + '  lobo10 HP: ' + lobo10['hp'])
                    }
                }
                break
        }
        return opçao
    }
    ////////////////////////////
    function ataqueDolobo(vida, lbs) {
        let novohp
        novohp = vida - lbs
        if (novohp <= 0) {
            novohp = 0

        }
        return novohp

    }
    //////////////////////////////
    function dano(lv, dan) {
        let novaVida
        novaVida = lv - dan
        if (novaVida <= 0) {
            novaVida = 0
        }
        return novaVida
    }

    let efeito
    ///////////////////////////////

    function dizimadorDebuff(ldef) {
        let buffd

        novoEfeito = ldef - 2
        if (ldef == 0) {
            ldef = 0
        }
        return buffd
    }
    ////////////////////////
    function templarioBuff(gdf) {
        let buffd
        switch (skillEscolhida) {
            case '2':
                buffd = gdf + 5
                break
            case '4':
                buffd = gdf + 50
                break
        }
        return buffd
    }

    function templarioDebuff(lba) {
        let debuffd
        switch (skillEscolhida) {

            case '3':
                debuffd = lba - 1
                if (lba == 0) {
                    lba = 0
                }
                break

        }
        return debuffd
    }
    //////////

    function ninjaDebuff(lbd) {
        let debuffn

        debuffn = lbd - 2
        if (ldef == 0) {
            ldef = 0
        }
        return debuffn
    }

    function ladraoBuff(ghp) {
        let Lbuff
        switch (skillEscolhida) {

            case '3':
                Lbuff = ghp + 5
                break
            case '4':
                Lbuff = ghp + 50
                break
        }

        return Lbuff
    }

    function ladraoDebuff(lbs) {
        let LdeBuff
        if (skillEscolhida == 1) {
            LdeBuff = lbs - 1
        }
        return LdeBuff
    }

    function loboMorto(lbs, lb) {
        let dano
        dano = lbs - lb
        if (lb == 0) {
            lb = 0
        }
        return dano
    }

    function controladorBuffA(gdn) {
        let buffc2
        switch (skillEscolhida) {
            case '4':
                buffc2 = gdn + 10
                break

        }
        return buffc2
    }
    function controladorBuffD(gdef) {
        let buffc2
        switch (skillEscolhida) {
            case '4':
                buffc2 = gdef + 10
                break

        }
        return buffc2
    }


    function controladorDebuffA(lbs) {
        let debuffc1
        switch (skillEscolhida) {
            case '1':
                debuffc1 = lbs - 5
                break
            case '4':
                debuffc1 = lbs - 10
                break

        }
        return debuffc1
    }
    function controladorDebuffD(lbsd) {
        let debuffc1
        switch (skillEscolhida) {
            case '2':
                debuffc1 = lbsd - 5
                break
            case '4':
                debuffc1 = lbsd - 10
                break

        }
        return debuffc1
    }




    function defesa(gdef, lbs) {
        let danoDefendido
        danoDefendido = lbs - gdef
        if (lbs <= 0) {
            lbs = 0
        }
        return danoDefendido
    }



    /////////////////////////////////////////////////////



    do {
        skillEscolhida = skill()
        opçaoEscolhida = atacarLobo()

        switch (skillEscolhida) {
            case '1':
                danoCausado = abilidade1['dano'] + (guerreiro['dano'] / 2)
                if (guerreiro['class'] == 'Cavaleiro templário') {
                    lobos = templarioDebuff(lobos)
                }
                else if (guerreiro['class'] == 'Assasino ladrão') {
                    lobos = ladraoDebuff(lobos)
                    break
                } else if (guerreiro['class'] == 'Mago de controle') {
                    lobos = controladorDebuffA(lobos)
                }
                break
            case '2':
                danoCausado = abilidade2['dano'] + (guerreiro['dano'] / 2)
                if (guerreiro['class'] == 'Cavaleiro templário') {
                    guerreiro['defesa'] = templarioBuff(guerreiro['defesa'])
                } else if (guerreiro['class'] == 'Mago de controle') {

                    lobosDef = controladorDebuffD(lobosDef)


                }
                break
            case '3':
                danoCausado = abilidade3['dano'] + (guerreiro['dano'] / 2)
                if (guerreiro['class'] == 'Assasino ladrão') {
                    guerreiro['hp'] = ladraoBuff(guerreiro['hp'])
                }
                break
            case '4':
                danoCausado = abilidade4['dano'] + (guerreiro['dano'] / 2)

                if (guerreiro['class'] == 'Assasino ladrão') {
                    guerreiro['hp'] = ladraoBuff(guerreiro['hp'])
                    break
                }
                else if (guerreiro['class'] == 'Cavaleiro templário') {
                    guerreiro['defesa'] = templarioBuff(guerreiro['defesa'])
                } else if (guerreiro['class'] == 'Mago de controle') {
                    lobos = controladorDebuffA(lobos)
                    lobosDef = controladorDebuffD(lobosDef)
                    guerreiro['dano'] = controladorBuffA(guerreiro['dano'])
                    guerreiro['defesa'] = controladorBuffD(guerreiro['defesa'])

                }
                break

        }



        switch (skillEscolhida) {
            case '1':

                if (classe == '1') {
                    switch (opçaoEscolhida) {
                        case '1':

                            lobo1['hp'] = dano(lobo1['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo1['dano'])

                            break
                        case '2':

                            lobo2['hp'] = dano(lobo2['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo2['dano'])

                            break
                        case '3':

                            lobo3['hp'] = dano(lobo3['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo3['dano'])

                            break
                        case '4':

                            lobo4['hp'] = dano(lobo4['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo4['dano'])

                            break
                        case '5':

                            lobo5['hp'] = dano(lobo5['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo5['dano'])

                            break
                        case '6':

                            lobo6['hp'] = dano(lobo6['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo6['dano'])

                            break
                        case '7':

                            lobo7['hp'] = dano(lobo7['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo7['dano'])

                            break
                        case '8':

                            lobo8['hp'] = dano(lobo8['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo8['dano'])

                            break
                        case '9':

                            lobo9['hp'] = dano(lobo9['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo9['dano'])

                            break
                        case '10':

                            lobo10['hp'] = dano(lobo10['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo10['dano']
                            )
                            break
                    }
                } else if (classe == '2') {
                    switch (opçaoEscolhida) {
                        case '1':

                            lobo1['hp'] = dano(lobo1['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo1['dano'])

                            break
                        case '2':

                            lobo2['hp'] = dano(lobo2['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo2['dano'])

                            break
                        case '3':

                            lobo3['hp'] = dano(lobo3['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo3['dano'])

                            break
                        case '4':

                            lobo4['hp'] = dano(lobo4['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo4['dano'])

                            break
                        case '5':

                            lobo5['hp'] = dano(lobo5['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo5['dano'])

                            break
                        case '6':

                            lobo6['hp'] = dano(lobo6['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo6['dano'])

                            break
                        case '7':

                            lobo7['hp'] = dano(lobo7['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo7['dano'])

                            break
                        case '8':

                            lobo8['hp'] = dano(lobo8['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo8['dano'])

                            break
                        case '9':

                            lobo9['hp'] = dano(lobo9['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo9['dano'])

                            break
                        case '10':

                            lobo10['hp'] = dano(lobo10['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo10['dano']
                            )
                            break
                    }

                } else if (classe == '3') {
                    switch (opçaoEscolhida) {
                        case '1':
                            lobo1['hp'] = dano(lobo2['hp'], danoCausado)
                            lobo2['hp'] = dano(lobo2['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo1['dano'])

                            loboMorto(lobos, lobo2['dano'])

                        case '2':
                            lobo2['hp'] = dano(lobo2['hp'], danoCausado)
                            lobo2['hp'] = dano(lobo2['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo3['dano'])

                            loboMorto(lobos, lobo4['dano'])

                            break
                        case '3':
                            lobo5['hp'] = dano(lobo5['hp'], danoCausado)
                            lobo5['hp'] = dano(lobo6['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo5['dano'])

                            loboMorto(lobos, lobo6['dano'])
                            break
                        case '4':

                            lobo7['hp'] = dano(lobo7['hp'], danoCausado)
                            lobo8['hp'] = dano(lobo8['hp'], danoCausado)
                            break
                        case '5':
                            lobo9['hp'] = dano(lobo9['hp'], danoCausado)
                            lobo10['hp'] = dano(lobo10['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo9['dano'])

                            loboMorto(lobos, lobo10['dano'])
                            break
                    }
                }
                alert(nomeGuerreiro + ' Usou ' + abilidade1['nome'] + ' !')

                alert('Os lobos revidaram e causaram ' + lobos + ' de dano!' + '\n\n Quantidade de vida atual: ' +
                    guerreiro['hp'])
                break
            case '2':

                if (classe == '1') {
                    switch (opçaoEscolhida) {
                        case '1':

                            lobo1['hp'] = dano(lobo1['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo1['dano'])

                            break
                        case '2':

                            lobo2['hp'] = dano(lobo2['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo2['dano'])

                            break
                        case '3':

                            lobo3['hp'] = dano(lobo3['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo3['dano'])

                            break
                        case '4':

                            lobo4['hp'] = dano(lobo4['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo4['dano'])

                            break
                        case '5':

                            lobo5['hp'] = dano(lobo5['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo5['dano'])

                            break
                        case '6':

                            lobo6['hp'] = dano(lobo6['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo6['dano'])

                            break
                        case '7':

                            lobo7['hp'] = dano(lobo7['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo7['dano'])

                            break
                        case '8':

                            lobo8['hp'] = dano(lobo8['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo8['dano'])

                            break
                        case '9':

                            lobo9['hp'] = dano(lobo9['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo9['dano'])

                            break
                        case '10':

                            lobo10['hp'] = dano(lobo10['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo10['dano']
                            )
                            break
                    }
                } else if (classe == '2') {
                    switch (opçaoEscolhida) {
                        case '1':

                            lobo1['hp'] = dano(lobo1['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo1['dano'])

                            break
                        case '2':

                            lobo2['hp'] = dano(lobo2['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo2['dano'])

                            break
                        case '3':

                            lobo3['hp'] = dano(lobo3['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo3['dano'])

                            break
                        case '4':

                            lobo4['hp'] = dano(lobo4['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo4['dano'])

                            break
                        case '5':

                            lobo5['hp'] = dano(lobo5['hp'], danoCausado)
                            guerreiro['hp'] = gataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo5['dano'])

                            break
                        case '6':

                            lobo6['hp'] = dano(lobo6['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo6['dano'])

                            break
                        case '7':

                            lobo7['hp'] = dano(lobo7['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo7['dano'])

                            break
                        case '8':

                            lobo8['hp'] = dano(lobo8['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo8['dano'])

                            break
                        case '9':

                            lobo9['hp'] = dano(lobo9['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo9['dano'])

                            break
                        case '10':

                            lobo10['hp'] = dano(lobo10['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo10['dano']
                            )
                            break
                    }
                } else if (classe == '3') {
                    switch (opçaoEscolhida) {
                        case '1':
                            lobo1['hp'] = dano(lobo2['hp'], danoCausado)
                            lobo2['hp'] = dano(lobo2['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo1['dano'])

                            loboMorto(lobos, lobo2['dano'])

                        case '2':
                            lobo3['hp'] = dano(lobo3['hp'], danoCausado)
                            lobo4['hp'] = dano(lobo4['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo3['dano'])

                            loboMorto(lobos, lobo4['dano'])

                            break
                        case '3':
                            lobo5['hp'] = dano(lobo5['hp'], danoCausado)
                            lobo6['hp'] = dano(lobo6['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo5['dano'])

                            loboMorto(lobos, lobo6['dano'])
                            break
                        case '4':

                            lobo7['hp'] = dano(lobo7['hp'], danoCausado)
                            lobo8['hp'] = dano(lobo8['hp'], danoCausado)
                            break
                        case '5':
                            lobo9['hp'] = dano(lobo9['hp'], danoCausado)
                            lobo10['hp'] = dano(lobo10['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo9['dano'])

                            loboMorto(lobos, lobo10['dano'])
                            break
                    }
                }
                alert(nomeGuerreiro + ' Usou ' + abilidade2['nome'] + ' !')

                alert('Os lobos revidaram e causaram ' + lobos + ' de dano!' + '\n\n Quantidade de vida atual: ' + guerreiro['hp'])


                break
            case '3':


                switch (opçaoEscolhida) {
                    case '1':

                        lobo1['hp'] = dano(lobo1['hp'], danoCausado)
                        lobo2['hp'] = dano(lobo2['hp'], danoCausado)
                        lobo3['hp'] = dano(lobo3['hp'], danoCausado)
                        lobo4['hp'] = dano(lobo4['hp'], danoCausado)
                        lobo5['hp'] = dano(lobo5['hp'], danoCausado)
                        guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                        lobos = loboMorto(lobos, lobo1['dano'])

                        loboMorto(lobos, lobo2['dano'])
                        loboMorto(lobos, lobo3['dano'])
                        loboMorto(lobos, lobo4['dano'])
                        loboMorto(lobos, lobo5['dano'])


                        break
                    case '2':

                        lobo6['hp'] = dano(lobo6['hp'], danoCausado)
                        lobo7['hp'] = dano(lobo7['hp'], danoCausado)
                        lobo8['hp'] = dano(lobo8['hp'], danoCausado)
                        lobo9['hp'] = dano(lobo9['hp'], danoCausado)
                        lobo10['hp'] = dano(lobo10['hp'], danoCausado)
                        guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                        lobos = loboMorto(lobos, lobo6['dano'])

                        loboMorto(lobos, lobo7['dano'])
                        loboMorto(lobos, lobo8['dano'])
                        loboMorto(lobos, lobo9['dano'])
                        loboMorto(lobos, lobo10['dano'])
                        break
                }

                alert(nomeGuerreiro + ' Usou ' + abilidade3['nome'] + ' !')

                alert('Os lobos revidaram e causaram ' + lobos + ' de dano!' + '\n\n Quantidade de vida atual: ' + guerreiro['hp'])


                break
            case '4':

                if (classe == '1') {
                    switch (opçaoEscolhida) {
                        case '1':

                            lobo1['hp'] = dano(lobo1['hp'], danoCausado)
                            lobo2['hp'] = dano(lobo2['hp'], danoCausado)
                            lobo3['hp'] = dano(lobo3['hp'], danoCausado)
                            lobo4['hp'] = dano(lobo4['hp'], danoCausado)
                            lobo5['hp'] = dano(lobo5['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo1['dano'])

                            loboMorto(lobos, lobo2['dano'])
                            loboMorto(lobos, lobo3['dano'])
                            loboMorto(lobos, lobo4['dano'])
                            loboMorto(lobos, lobo5['dano'])


                            break
                        case '2':

                            lobo6['hp'] = dano(lobo6['hp'], danoCausado)
                            lobo7['hp'] = dano(lobo7['hp'], danoCausado)
                            lobo8['hp'] = dano(lobo8['hp'], danoCausado)
                            lobo9['hp'] = dano(lobo9['hp'], danoCausado)
                            lobo10['hp'] = dano(lobo10['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo6['dano'])

                            loboMorto(lobos, lobo7['dano'])
                            loboMorto(lobos, lobo8['dano'])
                            loboMorto(lobos, lobo9['dano'])
                            loboMorto(lobos, lobo10['dano'])
                            break
                    }

                } else if (classe == '2') {


                    switch (opçaoEscolhida) {
                        case '1':

                            lobo1['hp'] = dano(lobo1['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo1['dano'])

                            break
                        case '2':

                            lobo2['hp'] = dano(lobo2['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo2['dano'])

                            break
                        case '3':

                            lobo3['hp'] = dano(lobo3['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo3['dano'])

                            break
                        case '4':

                            lobo4['hp'] = dano(lobo4['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo4['dano'])

                            break
                        case '5':

                            lobo5['hp'] = dano(lobo5['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo5['dano'])

                            break
                        case '6':

                            lobo6['hp'] = dano(lobo6['hp'], danoCausado)
                            ataqueDolobo(guerreiro['hp'], lobos)
                            loboMorto(lobos, lobo6['dano'])
                            break
                        case '7':

                            lobo7['hp'] = dano(lobo7['hp'], danoCausado)
                            ataqueDolobo(guerreiro['hp'], lobos)
                            loboMorto(lobos, lobo7['dano'])
                            break
                        case '8':

                            lobo8['hp'] = dano(lobo8['hp'], danoCausado)
                            ataqueDolobo(guerreiro['hp'], lobos)
                            loboMorto(lobos, lobo8['dano'])
                            break
                        case '9':

                            lobo9['hp'] = dano(lobo9['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo9['dano'])

                            break
                        case '10':

                            lobo10['hp'] = dano(lobo10['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo10['dano']
                            )
                            break
                    }



                } else if (classe == '3') {
                    switch (opçaoEscolhida) {
                        case '1':

                            lobo1['hp'] = dano(lobo1['hp'], danoCausado)

                            lobo2['hp'] = dano(lobo2['hp'], danoCausado)

                            lobo3['hp'] = dano(lobo3['hp'], danoCausado)

                            lobo4['hp'] = dano(lobo4['hp'], danoCausado)

                            lobo5['hp'] = dano(lobo5['hp'], danoCausado)

                            lobo6['hp'] = dano(lobo6['hp'], danoCausado)

                            lobo7['hp'] = dano(lobo7['hp'], danoCausado)

                            lobo8['hp'] = dano(lobo8['hp'], danoCausado)

                            lobo9['hp'] = dano(lobo9['hp'], danoCausado)

                            lobo10['hp'] = dano(lobo10['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            lobos = loboMorto(lobos, lobo1['dano'])

                            loboMorto(lobos, lobo2['dano'])
                            loboMorto(lobos, lobo3['dano'])
                            loboMorto(lobos, lobo4['dano'])
                            loboMorto(lobos, lobo5['dano'])
                            loboMorto(lobos, lobo6['dano'])
                            loboMorto(lobos, lobo7['dano'])
                            loboMorto(lobos, lobo8['dano'])
                            loboMorto(lobos, lobo9['dano'])
                            loboMorto(lobos, lobo10['dano'])



                            break
                    }
                }
                alert(nomeGuerreiro + ' Usou a Ultimate ' + abilidade4['nome'] + ' !')

                alert('Os lobos revidaram e causaram ' + lobos + ' de dano!' + '\n\n Quantidade de vida atual: ' + guerreiro['hp'])


                break
        }







        if (guerreiro['hp'] == 0) {
            alert('Você morreu !')
            lobo1['hp'] = 0
            lobo2['hp'] = 0
            lobo3['hp'] = 0
            lobo4['hp'] = 0
            lobo5['hp'] = 0
            lobo6['hp'] = 0
            lobo7['hp'] = 0
            lobo8['hp'] = 0
            lobo9['hp'] = 0
            lobo10['hp'] = 0
        }







    }
    while (lobo1['hp'] != 0 || lobo2['hp'] != 0 || lobo3['hp'] != 0 || lobo4['hp'] != 0 || lobo5['hp'] != 0 || lobo6['hp'] != 0 || lobo7['hp'] != 0 || lobo8['hp'] != 0 || lobo9['hp'] != 0 || lobo10['hp'] != 0 && opçaoEscolhida != '0')





let fenrir = { dano: 20, hp: 1000, defesa: 0 }
let opçaoEscolhida3
let danoCausado2
let skillEscolhida2
if (guerreiro['hp'] > 0) {
    alert('Você matou todos os lobos !')

    alert('Porém de um dos grandes portões, do portão do meio, você avista uma criatura com grandes olhos vermelhos e garras 3 vezes maiores do que a dos lobos que você enfrentou\n\nA criatura se revela !\n\nO nome dela é Fenrir, o grande lobo da mitologia nórdica !')

    alert('Fenrir te ataca ! \n\nQue comece a batalha !')


    function skill2() {
        let skill2
         skill2 = prompt('Quantidade de vida atual:' + guerreiro['hp'] + '\n\n\n Escolha uma skill:\n1- ' + abilidade1['nome'] + ' dano: ' + abilidade1['dano'] + '\n' + abilidade1['des'] + '\n2- ' + abilidade2['nome'] + ' dano: ' + abilidade2['dano'] + '\n' + abilidade2['des'] + '\n3- ' + abilidade3['nome'] + ' dano: ' + abilidade3['dano'] + '\n' + abilidade3['des'] + '\n4 "Ultimate"- ' + abilidade4['nome'] + ' dano: ' + abilidade4['dano'] + '\n' + abilidade4['des'])

        return skill2
    }
    function atacarFenrir() {
        let opçao2
        
        while (opçao2 != 1) {
           opçao2 = prompt('Ataque Fenrir \n\n\n1- Fenrir "BOSS" ' + '\nHP:' + fenrir['hp'])
        }
        return opçao2
    }


    function ataqueDofenrir(vida, fa) {
        let novohp2
        novohp2 = vida - fa
        if (novohp2 <= 0) {
            novohp2 = 0

        }
        return novohp2

    }
    function danoNoFenrir(fv, dan) {
        let novaVida
        novaVida = fv - dan
        if (novaVida <= 0) {
            novaVida = 0
        }
        return novaVida
    }

    do {
        skillEscolhida2 = skill2()
        opçaoEscolhida3 = atacarFenrir()
        switch (skillEscolhida2) {
            case '1':
                danoCausado2 = abilidade1['dano'] + (guerreiro['dano'] / 2)
             
                break
            case '2':
                danoCausado2 = abilidade2['dano'] + (guerreiro['dano'] / 2)
                
                break
            case '3':
                danoCausado2 = abilidade3['dano'] + (guerreiro['dano'] / 2)
                
                break
            case '4':
                danoCausado2 = abilidade4['dano'] + (guerreiro['dano'] / 2)

                break

        }
        switch (skillEscolhida2) {
            case '1':
                switch (opçaoEscolhida3) {
                    case '1':
                        fenrir['hp'] = danoNoFenrir(fenrir['hp'], danoCausado2)
                        guerreiro['hp'] = ataqueDofenrir(guerreiro['hp'], fenrir['dano'])
                    

                        alert(nomeGuerreiro + ' Usou ' + abilidade1['nome'] + ' !')

                        alert('Fenrir revidou caudando ' + fenrir['dano'] + ' de dano!' + '\n\n Quantidade de vida atual: ' +
                            guerreiro['hp'])
                        break
                }
                break
            case '2':
                switch (opçaoEscolhida3) {
                    case '1':
                        fenrir['hp'] = danoNoFenrir(fenrir['hp'], danoCausado2)
                        guerreiro['hp'] = ataqueDofenrir(guerreiro['hp'], fenrir['dano'])
                        alert(nomeGuerreiro + ' Usou ' + abilidade1['nome'] + ' !')

                        alert('Fenrir revidou caudando ' + fenrir['dano'] + ' de dano!' + '\n\n Quantidade de vida atual: ' +
                            guerreiro['hp'])
                        break
                       
                }
                break
            case '3':
                switch (opçaoEscolhida3) {
                    case '1':
                        fenrir['hp'] = danoNoFenrir(fenrir['hp'], danoCausado2)
                        guerreiro['hp'] = ataqueDofenrir(guerreiro['hp'], fenrir['dano'])
                        alert(nomeGuerreiro + ' Usou ' + abilidade1['nome'] + ' !')

                        alert('Fenrir revidou caudando ' + fenrir['dano'] + ' de dano!' + '\n\n Quantidade de vida atual: ' +
                            guerreiro['hp'])
                        break
                        
                }
                break
            case '4':
                switch (opçaoEscolhida3) {
                    case '1':
                        fenrir['hp'] = danoNoFenrir(fenrir['hp'], danoCausado2)
                        guerreiro['hp'] = ataqueDofenrir(guerreiro['hp'], fenrir['dano'])
                        alert(nomeGuerreiro + ' Usou ' + abilidade1['nome'] + ' !')

                        alert('Fenrir revidou caudando ' + fenrir['dano'] + ' de dano!' + '\n\n Quantidade de vida atual: ' +
                            guerreiro['hp'])
                        break
                      
                }
                break

        }
        

    }
    while (fenrir['hp'] != 0)
}
if (fenrir['hp'] == 0) {
    alert('PARABÉNS ! VOCÊ matou o lobo lendário Fenrir !\n\nFase 1 concluída\n\n' + nomeGuerreiro + ' Ganhou 1000Xp')
    alert('Obrigado por jogar !\n\nAguarde a parte 2...')
}


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
    classe = prompt('Guarda do coliseu:\n\nAgora me responda, quais destas 3 armas você sabe usar melhor? \n\n1- Espada "Para cavaleiros"\n2- Adaga "Para assasinos"\n3- Cajado "Para magos" ')
}

while (subClasse != '1' && subClasse != '2') {
    switch (classe) {
        case '1':
            alert('Guarda do coliseu:\n\nEntendi! Então você é um cavaleiro !')
            subClasse = prompt('Guarda do coliseu:\n\nMasque tipo de cavaleiro você é ?\n\n1-Cavaleiro dizimador\n2-Cavaleiro defendor')
            if (subClasse == 1) {

                alert('Guarda do coliseu:\n\n Certo ! Pegue esta arma...\n\nVocê Recebeu uma LongSword !')
                guerreiro = { class: 'Cavaleiro dizimador', arma: 'LongSword', dano: 100, hp: 500, defesa: 100 }
                abilidade1 = { nome: 'Corte transversal', dano: 100, quantidade: 50, area: 'false' }
                abilidade2 = { nome: 'Ataque esgrima', dano: 100, quantidade: 10, area: 'false', efeito: 10 }
                abilidade3 = { nome: 'Meia Lua', dano: 50, quantidade: 25, area: 'true' }
                abilidade4 = {
                    nome: 'Mega meia lua', dano: 200, quantidade: 1, area: 'true', efeito: 0
                }
            } else if (subClasse == 2) {

                alert('Guarda do coliseu:\n\n Certo ! Pegue esta arma...\n\n\nVocê recebeu uma SwordShild !')
                guerreiro = { class: 'Cavaleiro protetor', arma: 'SwordShild ', dano: 50, hp: 700, defesa: 200 }
                abilidade1 = { nome: 'Corte lateral', dano: 50, quantidade: 75, area: 'false', efeito: 0 }
                abilidade2 = { nome: 'Ataque de escudo', dano: 50, quantidade: 50, area: 'false', efeito: 10 }
                abilidade3 = { nome: 'Fissura', dano: 50, quantidade: 5, area: 'true', efeito: 10 }
                abilidade4 = { nome: 'Juguernaunt', dano: 150, quantidade: 1, area: 'false', efeito: 50 }
            }
            break
        case '2':
            alert('Guarda do coliseu:\n\nEntendi! Então você é um assasino !')
            subClasse = prompt('Guarda do coliseu:\n\nMas que tipo de assasino você é ?\n\n1-Assasino ninja\n2-Assasino ladrão')
            if (subClasse == 1) {
                dano = 200
                hp = 400
                defesa = 50
                alert('Guarda do coliseu:\n\n Certo ! Pegue esta arma...\n\n\nVocê recebeu uma Katana Ninja !')
                guerreiro = { class: 'Assasino ninja', arma: 'Katana ninja', dano: 200, hp: 400, defesa: 50 }
            } else if (subClasse == 2) {
                dano = 150
                hp = 400
                defesa = 0
                alert('Guarda do coliseu:\n\n Certo ! Pegue esta arma...\n\n\nVocê recebeu duas Adagas vampíricas !')
                guerreiro = { class: 'Assasino ladrão', arma: 'Adagas vampíricas', dano: 150, hp: 400, defesa: 0 }
            }
            break
        case '3':
            alert('Guarda do coliseu:\n\nEntendi! Então você é um mago !')
            subClasse = prompt('Guarda do coliseu:\n\nMas que tipo de mago você é ?\n\n\n1-Mago de batalha\n2-Mago de controle')
            if (subClasse == 1) {
                dano = 300
                hp = 250
                defesa = 0
                alert('Guarda do coliseu:\n\n Certo ! Pegue esta arma...\n\n\nVocê recebeu o Cajado da tempestade !')

                guerreiro = { class: 'Mago de batalha', arma: 'Cajado da tempestade ', dano: 300, hp: 250, defesa: 0 }
            } else if (subClasse == 2) {
                dano = 150
                hp = 300
                defesa = 50
                alert('Guarda do coliseu:\n\n Certo ! Pegue esta arma...\n\n\nVocê recebeu o Cajado da montanha !')

                guerreiro = { class: 'Mago de controle', arma: 'Cajado da montanha', dano: 150, hp: 300, defesa: 50 }
            }
            break
    }
}


alert('Guarda do coliseu: \nTudo certo !\n Agora aguarde junto a aquela fogueira o início sua primeira batalha...')




let opçaoEscolhida

function preparo() {
    let opçao
    while (opçao != '1' && opçao != '2' && opçao != '3' && opçao != '4') {
        opçao = prompt('Você está na fogueira do descanso !\n Sente-se relaxe um pouco\n E quando preparado, escolha sua próxima ação...\n\n\n1- Ver informações do personagem\n2- Descansar\n3- Ir para a batalha\n4- Sair do jogo')
    }
    return opçao

}
let vidaQuantidade
do {
    opçaoEscolhida = preparo()
    switch (opçaoEscolhida) {
        case '1':
            alert('Nome: ' + nomeGuerreiro + '\nClasse/Subclasse: ' + guerreiro['class'] + '\nArma: ' + guerreiro['arma'] + '\nDano: ' + guerreiro['dano'] + '\nHp: ' + guerreiro['hp'] + '\nDefesa: ' + guerreiro['defesa'])
            break
        case '2':

            alert(nomeGuerreiro + ':' + '\n\nZzzzzzzzzzzzzzzzzzzz.....')
            alert(nomeGuerreiro + '\n\n\n"Acorda ........."\n\n' + '"Bocejo ........."')
            alert('Energias restauradas !')
            vidaQuantidade = guerreiro['vida']
            break
        case '3':
            alert('Vamos para a batalha !')
            break
        default:
            alert('Saindo do jogo...')
    }


} while (opçaoEscolhida != '4' && opçaoEscolhida != '3')
if (opçaoEscolhida == '3') {
    alert('Ao entrar no coliseu, ' + nomeGuerreiro + ' se depara com uma grande multidão, bradando em alta voz pelo o espetáculo que iria ter...')
    alert('Até que....Do outro lado do coliseu, foram abertos 3 grandes portões...\n\nDos portões saiam em torno de 10 lobos\n\n Mas não eram lobos comuns, eram lobos gigantes com garras de ferro !')
    alert('Eles te atacam !\n\n Que comecem os jogos !')
    let lobo1 = { dano: 5, hp: 50, defesa: 0 }
    let lobo2 = { dano: 5, hp: 50, defesa: 0 }
    let lobo3 = { dano: 5, hp: 50, defesa: 0 }
    let lobo4 = { dano: 5, hp: 50, defesa: 0 }
    let lobo5 = { dano: 5, hp: 50, defesa: 0 }
    let lobo6 = { dano: 5, hp: 50, defesa: 0 }
    let lobo7 = { dano: 5, hp: 50, defesa: 0 }
    let lobo8 = { dano: 5, hp: 50, defesa: 0 }
    let lobo9 = { dano: 5, hp: 50, defesa: 0 }
    let lobo10 = { dano: 5, hp: 50, defesa: 0 }
    let skillEscolhida
    let danoCausado
    let opçaoEscolhida


    ///////////////////////////////////




    ///////////////////////////////////
    function skill() {
        let skill
        skill = prompt('Quantidade de vida atual:' + guerreiro['hp'] + '\n\n\n Escolha uma skill:\n\n1- ' + abilidade1['nome'] + ' dano: ' + abilidade1['dano'] + '\n2- ' + abilidade2['nome'] + ' dano: ' + abilidade2['dano'] + '\n3- ' + abilidade3['nome'] + ' dano: ' + abilidade3['dano'] + '\n4 "Ultimate"- ' + abilidade4['nome'] + ' dano: ' + abilidade4['dano'])
        return skill
    }
    function atacarLobo() {
        let opçao
        switch (skillEscolhida) {

            case '1':
                while (opçao != '1' && opçao != '2' && opçao != '3' && opçao != '4' && opçao != '5' && opçao != '6' && opçao != '7' && opçao != '8' && opçao != '9' && opçao != '10' && opçao != '0') {

                    ////
                    opçao = prompt('Quantidade de vida atual: ' + guerreiro['hp'] + '\n\nEscolha a o lobo que você deseja atacar:\n\n1- lobo1 ' + lobo1['hp'] + '  2- lobo2 ' + lobo2['hp'] + '  3- lobo3 ' + lobo3['hp'] + '  4- lobo4 ' + lobo4['hp'] + '  5- lobo5 ' + lobo5['hp'] + '\n6- lobo6 ' + lobo6['hp'] + '  7- lobo7 ' + lobo7['hp'] + '  8- lobo8 ' + lobo8['hp'] + '  9- lobo9 ' + lobo9['hp'] + '  10- lobo10 ' + lobo10['hp'])
                }
                break
            case '2':
                while (opçao != '1' && opçao != '2' && opçao != '3' && opçao != '4' && opçao != '5' && opçao != '6' && opçao != '7' && opçao != '8' && opçao != '9' && opçao != '10' && opçao != '0') {

                    ////
                    opçao = prompt('Quantidade de vida atual: ' + guerreiro['hp'] + '\n\nEscolha a o lobo que você deseja atacar:\n\n1- lobo1 ' + lobo1['hp'] + '  2- lobo2 ' + lobo2['hp'] + '  3- lobo3 ' + lobo3['hp'] + '  4- lobo4 ' + lobo4['hp'] + '  5- lobo5 ' + lobo5['hp'] + '\n6- lobo6 ' + lobo6['hp'] + '  7- lobo7 ' + lobo7['hp'] + '  8- lobo8 ' + lobo8['hp'] + '  9- lobo9 ' + lobo9['hp'] + '  10- lobo10 ' + lobo10['hp'])
                }
                break
            case '3':
                while (opçao != '1' && opçao != '2') {


                    opçao = prompt('Quantidade de vida atual: ' + guerreiro['hp'] + '\n\n\nEscolha a leva de lobos que você deseja atacar:\n\n1- lobo1: ' + lobo1['hp'] + '   lobo2: ' + lobo2['hp'] + '   lobo3: ' + lobo3['hp'] + '   lobo4: ' + lobo4['hp'] + '   lobo5: ' + lobo5['hp'] + '\n\n2- lobo6: ' + lobo6['hp'] + '   lobo7: ' + lobo7['hp'] + '  lobo8: ' + lobo8['hp'] + '   lobo9: ' + lobo9['hp'] + '  lobo10: ' + lobo10['hp'])
                }

                break

            case '4':
                while (opçao != '1' && opçao != '2') {


                    opçao = prompt('Quantidade de vida atual: ' + guerreiro['hp'] + '\n\n\nEscolha a leva de lobos que você deseja atacar:\n\n1- lobo1: ' + lobo1['hp'] + '   lobo2: ' + lobo2['hp'] + '   lobo3: ' + lobo3['hp'] + '   lobo4: ' + lobo4['hp'] + '   lobo5: ' + lobo5['hp'] + '\n\n2- lobo6: ' + lobo6['hp'] + '   lobo7: ' + lobo7['hp'] + '  lobo8: ' + lobo8['hp'] + '   lobo9: ' + lobo9['hp'] + '  lobo10: ' + lobo10['hp'])
                }
                break
        }
        return opçao
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


    ///////
    do {
        skillEscolhida = skill()
        opçaoEscolhida = atacarLobo()
        switch (skillEscolhida) {
            case '1':
                danoCausado = abilidade1['dano'] + (guerreiro['dano'] / 2)
                break
            case '2':
                danoCausado = abilidade2['dano'] + (guerreiro['dano'] / 2)
                break
            case '3':
                danoCausado = abilidade3['dano'] + (guerreiro['dano'] / 2)
                break
            case '4':
                danoCausado = abilidade4['dano'] + (guerreiro['dano'] / 2)
                break

        }

        switch (skillEscolhida) {
            case '1':
                switch (opçaoEscolhida) {
                    case '1':
                        lobo1['hp'] = dano(lobo1['hp'], danoCausado)
                        break
                    case '2':
                        lobo2['hp'] = dano(lobo2['hp'], danoCausado)
                        break
                    case '3':
                        lobo3['hp'] = dano(lobo3['hp'], danoCausado)
                        break
                    case '4':
                        lobo4['hp'] = dano(lobo4['hp'], danoCausado)
                        break
                    case '5':
                        lobo5['hp'] = dano(lobo5['hp'], danoCausado)
                        break
                    case '6':
                        lobo6['hp'] = dano(lobo6['hp'], danoCausado)
                        break
                    case '7':
                        lobo7['hp'] = dano(lobo7['hp'], danoCausado)
                        break
                    case '8':
                        lobo8['hp'] = dano(lobo8['hp'], danoCausado)
                        break
                    case '9':
                        lobo9['hp'] = dano(lobo9['hp'], danoCausado)
                        break
                    case '10':
                        lobo10['hp'] = dano(lobo10['hp'], danoCausado)
                        break
                }
                alert(nomeGuerreiro + ' Usou ' + abilidade1['nome'] + ' !')
                break
            case '2':
                switch (opçaoEscolhida) {
                    case '1':
                        lobo1['hp'] = dano(lobo1['hp'], danoCausado)
                        break
                    case '2':
                        lobo2['hp'] = dano(lobo2['hp'], danoCausado)
                        break
                    case '3':
                        lobo3['hp'] = dano(lobo3['hp'], danoCausado)
                        break
                    case '4':
                        lobo4['hp'] = dano(lobo4['hp'], danoCausado)
                        break
                    case '5':
                        lobo5['hp'] = dano(lobo5['hp'], danoCausado)
                        break
                    case '6':
                        lobo6['hp'] = dano(lobo6['hp'], danoCausado)
                        break
                    case '7':
                        lobo7['hp'] = dano(lobo7['hp'], danoCausado)
                        break
                    case '8':
                        lobo8['hp'] = dano(lobo8['hp'], danoCausado)
                        break
                    case '9':
                        lobo9['hp'] = dano(lobo9['hp'], danoCausado)
                        break
                    case '10':
                        lobo10['hp'] = dano(lobo10['hp'], danoCausado)
                        break
                }
                alert(nomeGuerreiro + ' Usou ' + abilidade2['nome'] + ' !')
                break
            case '3':
                switch (opçaoEscolhida) {
                    case '1':
                        lobo1['hp'] = dano(lobo1['hp'], danoCausado)
                        lobo2['hp'] = dano(lobo2['hp'], danoCausado)
                        lobo3['hp'] = dano(lobo3['hp'], danoCausado)
                        lobo4['hp'] = dano(lobo4['hp'], danoCausado)
                        lobo5['hp'] = dano(lobo5['hp'], danoCausado)
                        break
                    case '2':
                        lobo6['hp'] = dano(lobo6['hp'], danoCausado)
                        lobo7['hp'] = dano(lobo7['hp'], danoCausado)
                        lobo8['hp'] = dano(lobo8['hp'], danoCausado)
                        lobo9['hp'] = dano(lobo9['hp'], danoCausado)
                        lobo10['hp'] = dano(lobo10['hp'], danoCausado)
                        break


                }
                alert(nomeGuerreiro + ' Usou ' + abilidade3['nome'] + ' !')
                break
            case '4':
                switch (opçaoEscolhida) {
                    case '1':
                        lobo1['hp'] = dano(lobo1['hp'], danoCausado)
                        lobo2['hp'] = dano(lobo2['hp'], danoCausado)
                        lobo3['hp'] = dano(lobo3['hp'], danoCausado)
                        lobo4['hp'] = dano(lobo4['hp'], danoCausado)
                        lobo5['hp'] = dano(lobo5['hp'], danoCausado)
                        break
                    case '2':
                        lobo6['hp'] = dano(lobo6['hp'], danoCausado)
                        lobo7['hp'] = dano(lobo7['hp'], danoCausado)
                        lobo8['hp'] = dano(lobo8['hp'], danoCausado)
                        lobo9['hp'] = dano(lobo9['hp'], danoCausado)
                        lobo10['hp'] = dano(lobo10['hp'], danoCausado)
                        break


                }
                alert(nomeGuerreiro + ' Usou a Ultimate ' + abilidade4['nome'] + ' !')
                break
        }



    }
    while (lobo1['hp'] != 0 || lobo2['hp'] != 0 || lobo3['hp'] != 0 || lobo4['hp'] != 0 || lobo5['hp'] != 0 && lobo6['hp'] != 0 || lobo7['hp'] != 0 || lobo8['hp'] != 0 || lobo9['hp'] != 0 || lobo10['hp'] != 0 && opçaoEscolhida != '0')

} 
alert('Você derrotou todos os lobos !')
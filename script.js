
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
                guerreiro = { class: 'Cavaleiro dizimador', arma: 'LongSword', dano: 150, hp: 450, defesa: 150 }
                abilidade1 = { nome: 'Corte transversal', dano: 100, quantidade: 30, area: 'false', efeito: 0, des: 'Corta o inimigo com sua espada !' }
                abilidade2 = { nome: 'Ataque esgrima', dano: 100, quantidade: 30, area: 'false', efeito: 10, des: 'Perfura o inimigo com a ponta de sua espada, diminuindo 10 de defesa !' }
                abilidade3 = { nome: 'Meia Lua', dano: 50, quantidade: 25, area: 'true', efeito: 0, des: 'Lança diversos projéteis com forma de lua de sua espada !' }
                abilidade4 = {
                    nome: 'Mega meia lua', dano: 150, quantidade: 1, area: 'true', efeito: 0, des: 'Lança um GRANDE projétil em forma de lua de sua espada ! "Referecia de Bleach"'
                }
            } else if (subClasse == 2) {

                alert('Guarda do coliseu:\n\n Certo ! Pegue esta arma...\n\n\nVocê recebeu uma SwordShild !')
                guerreiro = { class: 'Cavaleiro protetor', arma: 'SwordShild ', dano: 50, hp: 650, defesa: 300 }
                abilidade1 = { nome: 'Corte lateral', dano: 50, quantidade: 50, area: 'false', efeito: 0, des: 'Corta o inimigo com sua espada !' }
                abilidade2 = { nome: 'Ataque de escudo', dano: 20, quantidade: 30, area: 'false', efeito: 5, des: 'Golpeia o inimigo com seu escudo !' }
                abilidade3 = { nome: 'Fissura', dano: 25, quantidade: 25, area: 'true', efeito: 1, des: 'Golpeia o solo com sua espada, assim abrindo buracos no solo, destabilizando os inimigos, os fazendo perder 1 de ataque.' }
                abilidade4 = { nome: 'Juguernaunt', dano: 100, quantidade: 1, area: 'true', efeito: 50, des: 'Endurecen o corpo e atropelando todo mundo ! Sai da frenteee ! Aumentando também 50 pontos em defesa.' }
            }
            break
        case '2':
            alert('Guarda do coliseu:\n\nEntendi! Então você é um assasino !')
            subClasse = prompt('Guarda do coliseu:\n\nMas que tipo de assasino você é ?\n\n1-Assasino ninja\n2-Assasino ladrão')
            if (subClasse == 1) {

                alert('Guarda do coliseu:\n\n Certo ! Pegue esta arma...\n\n\nVocê recebeu uma Katana !')
                guerreiro = { class: 'Assasino ninja', arma: 'Katana', dano: 200, hp: 350, defesa: 100 }
                abilidade1 = { nome: 'konoha senpuu', dano: 50, quantidade: 100, area: 'false', efeito: 0, des: 'Golpea o inimigo com aquela clássica voadora do Rock Lee ! "Referencia de Naruto"' }
                abilidade2 = { nome: 'Corte das sombras', dano: 100, quantidade: 20, area: 'false', efeito: 0, des: 'Usa um jutsu para cegar o inimigo temporariamente, depois executa um corte rápido e preciso onde ele menos espera . ' }
                abilidade3 = { nome: 'Shurikens', dano: 50, quantidade: 20, area: 'true', efeito: 0, des: " " }
                abilidade4 = { nome: 'Assasinato silencioso', dano: 250, quantidade: 1, area: 'false', efeito: 0, des: 'Cria uma área em que o tempo passa mais devagar para inimigo, além do mesmo não poder ouvir ou enchergar absolutamentenada, e assim acertando todos os pontos vitais do inimigo ! Quem apagou a luz ?!' }
            } else if (subClasse == 2) {

                alert('Guarda do coliseu:\n\n Certo ! Pegue esta arma...\n\n\nVocê recebeu duas Adagas vampíricas !')
                guerreiro = { class: 'Assasino ladrão', arma: 'Adagas vampíricas', dano: 150, hp: 400, defesa: 100 }
                abilidade1 = { nome: 'Rasteira', dano: 50, quantidade: 100, area: 'false', efeito: 1, des: 'Da uma rasteira no inimigo o destabilizando, fazendo-o perder 1 de ataque .' }
                abilidade2 = { nome: 'Golpe sujo', dano: 100, quantidade: 20, area: 'false', efeito: 0, des: 'Cria ilusões para distrair o inmigo, assim o atacando pelas costas com suas adagas .' }
                abilidade3 = { nome: 'Furto de vitalidade', dano: 50, quantidade: 20, area: 'true', efeito: 5, des: 'Golpeia o inimigo com suas adagas vampiricas, sugando a vitalidade dos mesmos ! Ganhando assim 5 de vida' }
                abilidade4 = { nome: 'Drácula', dano: 150, quantidade: 1, area: 'false', efeito: 50, des: 'Marca o inimigo ao desferir um golpe, e então a marca começa a drenar vitalidade do mesmo, reornando 50 de vida ao usuário !' }
            }
            break
        case '3':
            alert('Guarda do coliseu:\n\nEntendi! Então você é um mago !')
            subClasse = prompt('Guarda do coliseu:\n\nMas que tipo de mago você é ?\n\n\n1-Mago de batalha\n2-Mago de controle')
            if (subClasse == 1) {

                alert('Guarda do coliseu:\n\n Certo ! Pegue esta arma...\n\n\nVocê recebeu o Cajado da tempestade !')

                guerreiro = { class: 'Mago de batalha', arma: 'Cajado da tempestade ', dano: 300, hp: 250, defesa: 0 }
            } else if (subClasse == 2) {

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
let vidaQuantidade = guerreiro['hp']
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
    //alert('Eles te atacam !\n\n Que comecem os jogos !')
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
    let lobos = lobo1['dano'] + lobo2['dano'] + lobo3['dano'] + lobo4['dano'] + lobo5['dano'] + lobo6['dano'] + lobo7['dano'] + lobo8['dano'] + lobo9['dano'] + lobo10['dano']


    let skillEscolhida
    let danoCausado
    let opçaoEscolhida
    let novaVida

    ///////////////////////////////////




    ///////////////////////////////////
    function skill() {
        let skill
        skill = prompt('Quantidade de vida atual:' + guerreiro['hp'] + '\n\n\n Escolha uma skill:\n1- ' + abilidade1['nome'] + ' dano: ' + abilidade1['dano'] + '\n' + abilidade1['des'] + '\n2- ' + abilidade2['nome'] + ' dano: ' + abilidade2['dano'] + '\n' + abilidade2['des'] + '\n3- ' + abilidade3['nome'] + ' dano: ' + abilidade3['dano'] + '\n' + abilidade3['des'] + '\n4 "Ultimate"- ' + abilidade4['nome'] + ' dano: ' + abilidade4['dano'] + '\n' + abilidade4['des'])
        return skill
    }
    function atacarLobo() {
        let opçao
        switch (skillEscolhida) {

            case '1':
                while (opçao != '1' && opçao != '2' && opçao != '3' && opçao != '4' && opçao != '5' && opçao != '6' && opçao != '7' && opçao != '8' && opçao != '9' && opçao != '10' && opçao != '0') {
                    opçao = prompt('Quantidade de vida atual:' + guerreiro['hp'] + '\n\n\n' + 'Escolha a o lobo que você deseja atacar:\n\n1- lobo1 HP: ' + lobo1['hp'] + '  2- lobo2 HP: ' + lobo2['hp'] + '\n3- lobo3 HP: ' + lobo3['hp'] + '  4- lobo4 HP: ' + lobo4['hp'] + '\n5- lobo5 HP: ' + lobo5['hp'] + '  6- lobo6 HP: ' + lobo6['hp'] + '\n7- lobo7 HP: ' + lobo7['hp'] + '  8- lobo8 HP: ' + lobo8['hp'] + '\n9- lobo9 HP: ' + lobo9['hp'] + '  10- lobo10 HP: ' + lobo10['hp'])
                }
                break
            case '2':
                while (opçao != '1' && opçao != '2' && opçao != '3' && opçao != '4' && opçao != '5' && opçao != '6' && opçao != '7' && opçao != '8' && opçao != '9' && opçao != '10' && opçao != '0') {

                    ////
                    opçao = prompt('Quantidade de vida atual:' + guerreiro['hp'] + '\n\n\n' + 'Escolha a o lobo que você deseja atacar:\n\n1- lobo1 HP: ' + lobo1['hp'] + '  2- lobo2 HP: ' + lobo2['hp'] + '\n3- lobo3 HP: ' + lobo3['hp'] + '  4- lobo4 HP: ' + lobo4['hp'] + '\n5- lobo5 HP: ' + lobo5['hp'] + '  6- lobo6 HP: ' + lobo6['hp'] + '\n7- lobo7 HP: ' + lobo7['hp'] + '  8- lobo8 HP: ' + lobo8['hp'] + '\n9- lobo9 HP: ' + lobo9['hp'] + '  10- lobo10 HP: ' + lobo10['hp'])
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

                        ////
                        opçao = prompt('Quantidade de vida atual:' + guerreiro['hp'] + '\n\n\n' + 'Escolha a o lobo que você deseja atacar:\n\n1- lobo1 HP: ' + lobo1['hp'] + '  2- lobo2 HP: ' + lobo2['hp'] + '\n3- lobo3 HP: ' + lobo3['hp'] + '  4- lobo4 HP: ' + lobo4['hp'] + '\n5- lobo5 HP: ' + lobo5['hp'] + '  6- lobo6 HP: ' + lobo6['hp'] + '\n7- lobo7 HP: ' + lobo7['hp'] + '  8- lobo8 HP: ' + lobo8['hp'] + '\n9- lobo9 HP: ' + lobo9['hp'] + '  10- lobo10 HP: ' + lobo10['hp'])
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
    let efeitos

    ///////////////////////////////
    function efeitosCavaleiro(sub, lbd, ab2, gdf, lba) {
        let novoEfeito
        if (sub == 'Cavaleiro dizimador') {
            novoEfeito = lbd - ab2
        } else if (sub == 'Cavaleiro dizimador') {
            switch (skillEscolhida) {
                case '2':
                    novoEfeito = gdf + 5
                    break
                case '3':
                    novoEfeito = lba - 1
                    break
                case '4':
                    novoEfeito = gdf + 50
                    break
            }

        }
        return novoEfeito
    }

    efeitosCavaleiro(guerreiro['class'], lobo1['def'], abilidade2['efeito'], guerreiro['defesa'], lobo1['dano'])
    /////////////////////////////////////////////////////
    function efeitosAssasino(sub, lbd, ab2, lba, ab1, ghp) {
        let novoEfeito
        if (sub == 'Assasino ninja') {
            novoEfeito = lbd - ab2
        } else if (sub == 'Assasino ladrão') {
            switch (skillEscolhida) {
                case '1':
                    novoEfeito = lba - ab1
                    break
                case '3':
                    novoEfeito = ghp + 5
                    break
                case '4':
                    novoEfeito = ghp + 50
                    break
            }
        }

        return novoEfeito

    }
    efeitosAssasino(guerreiro['class'], lobo1['def'], abilidade2['efeito'], lobo1['dano'], abilidade1['efeito'], guerreiro['hp'])
    /////////////////////////////
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
                        if (classe == '1') {
                            lobo1['hp'] = dano(lobo1['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosCavaleiro(guerreiro['class'], lobo1['def'], abilidade2['efeito'], guerreiro['defesa'], lobo1['dano'])
                        } else if (classe == '2') {
                            lobo1['hp'] = dano(lobo1['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosAssasino(guerreiro['class'], lobo1['def'], abilidade2['efeito'], lobo1['dano'], abilidade1['efeito'], guerreiro['hp'])
                        }

                        break
                    case '2':
                        if (classe == '1') {
                            lobo2['hp'] = dano(lobo2['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosCavaleiro(guerreiro['class'], lobo2['def'], abilidade2['efeito'], guerreiro['defesa'], lobo2['dano'])
                        } else if (classe == '2') {
                            lobo2['hp'] = dano(lobo2['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosAssasino(guerreiro['class'], lobo2['def'], abilidade2['efeito'], lobo2['dano'], abilidade1['efeito'], guerreiro['hp'])
                        }
                        break
                    case '3':
                        if (classe == '1') {
                            lobo3['hp'] = dano(lobo3['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosCavaleiro(guerreiro['class'], lobo3['def'], abilidade2['efeito'], guerreiro['defesa'], lobo3['dano'])
                        } else if (classe == '2') {
                            lobo3['hp'] = dano(lobo3['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosAssasino(guerreiro['class'], lobo3['def'], abilidade2['efeito'], lobo3['dano'], abilidade1['efeito'], guerreiro['hp'])
                        }
                        break
                    case '4':
                        if (classe == '1') {
                            lobo4['hp'] = dano(lobo4['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosCavaleiro(guerreiro['class'], lobo4['def'], abilidade2['efeito'], guerreiro['defesa'], lobo4['dano'])
                        } else if (classe == '2') {
                            lobo4['hp'] = dano(lobo4['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosAssasino(guerreiro['class'], lobo4['def'], abilidade2['efeito'], lobo4['dano'], abilidade1['efeito'], guerreiro['hp'])
                        }
                        break
                    case '5':
                        if (classe == '1') {
                            lobo5['hp'] = dano(lobo5['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosCavaleiro(guerreiro['class'], lobo5['def'], abilidade2['efeito'], guerreiro['defesa'], lobo5['dano'])
                        } else if (classe == '2') {
                            lobo5['hp'] = dano(lobo5['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosAssasino(guerreiro['class'], lobo5['def'], abilidade2['efeito'], lobo5['dano'], abilidade1['efeito'], guerreiro['hp'])
                        }
                        break
                    case '6':
                        if (classe == '1') {
                            lobo6['hp'] = dano(lobo6['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosCavaleiro(guerreiro['class'], lobo6['def'], abilidade2['efeito'], guerreiro['defesa'], lobo6['dano'])
                        } else if (classe == '2') {
                            lobo6['hp'] = dano(lobo6['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosAssasino(guerreiro['class'], lobo6['def'], abilidade2['efeito'], lobo6['dano'], abilidade1['efeito'], guerreiro['hp'])
                        }
                        break
                    case '7':
                        if (classe == '1') {
                            lobo7['hp'] = dano(lobo7['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosCavaleiro(guerreiro['class'], lobo7['def'], abilidade2['efeito'], guerreiro['defesa'], lobo7['dano'])
                        } else if (classe == '2') {
                            lobo7['hp'] = dano(lobo7['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosAssasino(guerreiro['class'], lobo7['def'], abilidade2['efeito'], lobo7['dano'], abilidade1['efeito'], guerreiro['hp'])
                        }
                        break
                    case '8':
                        if (classe == '1') {
                            lobo8['hp'] = dano(lobo8['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosCavaleiro(guerreiro['class'], lobo8['def'], abilidade2['efeito'], guerreiro['defesa'], lobo8['dano'])
                        } else if (classe == '2') {
                            lobo8['hp'] = dano(lobo8['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosAssasino(guerreiro['class'], lobo8['def'], abilidade2['efeito'], lobo8['dano'], abilidade1['efeito'], guerreiro['hp'])
                        }
                        break
                    case '9':
                        if (classe == '1') {
                            lobo9['hp'] = dano(lobo9['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosCavaleiro(guerreiro['class'], lobo9['def'], abilidade2['efeito'], guerreiro['defesa'], lobo9['dano'])
                        } else if (classe == '2') {
                            lobo9['hp'] = dano(lobo1['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosAssasino(guerreiro['class'], lobo9['def'], abilidade2['efeito'], lobo9['dano'], abilidade1['efeito'], guerreiro['hp'])
                        }
                        break
                    case '10':
                        if (classe == '1') {
                            lobo10['hp'] = dano(lobo10['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosCavaleiro(guerreiro['class'], lobo10['def'], abilidade2['efeito'], guerreiro['defesa'], lobo10['dano'])
                        } else if (classe == '2') {
                            lobo10['hp'] = dano(lobo10['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosAssasino(guerreiro['class'], lobo10['def'], abilidade2['efeito'], lobo10['dano'], abilidade1['efeito'], guerreiro['hp'])
                        }
                        break
                }
                alert(nomeGuerreiro + ' Usou ' + abilidade1['nome'] + ' !')

                alert('Os lobos revidaram e causaram ' + lobos + ' de dano!' + '\n\n Quantidade de vida atual: ' +
                    guerreiro['hp'])
                break
            case '2':
                switch (opçaoEscolhida) {
                    case '1':
                        if (classe == '1') {
                            lobo1['hp'] = dano(lobo1['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosCavaleiro(guerreiro['class'], lobo1['def'], abilidade2['efeito'], guerreiro['defesa'], lobo1['dano'])
                        } else if (classe == '2') {
                            lobo1['hp'] = dano(lobo1['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosAssasino(guerreiro['class'], lobo1['def'], abilidade2['efeito'], lobo1['dano'], abilidade1['efeito'], guerreiro['hp'])
                        }
                        break
                    case '2':
                        if (classe == '1') {
                            lobo2['hp'] = dano(lobo2['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosCavaleiro(guerreiro['class'], lobo2['def'], abilidade2['efeito'], guerreiro['defesa'], lobo2['dano'])
                        } else if (classe == '2') {
                            lobo2['hp'] = dano(lobo2['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosAssasino(guerreiro['class'], lobo2['def'], abilidade2['efeito'], lobo2['dano'], abilidade1['efeito'], guerreiro['hp'])
                        }
                        break
                    case '3':
                        if (classe == '1') {
                            lobo3['hp'] = dano(lobo3['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosCavaleiro(guerreiro['class'], lobo3['def'], abilidade2['efeito'], guerreiro['defesa'], lobo3['dano'])
                        } else if (classe == '2') {
                            lobo1['hp'] = dano(lobo3['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosAssasino(guerreiro['class'], lobo3['def'], abilidade2['efeito'], lobo3['dano'], abilidade1['efeito'], guerreiro['hp'])
                        }
                        break
                    case '4':
                        if (classe == '1') {
                            lobo4['hp'] = dano(lobo4['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosCavaleiro(guerreiro['class'], lobo4['def'], abilidade2['efeito'], guerreiro['defesa'], lobo4['dano'])
                        } else if (classe == '2') {
                            lobo1['hp'] = dano(lobo4['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosAssasino(guerreiro['class'], lobo4['def'], abilidade2['efeito'], lobo4['dano'], abilidade1['efeito'], guerreiro['hp'])
                        }
                        break
                    case '5':
                        if (classe == '1') {
                            lobo5['hp'] = dano(lobo1['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosCavaleiro(guerreiro['class'], lobo1['def'], abilidade2['efeito'], guerreiro['defesa'], lobo5['dano'])
                        } else if (classe == '2') {
                            lobo5['hp'] = dano(lobo5['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosAssasino(guerreiro['class'], lobo5['def'], abilidade2['efeito'], lobo5['dano'], abilidade1['efeito'], guerreiro['hp'])
                        }
                        break
                    case '6':
                        if (classe == '1') {
                            lobo6['hp'] = dano(lobo6['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosCavaleiro(guerreiro['class'], lobo6['def'], abilidade2['efeito'], guerreiro['defesa'], lobo6['dano'])
                        } else if (classe == '2') {
                            lobo6['hp'] = dano(lobo6['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosAssasino(guerreiro['class'], lobo6['def'], abilidade2['efeito'], lobo6['dano'], abilidade1['efeito'], guerreiro['hp'])
                        }
                        break
                    case '7':
                        if (classe == '1') {
                            lobo7['hp'] = dano(lobo7['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosCavaleiro(guerreiro['class'], lobo7['def'], abilidade2['efeito'], guerreiro['defesa'], lobo7['dano'])
                        } else if (classe == '2') {
                            lobo7['hp'] = dano(lobo7['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosAssasino(guerreiro['class'], lobo7['def'], abilidade2['efeito'], lobo7['dano'], abilidade1['efeito'], guerreiro['hp'])
                        }
                        break
                    case '8':
                        if (classe == '1') {
                            lobo8['hp'] = dano(lobo8['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosCavaleiro(guerreiro['class'], lobo8['def'], abilidade2['efeito'], guerreiro['defesa'], lobo8['dano'])
                        } else if (classe == '2') {
                            lobo8['hp'] = dano(lobo8['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosAssasino(guerreiro['class'], lobo8['def'], abilidade2['efeito'], lobo8['dano'], abilidade1['efeito'], guerreiro['hp'])
                        }
                        break
                    case '9':
                        if (classe == '1') {
                            lobo9['hp'] = dano(lobo9['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosCavaleiro(guerreiro['class'], lobo9['def'], abilidade2['efeito'], guerreiro['defesa'], lobo9['dano'])
                        } else if (classe == '2') {
                            lobo9['hp'] = dano(lobo9['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosAssasino(guerreiro['class'], lobo9['def'], abilidade2['efeito'], lobo9['dano'], abilidade1['efeito'], guerreiro['hp'])
                        }
                        break
                    case '10':
                        if (classe == '1') {
                            lobo10['hp'] = dano(lobo10['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosCavaleiro(guerreiro['class'], lobo10['def'], abilidade2['efeito'], guerreiro['defesa'], lobo10['dano'])
                        } else if (classe == '2') {
                            lobo10['hp'] = dano(lobo10['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosAssasino(guerreiro['class'], lobo10['def'], abilidade2['efeito'], lobo10['dano'], abilidade1['efeito'], guerreiro['hp'])
                        }
                        break
                }
                alert(nomeGuerreiro + ' Usou ' + abilidade2['nome'] + ' !')

                alert('Os lobos revidaram e causaram ' + lobos + ' de dano!' + '\n\n Quantidade de vida atual: ' + guerreiro['hp'])


                break
            case '3':
                switch (opçaoEscolhida) {
                    case '1':
                        if (classe == '1') {
                            lobo1['hp'] = dano(lobo1['hp'], danoCausado)
                            lobo2['hp'] = dano(lobo2['hp'], danoCausado)
                            lobo3['hp'] = dano(lobo3['hp'], danoCausado)
                            lobo4['hp'] = dano(lobo4['hp'], danoCausado)
                            lobo5['hp'] = dano(lobo5['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosCavaleiro(guerreiro['class'], lobo1['def'], abilidade2['efeito'], guerreiro['defesa'], lobo1['dano'])
                            efeitos = efeitosAssasino(guerreiro['class'], lobo2['def'], abilidade2['efeito'], lobo2['dano'], abilidade1['efeito'], guerreiro['hp'])
                            efeitos = efeitosAssasino(guerreiro['class'], lobo3['def'], abilidade2['efeito'], lobo3['dano'], abilidade1['efeito'], guerreiro['hp'])
                            efeitos = efeitosAssasino(guerreiro['class'], lobo4['def'], abilidade2['efeito'], lobo4['dano'], abilidade1['efeito'], guerreiro['hp'])
                            efeitos = efeitosAssasino(guerreiro['class'], lobo5['def'], abilidade2['efeito'], lobo5['dano'], abilidade1['efeito'], guerreiro['hp'])
                        } else if (classe == '2') {
                            lobo1['hp'] = dano(lobo2['hp'], danoCausado)
                            lobo2['hp'] = dano(lobo2['hp'], danoCausado)
                            lobo3['hp'] = dano(lobo3['hp'], danoCausado)
                            lobo4['hp'] = dano(lobo4['hp'], danoCausado)
                            lobo5['hp'] = dano(lobo5['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosAssasino(guerreiro['class'], lobo1['def'], abilidade2['efeito'], lobo1['dano'], abilidade1['efeito'], guerreiro['hp'])
                            efeitos = efeitosAssasino(guerreiro['class'], lobo1['def'], abilidade2['efeito'], lobo1['dano'], abilidade1['efeito'], guerreiro['hp'])
                            efeitos = efeitosAssasino(guerreiro['class'], lobo1['def'], abilidade2['efeito'], lobo1['dano'], abilidade1['efeito'], guerreiro['hp'])
                            efeitos = efeitosAssasino(guerreiro['class'], lobo1['def'], abilidade2['efeito'], lobo1['dano'], abilidade1['efeito'], guerreiro['hp'])
                            efeitos = efeitosAssasino(guerreiro['class'], lobo1['def'], abilidade2['efeito'], lobo1['dano'], abilidade1['efeito'], guerreiro['hp'])
                        }

                        break
                    case '2':
                        if (classe == '1') {
                            lobo6['hp'] = dano(lobo6['hp'], danoCausado)
                            lobo7['hp'] = dano(lobo7['hp'], danoCausado)
                            lobo8['hp'] = dano(lobo8['hp'], danoCausado)
                            lobo9['hp'] = dano(lobo9['hp'], danoCausado)
                            lobo10['hp'] = dano(lobo10['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosCavaleiro(guerreiro['class'], lobo6['def'], abilidade2['efeito'], guerreiro['defesa'], lobo6['dano'])
                            efeitos = efeitosCavaleiro(guerreiro['class'], lobo7['def'], abilidade2['efeito'], guerreiro['defesa'], lobo7['dano'])
                            efeitos = efeitosCavaleiro(guerreiro['class'], lobo8['def'], abilidade2['efeito'], guerreiro['defesa'], lobo8['dano'])
                            efeitos = efeitosCavaleiro(guerreiro['class'], lobo9['def'], abilidade2['efeito'], guerreiro['defesa'], lobo9['dano'])
                            efeitos = efeitosCavaleiro(guerreiro['class'], lobo10['def'], abilidade2['efeito'], guerreiro['defesa'], lobo10['dano'])

                        } else if (classe == '2') {
                            lobo6['hp'] = dano(lobo6['hp'], danoCausado)
                            lobo7['hp'] = dano(lobo7['hp'], danoCausado)
                            lobo8['hp'] = dano(lobo8['hp'], danoCausado)
                            lobo9['hp'] = dano(lobo9['hp'], danoCausado)
                            lobo10['hp'] = dano(lobo10['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosAssasino(guerreiro['class'], lobo6['def'], abilidade2['efeito'], lobo6['dano'], abilidade1['efeito'], guerreiro['hp'])
                            efeitos = efeitosAssasino(guerreiro['class'], lobo7['def'], abilidade2['efeito'], lobo7['dano'], abilidade1['efeito'], guerreiro['hp'])
                            efeitos = efeitosAssasino(guerreiro['class'], lobo8['def'], abilidade2['efeito'], lobo8['dano'], abilidade1['efeito'], guerreiro['hp'])
                            efeitos = efeitosAssasino(guerreiro['class'], lobo9['def'], abilidade2['efeito'], lobo9['dano'], abilidade1['efeito'], guerreiro['hp'])
                            efeitos = efeitosAssasino(guerreiro['class'], lobo10['def'], abilidade2['efeito'], lobo10['dano'], abilidade1['efeito'], guerreiro['hp'])
                        }




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
                            efeitos = efeitosCavaleiro(guerreiro['class'], lobo1['def'], abilidade2['efeito'], guerreiro['defesa'], lobo1['dano'])
                            efeitos = efeitosCavaleiro(guerreiro['class'], lobo2['def'], abilidade2['efeito'], guerreiro['defesa'], lobo2['dano'])
                            efeitos = efeitosCavaleiro(guerreiro['class'], lobo3['def'], abilidade2['efeito'], guerreiro['defesa'], lobo3['dano'])
                            efeitos = efeitosCavaleiro(guerreiro['class'], lobo4['def'], abilidade2['efeito'], guerreiro['defesa'], lobo4['dano'])
                            efeitos = efeitosCavaleiro(guerreiro['class'], lobo5['def'], abilidade2['efeito'], guerreiro['defesa'], lobo5['dano'])
                            break
                        case '2':
                            lobo6['hp'] = dano(lobo6['hp'], danoCausado)
                            lobo7['hp'] = dano(lobo7['hp'], danoCausado)
                            lobo8['hp'] = dano(lobo8['hp'], danoCausado)
                            lobo9['hp'] = dano(lobo9['hp'], danoCausado)
                            lobo10['hp'] = dano(lobo10['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosCavaleiro(guerreiro['class'], lobo6['def'], abilidade2['efeito'], guerreiro['defesa'], lobo6['dano'])

                            efeitos = efeitosCavaleiro(guerreiro['class'], lobo7['def'], abilidade2['efeito'], guerreiro['defesa'], lobo7['dano'])

                            efeitos = efeitosCavaleiro(guerreiro['class'], lobo8
                            ['def'], abilidade2['efeito'], guerreiro['defesa'], lobo8['dano'])

                            efeitos = efeitosCavaleiro(guerreiro['class'], lobo9['def'], abilidade2['efeito'], guerreiro['defesa'], lobo9['dano'])

                            efeitos = efeitosCavaleiro(guerreiro['class'], lobo10['def'], abilidade2['efeito'], guerreiro['defesa'], lobo10['dano'])
                            break
                    }

                } else if (classe == '2') {
                    switch (opçaoEscolhida) {
                        case '1':
                            lobo1['hp'] = dano(lobo1['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosAssasino(guerreiro['class'], lobo1['def'], abilidade2['efeito'], lobo1['dano'], abilidade1['efeito'], guerreiro['hp'])

                            break
                        case '2':
                            lobo2['hp'] = dano(lobo2['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosAssasino(guerreiro['class'], lobo2['def'], abilidade2['efeito'], lobo2['dano'], abilidade1['efeito'], guerreiro['hp'])

                            break
                        case '3':
                            lobo3['hp'] = dano(lobo3['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosAssasino(guerreiro['class'], lobo3['def'], abilidade2['efeito'], lobo3['dano'], abilidade1['efeito'], guerreiro['hp'])

                            break
                        case '4':
                            lobo4['hp'] = dano(lobo4['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosAssasino(guerreiro['class'], lobo4['def'], abilidade2['efeito'], lobo4['dano'], abilidade1['efeito'], guerreiro['hp'])

                            break
                        case '5':
                            lobo5['hp'] = dano(lobo5['hp'], danoCausado)
                            vidaQuantidade = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosAssasino(guerreiro['class'], lobo5['def'], abilidade2['efeito'], lobo5['dano'], abilidade1['efeito'], guerreiro['hp'])

                            break
                        case '6':
                            lobo6['hp'] = dano(lobo6['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosAssasino(guerreiro['class'], lobo6['def'], abilidade2['efeito'], lobo6['dano'], abilidade1['efeito'], guerreiro['hp'])

                            break
                        case '7':
                            lobo7['hp'] = dano(lobo7['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosAssasino(guerreiro['class'], lobo7['def'], abilidade2['efeito'], lobo7['dano'], abilidade1['efeito'], guerreiro['hp'])

                            break
                        case '8':
                            lobo8['hp'] = dano(lobo8['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosAssasino(guerreiro['class'], lob90['def'], abilidade2['efeito'], lob90['dano'], abilidade1['efeito'], guerreiro['hp'])

                            break
                        case '9':
                            lobo9['hp'] = dano(lobo9['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosAssasino(guerreiro['class'], lobo90['def'], abilidade2['efeito'], lobo90['dano'], abilidade1['efeito'], guerreiro['hp'])

                            break
                        case '10':
                            lobo10['hp'] = dano(lobo10['hp'], danoCausado)
                            guerreiro['hp'] = ataqueDolobo(guerreiro['hp'], lobos)
                            efeitos = efeitosAssasino(guerreiro['class'], lobo10['def'], abilidade2['efeito'], lobo10['dano'], abilidade1['efeito'], guerreiro['hp'])

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
    while (lobo1['hp'] != 0 || lobo2['hp'] != 0 || lobo3['hp'] != 0 || lobo4['hp'] != 0 || lobo5['hp'] != 0 || lobo6['hp'] != 0 || lobo7['hp'] != 0 || lobo8['hp'] != 0 || lobo9['hp'] != 0 || lobo10['hp'] != 0)


    if (guerreiro['hp'] > 0) {
        alert('Você matou todos os lobos !')
    }
}


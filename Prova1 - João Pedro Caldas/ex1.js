let botao1 = document.getElementById("botao1")
let tabela = document.getElementById("tabela")
let a = 1
let b = 1
let c = 1
let labelNomes = document.getElementById("labelNomes")
let labelPresença = document.getElementById("labelPresença")

botao1.onclick = function nrsalas() {
    a = a + 1
    let alunos = Number(document.getElementById("alunos").value)
    console.log(alunos)
    let listaAlunos = []

    let botao2 = document.getElementById("botao2")
    botao2.onclick = function leralunos() {
        if (listaAlunos.length < alunos) {
            b = b + 1
            let nomes = document.getElementById("nomes").value
            nomes = nomes.split(" ")
            listaAlunos.push(nomes[0])
            labelNomes.innerHTML = "Nome do aluno " + b + ":"

            if (listaAlunos.length == alunos) {
                let botao3 = document.getElementById("botao3")
                let listaPresença = []
                botao3.onclick = function lerpresença() {
                    c = c + 1
                    if (listaPresença.length < alunos) {
                        let presença = document.getElementById("presença").value
                        listaPresença.push(presença)
                        labelPresença.innerHTML = "Presença do aluno " + c + ":"

                        if (listaPresença.length == alunos) {
                            let alunosAprovados = []
                            for (let i = 0; i < listaPresença.length; i++) {
                                let aux = 0
                                listaPresença[i] = listaPresença[i].toUpperCase()
                                for (let j = 0; j < listaPresença[i].length; j++) {
                                    if (listaPresença[i][j] == "P") {
                                        aux = aux + 1
                                    }
                                }
                                if (aux / listaPresença[i].length >= 0.75) {
                                    alunosAprovados.push(listaAlunos[i])
                                }
                            }

                            console.log(listaPresença)

                            let linha = tabela.insertRow(-1)
                            let cnomes = linha.insertCell(0)
                            let cpresença = linha.insertCell(1)
                            let cpassaram = linha.insertCell(2)
                            cnomes.innerHTML = listaAlunos
                            cpresença.innerHTML = listaPresença
                            cpassaram.innerHTML = alunosAprovados

                            listaAlunos = []
                            listaPresença = []
                            alunos = []

                            document.getElementById("labelAlunos").innerHTML = "Número de alunos da turma " + a + ":"
                        }
                    }


                }
            }

        }

    }

}
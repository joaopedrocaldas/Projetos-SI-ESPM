let botao1 = document.getElementById("botao1")
let i = 0
let resposta = document.getElementById("resposta")

botao1.onclick = function contaalunos() {
    let qntAlunos = Number(document.getElementById("qnt").value)
    let favor = []
    let contra = []

    let botao2 = document.getElementById("botao2")
    botao2.onclick = function votar() {
        i = i + 1

        if (i <= qntAlunos) {

            let nome = document.getElementById("nome").value
            let radio = document.getElementsByName("radio")
            let labelAluno = document.getElementById("labelAluno")

            if (radio[0].checked == true) {
                favor.push(nome)
                labelAluno.innerHTML = "nome do aluno " + (i + 1)
            }
            if (radio[1].checked == true) {
                contra.push(nome)
                labelAluno.innerHTML = "nome do aluno " + (i + 1)
            }

            if (i == qntAlunos) {
                let pFavor = (favor.length / qntAlunos) * 100
                let pContra = (contra.length / qntAlunos) * 100
                resposta.innerHTML = "Porcentagem contra: " + pContra + "%" + "<br>" +
                    "Porcentagem a favor: " + pFavor + "%" + "<br>" +
                    "Contra: " + contra + "<br>" +
                    "A favor: " + favor
            }
        }
    }
}
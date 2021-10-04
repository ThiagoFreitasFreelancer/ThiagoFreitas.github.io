
const p_Information = document.querySelector('.Informacoes p');
const p_experiencias = document.querySelector('.experiencias p');
const p_formacao = document.querySelector('.Formacao p');
const p_complementos = document.querySelector('.complementos p');
const p_contatos = document.querySelector('.Contatos p');

p_contatos.insertAdjacentHTML('beforebegin',
"Email: thiago_epaz@hotmail.com </br> " + 
" Nascimento: 14/10/1997 </br>" + 
" Status: Casado </br> " +
" Telefone: (75)988110732 </br>" +
" Endereço: Ilhéus - BA, Salobrinho, Rua São Pedro, N 45 "
)

p_Information.insertAdjacentHTML('beforebegin',"Sou estudante comprometido em tecnologias")

p_experiencias.insertAdjacentHTML('beforebegin',
"Centro de Pesquisa e Desenvolvimento de Ilhéus </br>" +
"Período: 02/2020 -> 12/2020 </br>" +
"Tarefas: Desenvolvimento em .Net, C#, JavaScript e suas tecnologias," +
"knockouts.js, SQL-Server dentre outras"
)

p_formacao.insertAdjacentHTML('beforebegin',
"Universidade Estadual de Santa Cruz </br>" +
"Curso: Ciência da Computação </br>" +
"Situação: Cursando </br>" +
"Início/Fim: 02/2018 estimado para 02/2024 </br>"
)

p_complementos.insertAdjacentHTML('beforebegin',
"A que irei inserir informações sobre mim," +
"como projetos e estudos que estou fazendo," +
"irei inserir conteúdos sobre projetos futuros..."
)
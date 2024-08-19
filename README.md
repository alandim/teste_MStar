# teste_MStar

O sistema deve possuir asseguintes funcionalidades:
1. Gerenciamento das mercadorias;
2. Gerenciamento de entrada e saída de mercadorias;
3. Tela para visualização das entradas e saídas por mês de cada mercadoria em formato de gráfico;
4. Exportar relatório mensal com todas as entradas e saídas de todas as mercadorias no formato PDF.

O sistema deve seguir alguns preceitos básicos da engenharia de software e utilizar Flask para o backend,
React.js para o frontend e o banco de dados SQL.

Os seguintes pontos devem ser seguidos:
1. Os dados entrados devem ser validados no cliente, ou seja, não devem ser enviados dados ao servidor
sem já terem sido validados com algum componente de validação. Validar implica em não deixar o usuário
enviar os dados com campos em branco no formulário, não deixar o usuário digitar caracteres inválidos na
submissão da data, etc.
2. O sistema deve ser desenvolvido em Flask utilizando a linguagem Python.
3. Asinformações das mercadorias e suas entradas e saídas devem ser armazenados em um banco de dados.
4. O front-end deve ser desenvolvido utilizando React.js.
5. No cadastro de uma nova mercadoria, devem ser salvos o nome, número de registro, o fabricante, o tipo
e a descrição da mesma. O objetivo dessa tela simples é persistir no banco de dados a mercadoria
cadastrada.
6. O cadastro da entrada deve conter a quantidade, a data e hora, o local e um DropDown com
todas as mercadoriasjá cadastradas. Na tabela de Entrada no banco de dados, deverá sersalva a
mercadoria selecionada no DropDown (select).
7. Por último, o cadastro da saída deverá conter a quantidade, a data e hora, o local e um DropDown com
todas as mercadoriasjá cadastradas. Na tabela de Saída no banco de dados, deverá sersalva a mercadoria
selecionada no DropDown.
8. O Script de criação do seu banco deverá ser apresentado.
9. Qualquer funcionalidade extra será levada em consideração na avaliação do case, como por
exemplo, verificação da disponibilidade de cada mercadoria, relatórios gerenciais, etc.
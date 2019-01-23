import { Question } from "../model/question";


export class Const {

    public static questions: Array<Question> = [
        {
            idQuestion: 0, dsQuestion: "A instrução JOIN em SQL é utilizada para consultar informações de duas ou mais tabelas, baseadas em relações entre colunas destas tabelas. Um dos tipos de JOIN é o INNER JOIN que retorna linhas.",
            opt1: "Não importando a correspondência entre as tabelas, criando uma relação entre as linhas e colunas.",
            opt2: "Quando existir correspondência em apenas uma das tabelas.",
            opt3: "Não importando a correspondência entre as tabelas, criando uma relação entre as linhas, apenas.",
            opt4: "Quando existir ao menos uma correspondência em ambas as tabelas.",
            score: 2, optCorrectAnswer: 4, selected: false
        },
        {
            idQuestion: 1, dsQuestion: "Com referência a big data, assinale a opção correta.",
            opt1: "Em big data, o sistema de arquivos HDFS é usado para armazenar arquivos muito grandes de forma distribuída, tendo como princípio o write-many, read-once.",
            opt2: "O MapReduce é considerado um modelo de programação que permite o processamento de dados massivos em um algoritmo paralelo e distribuído.",
            opt3: "O sistema de arquivos distribuído Hadoop implementa o algoritmo Dijkstra modificado para busca irrestrita de dados em árvores aglomeradas em clusters com criptografia.",
            opt4: "A definição mais ampla de big data restringe o termo a duas partes — o volume absoluto e a velocidade —, o que facilita a extração das informações e dos insights de negócios.",
            score: 2, optCorrectAnswer: 2, selected: false
        },
        {
            idQuestion: 2, dsQuestion: "Dentre os diversos tipos de bancos de dados, existe o denominado bancos de dados objeto-relacionais, que tem como fundamento a:",
            opt1: "Incorporação de características e recursos da orientação a objetos nos bancos de dados originalmente relacionais.",
            opt2: "Eliminação do conceito de atributos, existente nos bancos de dados originalmente relacionais.",
            opt3: "Duplicação das tabelas componentes de um banco de dados originalmente relacional.",
            opt4: "Substituição do conceito representado pelas propriedades ACID pelo teorema CAP.",
            score: 2, optCorrectAnswer: 1, selected: false
        },
        {
            idQuestion: 3, dsQuestion: "No SQL, os controles de transação e concorrência definem diferentes tipos de isolamento para prevenir fenômenos indesejáveis que podem ocorrer em transações concorrentes. Estes fenômenos indesejáveis são: Dirt read, Nonrepeatable read e ...",
            opt1: "Overlapped read.",
            opt2: "Unsynchronized read.",
            opt3: "Sequential read.",
            opt4: "Phantom read.",
            score: 2, optCorrectAnswer: 4, selected: false
        },
        {
            idQuestion: 4, dsQuestion: "No modelo de entidade-relacionamento, a técnica Bottom- Up.",
            opt1: "Inicia a modelagem partindo de entidades altamente abstratas e aplicando transformações que permitem encontrar entidades menos abstratas e mais representativas do sistema que está sendo desenvolvido.",
            opt2: "Parte dos conceitos mais elementares para construir conceitos mais complexos.",
            opt3: "Utiliza três símbolos na linha de relação entre as entidades, para determinar o relacionamento a cardinalidade e ligação entre as chaves primárias e estrangeiras.",
            opt4: "Nda.",
            score: 2, optCorrectAnswer: 2, selected: false
        },
        {
            idQuestion: 5, dsQuestion: `CREATE TABLE nota (id INT PRIMARY KEY,data TEXT,valor REAL); \n
            INSERT INTO nota SET id=1,data="01012012",valor=15.5; \n
            INSERT INTO nota SET id=2,data="01042012",valor=12.5; \n
            SELECT COUNT(*) FROM nota WHERE valor < 20; 
            
            O resultado para a consulta efetuada será:`,
            opt1: "11.5, 12.5 e 15.5",
            opt2: "0",
            opt3: "2",
            opt4: "12.5 e 15.5",
            score: 2, optCorrectAnswer: 3, selected: false
        },
        {
            idQuestion: 6, dsQuestion: "Uma das opções para a criação de um banco de dados Oracle se dá pela utilização do Database Configuration Assistant (DBCA). Em uma das páginas de configuração desse assistente é possível listar as funcionalidades padrão do banco de dados, como Oracle JVM, Oracle Text e ...",
            opt1: "OLTP2 (Online Transaction Processing).",
            opt2: "DSSW (Data Warehousing).",
            opt3: "XDB Protocol.",
            opt4: "DBCA Templates.",
            score: 2, optCorrectAnswer: 3, selected: false
        },
        {
            idQuestion: 7, dsQuestion: "A função LAST_INSERT_ID, em MYSQL",
            opt1: "retorna com o identificador do último octeto, dado um endereço de rede no formato IPv4.",
            opt2: "utiliza o identificador da coluna informada para gerar um novo número de identificação.",
            opt3: "retorna o número de identificação dos arquivos de índice da base de dados.",
            opt4: "retorna o último valor para uma coluna que tenha a propriedade de auto incremento.",
            score: 2, optCorrectAnswer: 4, selected: false
        },
        {
            idQuestion: 8, dsQuestion: "Em PostgreSQL, um conjunto de funções e expressões estão disponíveis para a geração de arquivos XML. A função, similar a função xmlconcat, que concatena as colunas xml entre linhas de uma tabela é denominada de ...",
            opt1: "xmllist.",
            opt2: "xmlagg.",
            opt3: "xmlrowcat.",
            opt4: "xmlgrep.",
            score: 2, optCorrectAnswer: 2, selected: false
        },
        {
            idQuestion: 9, dsQuestion: "Projeto físico corresponde à etapa da implementação de um banco de dados, no qual o modelo do BD é enriquecido com detalhes que influenciam no seu desempenho, mas não interferem na sua funcionalidade. Na prática, é um processo contínuo, que ocorre mesmo depois de o banco de dados já está implementado e em funcionamento, também conhecido como:",
            opt1: "tuning.",
            opt2: "polling.",
            opt3: "rendering.",
            opt4: "overlaying.",
            score: 2, optCorrectAnswer: 1, selected: false
        },
        {
            idQuestion: 10, dsQuestion: "O modo como os SGBDR lidam com a segurança dos dados e o acesso à informação é realizado a partir de um conjunto de permissões. A concessão e a eliminação das permissões são realizadas, respectivamente, por meio dos seguintes comandos SQL:",
            opt1: "GRANT e ROLLBACK.",
            opt2: "GRANT e CANCEL.",
            opt3: "GRANT e REVOKE.",
            opt4: "COMMIT e REVOKE.",
            score: 2, optCorrectAnswer: 3, selected: false
        },
        {
            idQuestion: 11, dsQuestion: "PGSQL é uma linguagem procedural carregável desenvolvida para o sistema de banco de dados PostgreSQL. Como a maioria dos produtos de banco de dados relacional, o PostgreSQL suporta funções de agregação. Uma função de agregação computa um único resultado para várias linhas de entrada. Por exemplo, para calcular a média deve ser usada a seguinte função de agregação:",
            opt1: "query.",
            opt2: "avg.",
            opt3: "med.",
            opt4: "like.",
            score: 2, optCorrectAnswer: 2, selected: false
        },
        {
            idQuestion: 12, dsQuestion: "Em PGSQL, é usado, para o operador de atribuição, o seguinte símbolo:",
            opt1: ": =",
            opt2: "<-",
            opt3: "=",
            opt4: "<<",
            score: 2, optCorrectAnswer: 1, selected: false
        },
        {
            idQuestion: 13, dsQuestion: "Em TSQL, um comando permite a remoção de uma ou mais definições de tabela e todos os dados, índices, gatilhos, restrições e especificações de permissão dessas tabelas. Esse comando é:",
            opt1: "REMOVE TABLE",
            opt2: "DROP TABLE",
            opt3: "ERASE TABLE",
            opt4: "DELETE TABLE",
            score: 2, optCorrectAnswer: 2, selected: false
        },
        {
            idQuestion: 14, dsQuestion: "EmTSQL, o operador módulo tem por função retornar o resto da divisão de um número por outro. \n O símbolo utilizado para esse operador é:",
            opt1: "%",
            opt2: "&",
            opt3: ".",
            opt4: "@",
            score: 2, optCorrectAnswer: 1, selected: false
        },
        {
            idQuestion: 15, dsQuestion: "No contexto da recuperação das informações em bancos de dados textuais, um processo consiste em aplicar operações em uma palavra para encontrar sua raiz gramatical, como, por exemplo: “recuperar” é raiz de “recuperação”, “recuperações”, “recuperam” e “recuperado”. Além de ser útil para encontrar possíveis textos relevantes, esse processo também ajuda a reduzir o tamanho da estrutura de indexação, já que diminui o número de índices distintos e é denominado:",
            opt1: "sheering.",
            opt2: "smashing.",
            opt3: "sweeping.",
            opt4: "streaming.",
            score: 2, optCorrectAnswer: 2, selected: false
        },
        {
            idQuestion: 14, dsQuestion: "Existem diversas notações para o Modelo Entidade-Relacionamento. A notação original foi proposta por Peter Chen e é composta de entidades, relacionamentos, atributos, representados, respectivamente, por:",
            opt1: "retângulos, losangos e círculos.",
            opt2: "retângulos, círculos e losangos.",
            opt3: "losangos, retângulos e círculos.",
            opt4: "círculos, retângulos e losangos.",
            score: 2, optCorrectAnswer: 1, selected: false
        },
        {
            idQuestion: 15, dsQuestion: "O nível interno de um banco de dados é definido como sendo o mais próximo do meio de armazenamento físico. Nesse nível, estão a representação física dos campos e a sequência física em que os registros estão armazenados no sistema.",
            opt1: "Verdadeiro.",
            opt2: "Falso.",
            opt3: null,
            opt4: null,
            score: 2, optCorrectAnswer: 1, selected: false
        },
        {
            idQuestion: 16, dsQuestion: "As linguagens de programação podem ser utilizadas no nível conceitual para que visualize a parte do banco de dados de interesse.",
            opt1: "Verdadeiro.",
            opt2: "Falso.",
            opt3: null,
            opt4: null,
            score: 2, optCorrectAnswer: 2, selected: false
        },
        {
            idQuestion: 17, dsQuestion: "No nível externo, pode-se ter uma visão única de todo o banco de dados, incluindo definições de esquemas e restrições de integridade, independentemente do armazenamento físico.",
            opt1: "Verdadeiro.",
            opt2: "Falso.",
            opt3: null,
            opt4: null,
            score: 2, optCorrectAnswer: 2, selected: false
        },
        {
            idQuestion: 18, dsQuestion: "O acesso mais comum a banco de dados é realizado por meio de linguagens não procedurais. Como exemplo, a instrução SELECT, em SQL, permite especificar os objetos do banco de dados que serão recuperados, incluindo os detalhes de implementação de como essa recuperação ocorrerá.",
            opt1: "Verdadeiro.",
            opt2: "Falso.",
            opt3: null,
            opt4: null,
            score: 2, optCorrectAnswer: 2, selected: false
        },
        {
            idQuestion: 19, dsQuestion: "Na transformação do modelo conceitual para o lógico, a quantidade de atributos das entidades envolvidas determina o método a ser utilizado na implementação dos relacionamentos.",
            opt1: "Verdadeiro.",
            opt2: "Falso.",
            opt3: null,
            opt4: null,
            score: 2, optCorrectAnswer: 2, selected: false
        },
        {
            idQuestion: 20, dsQuestion: "Por ser um processo contínuo, o projeto físico permite que sejam realizadas alterações no banco de dados, mesmo após a sua implementação.",
            opt1: "Verdadeiro.",
            opt2: "Falso.",
            opt3: null,
            opt4: null,
            score: 2, optCorrectAnswer: 1, selected: false
        },
        {
            idQuestion: 21, dsQuestion: "Durante a etapa do projeto físico, é permitido realizar o particionamento de dados.",
            opt1: "Verdadeiro.",
            opt2: "Falso.",
            opt3: null,
            opt4: null,
            score: 2, optCorrectAnswer: 1, selected: false
        },
        {
            idQuestion: 22, dsQuestion: "No projeto lógico, o modelo físico é obtido por meio da transformação do modelo conceitual.",
            opt1: "Verdadeiro.",
            opt2: "Falso.",
            opt3: null,
            opt4: null,
            score: 2, optCorrectAnswer: 2, selected: false
        },
        {
            idQuestion: 23, dsQuestion: "Com relação ao tempo de execução de uma consulta, o uso de índices em tabelas é recomendado para que os dados sejam exibidos rapidamente. A eficiência de uma consulta está relacionada à quantidade de índices na tabela: quanto mais índices ela possuir, mais rápida será a execução das operações de leitura e escrita.",
            opt1: "Verdadeiro.",
            opt2: "Falso.",
            opt3: null,
            opt4: null,
            score: 2, optCorrectAnswer: 2, selected: false
        },
        {
            idQuestion: 24, dsQuestion: "Entre os recursos do Oracle 11g que permitem ajustar o banco de dados para aumentar seu desempenho estão os índices de chave invertida, que, para atingir esse fim, necessitam, em alguns casos, ser reconstruídos com frequência.",
            opt1: "Verdadeiro.",
            opt2: "Falso.",
            opt3: null,
            opt4: null,
            score: 2, optCorrectAnswer: 1, selected: false
        },
        {
            idQuestion: 25, dsQuestion: "A maior parte dos problemas de desempenho em banco de dados não está relacionada à aplicação, mas sim às configurações incorretas dos arquivos de parâmetros realizadas pelos administradores de banco de dados.",
            opt1: "Verdadeiro.",
            opt2: "Falso.",
            opt3: null,
            opt4: null,
            score: 2, optCorrectAnswer: 2, selected: false
        },
        {
            idQuestion: 26, dsQuestion: "Nas situações em que muitos usuários realizam inserções de forma concorrente, uma boa prática com relação ao planejamento do desempenho consiste em organizar as inserções de modo que elas envolvam a menor quantidade de tabelas possível.",
            opt1: "Verdadeiro.",
            opt2: "Falso.",
            opt3: null,
            opt4: null,
            score: 2, optCorrectAnswer: 1, selected: false
        },
        {
            idQuestion: 27, dsQuestion: "O uso de views materializadas permite aumentar o desempenho do banco de dados, pois minimiza o acesso às tabelas de dados e torna mais rápida a execução das consultas.",
            opt1: "Verdadeiro.",
            opt2: "Falso.",
            opt3: null,
            opt4: null,
            score: 2, optCorrectAnswer: 1, selected: false
        },
        {
            idQuestion: 28, dsQuestion: "A instrução, em SQL, grant update (nota) on aluno_disciplina to pedro, miguel; apresenta erro de sintaxe",
            opt1: "Verdadeiro.",
            opt2: "Falso.",
            opt3: null,
            opt4: null,
            score: 2, optCorrectAnswer: 2, selected: false
        },
        {
            idQuestion: 29, dsQuestion: "Em SQL, o comando create role acesso_ensino as grant insert, update on ensino_superior, quando executado, cria o papel acesso_ensino, contendo os privilégios de inserir e atualizar na tabela ensino_superior. ",
            opt1: "Verdadeiro.",
            opt2: "Falso.",
            opt3: null,
            opt4: null,
            score: 2, optCorrectAnswer: 2, selected: false
        },
        {
            idQuestion: 30, dsQuestion: "No Oracle 11g, o parâmetro PASSWORD_GRACE_TIME é usado para especificar o número de dias após o qual uma senha expirada deve ser alterada.",
            opt1: "Verdadeiro.",
            opt2: "Falso.",
            opt3: null,
            opt4: null,
            score: 2, optCorrectAnswer: 1, selected: false
        }
    ];

}
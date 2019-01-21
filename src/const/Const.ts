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
            idQuestion: 0, dsQuestion: "A instrução JOIN em SQL é utilizada para consultar informações de duas ou mais tabelas, baseadas em relações entre colunas destas tabelas. Um dos tipos de JOIN é o INNER JOIN que retorna linhas.",
            opt1: "não importando a correspondência entre as tabelas, criando uma relação entre as linhas e colunas.",
            opt2: "quando existir correspondência em apenas uma das tabelas.",
            opt3: "não importando a correspondência entre as tabelas, criando uma relação entre as linhas, apenas",
            opt4: "quando existir ao menos uma correspondência em ambas as tabelas.",
            score: 2, optCorrectAnswer: 4, selected: false
        },
        {
            idQuestion: 0, dsQuestion: "A instrução JOIN em SQL é utilizada para consultar informações de duas ou mais tabelas, baseadas em relações entre colunas destas tabelas. Um dos tipos de JOIN é o INNER JOIN que retorna linhas.",
            opt1: "não importando a correspondência entre as tabelas, criando uma relação entre as linhas e colunas.",
            opt2: "quando existir correspondência em apenas uma das tabelas.",
            opt3: "não importando a correspondência entre as tabelas, criando uma relação entre as linhas, apenas",
            opt4: "quando existir ao menos uma correspondência em ambas as tabelas.",
            score: 2, optCorrectAnswer: 4, selected: false
        },
        {
            idQuestion: 0, dsQuestion: "A instrução JOIN em SQL é utilizada para consultar informações de duas ou mais tabelas, baseadas em relações entre colunas destas tabelas. Um dos tipos de JOIN é o INNER JOIN que retorna linhas.",
            opt1: "não importando a correspondência entre as tabelas, criando uma relação entre as linhas e colunas.",
            opt2: "quando existir correspondência em apenas uma das tabelas.",
            opt3: "não importando a correspondência entre as tabelas, criando uma relação entre as linhas, apenas",
            opt4: "quando existir ao menos uma correspondência em ambas as tabelas.",
            score: 2, optCorrectAnswer: 4, selected: false
        },
        {
            idQuestion: 0, dsQuestion: "A instrução JOIN em SQL é utilizada para consultar informações de duas ou mais tabelas, baseadas em relações entre colunas destas tabelas. Um dos tipos de JOIN é o INNER JOIN que retorna linhas.",
            opt1: "não importando a correspondência entre as tabelas, criando uma relação entre as linhas e colunas.",
            opt2: "quando existir correspondência em apenas uma das tabelas.",
            opt3: "não importando a correspondência entre as tabelas, criando uma relação entre as linhas, apenas",
            opt4: "quando existir ao menos uma correspondência em ambas as tabelas.",
            score: 2, optCorrectAnswer: 4, selected: false
        },
        {
            idQuestion: 0, dsQuestion: "A instrução JOIN em SQL é utilizada para consultar informações de duas ou mais tabelas, baseadas em relações entre colunas destas tabelas. Um dos tipos de JOIN é o INNER JOIN que retorna linhas.",
            opt1: "não importando a correspondência entre as tabelas, criando uma relação entre as linhas e colunas.",
            opt2: "quando existir correspondência em apenas uma das tabelas.",
            opt3: "não importando a correspondência entre as tabelas, criando uma relação entre as linhas, apenas",
            opt4: "quando existir ao menos uma correspondência em ambas as tabelas.",
            score: 2, optCorrectAnswer: 4, selected: false
        },
        {
            idQuestion: 0, dsQuestion: "A instrução JOIN em SQL é utilizada para consultar informações de duas ou mais tabelas, baseadas em relações entre colunas destas tabelas. Um dos tipos de JOIN é o INNER JOIN que retorna linhas.",
            opt1: "não importando a correspondência entre as tabelas, criando uma relação entre as linhas e colunas.",
            opt2: "quando existir correspondência em apenas uma das tabelas.",
            opt3: "não importando a correspondência entre as tabelas, criando uma relação entre as linhas, apenas",
            opt4: "quando existir ao menos uma correspondência em ambas as tabelas.",
            score: 2, optCorrectAnswer: 4, selected: false
        },
        {
            idQuestion: 0, dsQuestion: "A instrução JOIN em SQL é utilizada para consultar informações de duas ou mais tabelas, baseadas em relações entre colunas destas tabelas. Um dos tipos de JOIN é o INNER JOIN que retorna linhas.",
            opt1: "não importando a correspondência entre as tabelas, criando uma relação entre as linhas e colunas.",
            opt2: "quando existir correspondência em apenas uma das tabelas.",
            opt3: "não importando a correspondência entre as tabelas, criando uma relação entre as linhas, apenas",
            opt4: "quando existir ao menos uma correspondência em ambas as tabelas.",
            score: 2, optCorrectAnswer: 4, selected: false
        },
        {
            idQuestion: 0, dsQuestion: "A instrução JOIN em SQL é utilizada para consultar informações de duas ou mais tabelas, baseadas em relações entre colunas destas tabelas. Um dos tipos de JOIN é o INNER JOIN que retorna linhas.",
            opt1: "não importando a correspondência entre as tabelas, criando uma relação entre as linhas e colunas.",
            opt2: "quando existir correspondência em apenas uma das tabelas.",
            opt3: "não importando a correspondência entre as tabelas, criando uma relação entre as linhas, apenas",
            opt4: "quando existir ao menos uma correspondência em ambas as tabelas.",
            score: 2, optCorrectAnswer: 4, selected: false
        },
        {
            idQuestion: 0, dsQuestion: "A instrução JOIN em SQL é utilizada para consultar informações de duas ou mais tabelas, baseadas em relações entre colunas destas tabelas. Um dos tipos de JOIN é o INNER JOIN que retorna linhas.",
            opt1: "não importando a correspondência entre as tabelas, criando uma relação entre as linhas e colunas.",
            opt2: "quando existir correspondência em apenas uma das tabelas.",
            opt3: "não importando a correspondência entre as tabelas, criando uma relação entre as linhas, apenas",
            opt4: "quando existir ao menos uma correspondência em ambas as tabelas.",
            score: 2, optCorrectAnswer: 4, selected: false
        },
        {
            idQuestion: 0, dsQuestion: "A instrução JOIN em SQL é utilizada para consultar informações de duas ou mais tabelas, baseadas em relações entre colunas destas tabelas. Um dos tipos de JOIN é o INNER JOIN que retorna linhas.",
            opt1: "não importando a correspondência entre as tabelas, criando uma relação entre as linhas e colunas.",
            opt2: "quando existir correspondência em apenas uma das tabelas.",
            opt3: "não importando a correspondência entre as tabelas, criando uma relação entre as linhas, apenas",
            opt4: "quando existir ao menos uma correspondência em ambas as tabelas.",
            score: 2, optCorrectAnswer: 4, selected: false
        },
        {
            idQuestion: 0, dsQuestion: "A instrução JOIN em SQL é utilizada para consultar informações de duas ou mais tabelas, baseadas em relações entre colunas destas tabelas. Um dos tipos de JOIN é o INNER JOIN que retorna linhas.",
            opt1: "não importando a correspondência entre as tabelas, criando uma relação entre as linhas e colunas.",
            opt2: "quando existir correspondência em apenas uma das tabelas.",
            opt3: "não importando a correspondência entre as tabelas, criando uma relação entre as linhas, apenas",
            opt4: "quando existir ao menos uma correspondência em ambas as tabelas.",
            score: 2, optCorrectAnswer: 4, selected: false
        },
        {
            idQuestion: 0, dsQuestion: "A instrução JOIN em SQL é utilizada para consultar informações de duas ou mais tabelas, baseadas em relações entre colunas destas tabelas. Um dos tipos de JOIN é o INNER JOIN que retorna linhas.",
            opt1: "não importando a correspondência entre as tabelas, criando uma relação entre as linhas e colunas.",
            opt2: "quando existir correspondência em apenas uma das tabelas.",
            opt3: "não importando a correspondência entre as tabelas, criando uma relação entre as linhas, apenas",
            opt4: "quando existir ao menos uma correspondência em ambas as tabelas.",
            score: 2, optCorrectAnswer: 4, selected: false
        },
        {
            idQuestion: 0, dsQuestion: "A instrução JOIN em SQL é utilizada para consultar informações de duas ou mais tabelas, baseadas em relações entre colunas destas tabelas. Um dos tipos de JOIN é o INNER JOIN que retorna linhas.",
            opt1: "não importando a correspondência entre as tabelas, criando uma relação entre as linhas e colunas.",
            opt2: "quando existir correspondência em apenas uma das tabelas.",
            opt3: "não importando a correspondência entre as tabelas, criando uma relação entre as linhas, apenas",
            opt4: "quando existir ao menos uma correspondência em ambas as tabelas.",
            score: 2, optCorrectAnswer: 4, selected: false
        },
        {
            idQuestion: 0, dsQuestion: "A instrução JOIN em SQL é utilizada para consultar informações de duas ou mais tabelas, baseadas em relações entre colunas destas tabelas. Um dos tipos de JOIN é o INNER JOIN que retorna linhas.",
            opt1: "não importando a correspondência entre as tabelas, criando uma relação entre as linhas e colunas.",
            opt2: "quando existir correspondência em apenas uma das tabelas.",
            opt3: "não importando a correspondência entre as tabelas, criando uma relação entre as linhas, apenas",
            opt4: "quando existir ao menos uma correspondência em ambas as tabelas.",
            score: 2, optCorrectAnswer: 4, selected: false
        },
        {
            idQuestion: 0, dsQuestion: "A instrução JOIN em SQL é utilizada para consultar informações de duas ou mais tabelas, baseadas em relações entre colunas destas tabelas. Um dos tipos de JOIN é o INNER JOIN que retorna linhas.",
            opt1: "não importando a correspondência entre as tabelas, criando uma relação entre as linhas e colunas.",
            opt2: "quando existir correspondência em apenas uma das tabelas.",
            opt3: "não importando a correspondência entre as tabelas, criando uma relação entre as linhas, apenas",
            opt4: "quando existir ao menos uma correspondência em ambas as tabelas.",
            score: 2, optCorrectAnswer: 4, selected: false
        },
        {
            idQuestion: 0, dsQuestion: "A instrução JOIN em SQL é utilizada para consultar informações de duas ou mais tabelas, baseadas em relações entre colunas destas tabelas. Um dos tipos de JOIN é o INNER JOIN que retorna linhas.",
            opt1: "não importando a correspondência entre as tabelas, criando uma relação entre as linhas e colunas.",
            opt2: "quando existir correspondência em apenas uma das tabelas.",
            opt3: "não importando a correspondência entre as tabelas, criando uma relação entre as linhas, apenas",
            opt4: "quando existir ao menos uma correspondência em ambas as tabelas.",
            score: 2, optCorrectAnswer: 4, selected: false
        },
        {
            idQuestion: 0, dsQuestion: "A instrução JOIN em SQL é utilizada para consultar informações de duas ou mais tabelas, baseadas em relações entre colunas destas tabelas. Um dos tipos de JOIN é o INNER JOIN que retorna linhas.",
            opt1: "não importando a correspondência entre as tabelas, criando uma relação entre as linhas e colunas.",
            opt2: "quando existir correspondência em apenas uma das tabelas.",
            opt3: "não importando a correspondência entre as tabelas, criando uma relação entre as linhas, apenas",
            opt4: "quando existir ao menos uma correspondência em ambas as tabelas.",
            score: 2, optCorrectAnswer: 4, selected: false
        }
    ];

}
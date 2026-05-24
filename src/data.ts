export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: number;
  block: string;
  text: string;
  options: Option[];
  correctAnswerId: string;
  justification: string;
}

export const questions: Question[] = [
  // Bloco A – Lógica e raciocínio (5 questões)
  {
    id: 1,
    block: "Bloco A – Lógica e raciocínio",
    text: "Um analista tem uma tabela com vendas diárias. Ele quer saber o total vendido no mês. Qual é a operação mais adequada?",
    options: [
      { id: "A", text: "Ordenar os valores do maior para o menor" },
      { id: "B", text: "Somar todos os valores da coluna de vendas" },
      { id: "C", text: "Calcular a média dos valores de vendas" },
      { id: "D", text: "Contar quantas linhas existem na tabela" },
    ],
    correctAnswerId: "B",
    justification: "Para saber o total vendido, é necessário somar todos os valores da coluna de vendas."
  },
  {
    id: 2,
    block: "Bloco A – Lógica e raciocínio",
    text: "Se todo Engenheiro de Dados precisa entender ETL, e João é Engenheiro de Dados, então:",
    options: [
      { id: "A", text: "João não precisa entender ETL" },
      { id: "B", text: "João pode ou não entender ETL" },
      { id: "C", text: "João obrigatoriamente entende ETL" },
      { id: "D", text: "ETL não tem relação com o trabalho de João" },
    ],
    correctAnswerId: "C",
    justification: "Pela lógica da premissa, se todo Engenheiro de Dados precisa entender ETL e João é um deles, ele obrigatoriamente precisa entender ETL."
  },
  {
    id: 3,
    block: "Bloco A – Lógica e raciocínio",
    text: "Uma empresa coleta dados de clientes em vários sistemas diferentes. O primeiro passo para transformar isso em informação útil é:",
    options: [
      { id: "A", text: "Criar gráficos bonitos no Power BI" },
      { id: "B", text: "Apagar os dados duplicados sem analisar" },
      { id: "C", text: "Organizar, limpar e padronizar esses dados" },
      { id: "D", text: "Aumentar o número de sistemas que coletam dados" },
    ],
    correctAnswerId: "C",
    justification: "Antes de analisar dados, é necessário organizá-los, limpar e padronizar, garantindo qualidade para a análise."
  },
  {
    id: 4,
    block: "Bloco A – Lógica e raciocínio",
    text: "Qual das opções abaixo representa melhor um raciocínio analítico?",
    options: [
      { id: "A", text: "Tomar decisões apenas pela intuição" },
      { id: "B", text: "Seguir a opinião da maioria" },
      { id: "C", text: "Usar dados, comparar cenários e tirar conclusões lógicas" },
      { id: "D", text: "Esperar outra pessoa decidir" },
    ],
    correctAnswerId: "C",
    justification: "Raciocínio analítico envolve uso de dados, comparação de cenários e conclusões lógicas."
  },
  {
    id: 5,
    block: "Bloco A – Lógica e raciocínio",
    text: "Se um relatório mostra que, mesmo com aumento de vendas, o lucro diminuiu, qual é a interpretação mais provável?",
    options: [
      { id: "A", text: "A empresa está vendendo menos" },
      { id: "B", text: "Os custos aumentaram mais do que as vendas" },
      { id: "C", text: "O lucro não tem relação com as vendas" },
      { id: "D", text: "A análise está sempre errada" },
    ],
    correctAnswerId: "B",
    justification: "Se o lucro cai mesmo com aumento de vendas, é provável que os custos tenham crescido mais que a receita."
  },

  // Bloco B – Fundamentos de Dados (5 questões)
  {
    id: 6,
    block: "Bloco B – Fundamentos de Dados",
    text: "O que é um banco de dados relacional?",
    options: [
      { id: "A", text: "Um conjunto de arquivos de texto salvos em pastas" },
      { id: "B", text: "Um sistema que armazena dados em tabelas relacionadas entre si" },
      { id: "C", text: "Um programa para criar apresentações" },
      { id: "D", text: "Uma planilha com gráficos" },
    ],
    correctAnswerId: "B",
    justification: "Banco de dados relacional organiza dados em tabelas com relacionamentos entre elas."
  },
  {
    id: 7,
    block: "Bloco B – Fundamentos de Dados",
    text: "O que significa a sigla ETL no contexto de dados?",
    options: [
      { id: "A", text: "Extração, Transformação e Carga" },
      { id: "B", text: "Estatística, Tabelas e Log" },
      { id: "C", text: "Entrada, Teste e Leitura" },
      { id: "D", text: "Exportação, Tratamento e Log" },
    ],
    correctAnswerId: "A",
    justification: "ETL é o processo de Extração, Transformação e Carga de dados."
  },
  {
    id: 8,
    block: "Bloco B – Fundamentos de Dados",
    text: "Qual é a principal diferença entre dado e informação?",
    options: [
      { id: "A", text: "Dado é sempre numérico; informação é sempre texto" },
      { id: "B", text: "Dado é bruto; informação é dado interpretado e contextualizado" },
      { id: "C", text: "Dado é verdadeiro; informação é falsa" },
      { id: "D", text: "Não existe diferença entre dado e informação" },
    ],
    correctAnswerId: "B",
    justification: "Dados são elementos brutos; informação é o resultado da análise e interpretação desses dados."
  },
  {
    id: 9,
    block: "Bloco B – Fundamentos de Dados",
    text: "Em um modelo dimensional (como em um data warehouse), qual tipo de tabela guarda os fatos medidos, como vendas ou quantidade?",
    options: [
      { id: "A", text: "Tabela de dimensão" },
      { id: "B", text: "Tabela de usuário" },
      { id: "C", text: "Tabela de fato" },
      { id: "D", text: "Tabela de configuração" },
    ],
    correctAnswerId: "C",
    justification: "Tabelas fato armazenam as métricas (fatos) que serão analisadas."
  },
  {
    id: 10,
    block: "Bloco B – Fundamentos de Dados",
    text: "O que caracteriza um banco NoSQL em relação a um banco relacional?",
    options: [
      { id: "A", text: "Não armazena dados" },
      { id: "B", text: "Armazena apenas números" },
      { id: "C", text: "Usa modelos flexíveis (documentos, chave-valor, grafos) em vez de tabelas fixas" },
      { id: "D", text: "Só funciona offline" },
    ],
    correctAnswerId: "C",
    justification: "Bancos NoSQL utilizam modelos flexíveis (documento, chave-valor, colunas, grafos) em vez de apenas tabelas relacionais."
  },

  // Bloco C – SQL / Python / Ferramentas (5 questões)
  {
    id: 11,
    block: "Bloco C – SQL / Python / Ferramentas",
    text: "O comando SQL mais usado para buscar dados de uma tabela é:",
    options: [
      { id: "A", text: "UPDATE" },
      { id: "B", text: "DELETE" },
      { id: "C", text: "SELECT" },
      { id: "D", text: "INSERT" },
    ],
    correctAnswerId: "C",
    justification: "SELECT é o comando usado para consultar dados em uma tabela."
  },
  {
    id: 12,
    block: "Bloco C – SQL / Python / Ferramentas",
    text: "Em SQL, qual cláusula é usada para filtrar linhas com base em uma condição?",
    options: [
      { id: "A", text: "GROUP BY" },
      { id: "B", text: "ORDER BY" },
      { id: "C", text: "WHERE" },
      { id: "D", text: "JOIN" },
    ],
    correctAnswerId: "C",
    justification: "WHERE filtra linhas com base em uma condição."
  },
  {
    id: 13,
    block: "Bloco C – SQL / Python / Ferramentas",
    text: "Qual opção descreve melhor o que é um JOIN em SQL?",
    options: [
      { id: "A", text: "Um comando para apagar dados" },
      { id: "B", text: "Um comando para criar uma tabela nova" },
      { id: "C", text: "Uma forma de combinar dados de duas ou mais tabelas relacionadas" },
      { id: "D", text: "Um tipo de gráfico no Power BI" },
    ],
    correctAnswerId: "C",
    justification: "JOIN combina dados de múltiplas tabelas baseadas em colunas relacionadas."
  },
  {
    id: 14,
    block: "Bloco C – SQL / Python / Ferramentas",
    text: "Em Python, qual estrutura é usada para repetir um bloco de código várias vezes?",
    options: [
      { id: "A", text: "if" },
      { id: "B", text: "for" },
      { id: "C", text: "print" },
      { id: "D", text: "def" },
    ],
    correctAnswerId: "B",
    justification: "O laço for é usado para iterar sobre sequências e repetir instruções."
  },
  {
    id: 15,
    block: "Bloco C – SQL / Python / Ferramentas",
    text: "No contexto de análise de dados, qual é um uso típico do Power BI ou de ferramentas similares?",
    options: [
      { id: "A", text: "Criar sistemas operacionais" },
      { id: "B", text: "Analisar dados e criar dashboards interativos" },
      { id: "C", text: "Hospedar sites de e-commerce" },
      { id: "D", text: "Programar circuitos eletrônicos" },
    ],
    correctAnswerId: "B",
    justification: "Power BI é uma ferramenta de Business Intelligence para análise de dados e criação de dashboards."
  },

  // Bloco D – Carreira, prática e contexto (5 questões)
  {
    id: 16,
    block: "Bloco D – Carreira, prática e contexto",
    text: "Qual alternativa descreve melhor o papel de um Engenheiro de Dados?",
    options: [
      { id: "A", text: "Apenas criar gráficos para relatórios" },
      { id: "B", text: "Cuidar exclusivamente de redes e infraestrutura física" },
      { id: "C", text: "Construir e manter pipelines, integrar fontes de dados e garantir que os dados cheguem prontos para análise" },
      { id: "D", text: "Atender clientes no suporte técnico" },
    ],
    correctAnswerId: "C",
    justification: "Engenheiros de Dados constroem pipelines e infraestruturas para que analistas e cientistas possam consumir dados prontos."
  },
  {
    id: 17,
    block: "Bloco D – Carreira, prática e contexto",
    text: "Qual é uma diferença importante entre um Analista de Dados e um Engenheiro de Dados?",
    options: [
      { id: "A", text: "Analista de Dados só trabalha com hardware" },
      { id: "B", text: "Engenheiro de Dados não usa SQL" },
      { id: "C", text: "Analista foca mais em análise e visualização; Engenheiro foca mais em infraestrutura, pipelines e processamento de dados em escala" },
      { id: "D", text: "Não existe diferença relevante" },
    ],
    correctAnswerId: "C",
    justification: "Analistas trabalham mais na análise e visualização; Engenheiros na ingestão, transformação e infraestrutura de dados."
  },
  {
    id: 18,
    block: "Bloco D – Carreira, prática e contexto",
    text: "Por que ter um portfólio de projetos é importante para quem quer trabalhar com Dados?",
    options: [
      { id: "A", text: "Porque substitui o currículo completamente" },
      { id: "B", text: "Porque mostra, na prática, que a pessoa sabe aplicar o que aprendeu" },
      { id: "C", text: "Porque garante emprego automaticamente" },
      { id: "D", text: "Porque é obrigatório por lei" },
    ],
    correctAnswerId: "B",
    justification: "Portfólio demonstra capacidade prática, o que é muito valorizado em vagas de dados."
  },
  {
    id: 19,
    block: "Bloco D – Carreira, prática e contexto",
    text: "Sobre trabalho em nuvem (cloud) na área de Dados, qual afirmação faz mais sentido?",
    options: [
      { id: "A", text: "A nuvem só é usada para guardar fotos pessoais" },
      { id: "B", text: "A nuvem permite processar grandes volumes de dados e escalar recursos conforme a demanda" },
      { id: "C", text: "A nuvem é sempre mais lenta que servidores locais" },
      { id: "D", text: "A nuvem não é usada em projetos de dados" },
    ],
    correctAnswerId: "B",
    justification: "Plataformas de nuvem permitem escalar recursos de processamento e armazenamento para grandes volumes de dados."
  },
  {
    id: 20,
    block: "Bloco D – Carreira, prática e contexto",
    text: "O que mais aumenta as chances de alguém sair do zero e conseguir o primeiro emprego em Dados?",
    options: [
      { id: "A", text: "Decorar conceitos sem praticar" },
      { id: "B", text: "Fazer um curso, mas nunca aplicar em projetos" },
      { id: "C", text: "Estudar fundamentos, praticar em projetos reais e montar um portfólio apresentável" },
      { id: "D", text: "Esperar a vaga perfeita aparecer" },
    ],
    correctAnswerId: "C",
    justification: "Combinar estudo, prática em projetos reais e portfólio aumenta muito as chances de conseguir o primeiro emprego."
  }
];

export interface Outcome {
  minScore: number;
  maxScore: number;
  level: string;
  title: string;
  salaryRange: string;
  text: string;
  planName: string;
  ctaText: string;
  ctaLink: string;
}

export const outcomes: Outcome[] = [
  {
    minScore: 0,
    maxScore: 6,
    level: "Abaixo do básico",
    title: "Abaixo do básico em Dados",
    salaryRange: "R$1.500 a R$3.000/mês",
    text: "Pela sua pontuação nesta prova, hoje você ainda está em um nível inicial em relação à área de Dados. Isso não é um problema – significa apenas que o mercado ainda não consegue enxergar você como alguém pronto para posições técnicas.\n\nUma faixa de salário realista para o seu momento atual fica em torno de R$1.500 a R$3.000 por mês, dependendo da função e do setor em que você atua hoje.\n\nA boa notícia é que, com uma base bem construída em SQL, Python, Excel, Power BI e fundamentos de análise de dados, você pode evoluir para faixas em torno de R$4.700 por mês como júnior em Dados, que é o que muitas empresas já pagam nessa área.\n\nO caminho mais coerente para você agora é começar pelo essencial, com foco em fundamentos e primeiros projetos práticos.",
    planName: "Basic – Formação em Engenharia de Dados e IA (Fundamentos)",
    ctaText: "Quero iniciar pelo plano Basic",
    ctaLink: "https://hotm.io/basic-engineer"
  },
  {
    minScore: 7,
    maxScore: 10,
    level: "Iniciante em Dados",
    title: "Iniciante em Dados com Potencial",
    salaryRange: "R$3.000 a R$4.700/mês",
    text: "Pela sua pontuação, você já demonstra algum entendimento de lógica, conceitos de dados e ferramentas, mas ainda tem lacunas importantes para disputar vagas na área.\n\nUma faixa de salário realista para o seu momento atual fica entre R$3.000 e R$4.700 por mês, dependendo da função que você ocupa hoje.\n\nSe você consolidar sua base em SQL, Python, ETL e visualização de dados, pode migrar para funções em Dados que começam na casa dos R$4.700 por mês no nível júnior, com espaço para crescer.\n\nO passo mais inteligente agora é fortalecer os fundamentos e começar a montar um portfólio com projetos práticos, mostrando para o mercado do que você é capaz.",
    planName: "Basic – Formação em Engenharia de Dados e IA (Fundamentos)",
    ctaText: "Quero começar pelo plano Basic",
    ctaLink: "https://hotm.io/basic-engineer"
  },
  {
    minScore: 11,
    maxScore: 15,
    level: "Em Transição para Dados",
    title: "Em Transição para Dados",
    salaryRange: "R$4.700 a R$6.500/mês",
    text: "Sua pontuação mostra que você já tem uma base consistente em lógica, conceitos de dados e ferramentas como SQL/Python ou BI. Você está em um patamar interessante para disputar posições ligadas à área de Dados.\n\nUma faixa de salário realista para o seu nível atual fica entre R$4.700 e R$6.500 por mês, típica de perfis júnior/pleno em Dados ou funções técnicas em crescimento.\n\nPara sair desse estágio e começar a disputar vagas mais fortes, você precisa dominar Databricks, Spark, Azure, pipelines em nuvem, Docker e projetos completos de Engenharia de Dados, além de se aproximar de certificações reconhecidas.\n\nVocê já provou que tem base. Agora, o que vai fazer diferença é uma formação mais completa, com projetos de ponta a ponta e suporte para acelerar sua transição.",
    planName: "Premium – Formação Completa em Engenharia de Dados e IA",
    ctaText: "Quero avançar com o plano Premium",
    ctaLink: "https://hotm.io/advanced-engineer"
  },
  {
    minScore: 16,
    maxScore: 20,
    level: "Perfil Técnico com Alto Potencial",
    title: "Perfil Técnico com Alto Potencial em Dados",
    salaryRange: "a partir de R$6.500/mês",
    text: "Sua pontuação é alta. Você demonstra conhecimento sólido em lógica, fundamentos de dados, ferramentas e entendimento do papel de um profissional na área.\n\nDependendo da posição que você ocupa hoje, uma faixa de salário realista já pode estar a partir de R$6.500 por mês, e você tem potencial real para disputar, no médio prazo, posições na casa dos R$11.000 por mês em nível sênior de Engenharia de Dados, que é o que muitas empresas oferecem para especialistas bem preparados.\n\nPara isso, você precisa consolidar um portfólio forte, aprofundar seu domínio em Databricks, Spark, Azure, pipelines em produção, Docker e se aproximar de certificações relevantes na área.\n\nVocê não está começando do zero. Está em um ponto em que uma formação completa pode encurtar muito o caminho entre o nível atual e as faixas salariais mais altas da área de Dados.",
    planName: "Premium – Formação Completa em Engenharia de Dados e IA",
    ctaText: "Quero garantir minha vaga no plano Premium",
    ctaLink: "https://hotm.io/advanced-engineer"
  }
];

export interface Unidade {
  id: number;
  slug: string;
  city: string;
  displayPhoto: string;
  hospitalizations: number;
  rate: number;
}

const Unidades = [
  {
    id: 1,
    slug: "sao-roque",
    city: "São Roque",
    displayPhoto: "/02-displayPhoto.jpeg",
    hospitalizations: 237,
    rate: 4.78,
  },
  {
    id: 2,
    city: "Ibaté",
    slug: "ibate",
    displayPhoto: "/03-displayPhoto.jpeg",
    hospitalizations: 221,
    rate: 4.91,
  },
  {
    id: 3,
    slug: "rio-claro",
    city: "Rio Claro",
    displayPhoto: "/01-displayPhoto.jpeg",
    hospitalizations: 492,
    rate: 4.97,
  },
  {
    id: 4,
    slug: "alambari",
    city: "Alambari",
    displayPhoto: "/placeholder.svg",
    hospitalizations: 341,
    rate: 4.83,
  },
];

const Treatments = [
  {
    id: 0,
    slug: "alcoolismo",
    h1: "Álcoolismo",
    description:
      "Tratamento especializado para o alcoolismo focado em desvendar os gatilhos do consumo e tratar as questões emocionais subjacentes.",
    educational: {
      title: "Entendendo o Alcoolismo e Seus Sinais",
      about: `O alcoolismo, ou Transtorno por Uso de Álcool, é uma doença crônica e progressiva. É fundamental entender que não se trata de uma falha de caráter ou falta de força de vontade, mas sim de uma condição de saúde complexa que afeta o cérebro e o comportamento.
      A doença cria uma dupla dependência: a física, onde o corpo se acostuma com a substância e sente sua falta, e a psicológica, onde a mente cria uma forte ligação com o ato de beber para lidar com emoções e situações.`,
    },
    symptoms: [
      "Desejo intenso de beber",
      "Perda de controle sobre a quantidade consumida",
      "Tolerância aumentada (necessidade de beber mais para sentir os mesmos efeitos)",
      "Sintomas de abstinência quando não se bebe",
      "Negligência de responsabilidades sociais, profissionais ou familiares",
      "Continuação do consumo apesar dos problemas causados pelo álcool",
    ],
    treatment: [
      {
        id: 0,
        title: "Avaliação Individual Completa",
        description:
          "O ponto de partida é você. Realizamos uma análise aprofundada para entender seu padrão de consumo, sua saúde clínica geral e o impacto do álcool em sua vida. O resultado é um plano de tratamento único e 100% personalizado para suas necessidades.",
      },
      {
        id: 1,
        title: "Desintoxicação Alcoólica Segura",
        description:
          "Sua segurança em primeiro lugar. A retirada do álcool pode ser perigosa. Por isso, oferecemos supervisão médica especializada 24 horas por dia para gerenciar os sintomas da abstinência de forma segura, profissional e o mais confortável possível.",
      },
      {
        id: 2,
        title: "Terapias Focadas no Comportamento",
        description:
          "Terapia Cognitivo-Comportamental (TCC) para identificar os gatilhos e mudar os padrões de pensamento que levam ao consumo.",
      },
      {
        id: 3,
        title: "Plano de Prevenção à Recaída",
        description:
          "Preparando você para o futuro. O tratamento não termina com a alta. Criamos um guia prático para você navegar situações de risco do dia a dia, como eventos sociais e momentos de estresse. Você sairá daqui fortalecido e com as estratégias necessárias para manter sua sobriedade a longo prazo.",
      },
    ],
  },
  {
    id: 1,
    slug: "dependencia-quimica",
    h1: "Dependência Química",
    description:
      "Programa de recuperação para a dependência química focado em interromper o ciclo do uso compulsivo e desenvolver novas habilidades de enfrentamento.",
    educational: {
      title: "Entendendo a Dependência Química",
      about: `A dependência química é uma condição médica caracterizada pelo uso compulsivo de substâncias psicoativas, como drogas ilícitas ou medicamentos controlados. Ela afeta o funcionamento do cérebro e o comportamento, tornando difícil para a pessoa controlar o uso, mesmo diante de consequências negativas.
      O tratamento envolve abordar tanto os aspectos físicos quanto emocionais da dependência, promovendo a recuperação integral do indivíduo.`,
    },
    symptoms: [
      "Desejo intenso de usar a substância",
      "Dificuldade em controlar ou interromper o uso",
      "Tolerância aumentada",
      "Sintomas de abstinência",
      "Negligência de responsabilidades",
      "Continuação do uso apesar dos prejuízos",
    ],
    treatment: [
      {
        id: 0,
        title: "Avaliação Clínica e Psicológica",
        description:
          "Análise detalhada do histórico de uso, saúde física e mental para criar um plano de tratamento personalizado.",
      },
      {
        id: 1,
        title: "Desintoxicação Supervisionada",
        description:
          "Processo seguro de retirada da substância sob supervisão médica, minimizando riscos e desconfortos.",
      },
      {
        id: 2,
        title: "Terapias Cognitivo-Comportamentais",
        description:
          "Intervenções terapêuticas para modificar padrões de pensamento e comportamento relacionados ao uso.",
      },
      {
        id: 3,
        title: "Prevenção de Recaídas",
        description:
          "Estratégias e acompanhamento para fortalecer a manutenção da abstinência e lidar com situações de risco.",
      },
    ],
  },
  {
    id: 2,
    slug: "vicio-em-jogos",
    h1: "Vício em Jogos",
    description:
      "Terapia especializada para o vício em jogos focada em controlar os impulsos compulsivos e reestruturar os padrões de pensamento e comportamento.",
    educational: {
      title: "O que é o Vício em Jogos?",
      about: `O vício em jogos, também chamado de transtorno do jogo, é caracterizado pela necessidade incontrolável de jogar, seja jogos de azar ou videogames, mesmo quando isso traz prejuízos à vida pessoal, social ou profissional.
      O tratamento busca restaurar o equilíbrio emocional e promover o autocontrole, ajudando o indivíduo a retomar o controle sobre sua rotina.`,
    },
    symptoms: [
      "Preocupação excessiva com jogos",
      "Necessidade de aumentar o tempo ou dinheiro gasto",
      "Tentativas fracassadas de parar ou reduzir",
      "Mentiras para encobrir o envolvimento com jogos",
      "Prejuízos financeiros, sociais ou profissionais",
      "Irritabilidade ou ansiedade quando não está jogando",
    ],
    treatment: [
      {
        id: 0,
        title: "Avaliação Psicológica",
        description:
          "Entendimento dos padrões de comportamento e impacto dos jogos na vida do paciente.",
      },
      {
        id: 1,
        title: "Terapia Cognitivo-Comportamental",
        description:
          "Intervenção para modificar pensamentos e comportamentos compulsivos relacionados ao jogo.",
      },
      {
        id: 2,
        title: "Gestão de Impulsos",
        description:
          "Técnicas para fortalecer o autocontrole e lidar com situações de risco.",
      },
      {
        id: 3,
        title: "Apoio Familiar",
        description:
          "Envolvimento da família no processo terapêutico para promover suporte e compreensão.",
      },
    ],
  },
];

const fakeNumber = () => {
  const dataAtual = new Date();
  const dia = dataAtual.getDate();

  const numeroBase = (dia - 1) % 6;

  const numeroFinal = numeroBase + 4;

  return numeroFinal;
};

const url = `https://wa.me/5518996698064?text=${encodeURI(
  "Olá, gostaria de saber mais sobre os serviços do Grupo AF!"
)}`;

export { Unidades, Treatments, fakeNumber, url };

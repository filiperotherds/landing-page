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
    id: 428462,
    slug: "rio-claro",
    city: "Rio Claro",
    displayPhoto: "/01-displayPhoto.jpeg",
    hospitalizations: 492,
    rate: 4.97,
  },
  {
    id: 428463,
    slug: "sao-roque",
    city: "São Roque",
    displayPhoto: "/02-displayPhoto.jpeg",
    hospitalizations: 237,
    rate: 4.78,
  },
  {
    id: 428464,
    slug: "alambari",
    city: "Alambari",
    displayPhoto: "/placeholder.svg",
    hospitalizations: 341,
    rate: 4.83,
  },
  {
    id: 428465,
    city: "Ibaté",
    slug: "ibate",
    displayPhoto: "/placeholder.svg",
    hospitalizations: 221,
    rate: 4.91,
  },
];

const Treatments = [
  {
    id: 1,
    slug: "alcool",
    h1: "Álcool",
    description:
      "Tratamento especializado para o alcoolismo focado em desvendar os gatilhos do consumo e tratar as questões emocionais subjacentes.",
  },
  {
    id: 2,
    slug: "dependencia-quimica",
    h1: "Dependência Química",
    description:
      "Programa de recuperação para a dependência química focado em interromper o ciclo do uso compulsivo e desenvolver novas habilidades de enfrentamento.",
  },
  {
    id: 3,
    slug: "vicio-em-jogos",
    h1: "Vício em Jogos",
    description:
      "Terapia especializada para o vício em jogos focada em controlar os impulsos compulsivos e reestruturar os padrões de pensamento e comportamento.",
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

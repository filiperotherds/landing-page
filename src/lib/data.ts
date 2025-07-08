interface Unidade {
  id: number;
  slug: string;
  city: string;
  displayPhoto: string;
  hospitalizations: number;
  rate: number;
}

const Unidades: Unidade[] = [
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
    h1: "Álcool",
    h2: "Tratamento para Alcoolismo",
    description:
      "Nosso tratamento especializado para o alcoolismo foca em desvendar os gatilhos do consumo, tratar as questões emocionais subjacentes e reconstruir uma rotina saudável. Com suporte médico, terapia cognitivo-comportamental e grupos de apoio, ajudamos você a reencontrar o prazer de viver sem a necessidade do álcool.",
  },
  {
    id: 2,
    h1: "Dependência Química",
    h2: "Tratamento para Dependência Química",
    description:
      "Seja qual for a substância — cocaína, crack, maconha, opióides ou medicamentos controlados — existe um caminho de volta. Nossa abordagem integrada trata não apenas o uso da droga, mas principalmente as raízes do vício. Ajudamos o paciente a desenvolver novas habilidades de enfrentamento, a restaurar a autoestima e a consertar os laços familiares, criando uma base sólida para uma vida livre de drogas.",
  },
  {
    id: 3,
    h1: "Vício em Jogos",
    h2: "Tratamento para Vício em Jogos",
    description:
      "A dependência de jogos, apostas online e outras compulsões comportamentais pode ser tão devastadora quanto a dependência química. O tratamento foca em terapia cognitivo-comportamental (TCC) para identificar e modificar os padrões de pensamento que levam ao jogo compulsivo.",
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
export type { Unidade };

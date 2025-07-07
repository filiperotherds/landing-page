const Units = {
    SaoPaulo: [
        {
            id: 1,
            city: "Rio Claro",
            displayPhoto: "/01-displayPhoto.jpeg",
            hospitalizations: 492,
            rate: 4.97
        },
        {
            id: 2,
            city: "São Roque",
            displayPhoto: "/02-displayPhoto.jpeg",
            hospitalizations: 237,
            rate: 4.78
        },
        {
            id: 3,
            city: "Alambari",
            displayPhoto: "/placeholder.svg",
            hospitalizations: 341,
            rate: 4.83
        },
        {
            id: 4,
            city: "Ibaté",
            displayPhoto: "/placeholder.svg",
            hospitalizations: 221,
            rate: 4.91
        },
    ]
};

const Treatments = [
    {
        id: 0,
        h1: "Avaliação",
        h2: "Avaliação Inicial Completa",
        description: "Através de uma avaliação 360°, confidencial e humana, compreendemos sua história completa para desenhar um plano de tratamento exclusivo, focado em suas necessidades reais."
    },
    {
        id: 1,
        h1: "Álcool",
        h2: "Tratamento para Alcoolismo",
        description: "Nosso tratamento especializado para o alcoolismo foca em desvendar os gatilhos do consumo, tratar as questões emocionais subjacentes e reconstruir uma rotina saudável. Com suporte médico, terapia cognitivo-comportamental e grupos de apoio, ajudamos você a reencontrar o prazer de viver sem a necessidade do álcool."
    },
    {
        id: 2,
        h1: "Dependência Química",
        h2: "Tratamento para Dependência Química",
        description: "Seja qual for a substância — cocaína, crack, maconha, opióides ou medicamentos controlados — existe um caminho de volta. Nossa abordagem integrada trata não apenas o uso da droga, mas principalmente as raízes do vício. Ajudamos o paciente a desenvolver novas habilidades de enfrentamento, a restaurar a autoestima e a consertar os laços familiares, criando uma base sólida para uma vida livre de drogas."
    },
    {
        id: 3,
        h1: "Vício em Jogos",
        h2: "Tratamento para Vício em Jogos",
        description: "A dependência de jogos, apostas online e outras compulsões comportamentais pode ser tão devastadora quanto a dependência química. O tratamento foca em terapia cognitivo-comportamental (TCC) para identificar e modificar os padrões de pensamento que levam ao jogo compulsivo. Trabalhamos para desenvolver estratégias de controle de impulso, resolver problemas financeiros e restaurar a confiança e a estabilidade emocional."
    }
]

export { Units, Treatments };

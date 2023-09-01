export interface TagObj {
  id: number;
  title: string;
  color: string;
}

export interface ExperienceObj {
  id: number;
  image: string;
  descrption: string;
  title: string;
  lieu: string;
  degin: Date;
  end: Date | string;
  poste: string;
  tags?: TagObj[];
}

export const experiences: ExperienceObj[] = [
  {
    id: 0,
    title: "Africa systems DBA",
    descrption:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus facilis sunt non deserunt voluptates? Totam laudantium sapiente velit, officiis optio iste, amet odio reprehenderit deleniti vitae earum similique? Illum, expedita?",
    image: "",
    lieu: "Dschang, Cameoun",
    degin: new Date(),
    end: new Date(),
    poste: "Developpeur web et mobile",
    tags: [
      {
        color: "bg-violet-100",
        id: 0,
        title: "React Native",
      },
      {
        color: "bg-blue-200",
        id: 1,
        title: "React JS",
      },
      {
        color: "bg-blue-200",
        id: 2,
        title: "Redux",
      },
      {
        color: "bg-blue-200",
        id: 3,
        title: "Google Cloud",
      },
    ],
  },
  {
    id: 1,
    title: "SIGERIS DEV",
    descrption:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus facilis sunt non deserunt voluptates? Totam laudantium sapiente velit, officiis optio iste, amet odio reprehenderit deleniti vitae earum similique? Illum, expedita?",
    image: "",
    lieu: "Dschang, Cameoun",
    degin: new Date(),
    end: new Date(),
    poste: "Developpeur web et mobile",
    tags: [
      {
        color: "bg-stone-400",
        id: 0,
        title: "Flutter",
      },
    ],
  },
  {
    id: 2,
    title: "Exsodia",
    descrption:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus facilis sunt non deserunt voluptates? Totam laudantium sapiente velit, officiis optio iste, amet odio reprehenderit deleniti vitae earum similique? Illum, expedita?",
    image: "",
    lieu: "Montreal, Canada",
    degin: new Date(),
    end: new Date(),
    poste: "Developpeur web et mobile",
    tags: [
      {
        color: "bg-red-400",
        id: 0,
        title: "AngularJS",
      },
    ],
  },
  {
    id: 3,
    title: "WizeStack",
    descrption:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus facilis sunt non deserunt voluptates? Totam laudantium sapiente velit, officiis optio iste, amet odio reprehenderit deleniti vitae earum similique? Illum, expedita?",
    image: "",
    lieu: "Dschang, Cameoun",
    degin: new Date(),
    end: "Pas encore",
    poste: "Full-Stack",
    tags: [
      {
        color: "bg-stone-400",
        id: 0,
        title: "NextJS",
      },
      {
        color: "bg-red-300",
        id: 1,
        title: "NestJS",
      },
      {
        color: "bg-blue-300",
        id: 2,
        title: "Prisma",
      },
      {
        color: "bg-green-700",
        id: 2,
        title: "Axios",
      },
      {
        color: "bg-blue-200",
        id: 2,
        title: "TypeScript",
      },
    ],
  },
];

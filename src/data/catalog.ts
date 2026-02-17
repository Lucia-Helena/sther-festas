// Tipos
export type Addon = {
  id: string;
  name: string;
  price: number;
};

export type Theme = {
  id: string;
  name: string;
  price: number;
  image: string;
  addons: Addon[];
};

// Dados
export const themes: Theme[] = [
  {
    id: "infantil",
    name: "Festa Infantil",
    price: 500,
    image: "/images/tema-a.jpeg",
    addons: [
      { id: "balao", name: "Decoração com balões", price: 80 },
      { id: "mesa", name: "Mesa temática", price: 120 },
    ],
  },
   {
    id: "adulto",
    name: "Festa Adulto",
    price: 650,
    image: "/images/tema-b.jpeg",
    addons: [
      { id: "iluminacao", name: "Iluminação especial", price: 150 },
      { id: "bar", name: "Bar decorado", price: 200 },
    ],
  },
   {
    id: "corporativo",
    name: "Evento Corporativo",
    price: 900,
    image: "/images/tema-c.jpeg",
    addons: [
      { id: "logo", name: "Logo da empresa no painel", price: 180 },
      { id: "coffee", name: "Coffee break", price: 250 },
    ],
  },
   {
    id: "gestante",
    name: "Chá de Bebê",
    price: 550,
    image: "/images/tema-d.jpeg",
    addons: [
      { id: "ursinho", name: "Decoração Ursinho", price: 100 },
      { id: "bolo-fake", name: "Bolo fake", price: 80 },
    ],
  },
];

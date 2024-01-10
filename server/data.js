// datos

const oficinas = [
  { id: 1, nombre: "Ciudad de México" },
  { id: 2, nombre: "Mérida, Yuicatan" },
  { id: 3, nombre: "León, Guanajuato" },
  { id: 4, nombre: "Mérida, Yuicatan" },
  { id: 5, nombre: "Guadalajara, Jalisco" },
  { id: 6, nombre: "Hermosillo, Sonora" },
  { id: 7, nombre: "Monterrey, Nuevo León" },
];

const agentes = [
  { id: 1, nombre: "Zurich Fianzas", oficinaId: 1 },
  { id: 2, nombre: "Fianzas Atlas", oficinaId: 2 },
  { id: 3, nombre: "Afinco Seguros y Fianzas", oficinaId: 3 },
  { id: 4, nombre: "Fianzas Dorama", oficinaId: 4 },
  { id: 5, nombre: "GNP", oficinaId: 5 },
  { id: 6, nombre: "Fianzas Guardiana-Inbursa", oficinaId: 6 },
  { id: 7, nombre: "Fianzas Monterrey", oficinaId: 7 },
];

const ejecutivos = [
  { id: 1, nombre: "Gabriela", oficinaId: 1 },
  { id: 2, nombre: "José", oficinaId: 2 },
  { id: 3, nombre: "Verónica", oficinaId: 3 },
  { id: 4, nombre: "Francisco", oficinaId: 4 },
  { id: 5, nombre: "Elena", oficinaId: 5 },
  { id: 6, nombre: "Pedro", oficinaId: 6 },
  { id: 7, nombre: "Sofía", oficinaId: 7 },
];

module.exports = {
  oficinas,
  agentes,
  ejecutivos,
};

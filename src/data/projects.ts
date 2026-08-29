export type Project = {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  url: string;
  images: [string, string, string];
};

export const projects: Project[] = [
  {
    id: "barbershopkwc",
    number: "01",
    name: "Barbershop KWC",
    category: "WEB DEVELOPMENT",
    description:
      "Modern professional website created for a barbershop business with a clean and engaging digital presence.",
    url: "https://barbershopkwc.com/",
    images: [
      "/projects/barbershopkwc-1.jpg",
      "/projects/barbershopkwc-2.jpg",
      "/projects/barbershopkwc-3.jpg",
    ],
  },
  {
    id: "cambrian",
    number: "02",
    name: "Cambrian Custom Painting",
    category: "BUSINESS WEBSITE",
    description:
      "Professional service-business website designed to present the company and its services with a polished online experience.",
    url: "https://cambriancustompainting.com/",
    images: [
      "/projects/cambrian-1.jpg",
      "/projects/cambrian-2.jpg",
      "/projects/cambrian-3.jpg",
    ],
  },
  {
    id: "tigar",
    number: "03",
    name: "Tigar",
    category: "WEB DEVELOPMENT",
    description:
      "Modern responsive web experience built with a strong visual presentation and professional digital interface.",
    url: "https://tigar.ca/",
    images: ["/projects/tigar-1.jpg", "/projects/tigar-2.jpg", "/projects/tigar-3.jpg"],
  },
  {
    id: "bxc",
    number: "04",
    name: "BXC",
    category: "DIGITAL EXPERIENCE",
    description:
      "Interactive web experience focused on modern design, responsive layouts and smooth visual interactions.",
    url: "https://bxc-pied.vercel.app/",
    images: ["/projects/bxc-2.jpg", "/projects/bxc-3.jpg", "/projects/bxc-2.jpg"],
  },
  {
    id: "fadedistrict",
    number: "05",
    name: "Fade District Cuts",
    category: "BUSINESS WEBSITE",
    description:
      "Modern professional website designed for a barbershop brand and its online presence.",
    url: "https://www.fadedistrictcuts.com/",
    images: [
      "/projects/fadedistrict-1.jpg",
      "/projects/fadedistrict-2.jpg",
      "/projects/fadedistrict-3.jpg",
    ],
  },
  {
    id: "snowbros",
    number: "06",
    name: "Snow Bros PTBO",
    category: "BUSINESS WEBSITE",
    description:
      "Professional business website designed to create a strong online presence and clearly present the company's services.",
    url: "https://snowbrosptbo.ca/",
    images: [
      "/projects/snowbros-1.jpg",
      "/projects/snowbros-2.jpg",
      "/projects/snowbros-3.jpg",
    ],
  },
];

export const marqueeImages: string[] = projects.flatMap((p) => [p.images[0], p.images[1]]);

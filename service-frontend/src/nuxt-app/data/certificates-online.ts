// Define the shape of an online certificate
export interface CertificateOnline {
  name: string;
  date: string;
  url: string;
  image: string;
}

// Initialize the dataset
export const certificatesOnline: CertificateOnline[] = [
  {
    name: "ReactJS, Hooks, Recoil, TDD, Clean Architecture, SOLID",
    date: "Nov 2024",
    url: "https://www.udemy.com/certificate/UC-dfbb6bbc-36eb-4e5c-abd2-ef39f1618f49/",
    image: "2024-11-xx react-clean-arch.jpg",
  },
  {
    name: "NestJS: The Complete Developer's Guide",
    date: "Feb 2022",
    url: "https://www.udemy.com/certificate/UC-798ea1fa-7b4d-46f1-b4c7-f51791aa197d/",
    image: "2022-02-xx nestjs.jpg",
  },
  {
    name: "Using Typescript with Modern React",
    date: "Sep 2019",
    url: "https://www.udemy.com/certificate/UC-A9QEL14U/",
    image: "2019-09-26 react.jpg",
  },
  {
    name: "Getting Started with React",
    date: "Sep 2019",
    url: "https://www.udemy.com/certificate/UC-0W03BA5J/",
    image: "2019-09-19 react.jpg",
  },
  {
    name: "Typescript: The Complete Developer's Guide",
    date: "Sep 2019",
    url: "https://www.udemy.com/certificate/UC-B9VZCMV0/",
    image: "2019-09-16 typescript.jpg",
  },
  {
    name: "Master Computer Vision™ OpenCV4 in Python with Deep Learning",
    date: "Dec 2018",
    url: "https://www.udemy.com/certificate/UC-R1NDIZKK/",
    image: "2018-12-31 machine-learning.jpg",
  },
  {
    name: "Vue JS 2 - The Complete Guide (incl. Vue Router & Vuex)",
    date: "Nov 2018",
    url: "https://www.udemy.com/certificate/UC-TJT0UTP4/",
    image: "2018-11-03 vuejs.jpg",
  },
  {
    name: "Doctrine & the Database",
    date: "May 2018",
    url: "https://symfonycasts.com/certificates/E73FFA1EC103",
    image: "2018-05-30 doctrine-db.png",
  },
  {
    name: "Symfony 4 Fundamentals: Services, Config & Environments",
    date: "May 2018",
    url: "https://symfonycasts.com/certificates/FAACD392C102",
    image: "2018-05-27 symfony-config.png",
  },
  {
    name: "Stellar Development with Symfony 4",
    date: "May 2018",
    url: "https://symfonycasts.com/certificates/F4BBA064C101",
    image: "2018-05-22 symfony-lev1.png",
  },
];

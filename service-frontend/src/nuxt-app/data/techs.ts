import type { Tech } from "~/models/tech";
import { TechId } from "~/models/tech-id";

type HashTableTechs<T> = {
  [key in TechId]: T;
};

export const techs: HashTableTechs<Tech> = {
  apache: {
    id: TechId.apache,
    name: "Apache",
    icon: "apache.svg",
  },
  angular: {
    id: TechId.angular,
    name: "Angular",
    icon: "angular.svg",
  },
  apiPlatform: {
    id: TechId.apiPlatform,
    name: "api platform",
    icon: "api-platform.svg",
  },
  bootstrap: {
    id: TechId.bootstrap,
    name: "bootstrap",
    icon: "bootstrap.svg",
  },
  cSharp: {
    id: TechId.cSharp,
    name: "c#",
    icon: "cSharp.svg",
  },
  cPlusPlus: {
    id: TechId.cPlusPlus,
    name: "c++",
    icon: "c++.svg",
  },
  c: {
    id: TechId.c,
    name: "c",
    icon: "c.svg",
  },
  cpanel: {
    id: TechId.cpanel,
    name: "cpanel",
    icon: "cpanel.svg",
  },
  css3: {
    id: TechId.css3,
    name: "css",
    icon: "css3.svg",
  },
  cypress: {
    id: TechId.cypress,
    name: "cypress",
    icon: "cypress.svg",
  },
  docker: {
    id: TechId.docker,
    name: "docker",
    icon: "docker.svg",
  },
  drupal: {
    id: TechId.drupal,
    name: "drupal",
    icon: "drupal.svg",
  },
  fastapi: {
    id: TechId.fastapi,
    name: "fastapi",
    icon: "fastapi.svg",
  },
  git: {
    id: TechId.git,
    name: "git",
    icon: "git.svg",
  },
  googleAnalytics: {
    id: TechId.googleAnalytics,
    name: "google analytics",
    icon: "google-analytics.svg",
  },
  googleDevelopers: {
    id: TechId.googleDevelopers,
    name: "google developers",
    icon: "google-developers.svg",
  },
  graphql: {
    id: TechId.graphql,
    name: "graphql",
    icon: "graphql.svg",
  },
  gsapGreensock: {
    id: TechId.gsapGreensock,
    name: "gsap greensock",
    icon: "gsap-greensock.svg",
  },
  java: {
    id: TechId.java,
    name: "java",
    icon: "java.svg",
  },
  javascript: {
    id: TechId.javascript,
    name: "javascript",
    icon: "javascript.svg",
  },
  jest: {
    id: TechId.jest,
    name: "jest",
    icon: "jest.svg",
  },
  jquery: {
    id: TechId.jquery,
    name: "jquery",
    icon: "jquery.svg",
  },
  kubernetes: {
    id: TechId.kubernetes,
    name: "kubernetes",
    icon: "kubernetes.svg",
  },
  laravel: {
    id: TechId.laravel,
    name: "laravel",
    icon: "laravel.svg",
  },
  magento: {
    id: TechId.magento,
    name: "magento",
    icon: "magento.svg",
  },
  matlab: {
    id: TechId.matlab,
    name: "matlab",
    icon: "matlab.svg",
  },
  mysql: {
    id: TechId.mysql,
    name: "mysql",
    icon: "mysql.svg",
  },
  nextjs: {
    id: TechId.nextjs,
    name: "Next js",
    icon: "nextjs.svg",
  },
  nestjs: {
    id: TechId.nestjs,
    name: "Nest js",
    icon: "nestjs.svg",
  },
  nginx: {
    id: TechId.nginx,
    name: "nginx",
    icon: "nginx.svg",
  },
  nodejs: {
    id: TechId.nodejs,
    name: "nodejs",
    icon: "nodejs.svg",
  },
  opencv: {
    id: TechId.opencv,
    name: "opencv",
    icon: "opencv.svg",
  },
  opengl: {
    id: TechId.opengl,
    name: "opengl",
    icon: "opengl.svg",
  },
  php: {
    id: TechId.php,
    name: "php",
    icon: "php.svg",
  },
  postgresql: {
    id: TechId.postgresql,
    name: "postgresql",
    icon: "postgresql.svg",
  },
  python: {
    id: TechId.python,
    name: "python",
    icon: "python.svg",
  },
  react: {
    id: TechId.react,
    name: "react",
    icon: "react.svg",
  },
  symfony: {
    id: TechId.symfony,
    name: "symfony",
    icon: "symfony.svg",
  },
  tensorflow: {
    id: TechId.tensorflow,
    name: "tensorflow",
    icon: "tensorflow.svg",
  },
  typescript: {
    id: TechId.typescript,
    name: "typescript",
    icon: "typescript.svg",
  },
  threeJs: {
    id: TechId.threeJs,
    name: "threejs",
    icon: "threejs.png",
  },
  visualStudioCode: {
    id: TechId.visualStudioCode,
    name: "VS code",
    icon: "visual-studio-code.svg",
  },
  vue: {
    id: TechId.vue,
    name: "vue",
    icon: "vue.svg",
  },
  webgl: {
    id: TechId.webgl,
    name: "webgl",
    icon: "webgl.png",
  },
  wordpress: {
    id: TechId.wordpress,
    name: "wordpress",
    icon: "wordpress-icon.svg",
  },
  wpgraphql: {
    id: TechId.wpgraphql,
    name: "wpgraphql",
    icon: "wpgraphql.svg",
  },
  yii: {
    id: TechId.yii,
    name: "yii",
    icon: "yii.svg",
  },
};

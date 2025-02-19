import { RenderMode, ServerRoute } from '@angular/ssr';
import { portfolioData } from '@data/_portfolio-data';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'portfolio/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return portfolioData.map((project) => ({ slug: project.slug }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
 
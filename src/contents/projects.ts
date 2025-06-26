import { Project } from "@/types";


export const projects: Project[] = [
     {
        title: 'Buisness Platform',
        description: 'Buisness website built with Next.js, TypeScript, and Tailwind CSS.',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS',],
        githubLink: 'https://github.com/HifzanAli70938/reku-project',
        demoLink: 'https://reku-project-w7mz.vercel.app/',
        image: '/projects/buisness.jpg',
      },
          {
        title: 'Netflix Clone',
        description: 'Netflix clone built with React.js and Tailwind CSS.',
        technologies: ['React.js', 'Tailwind CSS',],
        githubLink: 'https://github.com/HifzanAli70938/netflix-clone',
        demoLink: 'https://netlify-clonebyali.netlify.app/',
        image: '/projects/netflix-clone.jpg',
      },
            {
        title: 'Voki App',
        description: 'Voki App built with React.js and Material css.',
        technologies: ['React.js', 'Material CSS',],
        githubLink: 'https://github.com/HifzanAli70938/voki-app',
        demoLink: 'https://voki-app.netlify.app/',
        image: '/projects/voki-app.jpg',
      }
  ];
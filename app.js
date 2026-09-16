'use strict';

const english = {
  skip: 'Skip to content',
  brandSub: 'DATA & BUSINESS INTELLIGENCE',
  navProjects: 'Projects', navSkills: 'Skills', navJourney: 'Education', navContact: 'Contact',
  heroEyebrow: 'BUSINESS INTELLIGENCE · DATA ANALYTICS',
  heroLine1: 'Turning', heroAccent: 'data', heroLine3: 'into meaning.',
  heroRole: 'Data Analyst & BI Developer',
  heroDescription: 'An IHEC Carthage graduate, I turn data into useful information. My experience at BVMT and Amen Bank brings together analytics, development and finance.',
  viewProjects: 'Explore my projects', letsTalk: 'Let’s talk',
  viewCv: 'View my CV', downloadCv: 'Download my CV',
  location: 'Ariana, Tunisia', availability: 'Open to Data & BI opportunities',
  projectsEyebrow: '01 / PROJECTS', projectsTitle: 'My projects.',
  githubProfile: 'My GitHub profile', projectDetails: 'Details',
  bvmtSummary: 'Commission reporting, forecasting and anomalies.',
  showroomSummary: 'Interactive car catalogue.', movieSummary: 'Movies, series and a wishlist.', librarySummary: 'Books, favourites and reading goals.',
  skillsEyebrow: '02 / SKILLS', skillsTitle: 'Technical & soft skills.',
  technicalLabel: 'TECHNICAL SKILLS', dataSkills: 'Data & BI', codeSkills: 'Development', analysisSkills: 'Analytics & ML',
  forecastSkills: 'Forecasting · Anomaly detection',
  softCommunication: 'Communication', softOrganisation: 'Organisation', softPatience: 'Patience', softTeamwork: 'Teamwork', softAutonomy: 'Autonomy', softCuriosity: 'Curiosity',
  journeyEyebrow: '03 / BACKGROUND', journeyTitle: 'Education & certifications.',
  academicLabel: 'ACADEMIC BACKGROUND', degree: 'Bachelor’s degree in Business Computing',
  specialty: 'Specialisation in Business Intelligence', school: 'Wafa High School, Ariana',
  baccalaureate: 'Baccalaureate in Economics and Management', certificationsLabel: 'CERTIFICATIONS',
  tcf: 'TCF — C1 level', tcfIssuer: 'French Institute of Tunisia', languagesLabel: 'LANGUAGES',
  languages: 'Arabic: native · French: TCF C1 · English: intermediate · German: elementary',
  contactEyebrow: '04 / CONTACT', contactTitle1: 'Shall we', contactTitle2: 'connect?',
  contactText: 'An opportunity in Data, BI or development? I would be happy to discuss it with you.',
  emailLabel: 'EMAIL', phoneLabel: 'PHONE', footerText: 'Business Intelligence, with meaning.',
  dialogEyebrow: 'PROJECT', openRepository: 'Open the GitHub repository',
  privateRepository: 'The source code is currently private. The link will be added once the repository is published.'
};

// Project descriptions are grounded in the repositories' README and source files.
const projects = {
  bvmt: {
    name: 'Reporting BVMT', repository: 'NourChafai / Reporting-Plateform',
    url: 'https://github.com/NourChafai/Reporting-Plateform',
    private: true,
    technologies: 'Python · FastAPI · React · SQL Server · scikit-learn',
    description: {
      fr: 'Projet de fin d’études réalisé en binôme à la Bourse de Tunis : une plateforme de reporting et d’analyse des commissions. Elle automatise l’import des fichiers Excel et le pipeline ETL, alimente un entrepôt de données SQL Server et propose des tableaux de bord interactifs. Des modèles de Machine Learning complètent le suivi avec des prévisions et la détection d’anomalies. L’interface React communique avec une API FastAPI, avec authentification et gestion des rôles.',
      en: 'A final-year project developed with a teammate at the Tunis Stock Exchange: a commission reporting and analytics platform. It automates Excel imports and the ETL pipeline, feeds a SQL Server data warehouse and provides interactive dashboards. Machine Learning models add forecasting and anomaly detection. The React interface connects to a FastAPI backend with authentication and role-based access.'
    }
  },
  showroom: {
    name: 'Showroom', repository: 'NourChafai / Showroom',
    url: 'https://github.com/NourChafai/Showroom',
    technologies: 'Angular · TypeScript · Bootstrap',
    description: {
      fr: 'Showroom automobile développé avec Angular. L’utilisateur recherche des véhicules par marque, parcourt les résultats et sélectionne une voiture pour afficher sa photo, son prix, sa puissance et sa description. L’interface repose sur des composants réutilisables qui échangent les données et les sélections.',
      en: 'A car showroom built with Angular. Users search for vehicles by brand, browse the results and select a car to view its photo, price, power and description. The interface uses reusable components that share data and selections.'
    }
  },
  'movie-app': {
    name: 'Movie-App', repository: 'NourChafai / Movie-App',
    url: 'https://github.com/NourChafai/Movie-App',
    technologies: 'Angular · TypeScript · RxJS · API TMDB',
    description: {
      fr: 'CineHub est une application Angular connectée à l’API TMDB pour explorer les films et les séries. Elle propose une recherche commune, les tendances, une navigation par catégories et une liste de favoris conservée dans le navigateur.',
      en: 'CineHub is an Angular application connected to the TMDB API for exploring movies and TV series. It provides a combined search, trending titles, category browsing and a personal wishlist saved in the browser.'
    }
  },
  'open-library-app': {
    name: 'open-Library-app', repository: 'NourChafai / open-Library-app',
    url: 'https://github.com/NourChafai/open-Library-app',
    technologies: 'Angular · TypeScript · RxJS · API Open Library',
    description: {
      fr: 'Application Angular connectée à l’API Open Library pour explorer des livres, rechercher par titre ou année et consulter les fiches détaillées. Elle permet aussi d’organiser ses favoris et de suivre des objectifs de lecture hebdomadaires, mensuels ou annuels, avec une sauvegarde locale.',
      en: 'An Angular application connected to the Open Library API for exploring books, searching by title or year and viewing detailed book information. Users can also manage favourites and track weekly, monthly or yearly reading goals, with their progress saved locally.'
    }
  }
};

const elements = [...document.querySelectorAll('[data-i18n]')];
const french = Object.fromEntries(elements.map(element => [element.dataset.i18n, element.textContent]));
const ariaTranslations = {
  fr: {brand: 'Nour Chafai — accueil', navigation: 'Navigation principale', language: 'Langue du site', closeProject: 'Fermer le projet'},
  en: {brand: 'Nour Chafai — home', navigation: 'Main navigation', language: 'Site language', closeProject: 'Close project'}
};
const metadata = {
  fr: {title: 'Nour Chafai — Data Analyst & Développeuse BI', description: 'Portfolio de Nour Chafai : projets GitHub, compétences Data et développement, parcours à l’IHEC Carthage et certifications.', socialTitle: 'Nour Chafai — Data Analyst & BI', socialDescription: 'Découvrez mes projets, mes compétences et mon parcours en Business Intelligence et développement.'},
  en: {title: 'Nour Chafai — Data Analyst & BI Developer', description: 'Nour Chafai’s portfolio: GitHub projects, Data and development skills, education at IHEC Carthage and certifications.', socialTitle: 'Nour Chafai — Data Analyst & BI', socialDescription: 'Explore my projects, skills and background in Business Intelligence and development.'}
};
const dialog = document.getElementById('project-dialog');
let currentProject = null;
let lastProjectTrigger = null;
let previousBodyOverflow = '';

function renderProject() {
  if (!currentProject) return;
  const project = projects[currentProject];
  const lang = document.documentElement.lang === 'en' ? 'en' : 'fr';
  document.getElementById('project-title').textContent = project.name;
  document.getElementById('project-repository').textContent = project.repository;
  document.getElementById('project-description').textContent = project.description[lang];
  document.getElementById('project-tech').textContent = project.technologies;
  document.getElementById('project-link').href = project.url;
  document.getElementById('project-link').hidden = Boolean(project.private);
  document.getElementById('project-status').hidden = !project.private;
}

function openProject(key, trigger) {
  if (!Object.hasOwn(projects, key)) return;
  currentProject = key;
  lastProjectTrigger = trigger;
  renderProject();
  previousBodyOverflow = document.body.style.overflow;
  document.body.style.overflow = 'hidden';
  dialog.showModal();
}

function setLanguage(language, updateUrl = true) {
  const lang = language === 'en' ? 'en' : 'fr';
  const messages = lang === 'en' ? english : french;
  for (const element of elements) {
    const message = messages[element.dataset.i18n];
    if (typeof message === 'string') element.textContent = message;
  }
  document.documentElement.lang = lang;
  document.title = metadata[lang].title;
  document.querySelector('meta[name="description"]').content = metadata[lang].description;
  document.querySelector('meta[property="og:title"]').content = metadata[lang].socialTitle;
  document.querySelector('meta[property="og:description"]').content = metadata[lang].socialDescription;
  document.querySelectorAll('[data-aria]').forEach(element => element.setAttribute('aria-label', ariaTranslations[lang][element.dataset.aria]));
  document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === lang)));
  document.querySelector('[data-alt="portrait"]').alt = lang === 'en' ? 'Portrait of Nour Chafai' : 'Portrait de Nour Chafai';
  renderProject();
  if (updateUrl) {
    const url = new URL(window.location.href);
    if (lang === 'en') url.searchParams.set('lang', 'en');
    else url.searchParams.delete('lang');
    window.history.replaceState(null, '', url.pathname + url.search + url.hash);
  }
}

document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => openProject(button.dataset.project, button));
});
document.querySelector('[data-close-dialog]').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const box = dialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.style.overflow = previousBodyOverflow;
  currentProject = null;
  if (lastProjectTrigger) lastProjectTrigger.focus({preventScroll: true});
  lastProjectTrigger = null;
});
document.querySelectorAll('[data-lang]').forEach(button => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});
window.addEventListener('popstate', () => setLanguage(new URL(window.location.href).searchParams.get('lang'), false));
setLanguage(new URL(window.location.href).searchParams.get('lang'), false);

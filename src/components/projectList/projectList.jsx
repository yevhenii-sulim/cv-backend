import css from './projectList.module.css';

const projects = [
  {
    title: 'User Authentication & Management System',
    link: 'https://github.com/yevhenii-sulim/user_authentication_management_system',
    text: 'Built a backend authentication system featuring user registration, login, and profile update functionality. Implemented middleware and guards for route protection, ensuring secure access control for unauthenticated users.',
  },
  {
    title: 'RSS News Aggregator',
    link: 'https://github.com/yevhenii-sulim/news-api',
    text: 'Built a backend service that fetches news from RSS feeds via CLI commands and stores them in a database. Implemented a REST API to serve news to the client, along with automated cleanup of outdated records. Profiled and optimized the application for performance.',
  },
  {
    title: 'Inkluvo Backend',
    link: 'https://github.com/yevhenii-sulim/inkluvo-api',
    text: 'Developed a backend API for a mobile accessibility map application that helps users find and evaluate accessible places. Implemented authentication, CRUD operations for places, comments, complaints, and accessibility parameters. Designed PostgreSQL database schemas using Drizzle ORM and built business logic for automatically calculating accessibility scores based on entrance, ramp, elevator, parking, restroom, and other accessibility features.',
  },
];

export default function ProjectList() {
  return (
    <div className={`box ${css.projects}`}>
      <h2 className='title-box'>Project experience</h2>
      <ul>
        {projects.map(({title, link, text}) => (
          <li className={css.list}>
            <h3 className={css.project}>{title}</h3>
            <a href='link' className='text'>
              {link}
            </a>
            <p className='text'>{text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

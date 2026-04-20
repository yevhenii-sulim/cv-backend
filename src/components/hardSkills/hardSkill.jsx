import css from './hardSkill.module.css';

const skills = [
  'JavaScript',
  'TypeScript',
  'Node',
  'Express',
  'Nest',
  'REST API',
  'PostgreSQL',
  'Drizzle ORM',
  'OOP principles and patterns',
  'Git',
];

export default function HardSkill() {
  return (
    <div className='box'>
      <h2 className='title-box'>Hard skills</h2>
      <ul className={css.list}>
        {skills.map((item) => (
          <li className={`${css.skill} text`}>- {item}</li>
        ))}
      </ul>
    </div>
  );
}

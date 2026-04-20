import css from './hardSkill.module.css';
const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TS',
  'React',
  'React native',
  'Next',
  'REST API',
  'Redux/toolkit, redux/thunk',
  'Zustand',
  'Material UI',
  'OOP principles and patterns',
  'SASS',
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

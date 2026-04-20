import css from './summery.module.css';

export default function Summery() {
  return (
    <div className='box'>
      <h2 className='title-box'>Summary</h2>
      <ul>
        <li className={`text ${css.list}`}>
          Frontend Developer with 2+ years of experience in team-based
          development and pet projects. I focus on building responsive and
          user-friendly interfaces using modern web technologies.
        </li>
        <li className={`text ${css.list}`}>
          I have experience working with existing codebases, improving and
          extending functionality, and optimizing web application performance. I
          am comfortable turning designs into clean, reusable components and
          integrating them into scalable frontend architecture.
        </li>
        <li className={`text ${css.list}`}>
          I learn new technologies quickly and pay attention to code quality,
          maintainability, and performance. I enjoy solving real-world problems
          in team environments and continuously improving my development skills
          through practice.
        </li>
      </ul>
    </div>
  );
}

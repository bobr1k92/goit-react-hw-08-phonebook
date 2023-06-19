import { Link } from 'react-router-dom';
import css from './Home.module.css';

export default function Home() {

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <h2 className={css.text}>This application allows you to create, save, delete and easily find phone contacts</h2>
      <p className={css.text__nav}><Link to="/register">Register</Link> or <Link to="/login">login</Link> to continue</p>
    </div>
  );
}
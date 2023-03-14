import { Link } from 'react-router-dom';
import logo from '../logo.svg';

export const Header = () => {
  return (
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <div className={'app--nav-bar'}>
        <ul>
          <li>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/cv'>CV</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

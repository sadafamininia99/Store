import { Link } from 'react-router-dom'

import styles from './style.module.css'
import navigations from '../../constants/navigations'
import Logo from '../../assets/logo/logo.svg'

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <ul className={styles.Links}>
        <Link to="/" className={styles.Logo}>
          <img src={Logo} alt="Logo" />
        </Link>
        {navigations.map((navigation) => (
          <li className={styles.Link} key={navigation.id}>
            <Link to={navigation.path}>{navigation.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar

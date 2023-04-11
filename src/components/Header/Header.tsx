import LogoIcon from '../../assets/icons/logo.svg?component-solid';
import { Score } from '../Score';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header class={styles.header}>
      <LogoIcon />
      <Score />
    </header>
  );
};

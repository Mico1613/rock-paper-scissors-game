import PaperIcon from '../../assets/icons/icon-paper.svg?component-solid';
import RockIcon from '../../assets/icons/icon-rock.svg?component-solid';
import ScissorsIcon from '../../assets/icons/icon-scissors.svg?component-solid';
import styles from './Sign.module.scss';

type Props = {
  sign: 'paper' | 'scissors' | 'rock';
};

const dynamicData = {
  rock: { icon: <RockIcon />, color: '#DE425E' },
  paper: { icon: <PaperIcon />, color: '#5770F4' },
  scissors: { icon: <ScissorsIcon />, color: '#EAA626' },
} as const;

export const Sign = (props: Props) => {
  return (
    <div
      class={styles.circle}
      style={{ 'border-color': dynamicData[props.sign].color }}
    >
      {dynamicData[props.sign].icon}
    </div>
  );
};

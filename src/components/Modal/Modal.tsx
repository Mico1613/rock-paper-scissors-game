import CloseIcon from '../../assets/icons/icon-close.svg?component-solid';
import RulesIcon from '../../assets/icons/image-rules.svg?component-solid';
import styles from './Modal.module.scss';

type Props = {
  onClose: () => void;
};

export const Modal = (props: Props) => {
  return (
    <div class={styles.wrapper}>
      <div class={styles.modal}>
        <header class={styles.header}>
          <span>Rules</span>
          <CloseIcon onClick={props.onClose} />
        </header>
        <RulesIcon class={styles.rules} />
      </div>
    </div>
  );
};

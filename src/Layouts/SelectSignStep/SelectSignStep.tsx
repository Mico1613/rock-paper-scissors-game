import { For } from 'solid-js';

import TriangleIcon from '../../assets/icons/bg-triangle.svg?component-solid';
import { Sign } from '../../components/Sign';
import styles from './SelectSignStep.module.scss';

type Props = {
  selectSign: (sign: string) => void;
};

const signNames = ['paper', 'scissors', 'rock'] as const;

export const SelectSignStep = (props: Props) => {
  return (
    <div class={styles.wrapper}>
      <div class={styles.relative}>
        <TriangleIcon />
        <For each={signNames}>
          {(el) => (
            <div
              class={`${styles.sign} ${styles[el]}`}
              onClick={() => props.selectSign(el)}
            >
              <Sign sign={el} />
            </div>
          )}
        </For>
      </div>
    </div>
  );
};

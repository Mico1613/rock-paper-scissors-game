import styles from './Score.module.scss';

type Props = {
  score?: number;
};

export const Score = (props: Props) => {
  return (
    <div class={styles.container}>
      <p class={styles.text}>Score</p>
      <p class={styles.score}>{props.score || 12}</p>
    </div>
  );
};

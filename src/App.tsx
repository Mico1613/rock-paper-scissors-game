import type { Component } from 'solid-js';
import { createSignal, onMount, Show } from 'solid-js';

import styles from './App.module.scss';
import { Modal } from './components/Modal';

const App: Component = () => {
  const [isModalOpened, setIsModalOpened] = createSignal(false);
  onMount(() => {
    setIsModalOpened(true);
  });
  return (
    <div class={styles.background}>
      <Show when={isModalOpened()}>
        <Modal onClose={() => setIsModalOpened(false)} />
      </Show>
    </div>
  );
};

export default App;

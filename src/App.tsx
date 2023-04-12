import type { Component } from 'solid-js';
import { createEffect, createSignal, onMount, Show } from 'solid-js';

import styles from './App.module.scss';
import { Header } from './components/Header';
import { Modal } from './components/Modal';
import { SelectSignStep } from './Layouts/SelectSignStep';

const App: Component = () => {
  const [isModalOpened, setIsModalOpened] = createSignal(false);
  const [selectedSign, setSelectedSign] = createSignal(null);

  onMount(() => {
    setIsModalOpened(true);
  });

  //eslint-disable-next-line
  createEffect(() => console.log(selectedSign()));

  return (
    <div class={styles.background}>
      <div class={styles.wrapper}>
        <div class={styles.container}>
          <Header />
          <main class={styles.main}>
            <SelectSignStep selectSign={setSelectedSign} />
          </main>
        </div>
      </div>
      <Show when={isModalOpened()}>
        <Modal onClose={() => setIsModalOpened(false)} />
      </Show>
    </div>
  );
};

export default App;

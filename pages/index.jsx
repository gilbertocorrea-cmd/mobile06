import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Contador.module.css";

export default function Home() {
  const [contador, setContador] = useState(0);

  return (
    <>
      <Head>
        <title>Contador de cliques</title>
        <meta name="description" content="Um contador de cliques simples e interativo." />
      </Head>
      <main className={styles.page}>
        <section className={styles.card} aria-labelledby="titulo">
          <span className={styles.badge}>UM CLIQUE DE CADA VEZ</span>
          <h1 id="titulo" className={styles.title}>Contador de cliques</h1>
          <p className={styles.description}>Clique no botão e veja sua contagem crescer.</p>
          <div className={styles.counter} role="status" aria-live="polite" aria-atomic="true">
            <span className={styles.value}>{contador}</span>
            <span className={styles.label}>{contador === 1 ? "clique" : "cliques"}</span>
          </div>
          <div className={styles.actions}>
            <button className={styles.primary} type="button" onClick={() => setContador((atual) => atual + 1)}>
              + Clique aqui
            </button>
            <button className={styles.secondary} type="button" onClick={() => setContador(0)} disabled={contador === 0}>
              Zerar contador
            </button>
          </div>
          <p className={styles.hint}>A contagem recomeça ao recarregar a página.</p>
        </section>
      </main>
    </>
  );
}

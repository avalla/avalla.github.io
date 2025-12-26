import React from 'react';

export default function FavoriteStack() {
  return (
    <section className='section'>
      <h2 className='title is-2'>Favorite Tech Stack</h2>
      <article>
        <p>
          Frontend: <strong>React + TypeScript (Vite.js) </strong><br />
          Backend / Database: <strong>Supabase with RLS and edge functions</strong><br />
          DevOps:<strong> Docker + GitHub Actions </strong>
        </p>
      </article>
    </section>
  );
}

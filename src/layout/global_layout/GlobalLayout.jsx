import React from 'react';
import './globalLayout.css';
import { Sidebar } from '../../components/shared/sidebar/Sidebar';

export const GlobalLayout = ({ children }) => {
  return (
    <main className="global__root">
      <section className="global__section--sidebar">{<Sidebar />}</section>
      <section className="global__section--body">{children}</section>
      {/* <section className="global__section--utility">{utility}</section> */}
    </main>
  );
};

import React from 'react';
import { GlobalLayout } from '../layout/global_layout/GlobalLayout';
import {HomePage} from '../components/component_page/home_page/HomePage';

export const Home = () => {
  return (
    <div>
      <GlobalLayout>
        <HomePage />
      </GlobalLayout>
    </div>
  );
};

import { FC } from 'react';
import { ListTracker } from './components/ListTracker';

import './style.css';
import SiteHeader from './components/SiteHeader';
import { getHumanValues } from './data/values';
import "./types/array.extensions"
import Nav from './components/Nav';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <>
      <SiteHeader title='Human Values Tracker' />
      <ListTracker getDataFn={getHumanValues} />
    </>
  );
};

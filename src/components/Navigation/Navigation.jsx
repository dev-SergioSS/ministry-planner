import React from 'react';
import styles from './Navigation.module.scss';
import { NavigationButton } from '../NavigationButton';

const navItems = [
  {
    id: 'schedule',
    title: 'Графік',
    icon: '',
  },
  {
    id: '/',
    title: 'Головна',
    icon: '',
  },
  {
    id: 'partners',
    title: 'Партнери',
    icon: '',
  },
];

export const Navigation = () => {
  return (
    <nav className={styles.wrapper}>
      <ul className={styles.list}>
        {navItems.map((btn) => {
          return <NavigationButton {...btn} key={btn.id} />;
        })}
      </ul>
    </nav>
  );
};

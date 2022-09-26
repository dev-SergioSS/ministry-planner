import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavigationButton.module.scss';

export const NavigationButton = ({ title, id }) => {
  return (
    <li className={styles.navigationButton}>
      <Link to={id}>{title}</Link>
    </li>
  );
};

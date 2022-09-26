import React from 'react';
import styles from './Partner.module.scss';

export const Partner = ({ name }) => {
  return (
    <li className={styles.partner}>
      <p className={styles.name}>{name}</p>
      <div className={styles.buttons}>
        <div className={styles.btnEdit}></div>
        <div className={styles.btnDelete}></div>
      </div>
    </li>
  );
};

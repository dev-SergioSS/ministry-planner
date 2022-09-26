import React from 'react';
import styles from './AddNewPartner.module.scss';

export const AddNewPartner = () => {
  return (
    <div className={styles.wrapper}>
      <input type='text' className={styles.input} />
      <button className={styles.add}>Добавити</button>
    </div>
  );
};

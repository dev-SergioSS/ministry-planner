import React from 'react';
import { Partner, AddNewPartner } from '../../components';
import styles from './Partners.module.scss';

export const Partners = () => {
  let listPartners = ['lonelys', 'eilins'];

  return (
    <div className={styles.partners}>
      <h1>Мої напарники</h1>

      <AddNewPartner />

      <ul className={styles.list}>
        {listPartners.map((name, index) => (
          <Partner name={name} key={`${index}_${name}`} />
        ))}
      </ul>

      <div className={styles.deleteAll}>Видалити всіх (!)</div>
    </div>
  );
};

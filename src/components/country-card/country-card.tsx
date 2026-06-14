import type { Country } from '../../types';
import { DataTable } from '../data-table/data-table';
import {
  getPopulationForYear,
  getCo2ForYear,
  createYearDataMap,
} from '../../utils/data-transformers';
import { formatNumber } from '../../utils/format-utils';

import styles from './country-card.module.css';
import { type RowComponentProps } from 'react-window';
import { useMemo } from 'react';

type CountryCardProps = {
  countries: Country[];
  selectedYear: number;
  selectedColumns: string[];
};

export function CountryCard({ index, style, countries, selectedYear, selectedColumns }: RowComponentProps<CountryCardProps>) {
  const yearDataMap = useMemo(() => createYearDataMap(countries[index].data), [countries, index]);
  const population = getPopulationForYear(yearDataMap, selectedYear);
  const co2 = getCo2ForYear(yearDataMap, selectedYear);

  return (
    <div className={styles.card} style={style}>
      <div className={styles.header}>
        <h3 className={styles.title}>{countries[index].id}</h3>
        {countries[index].iso_code && <span className={styles.isoCode}>{countries[index].iso_code}</span>}
      </div>

      <div className={styles.stats}>
        <div>
          Population ({selectedYear}): {formatNumber(population)}
        </div>
        <div>
          CO₂ Emissions ({selectedYear}): {formatNumber(co2)} tonnes
        </div>
      </div>

      <DataTable data={countries[index].data} year={selectedYear} columns={selectedColumns} />
    </div>
  );
};

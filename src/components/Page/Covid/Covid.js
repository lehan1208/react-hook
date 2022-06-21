import React from 'react';
import './Covid.scss';

import moment from 'moment';
import useFetch from '../Customize/fetch';
// import axios from 'axios';
// import { useState, useEffect } from 'react';

function Covid() {
  const today = moment().startOf('day').toISOString();
  const priorDate = moment()
    .startOf('day')
    .subtract(31, 'days')
    .toISOString(true);

  const { data: dataCovid, loading } = useFetch(
    `https://api.covid19api.com/country/vietnam?from=${priorDate}&to=${today}`,
    true
  );
  // gán giá trị dataCovid bằng giá trị data của useFetch

  return (
    <div className='table'>
      <div>
        <h2>Covid19 Tracking in VietNam</h2>
      </div>
      <table>
        {console.log('>>Check dataCovid:', dataCovid)}
        <thead>
          <tr>
            <th>Date</th>
            <th>Confirmed</th>
            <th>Active</th>
            <th>Deaths</th>
            <th>Recovered</th>
          </tr>
        </thead>
        <tbody>
          {loading === false &&
            dataCovid &&
            dataCovid.length > 0 &&
            dataCovid.map((item) => (
              <tr key={item.ID}>
                <td>{item.Date}</td>
                <td>{item.Confirmed}</td>
                <td>{item.Active}</td>
                <td>{item.Deaths}</td>
                <td>{item.Recovered}</td>
              </tr>
            ))}
          {loading === true && (
            <tr>
              <td colSpan='5' style={{ textAlign: 'center' }}>
                <span>Loading...</span>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Covid;

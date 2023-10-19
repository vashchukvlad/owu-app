import { useEffect, useState } from 'react';

import css from './Launches.module.css';
import { launchService } from '../../../services/launch.service';
import { Launch } from '../Launch/Launch';

const Launches = () => {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    launchService
      .getAll()
      .then(({ data }) =>
        setLaunches(data.filter((launch) => launch.launch_year !== '2020'))
      );
  }, []);

  return (
    <div className={css.Launches}>
      {launches.map((launch) => (
        <Launch key={launch.flight_number} launch={launch} />
      ))}
    </div>
  );
};

export { Launches };

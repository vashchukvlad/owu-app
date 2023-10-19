import css from './Launch.module.css';

const Launch = ({ launch }) => {
  return (
    <div className={css.Launch}>
      <div>Mission name: {launch.mission_name}</div>
      <div>Launch year: {launch.launch_year}</div>
      <img
        className={css.pic}
        src={launch.links.mission_patch_small}
        alt={launch.mission_name}
      />
    </div>
  );
};

export { Launch };

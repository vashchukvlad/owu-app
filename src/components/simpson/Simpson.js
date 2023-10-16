import './Simpson.css';

const Simpson = ({ simpson: { name, occupation, gender, image } }) => {
  return (
    <div className="content">
      <div className="text">
        <h3>Name: {name}</h3>
        <p>Occupation: {occupation}</p>
        <p>Gender: {gender}</p>
      </div>

      <p>
        <img src={image} alt={name} />
      </p>
    </div>
  );
};

export { Simpson };

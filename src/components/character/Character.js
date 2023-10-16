import './Character.css';

const Character = ({ character: { name, status, species, gender, image } }) => {
  return (
    <div className="main-content">
      <div className="text">
        <h3>Name: {name}</h3>
        <p>Status: {status}</p>
        <p>Species: {species}</p>
        <p>Sex: {gender}</p>
      </div>

      <p>
        <img src={image} alt={name} />
      </p>
    </div>
  );
};

export { Character };

import { Simpson } from '../simpson/Simpson';

const Simpsons = () => {
  const simpsons = [
    {
      id: 1,
      name: 'Homer Simpson',
      occupation: 'Chemist and safety inspector Nuclear power plant operator',
      gender: 'Male',
      image:
        'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png',
    },
    {
      id: 2,
      name: 'Marge Simpson',
      occupation: 'Housewife',
      gender: 'Female',
      image: 'https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png',
    },
    {
      id: 3,
      name: 'Bart Simpson',
      occupation: '4th grade student at Springfield Elementary School',
      gender: 'Male',
      image:
        'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png',
    },
    {
      id: 4,
      name: 'Lisa Simpson',
      occupation: '2nd grade student a',
      gender: 'Female',
      image: 'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png',
    },
    {
      id: 5,
      name: 'Maggie Simpson',
      occupation: 'Toddler',
      gender: 'Female',
      image:
        'https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png',
    },
  ];

  return (
    <div>
      {simpsons.map((simpson) => (
        <Simpson key={simpson.id} simpson={simpson} />
      ))}
    </div>
  );
};

export { Simpsons };

// src/components/Greeting.tsx
type Props = {
  name: string;
};

const Greeting = ({ name }: Props) => {
  return <h1>Hello, {name}!</h1>;
};

export default Greeting;

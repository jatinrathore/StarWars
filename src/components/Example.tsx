import Switch from "../components/Switch/Switch";
import useSpecies from "../hooks/useSpecies";

const Example = () => {
  const { data } = useSpecies();

  return (
    <div>
      <Switch />
    </div>
  );
};

export default Example;

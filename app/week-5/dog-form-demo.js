export default function DogForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState(0);

  const handleNameChange = (event) => {
    let name = event.target.value;
    name = name.replace(/[^A-Za-z]/g, "");
    setName(name);
  };

  const handleBreedChange = (event) => {
    setBreed(event.target.value);
    breed = breed.replace(/[^A-Za-z]/g, "");
    setBreed(breed);
  };

  return (
    <div className="m-2">
      <h2 className="text-2xl">Add a dog</h2>
      <form className="m-2">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          value={name}
          name="name"
          onChange={(event) => handleNameChange(event)}
        />
      </form>
      <div className="text-lg">
        <p>Name: {name.length >= 3 ? name : "Name too short"}</p>
        <p>Breed: {breed}</p>
        <p>Age: {age}</p>
      </div>
    </div>
  );
}

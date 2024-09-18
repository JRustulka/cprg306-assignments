import Link from "next/link";
import Dog from "./dog";

export default function Page() {
  let dog1 = {
    name: "Dawg",
    breed: "Husky",
    age: 10,
    colour: "White",
  };

  let dog2 = {
    name: "Waffle",
    breed: "Shibe",
    age: 2,
    colour: "Tan",
  };

  let dog3 = {
    name: "Pancake",
    breed: "German Shepard",
    age: 6,
    colour: "Brown",
  };

  return (
    <main className="m-4">
      <h2 className="text-2xl font-bold">Doggos:</h2>
      <Dog
        name={dog1.name}
        breed={dog1.breed}
        age={dog1.age}
        colour={dog1.colour}
      />
      <Dog
        name={dog2.name}
        breed={dog2.breed}
        age={dog2.age}
        colour={dog2.colour}
      />
      <Dog
        name={dog3.name}
        breed={dog3.breed}
        age={dog3.age}
        colour={dog3.colour}
      />
      <p>
        <Link href="/">Go Back</Link>
      </p>
    </main>
  );
}

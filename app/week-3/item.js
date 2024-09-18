export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-slate-900 m-4 w-96 p-3">
      <h2 className="font-bold text-xl">{name}</h2>
      <p>
        Buy {quantity} in {category}
      </p>
    </li>
  );
}

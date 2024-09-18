export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-slate-900 text-white m-4 w-96 p-3 border-white border-2">
      <h2 className="font-bold text-xl">{name}</h2>
      <p>
        Buy {quantity} in {category}
      </p>
    </li>
  );
}

import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="bg-black">
      <h1 className="text-3xl font-bold m-3">Shopping List</h1>
      <ItemList />
    </main>
  );
}

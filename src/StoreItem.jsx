export function StoreItem({ item }) {
  return (
    <>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <button>GHS {item.price}</button>
    </>
  );
}

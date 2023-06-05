import useMallStore from '../hooks/useMallStore';

export default function Products() {
  const mallStore = useMallStore();

  const { products } = mallStore;

  return (
    <div>
      {(!products.length) ? (
        <p>상품이 존재하지 않습니다</p>
      )
        : null}
      {products.map((product) => (
        <button type="button" key={product.id}>
          <h1>{product.company}</h1>
          <h1>{product.title}</h1>
          <h1>{product.price}</h1>
        </button>
      ))}
    </div>
  );
}

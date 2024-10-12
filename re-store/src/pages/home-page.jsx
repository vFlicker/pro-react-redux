import { BookList } from '../components/book-list';
import { ShoppingCartTable } from '../components/shopping-cart-table';

export function HomePage() {
  return (
    <div className="container">
      <BookList />
      <ShoppingCartTable />
    </div>
  );
}

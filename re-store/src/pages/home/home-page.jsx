import { BookList } from '../../components/book-list';
import { CartTable } from '../../components/cart-table';

export function HomePage() {
  return (
    <div className="container">
      <BookList />
      <CartTable />
    </div>
  );
}

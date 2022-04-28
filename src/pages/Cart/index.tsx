import { ReactNode } from 'react';

import { Container } from './styles';

interface CartProps {
  children: ReactNode;
}

function Cart({ children }: CartProps) {
  return (
    <Container>
      <h1>Cart</h1>
      {children}
    </Container>
  );
};

export default Cart;

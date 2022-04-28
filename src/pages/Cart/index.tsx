import { ReactNode } from "react";

import { Container } from "./styles";

interface CartProps {
  children: ReactNode;
}

function Cart() {
  return (
    <Container>
      <h1>Cart</h1>
    </Container>
  );
}

export default Cart;

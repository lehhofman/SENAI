import React, { useState } from 'react';
import { Navbar, Nav, Container, Card, Button, Badge } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function ProductCard({ name, addtoCart }) {
  return (

    <div className="col-md-4">
      <Card>
        <Card.Img variant="top" src={`/${name.toLowerCase()}.jpg`} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Descrição do produto {name}.</Card.Text>
          <Button variant="primary" onClick={() => addtoCart(name)}>Adicionar ao carrinho</Button>
        </Card.Body>
      </Card>
    </div>

  );
}

function CartPage({ cartItems, removeFromCart }) {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4"> Carrinho de Compras</h1>
      {cartItems.map((item, index) => (
        <div Key={index} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Text>{item.name}</Card.Text>
              <Button variant="danger" onClick={() => removeFromCart(index)}>Remover do carrinho</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </Container>
  );
}

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addtoCart = (productName) => {
    const newItem = { name: productName };
    setCartItems([...cartItems, newItem]);
  };

  const removeFromCart = (index) => {
    const updateCartItems = [...cartItems];
    updateCartItems.splice(index, 1);
    setCartItems(updateCartItems);
  };

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Minha Loja</Navbar.Brand>
          <Nav className="mi-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#produtos">Produtos</Nav.Link>
            <Nav.Link href="#contato">Contato</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        <Container className="mt-5">
          <h1>Produtos em Destaque</h1>
          <div className="row">
            <ProductCard name="Produto 1" addtoCart={addtoCart} />
            <ProductCard name="Produto 2" addtoCart={addtoCart} />
            <ProductCard name="Produto 3" addtoCart={addtoCart} />
          </div>
        </Container>
        <footer className='bg-dark text-white text-center py-4 mt-5'>2024 Minha Loja. Direitos Reservados</footer>
        {cartItems.length > 0 &&(
            <div style={{position: 'fixed', bottom: '20px', right: '20px'}}>
              <Button variant="primary" onClick={() => alert ('Abrir Carrinho')}>
                <i className="bi bi-cart"></i> <Badge bg="danger">{cartItems.length}</Badge>
              </Button>
            </div>
        )}
      </div>
  );
}
export default App;
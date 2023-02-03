import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

export default function CustomHeader() {
  return (
    <Navbar bg='primary' expand='lg' style={{ height: '120px' }}>
      <Container>
        <Navbar.Brand
          href='#'
          className='h1'
          style={{ color: 'white', fontSize: '2.4rem' }}
        >
          Marketplace
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

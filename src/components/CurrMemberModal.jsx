import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function CurrMemberModal(props) {
  return (
    <Modal show={props.show} onHide={props.hide}>
      <Modal.Header closeButton>
        <Modal.Title>{props.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <strong>Name:</strong> {props.name}
        </p>
        <p>
          <strong>Description:</strong> {props.desc}
        </p>
        <p>
          <strong>Favorite Fruit:</strong> {props.fruit}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='danger' onClick={props.delete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

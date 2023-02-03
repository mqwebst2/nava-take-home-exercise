import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function CurrMemberModal(props) {
  return (
    <Modal show={props.show} onHide={props.hide}>
      <Modal.Header closeButton>
        <Modal.Title>
          {props.firstName} {props.lastName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <strong>Name:</strong> {props.firstName} {props.lastName}
        </p>
        <p>
          <strong>Description:</strong> {props.description}
        </p>
        <p>
          <strong>Favorite Fruit:</strong> {props.favoriteFruit}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={props.hide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

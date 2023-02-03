import { useState } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';

export default function NewMemberModal(props) {
  const [currMember, setCurrMember] = useState({
    firstName: '',
    lastName: '',
    desc: '',
    fruit: '',
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setCurrMember((prevCurrMember) => {
      return {
        ...prevCurrMember,
        [name]: value,
      };
    });
  };

  const clearInputs = () => {
    setCurrMember({
      firstName: '',
      lastName: '',
      desc: '',
      fruit: '',
    });
  };

  const { firstName, lastName, desc, fruit } = currMember;

  return (
    <Modal
      show={props.show}
      onHide={() => {
        props.hide();
        clearInputs();
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {currMember.firstName ? currMember.firstName : 'New Household Member'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Hello! Please enter the new Household Member's Information:
        <Container>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            placeholder="Marques"
            className="form-control mb-3"
            name="firstName"
            value={currMember.firstName}
            onChange={handleChange}
          />
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            placeholder="Webster"
            className="form-control mb-3"
            name="lastName"
            value={currMember.lastName}
            onChange={handleChange}
          />
          <label htmlFor="desc">Description:</label>
          <input
            type="text"
            placeholder="Household Contact"
            className="form-control mb-3"
            name="desc"
            value={currMember.desc}
            onChange={handleChange}
          />
          <label htmlFor="name">Favorite Fruit:</label>
          <input
            type="text"
            placeholder="Apples"
            className="form-control mb-3"
            name="fruit"
            value={currMember.fruit}
            onChange={handleChange}
          />
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={() => {
            props.addMember(firstName, lastName, desc, fruit);
            clearInputs();
          }}
        >
          Save New Member
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

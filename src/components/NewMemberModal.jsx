import { useState } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';

export default function NewMemberModal(props) {
  const [currMember, setCurrMember] = useState({
    name: '',
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
      name: '',
      desc: '',
      fruit: '',
    });
  };

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
          {currMember.name ? currMember.name : 'New Household Member'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Hello! Please enter the new Household Member's Information:
        <Container>
          <label htmlFor='name'>Member Name:</label>
          <input
            type='text'
            placeholder='Marques Webster'
            className='form-control mb-3'
            name='name'
            value={currMember.name}
            onChange={handleChange}
          />
          <label htmlFor='desc'>Description:</label>
          <input
            type='text'
            placeholder='Household Contact'
            className='form-control mb-3'
            name='desc'
            value={currMember.desc}
            onChange={handleChange}
          />
          <label htmlFor='name'>Favorite Fruit:</label>
          <input
            type='text'
            placeholder='Apples'
            className='form-control mb-3'
            name='fruit'
            value={currMember.fruit}
            onChange={handleChange}
          />
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='primary'>Save New Member</Button>
      </Modal.Footer>
    </Modal>
  );
}

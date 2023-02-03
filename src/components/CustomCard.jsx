import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CurrMemberModal from './CurrMemberModal';

export default function CustomCard(props) {
  const [showCurr, setShowCurr] = useState(false);
  const handleCurrOpen = () => setShowCurr(true);
  const handleCurrClose = () => setShowCurr(false);

  return (
    <>
      <Card
        className='p-3'
        style={{ minWidth: '360px', height: '180px', borderWidth: '2px' }}
        onClick={handleCurrOpen}
      >
        <Card.Body className='d-flex flex-column justify-content-around'>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            <strong>Description:</strong> {props.desc}
          </Card.Text>
          <Card.Text>
            <strong>Favorite Fruit:</strong> {props.fruit}
          </Card.Text>
        </Card.Body>
      </Card>

      <CurrMemberModal show={showCurr} hide={handleCurrClose} {...props} />
    </>
  );
}

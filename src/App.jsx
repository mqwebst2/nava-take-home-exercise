import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Button, Container, Stack } from 'react-bootstrap';
import CustomHeader from './components/CustomHeader';
import CustomCard from './components/CustomCard';
import NewMemberModal from './components/NewMemberModal';
import './App.css';
import './custom.scss';

export default function App() {
  const [members, setMembers] = useState([
    {
      id: nanoid(),
      name: 'Marques Webster',
      desc: 'Head of Household',
      fruit: 'Pineapple',
    },
  ]);
  const [showNew, setShowNew] = useState(false);
  const handleNewOpen = () => setShowNew(true);
  const handleNewClose = () => setShowNew(false);

  const memberElements = members.map((member) => {
    return <CustomCard key={member.id} {...member} />;
  });

  return (
    <>
      <CustomHeader />
      <Container className='main'>
        <h1 className='m-0'>Your household</h1>
        <p className='m-0'>
          Welcome to the Marketplace! Review your household below:
        </p>
        <Stack className='custom-card__list' direction='horizontal' gap={3}>
          {memberElements}
        </Stack>
        <Button
          style={{ width: '280px', height: '60px', fontSize: '1.6rem' }}
          onClick={handleNewOpen}
        >
          Add new member
        </Button>
      </Container>

      <NewMemberModal show={showNew} hide={handleNewClose} />
    </>
  );
}

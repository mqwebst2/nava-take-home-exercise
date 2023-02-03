import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Button, Container, Stack } from 'react-bootstrap';
import CustomHeader from './components/CustomHeader';
import CustomCard from './components/CustomCard';
import NewMemberModal from './components/NewMemberModal';
import './App.css';
import './custom.scss';

export default function App() {
  const [members, setMembers] = useState([]);

  const [showNew, setShowNew] = useState(false);
  const handleNewOpen = () => setShowNew(true);
  const handleNewClose = () => setShowNew(false);

  useEffect(() => {
    fetch('https://63d006cc8a780ae6e681fea9.mockapi.io/api/members')
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setMembers([...data]);
      });
  }, []);

  const addMember = (newFirstName, newLastName, newDesc, newFruit) => {
    const newMember = {
      id: nanoid(),
      firstName: newFirstName,
      lastName: newLastName,
      description: newDesc,
      favoriteFruit: newFruit,
    };
    setMembers((prevMembers) => [...prevMembers, newMember]);
    handleNewClose();
    fetch('https://63d006cc8a780ae6e681fea9.mockapi.io/api/members', {
      method: 'POST',
      body: JSON.stringify({ ...members }),
    });
  };
  // const deleteMember = (memberId) => {
  //   setMembers((prevMembers) =>
  //     prevMembers.filter((member) => memberId !== member.id)
  //   );
  // };

  const memberElements = members.map((member) => {
    return <CustomCard key={member.id} {...member} />;
  });

  return (
    <>
      <CustomHeader />
      <Container className="main">
        <h1 className="m-0">Your household</h1>
        <p className="m-0">
          Welcome to the Marketplace! Review your household below:
        </p>
        <Stack
          className="custom-card__list pb-4"
          direction="horizontal"
          gap={3}
        >
          {memberElements}
        </Stack>
        <Button
          style={{ width: '280px', height: '60px', fontSize: '1.6rem' }}
          onClick={handleNewOpen}
        >
          Add new member
        </Button>
      </Container>

      <NewMemberModal
        show={showNew}
        hide={handleNewClose}
        addMember={addMember}
      />
    </>
  );
}

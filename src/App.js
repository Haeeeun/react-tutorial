import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const { username, email } = inputs;

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'haeeun',
      email: 'hceaan@naver.com'
    },
    {
      id: 2,
      username: 'haeeun2',
      email: 'hceaan2@naver.com'
    },
    {
      id: 3,
      username: 'haeeun3',
      email: 'hceaan3@naver.com'
    }
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };

    //배열에 새로운 항목을 추가하는 두가지 방법
    setUsers([...users, user]);
    // setUsers(users.concat(user));
    
    setInputs({
      username: '',
      email: '',
    });
    nextId.current += 1;
  }

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove}/>
    </>
  );
}

export default App;

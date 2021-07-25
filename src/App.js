import React, { useRef, useState, useMemo } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}
function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const { username, email } = inputs;

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs, // 스프레드 연산자 --> 0부터 끝까지 반복분을 돌겠다.
      [name]: value
    })
  }

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'haeeun',
      email: 'hceaan@naver.com',
      active: true,
    },
    {
      id: 2,
      username: 'haeeun2',
      email: 'hceaan2@naver.com',
      active: false,
    },
    {
      id: 3,
      username: 'haeeun3',
      email: 'hceaan3@naver.com',
      active: false,
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

    //인풋 밸류 초기화
    setInputs({
      username: '',
      email: '',
    });
    nextId.current += 1;
  }

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  const onToggle = id => {
    setUsers(users.map(
      user => user.id === id
      ? {...user, active: !user.active}
        : user
    ))
  }

  //users가 바뀔 때에만 호출이 되고 그렇지 않으면 전에 계산된 값을 사용한다. 최적화할 때 사용
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList
        users={users}
        onRemove={onRemove}
        onToggle={onToggle}
      />
      <div>활성 사용자 수: {count}</div>
    </>
  );
}

export default App;

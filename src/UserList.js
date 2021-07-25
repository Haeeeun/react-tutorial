import React, { useEffect } from 'react';

function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user;
  // useEffect(()=> {
  //   //마운트 될 때
  //   //props -> state
  //   //REST API
  //   //D3 Video.js
  //   //SetInterval, setTimeout
  //   console.log('컴포넌트가 화면에 나타남');
  //
  //   //언마운트될 때
  //   //clearInterval, clearTimeout
  //   //라이브러리 인스터스 제거
  //   return () => {
  //     console.log('컴포넌트가 화면에서 사라짐');
  //   }
  // }, []);

  useEffect(() => {
    console.log('user 값이 설정됨');
    console.log(user);

    return () => {
      console.log('user 값이 바뀌기 전 or 사라지기 전');
      console.log(user);
    }
  }, [user]); // deps 값이 설정되거나 수정될 때 useEffect 함수가 실행된다.

  return (
    <div>
      <b
        style={{
        color: active ? 'green' : 'black',
        cursor: 'pointer'
        }}
        onClick={() => onToggle(id)}
      >
        {username}
      </b>
      &nbsp;
      <span>({email})</span>
      <button type="button" onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {

  return (
    <div>
      {/* <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} /> */}
      {
        users.map(
          (user, index) => (
            <User
              user={user}
              key={user.id}
              onRemove={onRemove}
              onToggle={onToggle}
            />
          )
        )
      }
    </div>
  )
}

export default UserList;
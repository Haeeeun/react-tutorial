import React from 'react';

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList() {
  const users = [
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
  ];

  return (
    <div>
      {/* <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} /> */}
      {
        users.map(
          (user, index) => (<User user={user} key={user.id} />)
        )
      }
    </div>
  )
}

export default UserList;
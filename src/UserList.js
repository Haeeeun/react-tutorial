import React from 'react';

function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user;
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
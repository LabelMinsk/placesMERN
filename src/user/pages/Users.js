import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: '1',
      name: 'Mikhail',
      image:
        'https://clck.ru/QdqP2',
      places: 3
    },
    {
      id: '2',
      name: 'Stepan',
      image:
        'https://clck.ru/R3FkU',
      places: 5
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;

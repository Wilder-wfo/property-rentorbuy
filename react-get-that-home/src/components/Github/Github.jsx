import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { UserCard } from './GitHub-UI';

const Github = ({ person }) => {
  const { name, avatar } = person;
  
  return (
    <UserCard>
      <img src={avatar} alt={name} />
      <p>{name}</p>
      <div>
        <a href='/'>
          <BsGithub />
        </a>
        <a href='/'>
          <BsLinkedin />
        </a>
      </div>
    </UserCard>
  );
};

export default Github;
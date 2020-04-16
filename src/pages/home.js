import React from 'react';
import MovieLists from '../components/MovieLists';
import UsersInputs from '../components/UsersInputs';
import HeaderHome from '../components/HeaderHome';

function Home () {
  return (
    <div>
      <HeaderHome />
      <UsersInputs />
      <MovieLists />
    </div>
  );
}

export default Home;

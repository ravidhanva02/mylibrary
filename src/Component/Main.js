import React from 'react';
import Card from './Card';
import list from './Menuapi';


const Main = ({handleitem ,handlelike}) => {
  return (
    <div>
      {list.map((item) => {
        return <Card item={item} handleitem={handleitem} handlelike={handlelike} />;
      })}
    </div>
  );
};
export default Main
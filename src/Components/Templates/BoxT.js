import React,{useEffect} from 'react';
import './stylesheets/BoxT.css';



const BoxT = ({userCount}) => {
    useEffect(()=>{
        console.log(userCount);
    })
  
  return (
    <div className="user-count-box">
      <h2>Total Users</h2>
      <p>{userCount}</p>
    </div>
  );
}

export default BoxT;
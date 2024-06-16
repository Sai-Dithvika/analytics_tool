import './stylesheets/BoxT.css';

const BoxT = ({data}) => {
  
  return (
    <div className="user-count-box">
      <h2>{data.label}</h2>
      <p>{data.userCount}</p>
    </div>
  );
}

export default BoxT;
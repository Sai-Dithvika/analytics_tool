import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

import ReportNavbar from './NavBars/ReportNavbar';
import Realtimenavbar from './NavBars/Realtimenavbar';

// const styles = {
//   navbar: {
//     height: '65px',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: '20px',
//     backgroundColor: '#f8f9fa',
//     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//   },
//   navbarLeft: {
//     marginLeft: '60px',
//     fontSize: '30px',
//     fontWeight: '600',
//   },
//   navbarRight: {
//     marginRight: '60px',
//   },
//   realtimeButton: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '40px',
//     width: '126px',
//     padding: '10px 20px',
//     fontSize: '20px',
//     cursor: 'pointer',
//     backgroundColor: '#ffffff',
//     color: '#02B2AF',
//     border: '2px solid #02B2AF',
//     borderRadius: '10px',
//     transition: 'background-color 0.3s ease, color 0.3s ease',
//   },
//   realtimeButtonHover: {
//     backgroundColor: '#02B2AF',
//     color: '#ffffff',
//   },
// };

// function Navbar() {
  // const navigate = useNavigate();
  // const location = useLocation();
  // const [buttonText, setButtonText] = useState('Realtime');

  // useEffect(() => {
  //   if (location.pathname === '/realtime') {
  //     setButtonText('Back');
  //   } else {
  //     setButtonText('Realtime');
  //   }
  // }, [location.pathname]);

  // const handleNavigation = () => {
  //   if (location.pathname === '/realtime') {
  //     navigate('/');
  //   } else {
  //     navigate('/realtime');
  //   }
//   };

//   return (
//     <div style={styles.navbar}>
//       <div style={styles.navbarLeft}>
//         <span style={{ color: "#02B2AF" }}>Dash</span>
//         <span style={{ color: "#2E96FF" }}>board</span>
//       </div>
//       <div style={styles.navbarRight}>
//         <button
//           style={styles.realtimeButton}
//           onMouseOver={e => {
//             e.currentTarget.style.backgroundColor = styles.realtimeButtonHover.backgroundColor;
//             e.currentTarget.style.color = styles.realtimeButtonHover.color;
//           }}
//           onMouseOut={e => {
//             e.currentTarget.style.backgroundColor = styles.realtimeButton.backgroundColor;
//             e.currentTarget.style.color = styles.realtimeButton.color;
//           }}
//           onClick={handleNavigation}
//         >
//           {buttonText}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Navbar;


const Navbar=()=>{
  const navigate = useNavigate();
  const location = useLocation();
  const [buttonText, setButtonText] = useState('Realtime');
  var path = location.pathname;
  var pattern = /^\/realtime/g ;

  useEffect(() => {
    path = location.pathname;
    pattern = /^\/realtime/g ;
    if ((pattern.test(path))) {
      // window.alert(pattern.test(path));
      setButtonText('Back');
    } else {
      setButtonText('Realtime');
    }
  }, [location.pathname]);

  const handleNavigation = () => {
    if (location.pathname === '/realtime') {
      navigate('/');
    } else {
      navigate('/realtime');
    }
  };
  return (
    <div className="flex flex-wrap w-full h-[70px] justify-between  items-center shadow-xl px-[80px]  ">
      <div className=" text-[30px] font-semibold">
        <span className="text-[#149da1]">Dash</span>
        <span className="text-[#2E96FF]">Board</span>
      </div>
{!(pattern.test(path)) ? <ReportNavbar/> : <Realtimenavbar/> };
 

      <div
        onClick={handleNavigation}
        className="flex text-[#149da1] p-2 w-[100px] justify-center items-center h-[40px] text-[20px] rounded-md  hover:bg-[#149da1] hover:text-white cursor-pointer border border-[#149da1]"
      >
        {buttonText}
      </div>
    </div>
  );
}

export default Navbar;

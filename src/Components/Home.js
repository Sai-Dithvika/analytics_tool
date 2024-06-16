import '../Components/home.css'


import Bouncerate from './Charts/BounceRate';
import FormSubmit from './Charts/FormSubmit';
import RegionData from './Charts/RegionData';
import PagePath from './Charts/PagePath';
import TotalUsersCount from './Charts/TotalUsersCount';
import DonatedUsersData from './Charts/DonatedUsersChart';
import MonthlyReport from './Charts/MonthlyReport';


const Home = () => {
  return (
    <>
    <div>
    <h1 style={{ textAlign: 'center' }}>Data Charts</h1>
    </div>
    <div className='dashboard'>
    <div className='row'>
    <div className='comp'><MonthlyReport /></div>
    <div className='comp'><FormSubmit /></div>
    <div className='comp'><PagePath /></div>
    </div>
    <div className='row'>
    <div className='comp'><Bouncerate /></div>
    <div className='comp'><RegionData /></div>
    <div className='comp'><TotalUsersCount /></div>
    <div className='comp'><DonatedUsersData /></div>
    </div>
    </div>
    </>
  )
}

export default Home
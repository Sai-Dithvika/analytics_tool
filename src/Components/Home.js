import '../Components/home.css'


import Bouncerate from './Charts/Report_Data/BounceRate';
import FormSubmit from './Charts/Report_Data/FormSubmit';
import RegionData from './Charts/Report_Data/RegionData';
import PagePath from './Charts/Report_Data/PagePath';
import TotalUsersCount from './Charts/Report_Data/TotalUsersCount';
import DonatedUsersData from './Charts/Report_Data/DonatedUsersChart';
import MonthlyReport from './Charts/Report_Data/MonthlyReport';


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
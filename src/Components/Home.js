import React from 'react'
import '../Components/home.css'
import MonthlyReport from './MonthlyReport'
import FormSubmit from './FormSubmit'

const Home = () => {
  return (
    <>
    <div>
    <h1 style={{ textAlign: 'center' }}>Data Charts</h1>
    </div>
    <div className='dashboard'>
    <MonthlyReport />
    <FormSubmit />
    </div>
    </>
  )
}

export default Home
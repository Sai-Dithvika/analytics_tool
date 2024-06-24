const getTodayDate = () => { 
    const today = new Date() ;
    console.log(today.toISOString().split('T')[0]);
    return today.toISOString().split('T')[0] ;
};

export default getTodayDate ;
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import UserMainSection from '../../../companents/client/userMainSection/UserMainSection'
import UserShopCookBook from '../../../companents/client/UserShopCookBook/UserShopCookBook'
import UserFutureSection from '../../../companents/client/userFutureSection/UserFutureSection'

function UserMain() {
  useEffect(() => {
    const resetPage = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
    resetPage();
  }, []);

  return (
    <>
      <Helmet>
        <title>Half Baked Harvest</title>
      </Helmet>
      <div className='UserMain' style={{ margin: "170px auto" }}>
        <UserMainSection />
        <UserShopCookBook />
        <UserFutureSection />
      </div>
    </>
  )
}

export default UserMain

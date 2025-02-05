import React from 'react'
import { Helmet } from 'react-helmet'
import UserMainSection from '../../../companents/client/userMainSection/UserMainSection'
import UserShopCookBook from '../../../companents/client/UserShopCookBook/UserShopCookBook'
import UserFutureSection from '../../../companents/client/userFutureSection/UserFutureSection'

function UserMain() {
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

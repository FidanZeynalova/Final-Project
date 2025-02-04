import React from 'react'
import { Helmet } from 'react-helmet'
import UserMainSection from '../../../companents/client/userMainSection/UserMainSection'
import UserShopCookBook from '../../../companents/client/UserShopCookBook/UserShopCookBook'

function UserMain() {
  return (
    <>
      <Helmet>
        <title>Half Baked Harvest</title>
      </Helmet>
      <div className='UserMain' style={{ margin: "170px auto" }}>
        <UserMainSection />
        <UserShopCookBook />
      </div>
    </>
  )
}

export default UserMain

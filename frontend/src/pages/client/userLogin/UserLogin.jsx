import React, { useState } from 'react'
import UserMainLogin from '../../../companents/client/UserLoginCompanents/UserMainLogin'
import UserLostPassword from '../../../companents/client/UserLoginCompanents/UserLostPassword'
import UserConfirmPassword from '../../../companents/client/UserLoginCompanents/UserConfirmPassword'
import UserNewPassword from '../../../companents/client/UserLoginCompanents/UserNewPassword'

function UserLogin() {
  let [page, setPage] = useState("loginMain")
  return (
    <>
      {page === "loginMain" && <UserMainLogin setPage={setPage} />}
      {page === "forgetPassword" && <UserLostPassword setPage={setPage} />}
      {page === "confirm" && <UserConfirmPassword setPage={setPage} />}
      {page === "newPassword" && <UserNewPassword setPage={setPage} />}
    </>
  )
}

export default UserLogin

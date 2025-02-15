import React, { useEffect, useState } from 'react'
import UserMainLogin from '../../../companents/client/UserLoginCompanents/UserMainLogin'
import UserLostPassword from '../../../companents/client/UserLoginCompanents/UserLostPassword'
import UserConfirmPassword from '../../../companents/client/UserLoginCompanents/UserConfirmPassword'
import UserNewPassword from '../../../companents/client/UserLoginCompanents/UserNewPassword'
import LoginConfirmPassword from '../../../companents/client/UserLoginCompanents/LoginConfirmPassword'

function UserLogin() {
  let [page, setPage] = useState("loginMain")

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
      {page === "loginMain" && <UserMainLogin setPage={setPage} />}
      {page === "loginConfirmPassword" && <LoginConfirmPassword setPage={setPage} />}
      {page === "forgetPassword" && <UserLostPassword setPage={setPage} />}
      {page === "confirm" && <UserConfirmPassword setPage={setPage} />}
      {page === "newPassword" && <UserNewPassword setPage={setPage} />}

    </>
  )
}

export default UserLogin

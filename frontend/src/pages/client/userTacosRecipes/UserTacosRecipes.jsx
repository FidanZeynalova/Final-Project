import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'

function UserTacosRecipes() {

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
                <title>Tacos - Half Baked Harvest</title>
            </Helmet>
            <h1>Tacos</h1>
        </>
    )
}

export default UserTacosRecipes

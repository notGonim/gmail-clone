import React, { useEffect, useState } from 'react';


export const Test = () => {

    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const USERS_URL = 'https://reqres.in/api/users';
    const [currPage, setCurrPage] = useState(2)
    const [postPerPage, setPostPerPage] = useState(3)

    const fetchApi = async () => {
        const res = await fetch(USERS_URL)
        const dataRes = await res.json()
        setData(dataRes.data)
        setIsLoading(true)
    }

    useEffect(() => {
        fetchApi()
    }, [])

    const indexOfLastUser = currPage * postPerPage
    const indexOfFirstUser = indexOfLastUser - postPerPage
    let currUsers = []
    if (isLoading) {
        currUsers = data.slice(indexOfFirstUser, indexOfLastUser)
    }
    console.log(currUsers)

    return (
        <>
            { isLoading && <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name   </th>
                            <th>Last Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currUsers.map(user => (
                            <tr>
                                <th>{user.id}</th>
                                <th>{user.first_name}   </th>
                                <th>{user.last_name}</th>
                            </tr>
                        ))}

                    </tbody>



                    <br />
                    <br />
                </table>
                <section className="pagination">
                    <button className="first-page-btn">first</button>
                    <button className="previous-page-btn">previous</button>
                    <button className="next-page-btn">next</button>
                    <button className="last-page-btn">last</button>
                </section>
            </div>
            }
        </>
    );
};

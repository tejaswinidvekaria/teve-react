import React from 'react'
import { useEffect,useState } from 'react'
import Spinner from '../layout/Spinner'
import UserItem from '../users/UserItem'

function UserResults() {
    const [users, setUsers] = useState([])
    const [loading,setLoading] = useState(true)
    // useEffect takes a function and an array of dependencies. But we pass empty arrays because we don't have dependencies.
    useEffect(() => {
        // We just wanted it to run when the component loads.
        fetchUsers();
    }, []);

    const fetchUsers = async () => { 
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
            headers: {
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        });
        
        const data = await response.json()
        // console.log(data);
        setUsers(data)
        setLoading(false)

    }

    if (!loading) {
        return (
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                {/* {users.map((user) => (
                    // <h3>{users.login}</h3>
                    <UserItem key={user.id} user={user}/>
                ))}
            </div> */}
                {users.length > 0 ? (
                    users.map((user) => (
                        <UserItem key={user.id} user={user} />
                    ))
                ) : (
                    <p>No users found</p>
                )}
            </div>
        );
    }
    // else { 
    //     // return
    //     // <h3>
    //     //     Loading...!
    //     // </h3>
    //     return <Spinner/>
    // }
}
export default UserResults;

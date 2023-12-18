import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import baseApi from '../../utils/baseApi';
import getToken from '../../utils/getToken';
export const UserContext = React.createContext({})

export default function UserProvider({children}) {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const navigate = useNavigate();


    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const res = await baseApi.get("/admin/individual",{
                    headers: { token: getToken() },
                })
                if(res.status===200){
                    navigate("/",{replace:true});
                    setIsUserLoggedIn(()=>true);
                }
            }catch(err){
                console.log(err);
                navigate("/login",{replace:true})
            }
        }
        fetchData();
    },[])
      //loggin user
        const loginUser = () => setIsUserLoggedIn(() => true);
      //logout
        const logoutUser = () => setIsUserLoggedIn(() => false);
        const value=
        {
            isUserLoggedIn,
            loginUser,
            logoutUser
        }
          return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  )
}

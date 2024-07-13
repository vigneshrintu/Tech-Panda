"use client"
import Image from 'next/image'
import { useEffect } from 'react';
import GlobalApi from './_utils/GlobalApi';
import { UserButton, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export default function Home() {
  
  const {user}=useUser();
  const router=useRouter();
  useEffect(()=>{
    user&&createUserProfile();
    router.push('/home')
  },[user])

  /**
   * Uset to create user profile
   */
  const createUserProfile=()=>{
    if(!localStorage.getItem('isLogin'))
    {
      const data={
        name:user.fullName,
        email:user.primaryEmailAddress.emailAddress,
        image:user.imageUrl
      }
      //maybe the issue is with this isLogin in attribute in local storage rather it should be in session storage as it is true all the time when one user is signed up then it is set to true and no other user data is going to be sent to db until the isLogin becomes false in local storage and this is  the reason why only first user is actually got into db all the time and when i deleted that attribute then globalapi createuser is executed and db got the user data and also when it makes this api call it prints data on console so check if the data is printed then it made an api call and db got that user data and if the isLogin is not true then only it makes an api call and as this call gets made we make the isLogin to true which never lets the api make a call again and hence issue so FIX this.
      GlobalApi.createUser(data).then(resp=>{
        console.log(resp.data);
        localStorage.setItem('isLogin',true)
      })
  }
  }

  return (
  <div>
    <UserButton/>
  </div>
  )
}

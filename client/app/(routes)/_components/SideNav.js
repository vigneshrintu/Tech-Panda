"use client"
import React, { useContext, useEffect, useState } from 'react';
import GlobalApi from '../../_utils/GlobalApi';
import { UserDetailContext } from '../../_context/UserDetailContext';
import Image from 'next/image';
import MenuList from '../../_utils/MenuList';
import Link from "next/link";
import { Button } from '../../../components/ui/button'; // Updated import
import { LogIn } from 'lucide-react';
import { UserButton, useUser } from '@clerk/nextjs';

function SideNav({ toggleSideBar }) {
  const { user } = useUser();
  return (
    <div className='h-full p-5 border'>
      <h1 className='text-2xl font-extrabold'>Tech Panda</h1>
      <div className='flex flex-col mt-10'>
        {MenuList.map((item) => (
          <Link href={item.path} onClick={() => toggleSideBar(false)} key={item.path}>
            <h2
              variant="ghost"
              className="group p-4 flex gap-5 items-center justify-start rounded-md cursor-pointer hover:bg-slate-100 text-slate-500"
            >
              <item.icon className='group-hover:animate-bounce' />
              {item.name}
            </h2>
          </Link>
        ))}
      </div>
      <div className='absolute bottom-10 flex gap-3 items-center'>
        {!user ? (
          <Link href='/sign-up'>
            <Button variant="ghost" className='flex gap-2 items-center cursor-pointer'>
              <LogIn />
              Sign In
            </Button>
          </Link>
        ) : (
          <div className='flex items-center gap-3 p-3'>
            <UserButton /> Account
          </div>
        )}
      </div>
    </div>
  );
}

export default SideNav;

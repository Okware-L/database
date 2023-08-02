"use client"

import React, {useEffect} from 'react'
import { useDisconnect } from '@thirdweb-dev/react';
import { useAddress } from "@thirdweb-dev/react";
import { useRouter } from 'next/navigation';

const Profile = () => {

    const address = useAddress();
    const disconnect = useDisconnect();
    const { push } = useRouter();

    const signOut = () => {
    disconnect();
    
        push('/');
     
    }
 if (!address) return
  <div>No wallet connected</div>;

  return (
    <div>
        <div>My wallet address is {address}</div>
        <button onClick={signOut}> sign out</button>
    </div>
  )
}

export default Profile
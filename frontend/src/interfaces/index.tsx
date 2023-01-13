/*---------- I N T E R F A C E S ----------*/
import { Home } from "./../pages/Home";
import { Login } from "./../pages/Login"
import { CreateAcc } from "./../pages/CreateAcc"

import React, { createContext, useState } from 'react';

export const isUserValidated = createContext<boolean>(false);

function Parent() {
  const [globalValue, setGlobalValue] = useState(false);

  return (
    <isUserValidated.Provider value={globalValue}>
      <Home />
      <Login />
      <CreateAcc setGlobalValue={setGlobalValue}/>
    </isUserValidated.Provider>
  );
}

export interface interfaceProducts {
  /* id: number; */
  date?: Date;
  title: string;
  brand: string;
  price: number;
  color: string;
  images: string;
}

export interface interfaceForm {
  title: string;
  brand: string;
  price: string;
  color: string;
  date: Date;
  images: string;
}

export interface interfacePayment {
  total: number;
  moneyQtdy: number[];
  money: number[];
  quantity: number;
}

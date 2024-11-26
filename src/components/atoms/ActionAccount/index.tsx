import React from 'react';
import { AcctionAccountButton } from './styles';

interface ButtonAcctionAccount
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

export function ButtonAcctionAccount({
  children,
  ...props
}: ButtonAcctionAccount) {
  return <AcctionAccountButton {...props}>{children}</AcctionAccountButton>;
}

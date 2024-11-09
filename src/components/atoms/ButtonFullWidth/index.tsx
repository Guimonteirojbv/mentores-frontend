import React from 'react';
import { Button } from './styles';

interface ButtonFullWidthProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  textcolor: string;
}

export default function ButtonFullWidth({
  children,
  textcolor = 'red',
  ...props
}: ButtonFullWidthProps) {
  return (
    <Button textColor={textcolor} {...props}>
      {children}
    </Button>
  );
}

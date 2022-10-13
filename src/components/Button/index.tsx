import { Slot } from '@radix-ui/react-slot';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from "clsx"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode
  asChild?: boolean
}

export function Button({children, asChild, className, ...rest}: ButtonProps){

  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      {...rest}
      className={clsx("py-3 px-4 bg-cyan-500 rounded font-semibold text-black transition-colors text-sm w-full hover:bg-cyan-300 focus:ring-2 ring-white", className)}
    >
      {children}
    </Comp>
  )
}
import { ReactNode } from 'react';
import * as CheckboxRadix from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react'
 
export interface CheckboxProps{
  children: ReactNode
  asChild: boolean
}

export function Checkbox({}: CheckboxProps){
  return (
    <CheckboxRadix.Root className='w-6 h-6 p-[2px] bg-gray-800 rounded'>
      <CheckboxRadix.Indicator asChild> 
        <Check weight='bold' className='h-5 w-5 text-cyan-500' />
      </CheckboxRadix.Indicator>
    </CheckboxRadix.Root>
  )
}

Checkbox.displayName = 'Checkbox'
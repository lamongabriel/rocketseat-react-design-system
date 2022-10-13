import { InputHTMLAttributes, ReactNode } from "react"
import { Slot } from "@radix-ui/react-slot"

export interface TextInputRootProps {
  children: ReactNode
}

function TextInputRoot({children}: TextInputRootProps){
  return(
    <div className="h-12 py-4 px-3 flex items-center gap-3 bg-gray-800 rounded text-xs focus-within:ring-2 ring-cyan-300 overflow-hidden">
      {children}
    </div>
  )
}

TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps {
  children: ReactNode
}

function TextInputIcon({children}: TextInputIconProps){
  return (
    <Slot className="w-6 h-6 text-gray-400">
      {children}
    </Slot>
  )
}

TextInputIcon.displayName = 'TextInput.Icon'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement>{}

function TextInputInput({placeholder = "...", ...props}: TextInputInputProps){
  return (
    <input
      className="bg-transparent flex-1 outline-none placeholder:text-gray-400 text-gray-100"
      placeholder={placeholder}
      {...props}
    />
  )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
}
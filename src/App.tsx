import { Heading } from './components/Heading'
import { Text } from './components/Text'
import { TextInput } from './components/TextInput'
import { Envelope, Lock } from 'phosphor-react'

import './styles/global.css'
import reactlogo from './assets/react-logo.png'
import { Checkbox } from './components/Checkbox'
import { Button } from './components/Button'


export function App() {

  return (
    <>
      <div className='w-screen h-screen bg-gray-900 flex items-center justify-center flex-col text-gray-100'>

        <header className='flex items-center justify-center flex-col'>

          <img src={reactlogo} alt="React Logo" className='animate-spin-slow' />
          <Heading size='lg' className='mt-4'>Ignite lab</Heading>
          <Text size='lg' className='text-gray-400'>Faça login e comece a usar!</Text>

        </header>

        <form action="#" className='flex gap-4 items-stretch flex-col w-full max-w-[400px] mt-10'>

          <label htmlFor="email" className='flex flex-col gap-3'>
            <Text className='font-semibold'>Endereço de e-mail</Text>

            <TextInput.Root>
              <TextInput.Icon> 
                <Envelope />
              </TextInput.Icon>
              <TextInput.Input id='email' type="email" placeholder='Digite seu e-mail'/>
            </TextInput.Root>
          </label>

          <label htmlFor="password" className='flex flex-col gap-3'>
            <Text className='font-semibold'>Sua senha</Text>

            <TextInput.Root>
              <TextInput.Icon> 
                <Lock />
              </TextInput.Icon>
              <TextInput.Input id='password' type="password" placeholder='**************'/>
            </TextInput.Root>
          </label>

          <label htmlFor="remember" className='flex items-center gap-2'>
            <Checkbox id="remember" />
            <Text size='sm' className='text-gray-200'>Lembrar de mim por 30 dias?</Text>
          </label>

          <Button type='button' className='mt-4'>Entrar na plataforma</Button>

        </form>

        <footer className='flex flex-col items-center gap-4 mt-8'>
          <Text className='text-gray-400 font-light underline' size='sm'>
            <a href='#'>Esqueceu sua senha?</a>
          </Text>
          <Text className='text-gray-400 font-light underline' size='sm'>
            <a href='#'>Não possui conta? crie uma agora!</a>
          </Text>
        </footer>

      </div>
    </>
  )
}

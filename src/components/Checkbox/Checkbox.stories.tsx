import { Meta, StoryObj} from '@storybook/react'

import { Checkbox, CheckboxProps } from ".";
import { Text } from '../Text';

export default {
  title: 'components/Checkbox',
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators: [
    Story => {return (
      <div className='flex items-center gap-2'>
        {Story()}
        <Text children="Remember me?"/>
      </div>
    )}
  ]
} as Meta<CheckboxProps>

export const Default:StoryObj<CheckboxProps> = {}

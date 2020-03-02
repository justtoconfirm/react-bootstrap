import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './../Button'

storiesOf('Button', module)
  .add('with text', () => (
    <Button type='button'>Button</Button>
  ))
  .add('as a link', () => (
    <Button url='http://example.com'>Link</Button>
  ))

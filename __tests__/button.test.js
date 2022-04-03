import 'regenerator-runtime/runtime'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from '../src/components/Button'

test('<Button primary /> should render with primary background color/>', async () => {
  const {container} = render(<Button primary/>);
  expect(container.firstChild).toHaveStyle(`background: #3852DE`);
})

test('<Button secondary /> should render with secondary background color/>', async () => {
  const {container} = render(<Button secondary/>);
  expect(container.firstChild).toHaveStyle(`background: #454545`);
})


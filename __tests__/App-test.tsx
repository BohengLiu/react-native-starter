import React from 'react'
import renderer from 'react-test-renderer'

import Hello from "../src/pages/HelloPage"

it("renders correctly with defaults", () => {
  const button = renderer.create(<Hello name="World" enthusiasmLevel={1} />).toJSON()
  expect(button).toMatchSnapshot()
})
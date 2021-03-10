import React from 'react'
import { render, screen } from '@testing-library/react'

import App from './App'

describe('render', () => {
	test('title', () => {
        render(<App />)

        screen.debug()
	})
})

export {}

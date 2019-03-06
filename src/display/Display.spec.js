// Test away!
import React from 'react';
import { render } from 'react-testing-library'
import Display from './Display';
import 'jest-dom/extend-expect'

describe('<Display />', () => {

    it('should say locked and closed', () => {
        const { getByText } = render( <Display locked={true} closed={true} /> )

        expect(getByText(/Locked/)).toBeInTheDocument()
        expect(getByText(/closed/i)).toBeInTheDocument()
        // expect(getByText(/open/i)).toBeInTheDocument()
    })
    it('should say unlocked and closed', () => {
        const { getByText } = render(<Display locked={false} closed={true}/>)

        expect(getByText(/Unlocked/)).toBeInTheDocument()
        expect(getByText(/Closed/)).toBeInTheDocument()
    })
    it('should say unlocked and open', () => {
        const { getByText } = render(<Display locked={true} closed={false} />)
        expect(getByText(/Unlocked/)).toBeInTheDocument()
        expect(getByText(/Open/)).toBeInTheDocument()
    })
})

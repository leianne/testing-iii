// Test away
import React from 'react';
import { render } from 'react-testing-library';
import './Dashboard';
import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
    it('should default to unlocked and open', () => {
        const { getByText } = render(<Dashboard locked={false} closed={false}/>)
    
        expect(getByText(/Unlocked/i)).toBeInTheDocument();
        // expect(getByText(/open/i)).toBeInTheDocument();
    })
})

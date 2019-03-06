// Test away!
import React from 'react';
import Controls from './Controls';
import {render, fireEvent} from 'react-testing-library';

describe('<Controls />', () => {
    it('should disable the locked button if closed is false and locked is false', () => {
        const {getByText} = render(<Controls closed={false} locked={false}/>)
        expect(getByText(/lock gate/i).disabled).toBeTruthy()
    })

    it('should disable the open gate if closed is true and locked is true', () => {
        const {getByText} = render(<Controls closed={true} locked={true}/>)
        expect(getByText(/open gate/i).disabled).toBeTruthy()
    })
})
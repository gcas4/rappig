import React from 'react';
import { render } from '@testing-library/react';
import { ExpansionPanelActions } from '@material-ui/core';
import Login from './index'


describe('Rappi4A Login Page', () => {

  test('renders elements correctly', () => {

    const {getByTestId} = render(<Login/>)

    const input = getByTestId('E-mail-input')

    ExpansionPanelActions(input).toBeInTheDocument()

  });


})
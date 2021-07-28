import React from 'react';
import { render, screen } from '@testing-library/react';
import RickAndMorty from './RickAndMorty';

describe('Rick and Morty container', () => {
  it('displays a list of characters', async () => {
    render(<RickAndMorty />);

    screen.getByText('loading...');
    const ul = await screen.findByRole('list');
    expect(ul).not.toBeEmptyDOMElement();
  });
});

import { render, screen } from '@testing-library/react';
import PokemonsList from './pokemonsList';

describe('Pokemon list component', () => {
  test.skip('should render a number and name', () => {
    const props = {
      img: "source",
      number: "1",
      name: "pokemon name"
    }
    render(<PokemonCard {...props} />);
    const pokemonCardeElement = screen.getByText(/pokemon name/i);
    expect(pokemonCardeElement).toBeInTheDocument();
  });
});

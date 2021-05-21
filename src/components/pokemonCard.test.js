import { render, screen } from '@testing-library/react';
import PokemonCard from './pokemonCard';

describe('Pokemon card component', () => {
  test('should render a number and name', () => {
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

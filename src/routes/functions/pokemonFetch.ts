import { writable } from 'svelte/store';

export interface Pokemon {
	image: string;
}

const API = 'https://pokeapi.co/api/v2/pokemon';
export const pokemonDetails = writable<Pokemon | null>(null);

export async function fetchPokemon(pokemonName: string) {
	const request = await fetch(`${API}/${pokemonName}`);
	if (!request.ok) throw new Error('Could not fetch the pokemon');
	const respond = await request.json();

	try {
		const pokemon: Pokemon = {
			image: respond.sprites.front_default
		};
		return pokemon;
		// pokemonDetails.set(pokemon);
	} catch (error) {
		throw new Error('Something is wrong');
	}
}

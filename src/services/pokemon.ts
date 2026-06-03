import { customAxios } from "./customAxios";

export const fetchPokemonList = async (limit: number, offset: number) => {
  try {
    const response = await customAxios.get(
      `/pokemon?limit=${limit}&offset=${offset}`,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching Pokemon list: ", error);
    throw error;
  }
};

export const fetchPokemonDetail = async (id: string) => {
  try {
    const response = await customAxios.get(`/pokemon/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Pokemon detail: ", error);
    throw error;
  }
};

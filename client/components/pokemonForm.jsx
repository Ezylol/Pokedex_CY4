import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import { createPokemon } from "../services/pokemonService";


export default function PokemonForm() {
  const { register, handleSubmit, reset } = useForm();


  const { mutate: create } = useMutation({
    mutationFn: createPokemon,
    onSuccess: () => {
      alert("Pokemon created successfully!");
      reset();
    },
    onError: (error) => {
      alert("Error creating Pokemon: " + error.message);
    },
  });

  return (
    <form onSubmit={handleSubmit(create)}>
      <input {...register("name", { required: true })} placeholder="Nome" />
      <input {...register("type", { required: true })} placeholder="Tipo" />
      <input
        {...register("level", { valueAsNumber: true, min: 1 })}
        type="number"
        min="1"
        placeholder="Nível"
      />
      <button type="submit">Criar Pokemon</button>
    </form>
  );
}
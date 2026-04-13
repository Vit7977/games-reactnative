import z from "zod";

const baseGameStoreSchema = z.object({
  preco: z.number({
    invalid_type_error: "O preço do jogo na loja deve ser um número!",
  }),

  preco_promocao: z
    .number({
      invalid_type_error:
        "O preço promocional do jogo na loja deve ser um número!",
    })
    .optional(),

  data_promocao_inicio: z.coerce
    .date({
      invalid_type_error:
        "A data de inicio da promoção deve ser uma data válida!",
    })
    .max(new Date(), {
      message: "A data de inicio da promoção não pode ser no futuro!",
    })
    .optional(),

  data_promocao_fim: z.coerce
    .date({
      invalid_type_error: "A data deve ser uma data válida!",
    })
    .optional(),

  avaliacao: z
    .number({
      invalid_type_error: "A avaliação do jogo na loja deve ser um número!",
    })
    .nonnegative(),

  avaliacao_max: z
    .number({
      invalid_type_error:
        "A avaliação maxima do jogo na loja deve ser um número!",
    })
    .positive(),

  jogo: z
    .number({ invalid_type_error: "O ID do jogo deve ser um número!" })
    .int()
    .positive({ message: "ID do jogo inválido!" }),

  loja: z
    .number({ invalid_type_error: "O ID da loja deve ser um número!" })
    .int()
    .positive({ message: "ID da loja inválido!" }),
});

export const createGameStoreDTO = baseGameStoreSchema
  .refine((data) => data.avaliacao <= data.avaliacao_max, {
    message: "A avaliação não pode ser maior que a avaliação máxima!",
    path: ["avaliacao"],
  })
  .refine(
    (data) =>
      !data.data_promocao_inicio ||
      !data.data_promocao_fim ||
      data.data_promocao_inicio <= data.data_promocao_fim,
    {
      message: "A data de início não pode ser maior que a data de fim!",
      path: ["data_promocao_inicio"],
    },
  );

export const getGameStoreById = z.object({
  id: z.coerce
    .number({ invalid_type_error: "O ID do jogo em loja deve ser um número!" })
    .int()
    .positive({ message: "ID inválido!" }),
});

export const updateGameStoreDTO = baseGameStoreSchema
  .partial()
  .refine((data) => {
    if (data.avaliacao !== undefined && data.avaliacao_max !== undefined) {
      return data.avaliacao <= data.avaliacao_max;
    }
    return true;
  }, {
    message: "A avaliação não pode ser maior que a avaliação máxima!",
    path: ["avaliacao"],
  })
  .refine((data) => {
    if (data.data_promocao_inicio && data.data_promocao_fim) {
      return data.data_promocao_inicio <= data.data_promocao_fim;
    }
    return true;
  }, {
    message: "A data de início não pode ser maior que a data de fim!",
    path: ["data_promocao_inicio"],
  });

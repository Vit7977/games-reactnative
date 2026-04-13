import z from "zod";

export const createGameStoreDTO = z
  .object({
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
  })
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
    });
import z from "zod";

export const createGameDTO = z.object({
  titulo: z
    .string({ invalid_type_error: "O titulo deve ser texto(string)!" })
    .trim()
    .min(3, {
      message: "O titulo do jogo deve conter no MINIMO 3 caracteres!",
    }),

  descricao: z
    .string({
      invalid_type_error: "A descrição deve ser texto(string)!",
    })
    .trim()
    .optional(),

  capa_url: z
    .string({ invalid_type_error: "O link da capa deve ser texto(string)!" })
    .trim()
    .min(1, { message: "A capa é obrigatória!" })
    .pipe(z.url({ message: "A capa deve ser uma URL válida!" })),

  desenvolvedor: z
    .string({
      invalid_type_error:
        "O nome do desenvolvedor/empresa deve ser texto(string)!",
    })
    .trim()
    .min(3, {
      message:
        "O nome do desenvolvedor/empresa deve conter no MINIMO 3 caracteres!",
    }),

  genero: z
    .string({
      invalid_type_error: "O genero deve ser um texto(string)!",
    })
    .trim()
    .min(3, { message: "O genero deve ter no mínimo 3 caracteres!" }),

  data_lanc: z.coerce
    .date({
      invalid_type_error: "A data deve ser uma data válida!",
    })
    .max(new Date(), {
      message: "A data de lançamento não pode ser no futuro!",
    }),

  class_indicativa: z.enum(["LIVRE", "10", "12", "14", "16", "18"], {
    errorMap: () => ({ message: "Classificação indicativa inválida!" }),
  }),
  downloads: z.number({
    invalid_type_error: "O total de downloads do jogo deve ser um número!",
  }).int(),
});

export const getGameByIdDTO = z.object({
  id: z.coerce
    .number({ invalid_type_error: "O ID do jogo deve ser um número!" })
    .int()
    .positive({ message: "ID do jogo inválido!" }),
});

export const updateGameDTO = createGameDTO.partial();

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
    .trim(),

  data_lanc: z.coerce
    .date({
      invalid_type_error: "A data deve ser uma data válida!",
    })
    .max(new Date(), {
      message: "A data de lançamento não pode ser no futuro!",
    }),

  class_indicativa: z
    .string({
      invalid_type_error:
        "O classificação indicativa deve ser um texto(string)!",
    })
    .trim(),

  downloads: z
    .number({ invalid_type_error: "O total de downloads deve ser um número!" })
    .int({ message: "O total de downloads deve ser um número inteiro!" })
    .nonnegative({ message: "O total de downloads não pode ser negativo!" })
    .default(0),
});

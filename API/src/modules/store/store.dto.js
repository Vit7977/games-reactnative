import z from "zod";

export const createStoreDTO = z.object({
  nome: z
    .string({ invalid_type_error: "O nome da loja deve ser texto(string)!" })
    .trim()
    .min(3, {
      message: "O nome da loja deve conter no MINIMO 3 caracteres!",
    }),

  logo: z
    .string({ invalid_type_error: "O link da logo deve ser texto(string)!" })
    .trim()
    .min(1, { message: "A logo é obrigatória!" })
    .pipe(z.url({ message: "A logo deve ser uma URL válida!" })),

  site_url: z
    .string({ invalid_type_error: "O link do site deve ser texto(string)!" })
    .trim()
    .min(1, { message: "O site da loja é obrigatório!" })
    .pipe(
      z.url({ message: "O link do site da loja deve ser uma URL válida!" }),
    ),

  cor1: z
    .string()
    .regex(/^#([0-9A-Fa-f]{6})$/, {
      message: "A cor deve estar no formato HEX (#RRGGBB)",
    })
    .optional(),

  cor2: z
    .string()
    .regex(/^#([0-9A-Fa-f]{6})$/, {
      message: "A cor deve estar no formato HEX (#RRGGBB)",
    })
    .optional(),
});

export const getStoreByIdDTO = z.object({
  id: z.coerce
    .number({ invalid_type_error: "O ID da loja deve ser um número!" })
    .int()
    .positive({ message: "ID da loja inválido!" }),
});

export const updateStoreDTO = createStoreDTO.partial();

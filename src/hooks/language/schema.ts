import * as z from 'zod';

export const enum SupportedLanguages {
  EN_EN = 'en-EN',
  FA_IR = 'fa-IR',
}

export const languageSchema = z.enum([
  SupportedLanguages.EN_EN,
  SupportedLanguages.FA_IR,
]);

export type Language = z.infer<typeof languageSchema>;

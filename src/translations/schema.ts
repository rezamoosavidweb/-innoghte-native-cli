import * as z from 'zod';

export const enum SupportedLanguages {
  EN = 'en',
  FA = 'fa',
}

export const languageSchema = z.enum([
  SupportedLanguages.EN,
  SupportedLanguages.FA,
]);

export type Language = z.infer<typeof languageSchema>;

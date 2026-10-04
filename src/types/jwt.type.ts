import { z } from 'zod';
import { EUserRole } from './users.type.js';

export enum ETokenFor {
  USER = 'user',
}

export const VerifiedUserPayloadSchema = z.object({
  type: ETokenFor.USER,
  role: z.enum(EUserRole),
  userId: z.string(),
});

export const VerifiedToken̦PayloadSchema = z.discriminatedUnion('type', [
  VerifiedUserPayloadSchema,
]);

export type TVerifiedTokenPayload = z.infer<typeof VerifiedToken̦PayloadSchema>;
export type TVerifiedUserPayload = z.infer<typeof VerifiedUserPayloadSchema>;

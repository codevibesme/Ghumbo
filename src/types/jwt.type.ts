import { z } from 'zod';
import { EUserRole } from './users.type.js';

export enum ETokenFor {
  USER = 'user',
}

export const VerifiedUserPayloadSchema = z.object({
  type: ETokenFor.USER,
  role: z.enum(EUserRole),
  userId: z.string(),
  session: z.object({
    id: z.string(),
    expiresAt: z.coerce.string(),
    revokedAt: z.string().nullable().default(null),
    lastUsedAt: z.coerce.string(),
  }),
});

export const VerifiedToken̦PayloadSchema = z.discriminatedUnion('type', [
  VerifiedUserPayloadSchema,
]);

export type TVerifiedTokenPayload = z.infer<typeof VerifiedToken̦PayloadSchema>;
export type TVerifiedUserPayload = z.infer<typeof VerifiedUserPayloadSchema>;

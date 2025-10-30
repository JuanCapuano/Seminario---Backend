import { SetMetadata } from "@nestjs/common";

export const permissions = (...permissions: string[]) => SetMetadata('permissions', permissions);

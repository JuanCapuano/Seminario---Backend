// src/interfaces/request.ts

import { Company } from "src/company/entities/company.entity";
import { User } from "src/user/entities/user.entity";


export interface RequestWithUser extends Express.Request {
  user?: User | Company;
}

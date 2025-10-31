import { Company } from "./company/entities/company.entity";
import { SolicitudEmpleo } from "./solicitud-empleo/entities/solicitud-empleo.entity";
import { User } from "./user/entities/user.entity";

import { EmpleoOfrecido } from "./empleo-ofrecido/entities/empleo-ofrecido.entity";
import { OfertaEmpleo } from "./oferta-empleo/entities/oferta-empleo.entity";
import { Provincia } from "./provincia/entities/provincia.entity";
import { Localidad } from "./localidad/entities/localidad.entity";
import { Direccion } from "./direccion/entities/direccion.entity";
import { Idioma } from "./idioma/entities/idioma.entity";
import { Experiencia } from "./experiencia/entities/experiencia.entity";
import { Estado } from "./estado/entities/estado.entity";
import { CambioEstado } from "./cambio-estado/entities/cambio-estado.entity";
import { Estudio } from "./estudio/entities/estudio.entity";
import { Sector } from "./sector/entities/sector.entity";
import { FormularioCv } from "./formulario-cv/entities/formulario-cv.entity";
import { Role } from "./auth/role/entities/role.entity";
import { Permission } from "./auth/permission/entities/permission.entity";

export const entities = [
  User,
  Company,
  SolicitudEmpleo,
  EmpleoOfrecido,
  OfertaEmpleo,
  Provincia,
  Localidad,
  Direccion,
  Idioma,
  Experiencia,
  Estado,
  CambioEstado,
  Estudio,
  Sector,
  FormularioCv,
  Role,
  Permission,
];

export {
  User,
  Company,
  SolicitudEmpleo,
  EmpleoOfrecido,
  OfertaEmpleo,
  Provincia,
  Localidad,
  Direccion,
  Idioma,
  Experiencia,
  Estado,
  CambioEstado,
  Estudio,
  Sector,
  FormularioCv,
  Role,
  Permission,

}

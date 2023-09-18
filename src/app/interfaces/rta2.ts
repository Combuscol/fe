export interface Rta2 {
    "codigo": string;
    "mensaje": string;
    "error": boolean;

}

export interface Solicitudcliente {
    "Apellido1": string;
    "Apellido2": string; 
    "CargaCRM": Boolean; 
    "CargaERP": Boolean;
    "Celular": string;
    "Ciudad": string;
    "Comentarios": string;
    "Departamento": string;
    "Direccion":string;
    "Documento": string;
    "Email": string;
    "Email1": string;
    "Email2": string;
    "Estacion":string;
    "Estado": Boolean;
    "Fecha": Date;
    "IdSolicitud": Number;
    "MsgCargaCRM": string;
    "MsgCargaERP":string;
    "Nombre": string;
    "Nombre1": string;
    "Nombre2": string;
    "Obligacion1": string;
    "Obligacion2": string;
    "Obligacion3": string;
    "Pais": string;
    "Proceso": string;
    "Regimen": string;
    "Rut":string;
    "Rut_b64":string;
    "TipoPersona": string;
    "Tipodocumento": string;
}

export interface respuestasolicitudCliente {
  Respuesta: Rta2;
  Lista: Solicitudcliente[];

}



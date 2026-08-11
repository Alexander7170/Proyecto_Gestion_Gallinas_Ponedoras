export class errorConEstado extends Error{
    constructor(mensaje){
        super(mensaje);
        this.codigoEstado = 400;
    }
}
export class noExisteEnsistemaError extends errorConEstado{};

export class sueldoNegativo extends errorConEstado{
    constructor(){
        super("El sueldo es negativo");
    }
};

export class ningunaFilaAfectada extends errorConEstado{
    constructor(){
        super("Ocurrio un problema inesperado en base de datos. Vuelva a intentarlo mas tarde");
        this.codigoEstado = 500
    }
}

export class yaExisteEnSistemaError extends errorConEstado{
    constructor(mensaje, entidad){
        super(mensaje);
        this.entidad = entidad;
    }
};
class errorLogica extends Error{
    constructor(mensaje, codigoEstado){
        super(mensaje);
        this.codigoEstado = codigoEstado;
    }
}
class noExisteEnsistemaError extends errorLogica{};
class yaExisteEnSistemaError extends errorLogica{
    constructor(mensaje,codigoEstado, entidad){
        super(mensaje,codigoEstado);
        this.entidad = entidad;
    }
};
export default{errorLogica,noExisteEnsistemaError, yaExisteEnSistemaError};
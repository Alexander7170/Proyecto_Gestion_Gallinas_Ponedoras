class ERROR_LOGICA extends Error{
    constructor(mensaje, codigoEstado){
        super(mensaje), this.codigoEstado = codigoEstado;
    }
}
class NO_EXISTE_EN_SISTEMA extends ERROR_LOGICA{};
class YA_EXISTE_EN_SISTEMA extends ERROR_LOGICA{};
export default{ERROR_LOGICA,NO_EXISTE_EN_SISTEMA, YA_EXISTE_EN_SISTEMA};
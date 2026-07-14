
## Casos de uso

// Se da por sentado que en la precondicion de todos los casos de uso, el sistema este levantado.

// Se da por sentado que en la precondicion de todos los casos de uso, a menos que se diga lo contrario, el usuario este logueado

// Se da por sentado que en los flujos alternativos, si ocurrio un error interno o en la infrasetructura del codigo, se avise al usuario que ocurrio un error inesperado y que intente mas tarde

### #1

Nombre: **REGISTRAR EMPLEADO**

Actor: ADMINISTRADOR

Precondiciones: NINGUNA

FLUJO PRINCIPAL:

1. Administrador escribe los datos del nuevo usuario
2. Administrador confirma creacion de nuevo usuario
3. Sistema procesa la solicitud
4. Sistema avisa proceso exitoso

FLUJO ALTERNATIVO 1: Sistema avisa al usuario que ya esta registrado ese usuario en sistema.

FLUJO ALTERNATIVO 2: Sistema avisa al usuario que los datos ingresados son invalidos

                Post Condicion: EMPLEADO REGISTRADO

### #2

Nombre: **ELIMINAR EMPLEADO**

Actor: ADMINISTRADOR

Precondiciones: EMPLEADO SELECCIONADO

FLUJO PRINCIPAL:

1. Administrador elimina al empleado
2. Administrador confima los cambios
3. Sistema procesa la solicitud
4. Sistema avisa proceso exitoso

        Post Condicion: EMPLEADO ELIMINADO

### #3

Nombre: **DESACTIVAR EMPLEADO**

Actor: ADMINISTRADOR

Precondiciones: EMPLEADO SELECCIONADO. Empleado esta activado

FLUJO PRINCIPAL:

1. Administrador desactiva empleado
2. Administrador guarda cambios
3. Sistema procesa la solicitud
4. Sistema avisa proceso exitoso.

        Post Condicion: EMPLEADO DESACTIVADO


### #4 
Nombre: **ACTIVAR EMPLEADO**

Actor: ADMINISTRADOR

Precondiciones: EMPLEADO SELECCIONADO. Empleado esta desactivado

FLUJO PRINCIPAL:

1. Administrador activa empleado
2. Administrador guarda cambios
3. Sistema procesa la solicitud
4. Sistema avisa proceso exitoso

        Post Condicion: EMPLEADO ACTIVADO

### #5
Nombre: **VER EMPLEADOS**

Actor: ADMINISTRADOR

Precondiciones: NINGUNA

FLUJO PRINCIPAL:

1. Administrador solicita visualizar empleados
2. Sistema procesa la solicitud
3. Sistema muestra todos los empleados registrados

FLUJO ALTERNATIVO: Sistema avisa al usuario que ningun empleado esta registrado.

        Post Condicion: VER LISTADO DE EMPLEADOS

### #6
Nombre: **BUSCAR EMPLEADOS**

Actor: ADMINISTRADOR

Precondiciones: NINGUNA

FLUJO PRINCIPAL:

1. Administrador pone un criterio de filtro
2. Sistema filtra los usuarios
3. Sistema muestra lista de usuarios filtrados

FLUJO ALTERNATIVO: Sistema avisa al usuario que no hay empleados con ese criterio.

        Post Condicion: VER LISTADO DE EMPLEADOS

### #7
Nombre: **SELECCIONAR EMPLEADO**

Actor: ADMINISTRADOR

Precondiciones: VER LISTADO DE EMPLEADOS

FLUJO PRINCIPAL:

1. Administrador selecciona un empleado

        Post Condicion: EMPLEADO SELECCIONADO

### #8

Nombre : **INICIAR SESION**

Actor: USUARIO

Precondiciones: NO LOGUEADO

FLUJO PRINCIPAL: 

1. Usuario pone sus datos
2. Sistema verifica si el usuario esta registrado
3. Sistema permite al usuario ingresar

FLUJO ALTERNATIVO 1: Sistema avisa al usuario que no esta registrado en sistema

FLUJO ALTERNATIVO 2: Sistema avisa al usuario que los datos son invalidos

        Post condicion: USUARIO LOGUEADO

### #9

Nombre: **MODIFICAR DATOS LOGUEO**

Actor: USUARIO

Precondiciones: NINGUNA

FLUJO PRINCIPAL: 

1. El usuario accede a un apartado de modificacion de sus propios datos
2. El usuario modifica sus propios datos
3. El usuario guarda los cambios
4. Sistema verifica datos
5. Sistema avisa que sus datos fueron modificados exitosamente

FLUJO ALTERNATIVO 1: Sistema avisa al usuario que ya existe un usuario en sistema con esos datos.

FLUJO ALTERNATIVO 2: Sistema avisa que los datos son invalidos

        Post condicion: USUARIO MODIFICADO 

## Casos de uso

#### A tener en cuenta
- *Se da por sentado que en la precondicion de todos los casos de uso, el sistema este levantado.*

- *Se da por sentado que en la precondicion de todos los casos de uso, a menos que se diga lo contrario, el usuario este logueado*

- *Se da por sentado que en los flujos alternativos, existira uno que avise al usuario, un mensaje de error, en caso de que ocurra un fallo interno o un error en la infrestructura del codigo*


### #1 **INICIAR SESION**

Actor: Usuario / Precondiciones: USUARIO NO LOGUEADO / Post condicion: USUARIO LOGUEADO

        Flujo principal:

        1. Usuario pone sus datos
        2. Sistema verifica si el usuario esta registrado
        3. Sistema permite al usuario ingresar

        Flujo alternativo 1: Sistema avisa al usuario que no esta registrado en sistema

        Flujo alternativo 2: Sistema avisa al usuario que los datos son invalidos

### #2 **CERRAR SESION**

Actor: Usuario / Precondiciones: USUARIO LOGUEADO / Post condicion: USUARIO NO LOGUEADO

        Flujo principal:

        1. El usuario solicita cerrar su sesion
        2. El sistema cierra la sesion del usuario

### #3 **MODIFICAR DATOS LOGUEO**

Actor: Usuario / Precondiciones: Ninguna / Post condicion: USUARIO MODIFICADO

        Flujo principal:

        1. El usuario accede a la modificacion de sus propios datos
        2. El usuario modifica sus propios datos
        3. El usuario guarda los cambios
        4. Sistema verifica datos
        5. Sistema avisa que sus datos fueron modificados exitosamente

        Flujo alternativo 1: Sistema avisa al usuario que ya existe un usuario con esos mismos datos.

        Flujo alternativo 2: Sistema avisa que los datos son invalidos 

### #4 **ASIGNAR PRECIO DEL HUEVO**

Actor: Administrador / Precondiciones: Ninguna / Post condicion: PRECIO DEL HUEVO ASIGNADO

        Flujo principal:

        1. El usuario solicita asignarle precio al huevo
        2. El usuario guarda los cambios
        4. El sistema verifica la solicitud
        5. El sistema avisa que el proceso fue exitoso

        Flujo alternativo 1: El sistema avisa proceso fallido, los datos son invalidos

### #5 **ASIGNAR SUELDO EMPLEADO**

Actor: Administrador / Precondiciones: EMPLEADO SELECCIONADO / Post condicion: PRECIO DEL HUEVO ASIGNADO

        Flujo principal:

        1. El administrador asigna un sueldo para el empleado
        2. El administrador guarda los cambios
        4. El sistema verifica el registro
        5. El sistema avisa que el proceso fue exitoso


### #6 **VER EMPLEADOS**

Actor: Administrador / Precondiciones: Ninguna / Post Condicion: VIENDO LISTADO EMPLEADOS

        Flujo principal:

        1. Administrador solicita visualizar empleados
        2. Sistema procesa la solicitud
        3. Sistema muestra todos los empleados registrados

        Flujo alternativo: Sistema avisa al usuario que ningun empleado esta registrado.

### #7 **BUSCAR EMPLEADOS**

Actor: Administrador / Precondiciones: Ninguna / Post Condicion: VIENDO LISTADO EMPLEADOS

        Flujo principal:

        1. Administrador pone un criterio de filtro
        2. Sistema filtra los usuarios
        3. Sistema muestra lista de usuarios filtrados

        Flujo alternativo: Sistema avisa al usuario que no hay empleados con ese criterio.

### #8 **SELECCIONAR EMPLEADO**

Actor: Administrador / Precondiciones: VER LISTADO DE EMPLEADOS / Post Condicion: EMPLEADO SELECCIONADO

        Flujo principal:

        1. Administrador selecciona un empleado


### #9 **REGISTRAR EMPLEADO**

Actor: Administrador / Precondiciones: Ninguna / Post Condicion: EMPLEADO REGISTRADO

        Flujo principal:

        1. Administrador escribe los datos del nuevo usuario
        2. Administrador confirma creacion de nuevo usuario
        3. Sistema procesa la solicitud
        4. Sistema avisa proceso exitoso

        Flujo alternativo: Sistema avisa al usuario que los datos ingresados son invalidos


### #10 **DESACTIVAR EMPLEADO**

Actor: Administrador / Precondiciones: EMPLEADO SELECCIONADO. EL EMPLEADO ESTA ACTIVADO / Post Condicion: EL EMPLEADO ESTA DESACTIVADO

        Flujo principal:

        1. Administrador desactiva empleado
        2. Administrador guarda cambios
        3. Sistema procesa la solicitud
        4. Sistema avisa proceso exitoso.

### #11 **ACTIVAR EMPLEADO**

Actor: Administrador / Precondiciones: EMPLEADO SELECCIONADO. EL EMPLEADO ESTA DESACTIVADO / Post Condicion: EL EMPLEADO ESTA ACTIVADO

        Flujo principal:

        1. Administrador activa empleado
        2. Administrador guarda cambios
        3. Sistema procesa la solicitud
        4. Sistema avisa proceso exitoso


### #12 **ELIMINAR EMPLEADO**

Actor: Administrador / Precondiciones: EMPLEADO SELECCIONADO / Post Condicion: EMPLEADO ELIMINADO

        Flujo principal:

        1. Administrador elimina al empleado
        2. Administrador confima los cambios
        3. Sistema procesa la solicitud
        4. Sistema avisa proceso exitoso


// Casos de uso de gastos (los metodos CRUD)


### #13 **VER TODOS LOS GASTOS**

Actor: Empleado / Precondiciones: Ninguna / Post condicion: VIENDO LISTA GASTOS

        Flujo principal:

        1. Empleado solicita ver los gastos
        2. Sistema procesa solicitud
        3. Sistema muestra lista de gastos

        Flujo alternativo: Sistema avisa que no hay gastos registrados.

### #14 **BUSCAR GASTOS POR CRITERIO**

Actor: Empleado / Precondiciones: Ninguna / Post condicion: VIENDO LISTA GASTOS

        Flujo principal:

        1. Empleado envia un criterio de filtracion
        2. Sistema filtra los gastos por el criterio
        3. Sistema muestra lista de gastos filtrados

        Flujo alternativo: Sistema avisa que no hay gastos filtrados por ese criterio.

### #15 **SELECCIONAR UN GASTO**

Actor: Empleado / Precondiciones: VIENDO LISTA GASTOS / Post condicion: GASTO SELECCIONADO

        Flujo principal:

        1. Empleado selecciona un gasto dentro de la lista de gastos

### #16 **REGISTRAR UN GASTO**

Actor: Empleado / Precondiciones: NINGUNA / Post condicion: GASTO REGISTRADO

        Flujo principal:
        1. El empleado completa los datos del gasto
        2. El empleado confirma el registro del gasto
        3. El sistema verifica el registro
        4. El sistema avisa que el proceso fue exitoso
        
        Flujo alternativo: El sistema avisa proceso fallido, los datos son  invalidos


### #17 **MODIFICAR UN GASTO**

Actor: Empleado / Precondiciones: GASTO SELECCIONADO / Post condicion: GASTO MODIFICADO

        Flujo principal:

        1. El empleado accede a la modificacion del gasto
        2. El empleado edita los datos del gasto
        3. El empleado confirma la edicion de los datos
        4. El sistema verifica los datos
        5. El sistema avisa que el proceso fue exitoso

        Flujo alternativo: El sistema avisa proceso fallido, los datos son invalidos

### #18 **ELIMINAR UN GASTO**

Actor: Empleado / Precondiciones: GASTO SELECCIONADO / Post condicion: GASTO ELIMINADO

        Flujo principal:

        1. El empleado elimina el gasto seleccionado
        2. El empleado confirma eliminacion del gasto
        3. El sistema avisa que el proceso fue exitoso


// Casos de uso de producciones (los metodos CRUD)


### #19 **VER TODAS LAS PRODUCCIONES**

Actor: Empleado / Precondiciones: Ninguna / Post condicion: VIENDO LISTA PRODUCCIONES

        Flujo principal:

        1. Empleado solicita ver las producciones
        2. Sistema procesa solicitud
        3. Sistema muestra lista de producciones

        Flujo alternativo: Sistema avisa que no hay producciones registradas.

### #20 **BUSCAR UNA PRODUCCION POR CRITERIO**

Actor: Empleado / Precondiciones: Ninguna / Post condicion: VIENDO LISTA PRODUCCIONES

        Flujo principal:

        1. Empleado envia un criterio de filtracion
        2. Sistema filtra las producciones por el criterio
        3. Sistema muestra lista de producciones filtradas

        Flujo alternativo: Sistema avisa que no hay producciones filtradas por ese criterio.

### #21 **SELECCIONAR UNA PRODUCCION**

Actor: Empleado / Precondiciones: VIENDO LISTA PRODUCCIONES / Post condicion: PRODUCCION SELECCIONADA

        Flujo principal:

        1. Empleado selecciona una produccion dentro de la lista de producciones

### #22 **REGISTRAR UNA PRODUCCION**

Actor: Empleado / Precondiciones: NINGUNA / Post condicion: PRODUCCION REGISTRADA

        Flujo principal:
        1. El empleado completa los datos de la produccion
        2. El empleado confirma el registro de la produccion
        3. El sistema verifica el registro
        4. El sistema avisa que el proceso fue exitoso

        Flujo alternativo: El sistema avisa proceso fallido, los datos son invalidos

### #23 **MODIFICAR UNA PRODUCCION**

Actor: Empleado / Precondiciones: PRODUCCION SELECCIONADA / Post condicion: PRODUCCION MODIFICADA

        Flujo principal:

        1. El empleado accede a la modificacion de la produccion
        2. El empleado edita los datos de la produccion
        3. El empleado confirma la edicion de los datos
        4. El sistema verifica los datos
        5. El sistema avisa que el proceso fue exitoso

        Flujo alternativo: El sistema avisa proceso fallido, los datos son invalidos

### #24 **ELIMINAR UNA PRODUCCION**

Actor: Empleado / Precondiciones: PRODUCCION SELECCIONADA / Post condicion: PRODUCCION ELIMINADA

        Flujo principal:

        1. El empleado elimina la produccion seleccionada
        2. El empleado confirma eliminacion de la produccion
        3. El sistema avisa que el proceso fue exitoso



// Casos de uso de ventas (los metodos CRUD)


### #25 **VER TODAS LAS VENTAS**

Actor: Empleado / Precondiciones: Ninguna / Post condicion: VIENDO LISTA VENTAS

        Flujo principal:

        1. Empleado solicita ver las ventas
        2. Sistema procesa solicitud
        3. Sistema muestra lista de ventas

        Flujo alternativo: Sistema avisa que no hay ventas registradas.

### #26 **BUSCAR VENTAS POR CRITERIO**

Actor: Empleado / Precondiciones: Ninguna / Post condicion: VIENDO LISTA VENTAS

        Flujo principal:

        1. Empleado envia un criterio de filtracion
        2. Sistema filtra las ventas por el criterio
        3. Sistema muestra lista de ventas filtradas

        Flujo alternativo: Sistema avisa que no hay ventas filtradas por ese criterio.

### #27 **SELECCIONAR UNA VENTA**

Actor: Empleado / Precondiciones: VIENDO LISTA VENTAS / Post condicion: VENTA SELECCIONADA

        Flujo principal:

        1. Empleado selecciona una venta dentro de la lista de ventas

### #28 **REGISTRAR UNA VENTA**

Actor: Empleado / Precondiciones: NINGUNA / Post condicion: VENTA REGISTRADA

        Flujo principal:
        1. El empleado completa los datos de la venta
        2. El empleado confirma el registro de la venta
        3. El sistema verifica el registro
        4. El sistema avisa que el proceso fue exitoso

        Flujo alternativo: El sistema avisa proceso fallido, los datos son invalidos

### #29 **MODIFICAR UNA VENTA**

Actor: Empleado / Precondiciones: VENTA SELECCIONADA / Post condicion: VENTA MODIFICADA

        Flujo principal:

        1. El empleado accede a la modificacion de la venta
        2. El empleado edita los datos de la venta
        3. El empleado confirma la edicion de los datos
        4. El sistema verifica los datos
        5. El sistema avisa que el proceso fue exitoso

        Flujo alternativo: El sistema avisa proceso fallido, los datos son invalidos

### #30 **ELIMINAR UNA VENTA**

Actor: Empleado / Precondiciones: VENTA SELECCIONADA / Post condicion: VENTA ELIMINADA

        Flujo principal:

        1. El empleado elimina la venta seleccionada
        2. El empleado confirma eliminacion de la venta
        3. El sistema avisa que el proceso fue exitoso

### #31 **VER INFORMES**

Actor: Empleado / Precondiciones: Ninguna / Post condicion: VIENDO LISTA INFORMES

        Flujo principal:

        1. Empleado solicita ver las los informes
        2. Sistema procesa solicitud
        3. Sistema muestra lista de informes

        Flujo alternativo: Sistema avisa que no hay ningun informe registrado.

### #32 **BUSCAR INFORMES POR CRITERIO**

Actor: Empleado / Precondiciones: Ninguna / Post condicion: VIENDO LISTA INFORMES

        Flujo principal:

        1. El empleado envia un criterio de filtracion
        2. El sistema filtra los informes por el criterio
        3. El sistema muestra lista de informes filtrados

        Flujo alternativo: Sistema avisa que no hay informes filtradas por ese criterio.

### #33 **SELECCIONAR INFORME**

Actor: Empleado / Precondiciones: VIENDO LISTA INFORMES / Post condicion: INFORME SELECCIONADO

        Flujo principal:

        1. El empleado selecciona un informe dentro de la lista de informes

### #34 **VER INFORME EN PDF**

Actor: Empleado / Precondiciones: INFORME SELECCIONADO / Post condicion: VIENDO INFORME EN PDF

        Flujo principal:
        
        1. El empleado solicita ver el informe en PDF
        2. El sistema muestra el informe en PDF

### #35 **CREAR INFORME**

Actor: Empleado / Precondiciones: NINGUNA / Post condicion: INFORME CREADO

        Flujo principal:
        1. El empleado completa los datos de creacion de informe
        2. El empleado confirma la creacion de informe
        3. El sistema verifica datos de la creacion
        4. El sistema avisa que el proceso fue exitoso

        Flujo alternativo: El sistema avisa proceso fallido, los datos son invalidos

### #36 **ELIMINAR INFORME**

Actor: Empleado / Precondiciones: INFORME SELECCIONADO / Post condicion: INFORME ELIMINADO

        Flujo principal:

        1. El empleado elimina el informe seleccionado
        2. El empleado confirma eliminacion del informe
        3. El sistema avisa que el proceso fue exitoso
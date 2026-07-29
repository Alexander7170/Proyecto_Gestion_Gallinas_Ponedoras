
# Casos de uso

#### A tener en cuenta
- *Se da por sentado que en la precondicion de todos los casos de uso, el sistema este levantado.*

- *Se da por sentado que en la precondicion de todos los casos de uso, a menos que se diga lo contrario, el usuario este logueado*

- *Se da por sentado que en los flujos alternativos, existira uno que avise al usuario, un mensaje de error, en caso de que ocurra un fallo interno o un error en la infrestructura del codigo*

- *Se da por sentado que si el flujo principal es muy basico entonces no se lo mostrara*

##
### *Relacionados con el logueo*

#### INICIAR SESION

Actor: Usuario / Precondiciones: USUARIO NO LOGUEADO / Post condicion: USUARIO LOGUEADO

        Flujo principal:

        1. El usuario no logueado envia sus datos de inicio sesion
        2. Sistema verifica si el usuario esta registrado
        3. Sistema permite al usuario ingresar

        Flujo alternativo 1: Sistema avisa al usuario que no tiene permitido entrar al sistema

        Flujo alternativo 2: Sistema avisa al usuario que los datos son invalidos

#### CERRAR SESION

Actor: Usuario / Precondiciones: USUARIO LOGUEADO / Post condicion: USUARIO NO LOGUEADO

        Flujo principal:

        1. El usuario solicita cerrar su sesion
        2. El sistema cierra la sesion del usuario

#### MODIFICAR DATOS LOGUEO

Actor: Usuario / Precondiciones: Ninguna / Post condicion: USUARIO MODIFICADO

        Flujo principal:

        1. El usuario modifica sus propios datos
        2. El usuario guarda y envia los cambios
        3. Sistema verifica los datos
        4. Sistema avisa que sus datos fueron modificados exitosamente

        Flujo alternativo 1: Sistema avisa al usuario que ya existe un usuario con esos mismos datos.

        Flujo alternativo 2: Sistema avisa que los datos son invalidos 

##
### *Relacionados con gestion empleados*

#### SELECCIONAR USUARIO

Actor: Dueño / Precondiciones: VER LISTADO DE USUARIOS / Post Condicion: USUARIO SELECCIONADO

#### CREAR USUARIO

Actor: Dueño / Precondiciones: Ninguna / Post Condicion: USUARIO REGISTRADO

        Flujo principal:
        1. El empleado completa el formulario de creacion de informe
        2. El empleado envia el formulario
        3. El sistema verifica el formulario
        4. El sistema avisa que el proceso fue exitoso

        Flujo alternativo: Sistema avisa al usuario que los datos ingresados son invalidos

#### CAMBIAR ACTIVIDAD

Actor: Dueño / Precondiciones: USUARIO SELECCIONADO / Post Condicion: USUARIO CON ACTIVIDAD CAMBIADA

        Flujo principal:

        1. Dueño selecciona una opcion
        2. Dueño guarda cambios
        3. Sistema procesa la solicitud
        4. Sistema avisa proceso exitoso.

#### ELIMINAR USUARIO

Actor: Dueño / Precondiciones: USUARIO SELECCIONADO / Post Condicion: USUARIO ELIMINADO

#### ASIGNAR SUELDO EMPLEADO

Actor: Dueño / Precondiciones: USUARIO SELECCIONADO / Post condicion: SUELDO ASIGNADO

        Flujo principal:

        1. El Dueño asigna un sueldo para el empleado
        2. El Dueño guarda los cambios
        4. El sistema verifica el registro
        5. El sistema avisa que el proceso fue exitoso

        flujo alternativo: No es un emplado. Sistema avisa lo sucedido

#### LISTAR USUARIOS

Actor: Dueño / Precondiciones: Ninguna / Post Condicion: VIENDO LISTADO USUARIOS

        Flujo principal:

        1. Dueño solicita listar a los usuarios
        2. Sistema lista y muestra todos los usuarios

        Flujo alternativo: Ningun usuario esta registrado. Sistema avisa lo sucedido

#### FILTRAR EMPLEADOS POR ID

Actor: Dueño / Precondiciones: Ninguna / Post Condicion: VIENDO LISTADO USUARIOS

        Flujo principal:
        1. Empleado envia un ID
        2. Sistema verifica el dato enviado
        3. Sistema filtra por el dato enviado
        4. Sistema muestra la lista filtrada

        Flujo alternativo: No hay ventas que coincidan con ese filtro. Sistema avisa lo sucedido.

#### FILTRAR EMPLEADOS POR DNI

Actor: Dueño / Precondiciones: Ninguna / Post Condicion: VIENDO LISTADO USUARIOS

        Flujo principal:
        1. Empleado envia un DNI
        2. Sistema verifica el dato enviado
        3. Sistema filtra por el dato enviado
        4. Sistema muestra la lista filtrada

        Flujo alternativo: No hay ventas que coincidan con ese filtro. Sistema avisa lo sucedido.

#### FILTRAR EMPLEADOS POR NOMBRE

Actor: Dueño / Precondiciones: Ninguna / Post Condicion: VIENDO LISTADO USUARIOS

        Flujo Principal:
        1. Empleado envia un Nombre
        2. Sistema verifica el dato enviado
        3. Sistema filtra por el dato enviado
        4. Sistema muestra la lista filtrada

        Flujo alternativo: No hay ventas que coincidan con ese filtro. Sistema avisa lo sucedido

##
### *Relacionados con gestion gastos*

#### SELECCIONAR UN GASTO

Actor: Empleado / Precondiciones: VIENDO LISTA GASTOS / Post condicion: GASTO SELECCIONADO

#### CREAR UN GASTO

Actor: Empleado / Precondiciones: NINGUNA / Post condicion: GASTO REGISTRADO

        Flujo principal:
        1. El empleado completa el formulario de creacion de gasto
        2. El empleado envia el formulario
        3. El sistema verifica el formulario
        4. El sistema avisa que el proceso fue exitoso
        
        Flujo alternativo: El sistema avisa proceso fallido, los datos son invalidos

#### MODIFICAR UN GASTO

Actor: Empleado / Precondiciones: GASTO SELECCIONADO / Post condicion: GASTO MODIFICADO

        Flujo principal:
        1. El empleado edita los datos de un gasto
        2. El empleado confirma la edicion de los datos
        3. El sistema verifica los datos
        4. El sistema avisa que el proceso fue exitoso

        Flujo alternativo: Los datos son invalidos. El sistema avisa lo sucedido.

#### ELIMINAR UN GASTO

Actor: Empleado / Precondiciones: GASTO SELECCIONADO / Post condicion: GASTO ELIMINADO

#### VER TODOS LOS GASTOS

Actor: Empleado / Precondiciones: Ninguna / Post condicion: VIENDO LISTA GASTOS

        Flujo principal:

        1. Empleado solicita ver los gastos
        2. Sistema procesa solicitud
        3. Sistema muestra lista de gastos

        Flujo alternativo: Sistema avisa que no hay gastos registrados.


#### FILTRAR GASTOS POR ID

Actor: Empleado / Precondiciones: Ninguna / Post condicion: VIENDO UN GASTO

        Flujo principal:
        1. Empleado envia un ID
        2. Sistema verifica el dato enviado
        3. Sistema filtra por el dato enviado
        4. Sistema muestra la lista filtrada

        Flujo alternativo: No hay ventas que coincidan con ese filtro. Sistema avisa lo sucedido.

#### FILTRAR GASTOS POR FECHA

Actor: Empleado / Precondiciones: Ninguna / Post condicion: VIENDO LISTA GASTO
        
        Flujo principal:
        1. Empleado envia una fecha
        2. Sistema verifica el dato enviado
        3. Sistema filtra por el dato enviado
        4. Sistema muestra la lista filtrada

        Flujo alternativo: No hay ventas que coincidan con ese filtro. Sistema avisa lo sucedido.


#### FILTRAR GASTOS POR RANGO DE FECHAS

Actor: Empleado / Precondiciones: Ninguna / Post condicion: VIENDO LISTA GASTOS
        
        Flujo principal:
        1. Empleado envia un rango de fechas
        2. Sistema verifica el dato enviado
        3. Sistema filtra por el dato enviado
        4. Sistema muestra la lista filtrada

        Flujo alternativo: No hay ventas que coincidan con ese filtro. Sistema avisa lo sucedido.

##
### *Relacionados con las producciones*

#### LISTAR PRODUCCIONES

Actor: Empleado / Precondiciones: Ninguna / Post condicion: VIENDO LISTA PRODUCCIONES

        Flujo principal:

        1. Empleado solicita ver las producciones
        2. Sistema procesa solicitud
        3. Sistema muestra lista de producciones

        Flujo alternativo: Sistema avisa que no hay producciones registradas.

#### SELECCIONAR UNA PRODUCCION

Actor: Empleado / Precondiciones: VIENDO LISTA PRODUCCIONES / Post condicion: PRODUCCION SELECCIONADA

        Flujo principal:

        1. Empleado selecciona una produccion dentro de la lista de producciones

#### CREAR UNA PRODUCCION

Actor: Empleado / Precondiciones: NINGUNA / Post condicion: PRODUCCION REGISTRADA

        Flujo principal:
        1. El empleado completa el formulario de creacion de produccion
        2. El empleado envia el formulario
        3. El sistema verifica el formulario
        4. El sistema avisa que el proceso fue exitoso

        Flujo alternativo: El sistema avisa proceso fallido, los datos son invalidos

#### MODIFICAR UNA PRODUCCION

Actor: Empleado / Precondiciones: PRODUCCION SELECCIONADA / Post condicion: PRODUCCION MODIFICADA

        Flujo principal:
        1. El empleado edita los datos de la produccion
        2. El empleado confirma la edicion de los datos
        3. El sistema verifica los datos
        4. El sistema avisa que el proceso fue exitoso

        Flujo alternativo: Los datos son invalidos. El sistema avisa lo sucedido.
#### ELIMINAR UNA PRODUCCION

Actor: Empleado / Precondiciones: PRODUCCION SELECCIONADA / Post condicion: PRODUCCION ELIMINADA

        Flujo principal:

        1. El empleado elimina la produccion seleccionada
        2. El empleado confirma eliminacion de la produccion
        3. El sistema avisa que el proceso fue exitoso

#### FILTRAR PRODUCCIONES POR RANGO DE FECHAS

Actor: Empleado / Precondiciones: Ninguna / Post condicion: VIENDO LISTA PRODUCCIONES

        Flujo principal:
        1. Empleado envia un rango de fechas
        2. Sistema verifica el dato enviado
        3. Sistema filtra por el dato enviado
        4. Sistema muestra la lista filtrada

        Flujo alternativo: No hay ventas que coincidan con ese filtro. Sistema avisa lo sucedido.

#### FILTRAR PRODUCCIONES POR ID

Actor: Empleado / Precondiciones: Ninguna / Post condicion: VIENDO LISTA PRODUCCIONES

        Flujo principal:
        1. Empleado envia un ID
        2. Sistema verifica el dato enviado
        3. Sistema filtra por el dato enviado
        4. Sistema muestra la lista filtrada

        Flujo alternativo: No hay ventas que coincidan con ese filtro. Sistema avisa lo sucedido.

#### FILTRAR PRODUCCIONES POR FECHA

Actor: Empleado / Precondiciones: Ninguna / Post condicion: VIENDO LISTA PRODUCCIONES

        Flujo principal:
        1. Empleado envia una fecha
        2. Sistema verifica el dato enviado
        3. Sistema filtra por el dato enviado
        4. Sistema muestra la lista filtrada

        Flujo alternativo: No hay ventas que coincidan con ese filtro. Sistema avisa lo sucedido.


##
### *Relacionados con las ventas*

#### SELECCIONAR UNA VENTA

Actor: Empleado / Precondiciones: VIENDO LISTA VENTAS / Post condicion: VENTA SELECCIONADA

#### CREAR UNA VENTA

Actor: Empleado / Precondiciones: NINGUNA / Post condicion: VENTA REGISTRADA

        Flujo principal:
        1. El empleado completa el formulario de creacion de venta
        2. El empleado envia el formulario
        3. El sistema verifica el formulario
        4. El sistema avisa que el proceso fue exitoso

        Flujo alternativo: El sistema avisa proceso fallido, los datos son invalidos

#### MODIFICAR UNA VENTA

Actor: Empleado / Precondiciones: VENTA SELECCIONADA / Post condicion: VENTA MODIFICADA

        Flujo principal:
        1. El empleado edita los datos de una venta
        2. El empleado confirma la edicion de los datos
        3. El sistema verifica los datos
        4. El sistema avisa que el proceso fue exitoso

        Flujo alternativo: Los datos son invalidos. El sistema avisa lo sucedido.

#### ELIMINAR UNA VENTA

Actor: Empleado / Precondiciones: VENTA SELECCIONADA / Post condicion: VENTA ELIMINADA

#### LISTAR VENTAS

Actor: Empleado / Precondiciones: Ninguna / Post condicion: VIENDO LISTA VENTAS

        Flujo principal:
        1. Empleado solicita ver las ventas
        2. Sistema muestra lista de ventas

        Flujo alternativo: Sistema avisa que no hay ventas registradas.

#### FILTRAR VENTAS POR ID

Actor: Empleado / Precondiciones: Ninguna / Post condicion: VIENDO LISTA VENTAS

        Flujo principal:
        1. Empleado envia un ID
        2. Sistema verifica el dato enviado
        3. Sistema filtra por el dato enviado
        4. Sistema muestra la lista filtrada

        Flujo alternativo: No hay ventas que coincidan con ese filtro. Sistema avisa lo sucedido.
#### FILTRAR VENTAS POR FECHA

Actor: Empleado / Precondiciones: Ninguna / Post condicion: VIENDO LISTA VENTAS

        Flujo principal:
        1. Empleado envia una fecha
        2. Sistema verifica el dato enviado
        3. Sistema filtra por el dato enviado
        4. Sistema muestra la lista filtrada

        Flujo alternativo: No hay ventas que coincidan con ese filtro. Sistema avisa lo sucedido.

#### FILTRAR VENTAS POR RANGO DE FECHAS

Actor: Empleado / Precondiciones: Ninguna / Post condicion: VIENDO LISTA VENTAS

        Flujo principal:
        1. Empleado envia un rango de fechas
        2. Sistema verifica el dato enviado
        3. Sistema filtra por el dato enviado
        4. Sistema muestra la lista filtrada

        Flujo alternativo: No hay ventas que coincidan con ese filtro. Sistema avisa lo sucedido.

#### ASIGNAR PRECIO DEL HUEVO

Actor: Dueño / Precondiciones: Ninguna / Post condicion: PRECIO DEL HUEVO ASIGNADO

        Flujo principal:

        1. Dueño solicita asignarle precio al huevo
        2. Dueño guarda los cambios
        4. El sistema verifica la solicitud
        5. El sistema avisa que el proceso fue exitoso

        Flujo alternativo 1: El sistema avisa proceso fallido, los datos son invalidos

##
### *Relacionados con los informes*

#### SELECCIONAR INFORME

Actor: Dueño / Precondiciones: VIENDO LISTA INFORMES / Post condicion: INFORME SELECCIONADO

#### CREAR INFORME

Actor: Dueño / Precondiciones: NINGUNA / Post condicion: INFORME CREADO

        Flujo principal:
        1. El dueño completa el formulario de creacion informe
        2. El dueño envia el formulario
        3. El sistema verifica el formulario
        4. El sistema avisa que el proceso fue exitoso

        Flujo alternativo: El sistema avisa proceso fallido, los datos son invalidos

#### ELIMINAR INFORME

Actor: Dueño / Precondiciones: INFORME SELECCIONADO / Post condicion: INFORME ELIMINADO

#### LISTAR INFORMES

Actor: Dueño / Precondiciones: Ninguna / Post condicion: VIENDO LISTA INFORMES

        Flujo principal:
        1. Empleado solicita ver las los informes
        3. Sistema muestra lista de informes

        Flujo alternativo: Sistema avisa que no hay ningun informe registrado.

#### FILTRAR INFORMES POR ID

Actor: Dueño / Precondiciones: Ninguna / Post condicion: VIENDO LISTA INFORMES

        Flujo principal:
        1. Dueño envia un ID
        2. Sistema verifica el dato enviado
        3. Sistema filtra por el dato enviado
        4. Sistema muestra la lista filtrada

        Flujo alternativo: No hay ventas que coincidan con ese filtro. Sistema avisa lo sucedido.

#### FILTRAR INFORMES POR SU RANGO DE FECHAS

Actor: Dueño / Precondiciones: Ninguna / Post condicion: VIENDO LISTA INFORMES
        Flujo principal:
        1. Dueño envia un rango de fechas
        2. Sistema verifica el dato enviado
        3. Sistema filtra por el dato enviado
        4. Sistema muestra la lista filtrada

        Flujo alternativo: No hay ventas que coincidan con ese filtro. Sistema avisa lo sucedido.
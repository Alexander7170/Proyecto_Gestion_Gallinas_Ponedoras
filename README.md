# Gallinas Felices
## Que es
Es un Software de gestion empresarial sobre los requerimientos de la empresa "Gallinas Felices" pero que basicamente permite gestionar entidades como las ventas, gastos y producciones de la empresa. Para que luego estos movimientos de la empresa sean mostrados detalladamente en un informe 

## Objetivo

El objetivo de este proyecto es usar lo aprendido en la facultad. Practicar todo lo aprendido, como el analisis del software antes del desarrollo, sacar los requerimientos funcionales, generar diagramas de clases, de casos de uso y el modelado de datos. Aprender a usar las herramientas que nos da github, como las issues, los milestones y un project con metodologia kanban. 

## Explicación del caso ficticio para Definir alcance.
Gallinas Felices es una empresa pequeña dedicada a la produccion y venta de huevos. Tiene un galpon de gallinas ponedoras la cual la gestionan empleados encabezado por el dueño del galpon, osea, el dueño de la empresa. Esta empresa quiere un software, para los empleados y el dueño,
donde puedan mantener organizada sus ventas de huevos realizada por dia, las producciones diarias de huevos, y los gastos en servicios, comida de gallina y sueldo de los empleados. Quiere poder realizar un analisis para verificar si su empresa va en declive o no, su sus gastos son demasiados que no cubren con las ventas, si las ventas aumentaron en un periodo o si estan bajando y la produccion sube.

Mi software resuelve esto generando un informe por un rango de fechas, detallando datos de ventas, producciones y gastos que se registro o se concluyo en ese parametro de fechas. Ademas de que cada empleado, previamente registrado por un administrador, va a poder usar el sistema con ciertas limitaciones, podran gestionar los datos importantes para la generacion de un informe.

## Alcance MVP
    
### Funcionalidades incluidas 

- Se podra generar, ver y eliminar diferentes informes: informes de gastos, informes de ventas, informes de produccion o informe general.

- Se podra eliminar, crear, registrar y actualizar ventas, gastos y producciones y el valor de de venta de un huevo.

- Se podra filtrar las ventas, gastos, producciones y valores de venta de un huevo por fecha o fechas 

- Se podra agregar usuarios nuevos, eliminarlos y modificar su sueldo y bloquearlo o no del software

- Se podra filtrar usuarios por su nombre o dni.

- Los usuarios podran modificar sus propios datos personales. 

- Los usuarios podran iniciar sesion o cerrarla

### Funcionalidades no incluidas
- Estimar rendimiento a futuro o predecir informes

- Asignar roles o permisos a usuarios registrados.

- Reflejar el gasto en un informe cuando no se a concluido el pago del gasto.

- Registrar promociones o descuentos contemplados en ventas.

- Registrar rendimiento de empleados de empresa.

- La entidad stock, que aumenta con los registros de produccion y disminuye con los registros de ventas

- Permitir registrar un usuario de tipo dueño

- Implementar un historial de modificacion de valores de venta de huevos

- Filtrar gastos o ventas por un precio

- permitir registrar un nuevo tipo de gasto

- Reestringir la modificacion de datos muy antiguos
# Explicación del caso ficticio para la generación del software.
### La empresa Gallinas Felices es productora de huevos, tiene un galpon de gallinas ponedoras y lo manejan empleados encabezado por un jefe. Esta empresa quiere un software, para los empleados y el jefe, de gestion empresarial. Es decir, registrar los gastos, las ventas y la produccion de huevos con el fin de generar un informe detallado y claro que muestre el ingreso bruto de la empresa.
# Alcance MVP

## Funcionalidades incluidas
- ### Se podra generar informes generales de la empresa por mes o por semana. 
- ### Se podra generar diferentes informes: informes de gastos, informes de ventas, informes de produccion.
- ### Se podra registrar la produccion por dia (huevos recolectados)
- ### Se podra registrar el valor del huevo en pesos argentinos
- ### Se podra registrar las ventas totales de huevos por dia. 
- ### Se podra registrar gastos, por un rango o por una fecha en esepecifico, que el usuario considere como el sueldo de empleados, alquiler del terreno(Si tiene) alimento para gallinas, servicios de luz, agua etc.
- ### Se podra agregar usuarios o eliminar usuarios al software

## Funcionalidades no incluidas
- ### Estimar rendimiento a futuro o predecir informes
- ### Asignar roles o permisos a usuarios registrados.
- ### Reflejar el gasto en un informe cuando no se a concluido el pago del gasto.
- ### Visualizar graficos comparativos de datos e informes
- ### Registrar promociones o descuentos contemplados en ventas
- ### Registrar rendimiento de empleados de empresa

# Historias de usuario
### #1 Como administrador quiero registrar un empleado para que gestione el software.
### #2 Como administrador quiero eliminar un empleado registrado para que ya no use permanentemente el software.
### #3 Como administrador quiero desactivar un empleado registrado para que no use momentaneamente el software.

### #4 Como administrador quiero registrar el precio del huevo para que sea reflejado en los informes de ventas.
### #5 Como administrador quiero modificar el precio del huevo para ajustarlo a cambios en el mercado

### #6 Como administrador quiero registrar el sueldo de un empleado para que sea contemplado en el informe de gastos.
### #7 Como administrador quiero modificar el sueldo de un empleado para ajustarlo a aumentos o ascensos.

### #8 Como empleado quiero registrar un tipo de gasto por una fecha para que sea contemplado en el informe de gastos.
### #9 Como empleado quiero modificar un tipo de gasto por una fecha para no falsear el informe de gastos.
### #10 Como empleado quiero eliminar un tipo de gasto de una fecha para que no sea contemplado en el informe de gastos.

### #11 Como empleado quiero registrar la producción de huevos por una fecha para que sea reflejado en el informe de producción.
### #12 Como empleado quiero modificar la producción de huevos por una fecha para no falsear el informe de producción.
### #13 Como empleado quiero eliminar la producción de huevos de una fecha para que no sea reflejado en el informe de producción.

### #14 Como empleado quiero registrar las ventas de huevos por una fecha para que sea reflejado en el informe de ventas
### #15 Como empleado quiero modificar las ventas de huevos por una fecha para que sea reflejado en el informe de ventas
### #16 Como empleado quiero eliminar las ventas de huevos de una fecha para que no sea reflejado en el informe de ventas

### #17 Como usuario registrado quiero modificar mis datos de inicio sesion para personalizarlo a mi gusto

### #18 Como empleado quiero generar un tipo de informe por un periodo para visualizar el avance de la empresa
### #19 Como empleado quiero ver el informe en pdf para poder descargarlo e imprimirlo
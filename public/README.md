# Burger Queen

## Preámbulo

Nos acaban de enviar un correo con una solicitud para un nuevo proyecto. Hay un
restaurante que nos ha contactado porque quieren que alguien les construya una
interfaz donde puedan tomar pedidos usando una tablet.

![burger-queen](https://user-images.githubusercontent.com/110297/42118136-996b4a52-7bc6-11e8-8a03-ada078754715.jpg)

Como punto de partida,
nos comparten el siguiente correo recibido del cliente:

> Somos **Burguer Queen**, una cadena de comida rápida 24hrs.
>
> Nuestra propuesta de servicio 24hrs ha tenido muy buena acogida, y para
> expandirnos necesitamos un sistema que nos ayude a tomar los pedidos de los
> clientes.
>
> Tenemos 2 menús: uno para el desayuno, que es bien sencillo:
>
> | Item                      |Precio|
> |---------------------------|------|
> | Cafe americano            |    5 |
> | Cafe con leche            |    7 |
> | Sandwich de jamón y queso |   10 |
> | Jugo natural              |    7 |
>
> Y un menú para el resto del dia:
>
> <table width="100%">
>   <tbody>
>     <tr>
>       <td colspan="2" rowspan="1">Hamburguesas</td>
>       <td>Acompañamientos (S/.5)</td>
>       <td colspan="3" rowspan="1">Bebidas</td>
>     </tr>
>     <tr>
>       <td>Simple</td>
>       <td>10</td>
>       <td>Papas fritas</td>
>       <td></td>
>       <td>500ml</td>
>       <td>750ml</td>
>     </tr>
>     <tr>
>       <td>Doble</td>
>       <td>15</td>
>       <td>Onion Rings</td>
>       <td>Agua</td>
>       <td>5</td>
>       <td>8</td>
>     </tr>
>     <tr>
>       <td></td>
>       <td></td>
>       <td></td>
>       <td>Gaseosa</td>
>       <td>7</td>
>       <td>10</td>
>     </tr>
>   </tbody>
> </table>
>
> Los clientes pueden escoger entre hamburguesas de res, de pollo, o vegetariana.
> **Y por S/. 1 pueden agregarle queso o huevo.**
>
> Nuestros clientes son bastante indecisos, por lo que es muy común que cambien el
> pedido varias veces antes de finalizarlo.

## Introducción

Partiendo de los requerimientos de negocio detallados en el correo del cliente,
nos piden construir **una interfaz que permita a lxs cajerxs tomar los pedidos
en una tablet, y desde ahí se puedan enviar a cocina** a través de un backend del
que nos darán detalles más adelante.

El primer paso de este proyecto debe ser convertir el menú descrito por el
cliente en una estructura que podamos poner en un archivo JSON para después
_pintar_ en la pantalla.

Nuestra interfaz debe mostrar los dos menús (desayuno y resto del día), cada uno
con todos sus _productos_. El usuario debe poder ir eligiendo que _productos_
agregar y la interfaz debe ir mostrando el _resumen del pedido_ con el total.

![out](https://user-images.githubusercontent.com/110297/45984241-b8b51c00-c025-11e8-8fa4-a390016bee9d.gif)


### Definición del producto

El diseño esta pensado para tablets, por lo cual utilicé una disposicion de elementos para esta medida.

En estos wireframes he contemplado la idea de manejar cuentas de usuarios para la gente que brinde la atención y para que los administradores tengan acceso a reportes de ordenes.

Por el momento se puede apreciar que tienen 2 funciones disponibles: generar orden y ver un reporte de las ordenes con su detalle.

![burger-queen](https://github.com/vmirella/lim-2018-01-burger-queen/blob/gh-pages/Images/images/vista1.jpg)
![burger-queen](https://github.com/vmirella/lim-2018-01-burger-queen/blob/gh-pages/Images/images/vista2.jpg)
![burger-queen](https://github.com/vmirella/lim-2018-01-burger-queen/blob/gh-pages/Images/images/vista3.jpg)
![burger-queen](https://github.com/vmirella/lim-2018-01-burger-queen/blob/gh-pages/Images/images/vista4.jpg)
![burger-queen](https://github.com/vmirella/lim-2018-01-burger-queen/blob/gh-pages/Images/images/vista5.jpg)

### Instalación

Para instalarlo bastará con abrir el siguiente link:
[Burger Queen](https://vmirella.github.io/lim-2018-01-burger-queen/)

Si se accesa desde una tablet o celular se mostrará un mensaje en la parte inferior de la pantalla, el cual nos dirá si lo queremos instalar como app en nuestro dispositivo. Al confirmar se instalará inmediatamente.

![burger-queen](https://github.com/vmirella/lim-2018-01-burger-queen/blob/gh-pages/Images/images/vista6.jpg)

#### Hito 1: Tomar pedidos

* Ingresar nombre del cliente.
* Filtrar _menú_ por _desayuno_ y _resto del día_.
* Agregar ítem al pedido.
* Eliminar ítem del pedido.
* Mostrar _resumen_ de pedido con todos los items y el total.
* Enviar a cocina (esto debe guardar el pedido).



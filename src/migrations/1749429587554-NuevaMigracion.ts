import { MigrationInterface, QueryRunner } from "typeorm";

export class NuevaMigracion1749429587554 implements MigrationInterface {
    name = 'NuevaMigracion1749429587554'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`pago\` (\`PagoID\` int NOT NULL AUTO_INCREMENT, \`MetodoPago\` varchar(45) NULL, PRIMARY KEY (\`PagoID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`factura\` (\`FacturaID\` int NOT NULL AUTO_INCREMENT, \`FechaFactura\` date NULL, \`Total\` decimal(10,0) NULL, \`Pedido_PedidoID\` int NOT NULL, \`Pago_PagoID\` int NOT NULL, INDEX \`fk_Factura_Pedido1_idx\` (\`Pedido_PedidoID\`), INDEX \`fk_Factura_Pago1_idx\` (\`Pago_PagoID\`), PRIMARY KEY (\`FacturaID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`roles\` (\`RolID\` int NOT NULL AUTO_INCREMENT, \`Nombre_rol\` varchar(45) NULL, PRIMARY KEY (\`RolID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`usuarios\` (\`usuarioID\` int NOT NULL AUTO_INCREMENT, \`NombreCompleto\` varchar(45) NULL, \`CI\` int NULL, \`email\` varchar(45) NULL, \`Fecha_nacimiento\` date NULL, \`Genero\` tinyint NULL, \`Porcentaje_Satisfaccion\` tinyint NULL, \`Roles_RolID\` int NOT NULL, INDEX \`fk_Usuarios_Roles1_idx\` (\`Roles_RolID\`), PRIMARY KEY (\`usuarioID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`empleado\` (\`EmpleadoID\` int NOT NULL AUTO_INCREMENT, \`Emp_NombreCompleto\` varchar(45) NULL, \`Emp_CI\` int NULL, \`Emp_email\` varchar(45) NULL, \`Emp_Fecha_nacimiento\` date NULL, \`Emp_Genero\` tinyint NULL, PRIMARY KEY (\`EmpleadoID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`pedido\` (\`PedidoID\` int NOT NULL AUTO_INCREMENT, \`FechaPedido\` date NULL, \`Estado\` tinyint NULL, \`Clientes_ClienteID\` int NOT NULL, \`Empleado_EmpleadoID\` int NOT NULL, INDEX \`fk_Pedido_Empleado1_idx\` (\`Empleado_EmpleadoID\`), INDEX \`fk_Pedido_Clientes_idx\` (\`Clientes_ClienteID\`), PRIMARY KEY (\`PedidoID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`linea_pedido\` (\`LineaID\` int NOT NULL AUTO_INCREMENT, \`Cantidad\` int NULL, \`Pedido_PedidoID\` int NOT NULL, \`Productos_ProductoID\` int NOT NULL, INDEX \`fk_Linea_pedido_Productos1_idx\` (\`Productos_ProductoID\`), INDEX \`fk_Linea_pedido_Pedido1_idx\` (\`Pedido_PedidoID\`), PRIMARY KEY (\`LineaID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`categoria_producto\` (\`CategoriaID\` int NOT NULL AUTO_INCREMENT, \`Nombre_Categoria\` varchar(45) NULL, \`Precio_unidad\` decimal(10,0) NULL, \`FechaLanzamiento\` date NULL, PRIMARY KEY (\`CategoriaID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`productos\` (\`ProductoID\` int NOT NULL AUTO_INCREMENT, \`Nombre_producto\` varchar(50) NULL, \`Precio_unidad_venta\` decimal(10,0) NULL, \`FechaLanzamiento\` date NULL, \`Categoria_Producto_CategoriaID\` int NOT NULL, \`Precio_unidad_costo\` decimal(10,0) NULL, INDEX \`fk_Productos_Categoria_Producto1_idx\` (\`Categoria_Producto_CategoriaID\`), PRIMARY KEY (\`ProductoID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`inventario\` (\`InventarioID\` int NOT NULL AUTO_INCREMENT, \`Cantidad_stock\` int NULL, \`Lote_LoteID\` int NOT NULL, \`Productos_ProductoID\` int NOT NULL, INDEX \`fk_Inventario_Productos1_idx\` (\`Productos_ProductoID\`), INDEX \`fk_Inventario_Lote1_idx\` (\`Lote_LoteID\`), PRIMARY KEY (\`InventarioID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`lote\` (\`LoteID\` int NOT NULL AUTO_INCREMENT, \`FechaProduccion\` date NULL, \`FechaVencimiento\` date NULL, \`CantidadProducida\` int NULL, \`Defectos\` int NULL, \`costo_produccion\` decimal(10,0) NULL, \`Proveedor_ProveedorID\` int NOT NULL, INDEX \`fk_Lote_Proveedor1_idx\` (\`Proveedor_ProveedorID\`), PRIMARY KEY (\`LoteID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`proveedor\` (\`ProveedorID\` int NOT NULL AUTO_INCREMENT, \`NombreProveedor\` varchar(45) NULL, \`Email\` varchar(45) NULL, PRIMARY KEY (\`ProveedorID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`factura\` ADD CONSTRAINT \`FK_d609aeea85d4dd4b3183c0085bc\` FOREIGN KEY (\`Pago_PagoID\`) REFERENCES \`pago\`(\`PagoID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`factura\` ADD CONSTRAINT \`FK_4fd9b82ae5d4f0709fc0accf240\` FOREIGN KEY (\`Pedido_PedidoID\`) REFERENCES \`pedido\`(\`PedidoID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`usuarios\` ADD CONSTRAINT \`FK_0465e0e01c2fc4376bfde31b228\` FOREIGN KEY (\`Roles_RolID\`) REFERENCES \`roles\`(\`RolID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pedido\` ADD CONSTRAINT \`FK_a9d3207fc0d827b6d397eb51bed\` FOREIGN KEY (\`Clientes_ClienteID\`) REFERENCES \`usuarios\`(\`usuarioID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pedido\` ADD CONSTRAINT \`FK_f8f1b629dec9509bf1ed6dd4d24\` FOREIGN KEY (\`Empleado_EmpleadoID\`) REFERENCES \`empleado\`(\`EmpleadoID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`linea_pedido\` ADD CONSTRAINT \`FK_7e407c1d99741d6b4645ad3c0b6\` FOREIGN KEY (\`Pedido_PedidoID\`) REFERENCES \`pedido\`(\`PedidoID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`linea_pedido\` ADD CONSTRAINT \`FK_42d264b5faef2476a1e86b45e6a\` FOREIGN KEY (\`Productos_ProductoID\`) REFERENCES \`productos\`(\`ProductoID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`productos\` ADD CONSTRAINT \`FK_6508923541571202a44528a89fb\` FOREIGN KEY (\`Categoria_Producto_CategoriaID\`) REFERENCES \`categoria_producto\`(\`CategoriaID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`inventario\` ADD CONSTRAINT \`FK_afa88801f4e31151b7b30a59b0b\` FOREIGN KEY (\`Lote_LoteID\`) REFERENCES \`lote\`(\`LoteID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`inventario\` ADD CONSTRAINT \`FK_0c241e18c57901d71541db12b16\` FOREIGN KEY (\`Productos_ProductoID\`) REFERENCES \`productos\`(\`ProductoID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`lote\` ADD CONSTRAINT \`FK_b84f09b1e16e06bd6e3505a43d7\` FOREIGN KEY (\`Proveedor_ProveedorID\`) REFERENCES \`proveedor\`(\`ProveedorID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`lote\` DROP FOREIGN KEY \`FK_b84f09b1e16e06bd6e3505a43d7\``);
        await queryRunner.query(`ALTER TABLE \`inventario\` DROP FOREIGN KEY \`FK_0c241e18c57901d71541db12b16\``);
        await queryRunner.query(`ALTER TABLE \`inventario\` DROP FOREIGN KEY \`FK_afa88801f4e31151b7b30a59b0b\``);
        await queryRunner.query(`ALTER TABLE \`productos\` DROP FOREIGN KEY \`FK_6508923541571202a44528a89fb\``);
        await queryRunner.query(`ALTER TABLE \`linea_pedido\` DROP FOREIGN KEY \`FK_42d264b5faef2476a1e86b45e6a\``);
        await queryRunner.query(`ALTER TABLE \`linea_pedido\` DROP FOREIGN KEY \`FK_7e407c1d99741d6b4645ad3c0b6\``);
        await queryRunner.query(`ALTER TABLE \`pedido\` DROP FOREIGN KEY \`FK_f8f1b629dec9509bf1ed6dd4d24\``);
        await queryRunner.query(`ALTER TABLE \`pedido\` DROP FOREIGN KEY \`FK_a9d3207fc0d827b6d397eb51bed\``);
        await queryRunner.query(`ALTER TABLE \`usuarios\` DROP FOREIGN KEY \`FK_0465e0e01c2fc4376bfde31b228\``);
        await queryRunner.query(`ALTER TABLE \`factura\` DROP FOREIGN KEY \`FK_4fd9b82ae5d4f0709fc0accf240\``);
        await queryRunner.query(`ALTER TABLE \`factura\` DROP FOREIGN KEY \`FK_d609aeea85d4dd4b3183c0085bc\``);
        await queryRunner.query(`DROP TABLE \`proveedor\``);
        await queryRunner.query(`DROP INDEX \`fk_Lote_Proveedor1_idx\` ON \`lote\``);
        await queryRunner.query(`DROP TABLE \`lote\``);
        await queryRunner.query(`DROP INDEX \`fk_Inventario_Lote1_idx\` ON \`inventario\``);
        await queryRunner.query(`DROP INDEX \`fk_Inventario_Productos1_idx\` ON \`inventario\``);
        await queryRunner.query(`DROP TABLE \`inventario\``);
        await queryRunner.query(`DROP INDEX \`fk_Productos_Categoria_Producto1_idx\` ON \`productos\``);
        await queryRunner.query(`DROP TABLE \`productos\``);
        await queryRunner.query(`DROP TABLE \`categoria_producto\``);
        await queryRunner.query(`DROP INDEX \`fk_Linea_pedido_Pedido1_idx\` ON \`linea_pedido\``);
        await queryRunner.query(`DROP INDEX \`fk_Linea_pedido_Productos1_idx\` ON \`linea_pedido\``);
        await queryRunner.query(`DROP TABLE \`linea_pedido\``);
        await queryRunner.query(`DROP INDEX \`fk_Pedido_Clientes_idx\` ON \`pedido\``);
        await queryRunner.query(`DROP INDEX \`fk_Pedido_Empleado1_idx\` ON \`pedido\``);
        await queryRunner.query(`DROP TABLE \`pedido\``);
        await queryRunner.query(`DROP TABLE \`empleado\``);
        await queryRunner.query(`DROP INDEX \`fk_Usuarios_Roles1_idx\` ON \`usuarios\``);
        await queryRunner.query(`DROP TABLE \`usuarios\``);
        await queryRunner.query(`DROP TABLE \`roles\``);
        await queryRunner.query(`DROP INDEX \`fk_Factura_Pago1_idx\` ON \`factura\``);
        await queryRunner.query(`DROP INDEX \`fk_Factura_Pedido1_idx\` ON \`factura\``);
        await queryRunner.query(`DROP TABLE \`factura\``);
        await queryRunner.query(`DROP TABLE \`pago\``);
    }

}

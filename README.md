## Notas
Antes de inicializar el backend es necesario tomar en cuenta el .env.template para copiar las variables a tomar en cuenta y tenerlo en un .env apropiado.

### Instalacion previo de paquetes
```
npm run i
```

### migracion de datos
```bash
npm run migration:generate
```
Generara una migracion de datos de todas las entidades que existen.

```bash
npm run migration:run
```
Migrar por completo a la base de datos

```bash
npm run start:dev
```
Inicializar el backend

___
### En caso de eliminar una base de datos
```bash
npm run migration:drop
```

para revertir una migracion
```bash
npm run migration:revert # para revertir cambios de una migracion
```


### Insertar seeders
Insercion de los seeders.
```bash
npm run seeder:run
```


### Opcional
En caso de hacer migracion inversa ya si es porque se crearon nuevas tablas o atributos se tendra en siguiente comando para poder generar una carpeta de entidades.
```bash
npx typeorm-model-generator -h localhost -d mi_base -u root -x password -e mysql -o src
```
En caso de no tener se pedira la instalacion previo para poder usarlo.

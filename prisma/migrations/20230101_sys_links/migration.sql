truncate table sys_links;

with adminuserid as (
 select id from  auth.users where email = 'luismiguelgilbert@gmail.com'
)
insert into sys_links ("id", "parent", "position", "link_name", "link_icon", "link_title", "link_comments", "updated_at", "updated_by")
select * from (
	select 1, cast(null as int), 1, '/home', 'fas fa-home', 'INICIO', 'Bienvenido', NOW(), id from adminuserid
	union ALL
	select 2, cast(null as int), 2, '/system', 'fas fa-cog', 'SISTEMA', 'Roles, Usuarios, Bodegas...', NOW(), id from adminuserid
	union all
	select 3, cast(null as int), 3, '/catalogs', 'fas fa-database', 'CATÁLOGOS', 'Crear Socios, Items, Bodegas...', NOW(), id from adminuserid
	union all
	select 4, cast(null as int), 4, '/accounting', 'fas fa-book', 'FINANZAS', 'Plan de Cuentas, Periodos Contables...', NOW(), id from adminuserid
	union all
	select 15, cast(null as int), 15, '/bitacora', 'fas fa-shield-alt', 'BITÁCORA', 'Puntos de Control, Control de Ingresos...', NOW(), id from adminuserid
	union all
	select 16, cast(null as int), 16, '/ens', 'fas fa-fish', 'ENS', 'Equipos de Nuestra Señora', NOW(), id from adminuserid
)initial_data
var empresa=
{
	"nombreEmpresa":"XANXSTORE",
	"ciudad":"Bogotá",
	"año":2019,
	"lugarVentas":["Instagram","Facebook"],
	"activo":true,
	"miembros":[
	{
		"nombre":"Cristian David Cuartas Hernánadez",
		"edad":18,
		"cargo":"Lider",
		"funciones":[
		"Atención al cliente y ventas",
		"Control de redes sociales",
		"Gestión de recursos",
		"Contabilidad"
		]
	},
	{
		"nombre":"Steven Mendez",
		"edad":18,
		"cargo":"Diseñador y Lider",
		"funciones":[
		"Diseños de estilos para cada temporada",
		"Proceso de estampación",
		"Gestión de calidad"
		]

	}
	]
};
console.log(empresa.ciudad);
console.log(empresa	['activo']);
console.log(empresa['miembros'][0]['funciones'][0]);

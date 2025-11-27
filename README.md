como mencionamos ahora queremos controlar que dependiendo si estamos iniciados podamos ver o no algunas pantallas,
lo primero que haremos será crearnos un archivo en router que se llame PrivateRoute.tsx
hecho eso pensemos, para poder restringir las paginasa ciertos usuarios, necesitamos conocer el contextoy ese contexto lo podemos
obtener solo de algunas partes ya sea un componente o un hook o cosas que tengan el contexto de react.
Entonces lo que tenemos que hacer es crearnos un componente el cual verifique si tiene acceso o no para estar dentro de ese contexto de react
entendido esto vamos al PrivateRoute

import 'react-native-gesture-handler';
import {enableLatestRenderer} from 'react-native-maps';

import React from 'react';
import { RootStackNavigator } from './src/routes/RootStackNavigator';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';
import { PermissionsProvider } from './src/context/PermissionsContext';

const App = () => {
  enableLatestRenderer();

  return (
    <AppState>  
      <RootStackNavigator />
    </AppState>
  )
}

const AppState = ({ children }: any) => {
  return (
    <PermissionsProvider>
      <ThemeProvider>
        { children }
      </ThemeProvider>
    </PermissionsProvider>
  );
}

export default App;

/* 
 --- P - E - N - D - I - E - N - T - E - S ---

WELCOME
- elegir nombre de mascota
- opcion skip
- elegir raza con un flatList de card de imagenes de razas
- gestionar la fecha de ultimo corte

CONTACTO
* Whazap
  - solo se habilite enviar mensajes dentro del horario
  - mostrar horarios
 - editar mensaje predeterminado

PERMISSIONS
- agregar la funcionalidad en el botón
- Revisar funcionalidad completa

OTROS
- comparar entre agregar un estilo a un boton en el theme (Ej boton primary), o crear un componente reutilizable para él
- revisar estilos similares y agregarlos al theme
- hacer los test de todas las screens
- separar estilos de las screen q valga la pena
- calibrar aspectos claro y oscuro (eliminar colores q no se usen del theme)
- calibrar dimensiones
- agregar comentarios generales en toda la APP
- ordenar routes files
- controlar la conexion a internet !
- revisar el backgroundColor general de toda la app (el configurado en el navigator). 
  Para no tener q ponerlo manualmente en cada screen
- 

CORRECCIONES
- Corregir goback de navegacion de mapas, si pedi permiso, te regresa a pantalla de permisos
- si le quito los permisos a la app y estaba en la pantalla de mapas, debo redireccionar a permisos


TIENDA
* Belleza
  - accesorios
  - shampoo (solo marca osspret)
* Alimentos
  - Perros
  - Gatos
  - Peces
  - Pájaros
* Juguetes & accesorios
  - 
* Tendencia
  - Moda




*/




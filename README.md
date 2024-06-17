# Welcome to your MilaBotApp - Equipo 1 👋

Midatacrédito app móvil tiene como finalidad ofrecer diferentes servicios a los ciudadanos centrados en la Historia de crédito (reporte financiero del comportamiento del ciudadano en la utilización de productos
financieros). 

Buscando así crear un Asesor Digital Financiero a través de un ChatBot con inteligencia artificial que puede atender a las preguntas de los usuarios sobre educación financiera información general, soporte,
preguntas frecuentes).

Este proyecto fue creado en [Expo](https://expo.dev) con [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).
Para el desarrollo de la aplicación móvil se integra un chatbot realizado con Chatlayer, React Native, lenguaje de programación typescript, componente de UI react-native-paper y para los gráficos react-native-gifted-charts.

A continuación está a detalle cómo comenzar a trabajar:

## Get started

1. Install dependencies. Node version 20.x.x
   

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```


En el caso de que no se tenga las herramientas para ejecutar la aplicación, se puede revisar la documentación para utilizar algunas de las siguientes herramientas:

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go)


Si se desea seguir desarrollando la aplicación, se puede empezar revisando la carpeta de screen. Este proyecto tiene un enrutamiento basado en archivos, utilizando Expo router [file-based routing](https://docs.expo.dev/router/introduction).

## Estructura del proyecto
### Desarrollo de aplicación móvil en react native
Desde las carpeta raíz del proyecto están:
- Constants - Colors.ts: contiene los colores del manual de marca
- Screens - contiene las pantallas del aplicativo desde para chat y tabs: homeTab, profileTab y servicesTab 

### Desarrollo de Chatbot en chatlayer
ChatLayer es una herramienta que permite a los usuarios de empresas/corporativos crear y mantener bots de voz y chat de IA para empresas.

Documentación general: https://www.sinch.com/es-es/products/customer-engagement/chatlayer/

Primeros pasos para desarrollar un chatbot: https://docs.chatlayer.ai/quickstart/tutorials/leadzy-tutorial/0.-introduction

### Implementación del chatbot en tu app
Éste script va ubicado en la sesión de Header del HTML de tu app
   ```bash
<script type="application/javascript">
(function(c,p,_,h){const o=[],r=[];let s,f,i;c[_]={init(...e){s=e;var t={then:n=>(r.push({t:"t",next:n}),t),catch:n=>(r.push({t:"c",next:n}),t)};return t},on(e,t){o.push([e,t])},render(...e){f=e},destroy(...e){i=e}};const g=p.getElementsByTagName("script")[0],l=p.createElement("script");l.async=!1,l.src=h,g.parentNode.insertBefore(l,g),c.__onWebMessengerHostReady__=function(e){if(delete c.__onWebMessengerHostReady__,window[_]=e,s){const t=e.init.apply(e,s);for(let n=0;n<r.length;n++){const a=r[n];a.t==="t"?t.then(a.next):t.catch(a.next)}}i&&e.destroy.call(e,i),f&&e.render.apply(e,f);for(let t=0;t<o.length;t++)e.on.apply(e,o[t])}})(window,document,"Chatlayer","https://storage.googleapis.com/static.dev.europe-west1.gcp.chatlayer.ai/widget/sdk.js");
</script>
   ```

Luego ubica éste fragmento de código antes de cerrar la etiqueta Body del HTML de tu app
```bash
<script type="application/javascript">Chatlayer.init({"channelId": "lxetxz91:666f79b9e24e0b5e7defccdc", "region": "eu-west1-gcp", "position": "right"})</script>
```

#### Captura de diagrama de flujo
[Archivo .png del diagrama - ver ](https://drive.google.com/file/d/15WoOi85i4Hl6OHnKpiMUf2uccKdtfiCe/view?usp=sharing)

## Equipo de desarrollo

Este proyecto se realizó con la colaboración de:

- Daniela Castrejon
- Diana Guaiña
- Laura Falcón
- Mitchel Arboleda

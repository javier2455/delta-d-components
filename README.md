# Delta Dveloxsoft React Components

Nota: Para probar la librería en un nuevo proyecto se deben instalar los siguientes paquetes:
- delta-d-components
- class-variance-authority
- clsx
- tailwind-merge

y en el archivo principal (main.tsx o raiz del proyecto agregar la siguiente importación para que cargue los estilos de tailwind)
import "delta-d-components/dist/delta-d-components.css"

Versiones

v1.0.1
* Testeando error por número de versión.
* Se quito el ref para buscar posible error.

v1.0.0
* Testeando error por número de versión.
* Se quito el ref para buscar posible error.

v0.1.4
* Verificando cambios sin hacer en el componente.

v0.1.3
* Añadiendo referencia al componente.

v0.1.2
* Debugueando errores

v0.1.1
* Corregido error en el componente "Button" para la exportación de sus props.

v0.0.2
* Añadiendo stoybook a la aplicación.
* Añadido nuevo componente "Button"

v0.0.1
* Creando bases para la librería.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

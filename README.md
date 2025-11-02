En esta oportunidad veremos el hook useReducer 
asi que nos creamos 05-useReducer y luego nos oegaremos un codigo que está en un gist 
y lo pegaremos en TaskApp.tsx
las cosas que pegamos necesitan shadcn para eso tenemos que instalarlo y hacer algunas configuraciones
primero agregar esto en tsconfig.json:
  "compilerOptions":{
    "baseUrl":".",
    "paths":{
      "@/*": ["./src/*"]
    }
  }
  Tambien tenemos que agregarlo en tsconfig.app.json

  luego:
  npm install -D @types/node

  Hecho esto debemos configurar el vite.config.ts donde agregaremos esto:
  import path from "path"
  import tailwindcss from "@tailwindcss/vite"

  export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
Hecho todo ejecutamos el npx shadcn@latest add y elegimos lo que queremos usar.
ahora vamos al archivo Taskapp
# 0001 · TypeScript 6.0.3 en lugar de 7.x

- **Contexto:** al iniciar M0 la versión estable de TypeScript es 7.0.2, pero `typescript-eslint@8.72.1`
  declara como peer `typescript >=4.8.4 <6.1.0`.
- **Decisión:** fijar `typescript@6.0.3` (última 6.0.x). Mantiene el linter con tipos soportado oficialmente.
- **Revisión:** migrar a 7.x cuando `typescript-eslint` publique soporte. Es un cambio aislado al lockfile.

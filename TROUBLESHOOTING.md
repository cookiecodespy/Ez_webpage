# TROUBLESHOOTING - EZ Ship Logistics

## Problema: GitHub Pages muestra página en blanco

**Fecha:** 17 de diciembre de 2025  
**Síntomas:**
- Localhost funciona correctamente (http://localhost:5173/Ez_webpage/)
- GitHub Pages muestra página completamente en blanco
- GitHub Actions workflows completan exitosamente (sin errores)
- Build local con `npm run build` genera archivos correctamente en `dist/`

**Causa raíz:**
Faltaba el archivo `.nojekyll` en la carpeta `public/` del proyecto.

**Explicación técnica:**
- GitHub Pages usa Jekyll por defecto para servir sitios estáticos
- Jekyll ignora archivos y carpetas que empiezan con guión bajo `_`
- Vite genera assets con nombres como `_plugin-vue_export-helper.js`
- Sin `.nojekyll`, GitHub Pages no sirve estos archivos → JavaScript no carga → página en blanco

**Solución aplicada:**
1. Crear archivo vacío `.nojekyll` en carpeta `public/`
   ```bash
   # PowerShell
   New-Item -Path "public/.nojekyll" -ItemType File
   ```

2. Rebuild del proyecto (Vite copia automáticamente `public/` → `dist/`)
   ```bash
   npm run build
   ```

3. Commit y push
   ```bash
   git add public/.nojekyll
   git commit -m "Fix GitHub Pages: Agregar .nojekyll para SPA routing"
   git push origin main
   ```

4. Si persiste caché: commit vacío para forzar redeploy
   ```bash
   git commit --allow-empty -m "Force redeploy - Clear GitHub Pages cache"
   git push origin main
   ```

5. Limpiar caché del navegador:
   - Modo incógnito: `Ctrl + Shift + N`
   - Hard refresh: `Ctrl + F5` o `Ctrl + Shift + R`
   - Limpiar caché: `Ctrl + Shift + Delete` → Última hora

**Commits relacionados:**
- `8d028c3` - Fix GitHub Pages: Rebuild dist con últimos cambios
- `fd36449` - Fix GitHub Pages: Agregar .nojekyll para SPA routing ✅
- `9b8157d` - Force redeploy - Clear GitHub Pages cache

**Verificación:**
- Archivo existe: `Test-Path "public/.nojekyll"` → debe devolver `True`
- Archivo copiado a dist: `Test-Path "dist/.nojekyll"` → debe devolver `True`
- GitHub Pages funcionando: https://cookiecodespy.github.io/Ez_webpage/

**Prevención futura:**
- Mantener `.nojekyll` en `public/` (nunca eliminar)
- Si se borra accidentalmente, repetir pasos 1-3
- Para Vite/React/Vue en GitHub Pages, `.nojekyll` es SIEMPRE necesario

---

## Configuración correcta para GitHub Pages + Vite

**vite.config.ts:**
```typescript
export default defineConfig({
  base: '/Ez_webpage/', // Nombre del repositorio
  // ... resto de configuración
});
```

**.github/workflows/deploy.yml:**
```yaml
- name: Build site
  run: npm run build

- name: Upload build artifact
  uses: actions/upload-pages-artifact@v3
  with:
    path: dist # Carpeta que contiene el build
```

**Estructura requerida:**
```
public/
  .nojekyll          ← CRÍTICO
  favicon.png
  logo.png
  ...

dist/ (generado por build)
  .nojekyll          ← Copiado automáticamente desde public/
  index.html
  assets/
    index-[hash].js
    index-[hash].css
```

---

## Otros problemas comunes

### 404 en rutas internas
**Síntoma:** Homepage carga, pero rutas como `/about` dan 404  
**Causa:** GitHub Pages no tiene SPA routing  
**Solución:** Usar hash routing o crear `404.html` que redirija a `index.html`

### Assets no cargan (404)
**Síntoma:** Página carga pero sin estilos/imágenes  
**Causa:** `base` incorrecta en `vite.config.ts`  
**Solución:** Verificar que `base: '/nombre-repo/'` coincida con nombre del repositorio

### Workflow falla en "Build site"
**Síntoma:** GitHub Actions falla en paso `npm run build`  
**Causa:** Dependencias faltantes o errores de TypeScript  
**Solución:** Correr `npm run build` localmente, fix errores, luego push

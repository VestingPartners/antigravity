# Hola Soy Daniel

Este es un sitio web personal simple creado con HTML y CSS.

## Estructura

- `index.html`: Estructura principal de la página.
- `style.css`: Estilos visuales con animaciones y diseño moderno (Dark Mode).

## Cómo publicar

1. Subir a GitHub.
2. Importar proyecto en Vercel.

## Cómo cambiar la URL (Dominio Personalizado)

Si quieres que tu sitio tenga una dirección como `daniel.vhn.cl` en lugar de `.vercel.app`:

1. Ve a tu proyecto en **Vercel** -> **Settings** -> **Domains**.
2. Escribe tu dominio (ej. `daniel.vhn.cl`) y haz clic en **Add**.
3. Vercel te dará una configuración DNS (normalmente un registro `CNAME` apuntando a `cname.vercel-dns.com`).
4. Ve al panel de control de tu dominio (`vhn.cl`) e ingresa ese registro.

## Cómo insertar en otro sitio web

Si deseas mostrar esta página dentro de tu sitio existente (ej. en `nikolas.vhn.cl`), usa este código HTML:

```html
<iframe src="https://antigravity-henna-ten.vercel.app/" width="100%" height="600px" style="border:none;"></iframe>
```

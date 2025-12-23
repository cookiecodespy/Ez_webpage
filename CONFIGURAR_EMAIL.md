# Configuración de EmailJS para Formulario de Contacto

## ✅ Implementado
- EmailJS instalado (`@emailjs/browser`)
- Formulario configurado para enviar a: **msotz@ezlogistics.cl**
- Variables de entorno en `.env.local`
- Manejo de errores y mensajes de éxito/error

## 🔧 Pasos para Activar el Envío Real de Emails

### 1. Crear Cuenta en EmailJS (Gratis)
1. Ve a: https://www.emailjs.com/
2. Haz clic en "Sign Up" (registro gratuito)
3. Confirma tu email

### 2. Agregar Servicio de Email
1. En el dashboard, ve a "Email Services"
2. Haz clic en "Add New Service"
3. Selecciona tu proveedor de email (Gmail, Outlook, etc.)
4. **IMPORTANTE**: Configura que los emails lleguen a `msotz@ezlogistics.cl`
5. Copia el **Service ID** que te genera (ej: `service_abc123`)

### 3. Crear Template de Email
1. Ve a "Email Templates"
2. Haz clic en "Create New Template"
3. Usa esta plantilla:

```
Asunto: Nueva Solicitud de Cotización - EZ Logistics

De: {{from_name}}
Empresa: {{company}}
Email: {{from_email}}
Teléfono: {{phone}}
Servicio: {{service}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde el formulario de contacto de ezlogistics.cl
```

4. En las variables del template asegúrate de que estén:
   - `from_name`
   - `from_email`
   - `company`
   - `phone`
   - `service`
   - `message`
   - `to_email`

5. **IMPORTANTE**: En "Settings" del template, configura que se envíe a `{{to_email}}` o directamente a `msotz@ezlogistics.cl`
6. Copia el **Template ID** (ej: `template_xyz789`)

### 4. Obtener Public Key
1. Ve a "Account" en el menú superior
2. Busca la sección "API Keys"
3. Copia tu **Public Key** (ej: `AbCdEfGh123456`)

### 5. Actualizar Variables de Entorno
Edita el archivo `.env.local` en la raíz del proyecto:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=AbCdEfGh123456
```

Reemplaza los valores con los que copiaste de EmailJS.

### 6. Reiniciar el Servidor
```bash
# Detén el servidor (Ctrl+C)
# Vuelve a iniciarlo
npm run dev
```

## ✨ Resultado
Una vez configurado:
- Los emails del formulario llegarán automáticamente a `msotz@ezlogistics.cl`
- Los usuarios verán mensaje de confirmación ✓
- Si hay error, verán mensaje de error ✗
- Límite gratuito: 200 emails/mes (suficiente para empezar)

## 🔍 Verificar que Funciona
1. Llena el formulario en http://localhost:5173/#contact
2. Envía un mensaje de prueba
3. Revisa la bandeja de entrada de `msotz@ezlogistics.cl`
4. También puedes ver el historial de envíos en el dashboard de EmailJS

## 📧 Email Mostrado en la Página
El email **msotz@ezlogistics.cl** ahora aparece en:
- Sección de contacto (tarjeta roja)
- Es clickeable (abre cliente de email del usuario)

## ⚡ Alternativa si No Quieres Usar EmailJS
Si prefieres otro servicio, puedes usar:
- **Formspree**: https://formspree.io/ (muy simple)
- **Resend**: https://resend.com/ (moderno, buena API)
- **SendGrid**: https://sendgrid.com/ (más robusto)

Todos tienen tier gratuito y son fáciles de integrar.

# Aviso de Protección de Datos Personales — GlobalStore

**Conforme a la Ley Federal de Protección de Datos Personales en Posesión de Particulares (LFPDPPP)**

**Última actualización:** Julio 2026

---

## Responsable del Tratamiento

**GlobalStore S.A. de C.V.**  
Ciudad de México, México  
Correo: privacidad@globalstore.mx  
Teléfono: +52 (55) 1234-5678

---

## Checklist de Cumplimiento LFPDPPP

### ✅ 1. Consentimiento Informado

| Punto | Estado | Evidencia en la plataforma |
|---|---|---|
| La aplicación solicita el consentimiento explícito de los usuarios para recopilar y procesar sus datos personales | ✅ Cumple | Casilla de verificación obligatoria en pantalla de registro para aceptar el Aviso de Privacidad |
| La información sobre la recopilación y uso de datos se presenta de manera clara y accesible | ✅ Cumple | Enlace a Política de Privacidad y este Aviso visibles en el registro; documentos accesibles con un clic |

**Implementación:** Durante el proceso de registro, el usuario debe marcar explícitamente dos casillas de verificación:
1. Aceptación del Aviso de Protección de Datos Personales (este documento).
2. Aceptación de la Política de Privacidad.

El botón de "Crear Cuenta" permanece deshabilitado hasta que ambas casillas estén marcadas.

---

### ✅ 2. Finalidad de la Recopilación de Datos

| Punto | Estado | Detalle |
|---|---|---|
| Se ha definido claramente la finalidad de la recopilación de datos | ✅ Cumple | Finalidades primarias y secundarias descritas en la Política de Privacidad (Sección 3) |
| Los datos recopilados son estrictamente necesarios para cumplir con la finalidad | ✅ Cumple | Cada rol (cliente, tienda, proveedor, empresa) recaba únicamente los datos necesarios para su función |

**Datos recabados por rol:**

- **Cliente:** usuario, correo, contraseña, dirección de envío (opcional).
- **Tienda:** usuario, correo, contraseña, nombre de tienda, propietario, teléfono, dirección.
- **Proveedor:** usuario, correo, contraseña, nombre comercial, empresa representada, correo de contacto, teléfono.
- **Empresa/Marca:** usuario, correo, contraseña, nombre de empresa, correo corporativo, teléfono, descripción.

---

### ✅ 3. Seguridad de Datos

| Punto | Estado | Medidas implementadas |
|---|---|---|
| Se implementan medidas de seguridad adecuadas para proteger los datos personales | ✅ Cumple | Control de acceso basado en roles (RBAC), autenticación JWT, validación de entradas |
| Se utilizan protocolos de cifrado para transmisión y almacenamiento de datos sensibles | ✅ Cumple | HTTPS/TLS en tránsito, bcrypt para contraseñas, tokens seguros |

**Medidas técnicas y organizativas:**
1. Contraseñas cifradas con bcrypt (factor de costo ≥ 10).
2. Comunicaciones mediante HTTPS/TLS 1.2+.
3. Tokens JWT con tiempo de expiración limitado.
4. Validación y saneamiento de entradas para prevenir inyecciones.
5. Principio de mínimo privilegio en accesos a base de datos.
6. Registros de auditoría de accesos y operaciones críticas.

---

### ✅ 4. Derechos de los Usuarios (ARCO)

| Punto | Estado | Implementación |
|---|---|---|
| Los usuarios pueden acceder a sus datos personales y modificarlos | ✅ Cumple | Panel de perfil editable para cada rol en la plataforma |
| La aplicación permite ejercer derechos ARCO | ✅ Cumple | Proceso descrito en Política de Privacidad; contacto: privacidad@globalstore.mx |

**Proceso ARCO:**
1. El titular envía solicitud a privacidad@globalstore.mx.
2. GlobalStore acusa recibo en 5 días hábiles.
3. GlobalStore responde en un máximo de 20 días hábiles.
4. En caso de rectificación o cancelación, los cambios se realizan en un máximo de 15 días adicionales.

---

### ✅ 5. Retención de Datos

| Punto | Estado | Política |
|---|---|---|
| Se establece un período de retención de datos acorde con la finalidad | ✅ Cumple | Períodos definidos en Política de Privacidad (Sección 6) |
| Se eliminan los datos cuando ya no son necesarios | ✅ Cumple | Proceso de borrado seguro al vencer el período de retención |

**Períodos de retención:**
- Cuenta activa: mientras el usuario mantenga la cuenta.
- Transacciones: 5 años (cumplimiento fiscal).
- Registros de actividad: 12 meses.
- Cuentas canceladas: 60 días adicionales.

---

### ✅ 6. Política de Privacidad

| Punto | Estado | Ubicación |
|---|---|---|
| La aplicación cuenta con una política de privacidad fácilmente accesible | ✅ Cumple | Enlace en pantalla de registro (paso 4) y en pie de página de la plataforma |
| La política describe cómo se recopilan, utilizan y protegen los datos | ✅ Cumple | Ver archivo `politica-privacidad.md` o página `/privacidad` en la plataforma |

---

### ✅ 7. Transferencia de Datos

| Punto | Estado | Implementación |
|---|---|---|
| La aplicación informa sobre transferencias de datos a terceros | ✅ Cumple | Sección 4 de la Política de Privacidad |
| Se obtiene consentimiento antes de transferencias que lo requieran | ✅ Cumple | Las transferencias que requieren consentimiento están marcadas en la tabla de transferencias |

---

### ✅ 8. Notificación de Brechas de Seguridad

| Punto | Estado | Procedimiento |
|---|---|---|
| La aplicación tiene procedimiento para notificar brechas de seguridad | ✅ Cumple | Protocolo descrito en Política de Privacidad (Sección 9) |
| Se cumplen los plazos de la LFPDPPP para informar brechas | ✅ Cumple | Notificación al titular en 72 horas; reporte al INAI según plazos legales |

**Procedimiento de respuesta a brechas:**
1. **Detección:** Identificación del incidente por el equipo de seguridad.
2. **Contención:** Aislamiento del sistema afectado en < 1 hora.
3. **Evaluación:** Análisis del alcance y datos afectados en < 24 horas.
4. **Notificación al titular:** Correo electrónico y aviso en plataforma en < 72 horas.
5. **Reporte al INAI:** Según plazos establecidos en el artículo 20 del Reglamento de la LFPDPPP.
6. **Remediación:** Implementación de medidas correctivas.
7. **Postmortem:** Documentación del incidente y lecciones aprendidas.

---

## Marco Legal Aplicable

Este aviso se emite en cumplimiento de:

- **Ley Federal de Protección de Datos Personales en Posesión de Particulares (LFPDPPP)** — DOF 5 de julio de 2010.
- **Reglamento de la LFPDPPP** — DOF 21 de diciembre de 2011.
- **Lineamientos del Aviso de Privacidad** — DOF 17 de enero de 2013.
- **Recomendaciones en materia de seguridad de datos personales** del INAI.

---

## Autoridad de Control

**Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI)**  
Sitio web: [www.inai.org.mx](https://www.inai.org.mx)  
Teléfono: 800 835 4324

---

## Contacto del Responsable

Para cualquier asunto relacionado con la protección de sus datos personales:

**Correo:** privacidad@globalstore.mx  
**Teléfono:** +52 (55) 1234-5678  
**Domicilio:** Ciudad de México, México

---

*Documento elaborado por el equipo de GlobalStore en cumplimiento de la LFPDPPP.*  
*Versión 1.0 — Julio 2026*

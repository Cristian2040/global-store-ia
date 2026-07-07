'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    Shield, Users, Target, Lock, Clock, ArrowLeft,
    FileText, Globe, AlertTriangle, Mail, Phone, MapPin,
    ChevronRight, CheckCircle2, Building2, Database, Eye,
    Edit3, Trash2, XCircle, Send, Copy, Check
} from 'lucide-react';

const sections = [
    { id: 'responsable', label: 'Responsable', icon: Building2 },
    { id: 'datos', label: 'Datos Recabados', icon: Database },
    { id: 'finalidades', label: 'Finalidades', icon: Target },
    { id: 'transferencias', label: 'Transferencias', icon: Globe },
    { id: 'seguridad', label: 'Seguridad', icon: Lock },
    { id: 'retencion', label: 'Retención', icon: Clock },
    { id: 'arco', label: 'Derechos ARCO', icon: Users },
    { id: 'brechas', label: 'Brechas', icon: AlertTriangle },
    { id: 'contacto', label: 'Contacto', icon: Mail },
];

function SectionCard({ id, title, icon: Icon, children, accent = 'cyan' }: {
    id: string; title: string; icon: any; children: React.ReactNode; accent?: string;
}) {
    const accentClasses: Record<string, string> = {
        cyan: 'border-cyan-500/30 from-cyan-900/20',
        purple: 'border-purple-500/30 from-purple-900/20',
        blue: 'border-blue-500/30 from-blue-900/20',
        emerald: 'border-emerald-500/30 from-emerald-900/20',
        orange: 'border-orange-500/30 from-orange-900/20',
        red: 'border-red-500/30 from-red-900/20',
    };
    const iconClasses: Record<string, string> = {
        cyan: 'text-cyan-400 bg-cyan-400/10',
        purple: 'text-purple-400 bg-purple-400/10',
        blue: 'text-blue-400 bg-blue-400/10',
        emerald: 'text-emerald-400 bg-emerald-400/10',
        orange: 'text-orange-400 bg-orange-400/10',
        red: 'text-red-400 bg-red-400/10',
    };
    return (
        <section id={id} className={`rounded-2xl border bg-gradient-to-br ${accentClasses[accent]} to-transparent p-6 scroll-mt-20`}>
            <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconClasses[accent]}`}>
                    <Icon className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-white">{title}</h2>
            </div>
            {children}
        </section>
    );
}

function InfoRow({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex items-start gap-3 py-2 border-b border-gray-800 last:border-0">
            <span className="text-gray-500 text-sm min-w-[140px] flex-shrink-0">{label}</span>
            <span className="text-gray-200 text-sm font-medium">{value}</span>
        </div>
    );
}

function Badge({ text, variant = 'default' }: { text: string; variant?: 'success' | 'warning' | 'default' }) {
    const classes = {
        success: 'bg-emerald-900/40 text-emerald-400 border-emerald-600/40',
        warning: 'bg-amber-900/40 text-amber-400 border-amber-600/40',
        default: 'bg-gray-800 text-gray-400 border-gray-700',
    };
    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${classes[variant]}`}>
            {text}
        </span>
    );
}

export default function PoliticaPrivacidadPage() {
    const [activeSection, setActiveSection] = useState('responsable');
    const [copiedEmail, setCopiedEmail] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText('privacidad@globalstore.mx');
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
    };

    return (
        <div className="min-h-screen bg-[#0a0f1e]">
            {/* Top bar */}
            <div className="border-b border-gray-800/60 bg-[#0d1426]/80 backdrop-blur-md sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link href="/register" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                            Volver al registro
                        </Link>
                        <span className="text-gray-700">|</span>
                        <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4 text-cyan-400" />
                            <span className="text-white font-semibold text-sm">GlobalStore</span>
                            <ChevronRight className="w-3 h-3 text-gray-600" />
                            <span className="text-gray-400 text-sm">Política de Privacidad</span>
                        </div>
                    </div>
                    <span className="text-xs text-gray-600">Versión 1.0 · Julio 2026</span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-10 flex gap-8">
                {/* Sidebar Nav */}
                <aside className="hidden lg:block w-56 flex-shrink-0">
                    <div className="sticky top-20 space-y-1">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3 px-3">Contenido</p>
                        {sections.map((s) => (
                            <a
                                key={s.id}
                                href={`#${s.id}`}
                                onClick={() => setActiveSection(s.id)}
                                className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-all ${activeSection === s.id
                                    ? 'bg-cyan-500/10 text-cyan-400 font-medium'
                                    : 'text-gray-500 hover:text-gray-300 hover:bg-gray-800/50'
                                    }`}
                            >
                                <s.icon className="w-4 h-4 flex-shrink-0" />
                                {s.label}
                            </a>
                        ))}
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 space-y-6 min-w-0">

                    {/* Hero Header */}
                    <div className="rounded-2xl bg-gradient-to-br from-cyan-900/30 via-blue-900/20 to-purple-900/20 border border-cyan-500/20 p-8">
                        <div className="flex items-start gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                                <Shield className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-white mb-2">Política de Privacidad</h1>
                                <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                                    En <strong className="text-white">GlobalStore</strong> tomamos muy en serio la protección de tus datos personales.
                                    Este documento explica de manera transparente cómo recopilamos, usamos y protegemos tu información,
                                    en total cumplimiento con la <strong className="text-cyan-400">LFPDPPP</strong>.
                                </p>
                                <div className="flex flex-wrap gap-3 mt-4">
                                    <Badge text="LFPDPPP Compliant" variant="success" />
                                    <Badge text="Última actualización: Julio 2026" />
                                    <Badge text="Versión 1.0" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 1. Responsable */}
                    <SectionCard id="responsable" title="1. Identidad del Responsable" icon={Building2} accent="blue">
                        <div className="bg-gray-900/60 rounded-xl border border-gray-800 divide-y divide-gray-800">
                            <InfoRow label="Razón social" value="GlobalStore S.A. de C.V." />
                            <InfoRow label="Domicilio" value="Ciudad de México, México" />
                            <InfoRow label="Correo" value="privacidad@globalstore.mx" />
                            <InfoRow label="Teléfono" value="+52 (55) 1234-5678" />
                            <InfoRow label="Responsable designado" value="Departamento de Privacidad y Cumplimiento" />
                        </div>
                    </SectionCard>

                    {/* 2. Datos Recabados */}
                    <SectionCard id="datos" title="2. Datos Personales que Recabamos" icon={Database} accent="cyan">
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                {
                                    rol: 'Todos los usuarios',
                                    color: 'border-gray-700 bg-gray-900/50',
                                    dot: 'bg-gray-400',
                                    items: ['Nombre de usuario', 'Correo electrónico', 'Contraseña (cifrada)', 'Rol en la plataforma'],
                                },
                                {
                                    rol: 'Clientes',
                                    color: 'border-blue-700/40 bg-blue-900/10',
                                    dot: 'bg-blue-400',
                                    items: ['Dirección de envío (opcional)', 'Calle, número, ciudad', 'Estado y código postal'],
                                },
                                {
                                    rol: 'Tiendas',
                                    color: 'border-purple-700/40 bg-purple-900/10',
                                    dot: 'bg-purple-400',
                                    items: ['Nombre comercial', 'Nombre del propietario', 'Teléfono de contacto', 'Dirección del establecimiento'],
                                },
                                {
                                    rol: 'Proveedores',
                                    color: 'border-orange-700/40 bg-orange-900/10',
                                    dot: 'bg-orange-400',
                                    items: ['Nombre / razón comercial', 'Correo de contacto', 'Teléfono', 'Empresa representada'],
                                },
                                {
                                    rol: 'Empresas / Marcas',
                                    color: 'border-emerald-700/40 bg-emerald-900/10',
                                    dot: 'bg-emerald-400',
                                    items: ['Nombre de empresa o marca', 'Correo corporativo', 'Teléfono corporativo', 'Descripción de la empresa'],
                                },
                                {
                                    rol: 'Datos técnicos (automáticos)',
                                    color: 'border-gray-700/40 bg-gray-900/30',
                                    dot: 'bg-gray-500',
                                    items: ['Dirección IP', 'Tipo de navegador y dispositivo', 'Páginas visitadas', 'Fecha y hora de acceso'],
                                },
                            ].map(({ rol, color, dot, items }) => (
                                <div key={rol} className={`rounded-xl border p-4 ${color}`}>
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className={`w-2 h-2 rounded-full ${dot}`} />
                                        <span className="text-sm font-semibold text-white">{rol}</span>
                                    </div>
                                    <ul className="space-y-1">
                                        {items.map(i => (
                                            <li key={i} className="text-xs text-gray-400 flex items-start gap-2">
                                                <CheckCircle2 className="w-3 h-3 text-gray-600 mt-0.5 flex-shrink-0" />
                                                {i}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 flex items-start gap-2.5 rounded-xl bg-blue-950/40 border border-blue-700/30 p-4">
                            <Shield className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                            <p className="text-xs text-blue-200/70">
                                <strong className="text-blue-300">Sin datos sensibles.</strong> GlobalStore no recaba datos biométricos, de salud, origen étnico racial, creencias religiosas, filosóficas, morales, afiliación sindical, opiniones políticas ni preferencias sexuales.
                            </p>
                        </div>
                    </SectionCard>

                    {/* 3. Finalidades */}
                    <SectionCard id="finalidades" title="3. Finalidades del Tratamiento" icon={Target} accent="purple">
                        <div className="space-y-4">
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-900/30 border border-emerald-700/40 rounded-full px-3 py-1">Primarias — Necesarias</span>
                                </div>
                                <div className="space-y-2">
                                    {[
                                        'Crear y gestionar tu cuenta de usuario en la plataforma.',
                                        'Verificar tu identidad y autenticar tu acceso de forma segura.',
                                        'Procesar transacciones, órdenes de compra y operaciones comerciales.',
                                        'Gestionar el inventario, pedidos y relaciones entre tiendas, proveedores y empresas.',
                                        'Enviarte notificaciones de actividad (confirmaciones, actualizaciones, alertas).',
                                        'Proporcionar soporte técnico y atención al cliente.',
                                    ].map((fin, i) => (
                                        <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-gray-900/40 border border-gray-800">
                                            <span className="text-xs font-bold text-emerald-400 w-5 flex-shrink-0">{i + 1}</span>
                                            <span className="text-sm text-gray-300">{fin}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-900/30 border border-amber-700/40 rounded-full px-3 py-1">Secundarias — Opcionales</span>
                                </div>
                                <div className="space-y-2">
                                    {[
                                        'Envío de comunicaciones promocionales, ofertas y novedades de GlobalStore.',
                                        'Elaboración de perfiles estadísticos de uso para mejorar la plataforma.',
                                        'Personalización de la experiencia de usuario.',
                                    ].map((fin, i) => (
                                        <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-amber-900/10 border border-amber-800/30">
                                            <span className="text-xs font-bold text-amber-500 w-5 flex-shrink-0">{i + 1}</span>
                                            <span className="text-sm text-gray-300">{fin}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-xs text-gray-500 mt-3 flex items-start gap-2">
                                    <XCircle className="w-3.5 h-3.5 text-gray-600 mt-0.5 flex-shrink-0" />
                                    Para oponerte al tratamiento secundario, escribe a <span className="text-cyan-400 ml-1">privacidad@globalstore.mx</span> indicando el derecho de Oposición (O) dentro de tus derechos ARCO.
                                </p>
                            </div>
                        </div>
                    </SectionCard>

                    {/* 4. Transferencias */}
                    <SectionCard id="transferencias" title="4. Transferencia de Datos" icon={Globe} accent="orange">
                        <div className="overflow-x-auto rounded-xl border border-gray-800">
                            <table className="w-full text-sm">
                                <thead className="bg-gray-900/80">
                                    <tr>
                                        <th className="text-left px-4 py-3 text-gray-400 font-semibold text-xs uppercase tracking-wider">Destinatario</th>
                                        <th className="text-left px-4 py-3 text-gray-400 font-semibold text-xs uppercase tracking-wider">Finalidad</th>
                                        <th className="text-left px-4 py-3 text-gray-400 font-semibold text-xs uppercase tracking-wider">Base Legal</th>
                                        <th className="text-left px-4 py-3 text-gray-400 font-semibold text-xs uppercase tracking-wider">Consentimiento</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-800">
                                    {[
                                        ['Empresas afiliadas de GlobalStore', 'Gestión conjunta de la plataforma', 'Misma finalidad', 'No requerido'],
                                        ['Proveedores tecnológicos (nube, hosting)', 'Operación técnica de la plataforma', 'Procesador de datos', 'No requerido'],
                                        ['Procesadores de pago', 'Gestión de transacciones seguras', 'Contrato', 'No requerido'],
                                        ['Autoridades gubernamentales', 'Cumplimiento de obligaciones legales', 'Mandato legal', 'No requerido'],
                                        ['Socios comerciales (marketing)', 'Promociones y campañas conjuntas', 'Consentimiento expreso', 'Sí, previo y expreso'],
                                    ].map(([dest, fin, base, cons]) => (
                                        <tr key={dest} className="hover:bg-gray-900/30 transition-colors">
                                            <td className="px-4 py-3 text-gray-200 font-medium text-xs">{dest}</td>
                                            <td className="px-4 py-3 text-gray-400 text-xs">{fin}</td>
                                            <td className="px-4 py-3 text-gray-500 text-xs">{base}</td>
                                            <td className="px-4 py-3 text-xs">
                                                <Badge
                                                    text={cons}
                                                    variant={cons === 'No requerido' ? 'success' : 'warning'}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </SectionCard>

                    {/* 5. Seguridad */}
                    <SectionCard id="seguridad" title="5. Medidas de Seguridad" icon={Lock} accent="emerald">
                        <div className="grid md:grid-cols-2 gap-3">
                            {[
                                { icon: Lock, title: 'Cifrado en tránsito', desc: 'HTTPS / TLS 1.2+ en todas las comunicaciones.' },
                                { icon: Shield, title: 'Cifrado en almacenamiento', desc: 'Contraseñas hasheadas con bcrypt (costo ≥ 10).' },
                                { icon: Users, title: 'Control de acceso (RBAC)', desc: 'Mínimo privilegio; solo personal autorizado accede a datos.' },
                                { icon: FileText, title: 'Autenticación JWT', desc: 'Tokens con expiración controlada y rotación segura.' },
                                { icon: Eye, title: 'Auditoría de accesos', desc: 'Registros de acceso y operaciones críticas monitoreados.' },
                                { icon: Database, title: 'Respaldos cifrados', desc: 'Copias de seguridad periódicas con cifrado en reposo.' },
                            ].map(({ icon: Icon, title, desc }) => (
                                <div key={title} className="flex items-start gap-3 p-4 rounded-xl bg-emerald-900/10 border border-emerald-700/20">
                                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-4 h-4 text-emerald-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-white">{title}</p>
                                        <p className="text-xs text-gray-400 mt-0.5">{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SectionCard>

                    {/* 6. Retención */}
                    <SectionCard id="retencion" title="6. Período de Retención de Datos" icon={Clock} accent="blue">
                        <div className="space-y-2">
                            {[
                                { tipo: 'Cuenta activa', periodo: 'Mientras la cuenta permanezca activa', base: 'Relación contractual' },
                                { tipo: 'Historial de transacciones', periodo: '5 años', base: 'Obligación fiscal (CFF Art. 30)' },
                                { tipo: 'Registros de actividad y auditoría', periodo: '12 meses', base: 'Seguridad y cumplimiento' },
                                { tipo: 'Datos de cuentas canceladas', periodo: '60 días naturales adicionales', base: 'Reclamaciones pendientes' },
                            ].map(({ tipo, periodo, base }) => (
                                <div key={tipo} className="flex items-center justify-between p-4 rounded-xl bg-gray-900/50 border border-gray-800 gap-4">
                                    <div className="flex items-center gap-3">
                                        <Clock className="w-4 h-4 text-blue-400 flex-shrink-0" />
                                        <div>
                                            <p className="text-sm font-medium text-white">{tipo}</p>
                                            <p className="text-xs text-gray-500">{base}</p>
                                        </div>
                                    </div>
                                    <span className="text-xs font-semibold text-blue-400 bg-blue-900/30 border border-blue-700/40 rounded-full px-3 py-1 flex-shrink-0">{periodo}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-xs text-gray-500 mt-4">Al vencer el período de retención, los datos son eliminados de forma segura o anonimizados irreversiblemente.</p>
                    </SectionCard>

                    {/* 7. Derechos ARCO */}
                    <SectionCard id="arco" title="7. Derechos ARCO" icon={Users} accent="purple">
                        <p className="text-sm text-gray-400 mb-5">
                            Como titular de datos personales, la LFPDPPP te garantiza cuatro derechos fundamentales que puedes ejercer en cualquier momento de forma gratuita.
                        </p>

                        {/* Cards ARCO */}
                        <div className="grid md:grid-cols-2 gap-3 mb-6">
                            {[
                                { letter: 'A', title: 'Acceso', desc: 'Conocer exactamente qué datos personales tenemos sobre ti, cómo los usamos, con quién los compartimos y cuánto tiempo los conservamos.', icon: Eye, color: 'cyan' },
                                { letter: 'R', title: 'Rectificación', desc: 'Solicitar la corrección o actualización de tus datos cuando sean inexactos, incompletos o estén desactualizados.', icon: Edit3, color: 'blue' },
                                { letter: 'C', title: 'Cancelación', desc: 'Solicitar la eliminación de tus datos personales cuando ya no sean necesarios para la finalidad que motivó su recopilación.', icon: Trash2, color: 'purple' },
                                { letter: 'O', title: 'Oposición', desc: 'Oponerte al tratamiento de tus datos para finalidades secundarias (marketing, análisis estadístico, personalización).', icon: XCircle, color: 'orange' },
                            ].map(({ letter, title, desc, icon: Icon, color }) => {
                                const colors: Record<string, string> = {
                                    cyan: 'border-cyan-700/40 bg-cyan-900/10 text-cyan-400',
                                    blue: 'border-blue-700/40 bg-blue-900/10 text-blue-400',
                                    purple: 'border-purple-700/40 bg-purple-900/10 text-purple-400',
                                    orange: 'border-orange-700/40 bg-orange-900/10 text-orange-400',
                                };
                                return (
                                    <div key={letter} className={`rounded-xl border p-4 ${colors[color].split(' ').slice(0, 2).join(' ')}`}>
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-black text-lg ${colors[color].split(' ').slice(2).join(' ')} bg-opacity-20`}
                                                style={{ background: 'rgba(0,0,0,0.3)' }}>
                                                {letter}
                                            </div>
                                            <div>
                                                <p className="font-bold text-white text-sm">Derecho de {title}</p>
                                                <div className="flex items-center gap-1 mt-0.5">
                                                    <Icon className={`w-3 h-3 ${colors[color].split(' ').slice(2).join(' ')}`} />
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Cómo ejercer ARCO — Proceso paso a paso */}
                        <div className="rounded-xl bg-gray-900/60 border border-gray-700 overflow-hidden">
                            <div className="px-5 py-4 border-b border-gray-800 flex items-center gap-2">
                                <Send className="w-4 h-4 text-purple-400" />
                                <h3 className="font-bold text-white text-sm">¿Cómo ejercer tus derechos ARCO?</h3>
                            </div>
                            <div className="p-5 space-y-4">

                                {/* Steps */}
                                <div className="relative">
                                    <div className="absolute left-4 top-8 bottom-0 w-px bg-gray-800" />
                                    <div className="space-y-4">
                                        {[
                                            {
                                                n: '01', title: 'Redacta tu solicitud',
                                                desc: 'Prepara un correo o documento que incluya la siguiente información obligatoria:',
                                                items: [
                                                    'Nombre completo y correo electrónico registrado en GlobalStore',
                                                    'Derecho que deseas ejercer: Acceso (A), Rectificación (R), Cancelación (C) u Oposición (O)',
                                                    'Descripción clara y específica de tu solicitud',
                                                    'Copia digitalizada de tu identificación oficial (INE, pasaporte)',
                                                ],
                                            },
                                            {
                                                n: '02', title: 'Envía tu solicitud',
                                                desc: 'Remite tu solicitud únicamente a través del canal oficial de privacidad:',
                                                items: ['Correo electrónico: privacidad@globalstore.mx', 'Asunto sugerido: "Ejercicio de Derecho ARCO — [Tipo de derecho]"'],
                                            },
                                            {
                                                n: '03', title: 'Acuse de recibo',
                                                desc: 'Recibirás una confirmación de recepción en un plazo máximo de:',
                                                items: ['5 días hábiles a partir de la recepción de la solicitud', 'Se te asignará un número de folio de seguimiento'],
                                            },
                                            {
                                                n: '04', title: 'Resolución',
                                                desc: 'GlobalStore resolverá y notificará su determinación en:',
                                                items: [
                                                    '20 días hábiles para comunicar la resolución',
                                                    'Si procede, los cambios se ejecutan en 15 días hábiles adicionales',
                                                    'El plazo puede prorrogarse 20 días hábiles adicionales por causas justificadas',
                                                ],
                                            },
                                        ].map(({ n, title, desc, items }) => (
                                            <div key={n} className="flex gap-4 relative">
                                                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-xs font-bold text-white flex-shrink-0 relative z-10">
                                                    {n}
                                                </div>
                                                <div className="flex-1 pb-4">
                                                    <p className="font-semibold text-white text-sm mb-1">{title}</p>
                                                    <p className="text-xs text-gray-400 mb-2">{desc}</p>
                                                    <ul className="space-y-1.5">
                                                        {items.map(item => (
                                                            <li key={item} className="flex items-start gap-2 text-xs text-gray-300">
                                                                <ChevronRight className="w-3 h-3 text-purple-400 mt-0.5 flex-shrink-0" />
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA Email */}
                                <div className="rounded-xl bg-purple-950/40 border border-purple-700/40 p-4 flex items-center justify-between gap-4">
                                    <div>
                                        <p className="text-xs text-gray-400">Canal oficial para solicitudes ARCO</p>
                                        <p className="text-sm font-bold text-purple-300">privacidad@globalstore.mx</p>
                                    </div>
                                    <button
                                        onClick={copyEmail}
                                        className="inline-flex items-center gap-2 text-xs font-medium text-purple-400 hover:text-purple-300 border border-purple-600/40 hover:border-purple-500/60 rounded-lg px-3 py-2 transition-all bg-purple-900/20 hover:bg-purple-900/40"
                                    >
                                        {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                                        {copiedEmail ? 'Copiado' : 'Copiar correo'}
                                    </button>
                                </div>

                                {/* Gratuito note */}
                                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-emerald-950/30 border border-emerald-800/40">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                                    <p className="text-xs text-emerald-200/70">
                                        <strong className="text-emerald-300">Ejercicio gratuito.</strong> El ejercicio de los derechos ARCO es completamente gratuito. No existe cargo alguno por presentar ni tramitar tu solicitud.
                                    </p>
                                </div>

                                {/* INAI escalation */}
                                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-gray-800/40 border border-gray-700">
                                    <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                                    <p className="text-xs text-gray-400">
                                        <strong className="text-gray-300">Instancia superior:</strong> Si consideras que tu solicitud no fue atendida correctamente, puedes presentar una queja ante el{' '}
                                        <a href="https://www.inai.org.mx" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">INAI</a>{' '}
                                        (Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales) en{' '}
                                        <span className="text-cyan-400">www.inai.org.mx</span> o al tel. 800 835 4324.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SectionCard>

                    {/* 8. Brechas */}
                    <SectionCard id="brechas" title="8. Notificación de Brechas de Seguridad" icon={AlertTriangle} accent="red">
                        <p className="text-sm text-gray-400 mb-4">
                            En caso de una vulneración de seguridad que comprometa tus datos personales, GlobalStore seguirá el siguiente protocolo:
                        </p>
                        <div className="grid md:grid-cols-3 gap-3 mb-4">
                            {[
                                { fase: 'Detección y contención', tiempo: '≤ 1 hora', desc: 'Aislamiento del sistema afectado e inicio de investigación.' },
                                { fase: 'Evaluación del alcance', tiempo: '≤ 24 horas', desc: 'Análisis de datos afectados y magnitud del incidente.' },
                                { fase: 'Notificación al titular', tiempo: '≤ 72 horas', desc: 'Comunicación por correo electrónico y aviso en la plataforma.' },
                            ].map(({ fase, tiempo, desc }) => (
                                <div key={fase} className="p-4 rounded-xl bg-red-900/10 border border-red-800/30 text-center">
                                    <p className="text-2xl font-black text-red-400 mb-1">{tiempo}</p>
                                    <p className="text-sm font-semibold text-white mb-1">{fase}</p>
                                    <p className="text-xs text-gray-500">{desc}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-xs text-gray-500">La notificación incluirá: naturaleza de la brecha, datos afectados, medidas correctivas adoptadas y canales de atención. El reporte al INAI se realiza conforme al Art. 20 del Reglamento de la LFPDPPP.</p>
                    </SectionCard>

                    {/* 9. Contacto */}
                    <SectionCard id="contacto" title="9. Contacto" icon={Mail} accent="cyan">
                        <div className="grid md:grid-cols-3 gap-4">
                            {[
                                { icon: Mail, label: 'Correo electrónico', value: 'privacidad@globalstore.mx', sub: 'Para solicitudes ARCO y dudas' },
                                { icon: Phone, label: 'Teléfono', value: '+52 (55) 1234-5678', sub: 'Lun – Vie, 9:00 – 18:00 hrs' },
                                { icon: MapPin, label: 'Domicilio', value: 'Ciudad de México', sub: 'México' },
                            ].map(({ icon: Icon, label, value, sub }) => (
                                <div key={label} className="flex items-start gap-3 p-4 rounded-xl bg-gray-900/50 border border-gray-800">
                                    <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-4 h-4 text-cyan-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 mb-0.5">{label}</p>
                                        <p className="text-sm font-semibold text-white">{value}</p>
                                        <p className="text-xs text-gray-500">{sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SectionCard>

                    {/* Footer */}
                    <div className="rounded-2xl bg-gray-900/40 border border-gray-800 p-5 text-center space-y-2">
                        <p className="text-xs text-gray-500">
                            Este documento se rige por la{' '}
                            <strong className="text-gray-400">Ley Federal de Protección de Datos Personales en Posesión de Particulares (LFPDPPP)</strong>,
                            publicada en el DOF el 5 de julio de 2010, y su Reglamento publicado el 21 de diciembre de 2011.
                        </p>
                        <p className="text-xs text-gray-600">GlobalStore S.A. de C.V. · Política de Privacidad v1.0 · Julio 2026</p>
                    </div>

                </main>
            </div>
        </div>
    );
}

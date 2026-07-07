'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    Shield, ArrowLeft, ChevronRight, FileText,
    Building2, Mail, Phone, MapPin, ExternalLink,
    Users, Send, Copy, Check, AlertTriangle, CheckCircle2
} from 'lucide-react';

export default function AvisoPrivacidadPage() {
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
                <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
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
                            <span className="text-gray-400 text-sm">Aviso de Privacidad</span>
                        </div>
                    </div>
                    <Link href="/privacidad" target="_blank"
                        className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 transition-colors">
                        <ExternalLink className="w-3 h-3" />
                        Política de Privacidad completa
                    </Link>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-4 py-10 space-y-6">

                {/* Encabezado del documento */}
                <div className="text-center space-y-3 pb-6 border-b border-gray-800">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-700 to-blue-800 mb-2">
                        <FileText className="w-8 h-8 text-white" />
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-1">Documento Legal Oficial</p>
                        <h1 className="text-3xl font-bold text-white">Aviso de Privacidad</h1>
                        <p className="text-gray-500 text-sm mt-1">
                            GlobalStore S.A. de C.V. · Versión 1.0 · Julio 2026
                        </p>
                    </div>
                    <div className="inline-flex items-center gap-2 bg-emerald-900/30 border border-emerald-700/40 rounded-full px-4 py-1.5 text-xs font-medium text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Emitido conforme a la LFPDPPP — DOF 5 de julio de 2010
                    </div>
                </div>

                {/* Cuerpo del aviso */}
                <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8 space-y-8 text-sm leading-relaxed text-gray-300">

                    {/* I. Responsable */}
                    <div>
                        <h2 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-cyan-400" />
                            I. Identidad y Domicilio del Responsable
                        </h2>
                        <p>
                            <strong className="text-white">GlobalStore S.A. de C.V.</strong> (en adelante "el Responsable"), con domicilio en la Ciudad de México, México, y contacto de privacidad en <span className="text-cyan-400">privacidad@globalstore.mx</span>, es responsable del tratamiento de los datos personales que usted proporcione al registrarse y utilizar la plataforma GlobalStore, de conformidad con lo establecido en la <strong className="text-gray-200">Ley Federal de Protección de Datos Personales en Posesión de Particulares (LFPDPPP)</strong> y su Reglamento.
                        </p>
                    </div>

                    <hr className="border-gray-800" />

                    {/* II. Datos recabados */}
                    <div>
                        <h2 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                            <Shield className="w-4 h-4 text-cyan-400" />
                            II. Datos Personales Recabados
                        </h2>
                        <p className="mb-3">
                            Con motivo de su registro en la plataforma, el Responsable recabará los siguientes datos personales:
                        </p>
                        <ul className="space-y-1.5 ml-4">
                            {[
                                'Nombre de usuario y correo electrónico.',
                                'Contraseña (almacenada de forma cifrada; nunca en texto plano).',
                                'Número de teléfono y domicilio, según el rol seleccionado (cliente, tienda, proveedor o empresa).',
                                'Nombre comercial, nombre del propietario o razón social, según corresponda.',
                                'Datos técnicos generados automáticamente: dirección IP, tipo de navegador y dispositivo, páginas visitadas y fecha/hora de acceso.',
                            ].map(d => (
                                <li key={d} className="flex items-start gap-2 text-gray-400">
                                    <span className="text-cyan-500 mt-1.5 flex-shrink-0">•</span>
                                    {d}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4 p-3 rounded-lg bg-blue-950/30 border border-blue-800/30 text-xs text-blue-200/70">
                            <strong className="text-blue-300">Importante:</strong> GlobalStore no recaba datos personales sensibles (salud, biometría, origen étnico, creencias religiosas ni preferencias sexuales).
                        </div>
                    </div>

                    <hr className="border-gray-800" />

                    {/* III. Finalidades */}
                    <div>
                        <h2 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                            <ChevronRight className="w-4 h-4 text-cyan-400" />
                            III. Finalidades del Tratamiento
                        </h2>
                        <p className="mb-3">Sus datos serán utilizados para las siguientes finalidades:</p>

                        <div className="space-y-3">
                            <div>
                                <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">Finalidades primarias (necesarias para el servicio)</p>
                                <ul className="space-y-1 ml-4">
                                    {[
                                        'Crear, autenticar y gestionar su cuenta de usuario.',
                                        'Procesar transacciones y gestionar pedidos entre los distintos roles de la plataforma.',
                                        'Enviarle notificaciones de actividad y alertas relacionadas con su uso de la plataforma.',
                                        'Brindar soporte técnico y atención al cliente.',
                                    ].map((f, i) => (
                                        <li key={i} className="flex items-start gap-2 text-gray-400">
                                            <span className="text-emerald-500 mt-1.5 flex-shrink-0">•</span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">Finalidades secundarias (opcionales — puede oponerse)</p>
                                <ul className="space-y-1 ml-4">
                                    {[
                                        'Envío de comunicaciones promocionales y novedades de GlobalStore.',
                                        'Análisis estadístico de uso de la plataforma para mejorar los servicios.',
                                        'Personalización de la experiencia de usuario.',
                                    ].map((f, i) => (
                                        <li key={i} className="flex items-start gap-2 text-gray-400">
                                            <span className="text-amber-500 mt-1.5 flex-shrink-0">•</span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-xs text-gray-500 mt-2">
                                    Para oponerse a las finalidades secundarias, envíe su solicitud a <span className="text-cyan-400">privacidad@globalstore.mx</span>.
                                </p>
                            </div>
                        </div>
                    </div>

                    <hr className="border-gray-800" />

                    {/* IV. Transferencias */}
                    <div>
                        <h2 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                            <ChevronRight className="w-4 h-4 text-cyan-400" />
                            IV. Transferencias de Datos
                        </h2>
                        <p>
                            Sus datos personales podrán ser compartidos con <strong className="text-gray-200">proveedores de servicios tecnológicos</strong> (como plataformas de hosting y procesadores de pago) estrictamente necesarios para la operación de la plataforma, quienes actúan como encargados del tratamiento y están obligados contractualmente a proteger su información.
                        </p>
                        <p className="mt-3">
                            Asimismo, podrán ser comunicados a <strong className="text-gray-200">autoridades gubernamentales o judiciales</strong> cuando así lo requiera la ley. Cualquier otra transferencia a terceros que requiera su consentimiento expreso será notificada previamente.
                        </p>
                        <p className="mt-3">
                            Para conocer la lista completa de destinatarios y las bases legales de cada transferencia, consulte la{' '}
                            <Link href="/privacidad#transferencias" target="_blank" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2">
                                Política de Privacidad completa
                            </Link>.
                        </p>
                    </div>

                    <hr className="border-gray-800" />

                    {/* V. Derechos ARCO */}
                    <div>
                        <h2 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                            <Users className="w-4 h-4 text-cyan-400" />
                            V. Sus Derechos ARCO
                        </h2>
                        <p className="mb-4">
                            Usted tiene derecho, en cualquier momento y de forma <strong className="text-gray-200">gratuita</strong>, a ejercer los siguientes derechos sobre sus datos personales:
                        </p>

                        <div className="grid grid-cols-2 gap-2 mb-5">
                            {[
                                { l: 'A', name: 'Acceso', desc: 'Conocer qué datos tenemos sobre usted.' },
                                { l: 'R', name: 'Rectificación', desc: 'Corregir datos inexactos o desactualizados.' },
                                { l: 'C', name: 'Cancelación', desc: 'Solicitar la eliminación de sus datos.' },
                                { l: 'O', name: 'Oposición', desc: 'Oponerse al tratamiento para fines secundarios.' },
                            ].map(({ l, name, desc }) => (
                                <div key={l} className="flex items-start gap-3 p-3 rounded-lg bg-gray-900/60 border border-gray-700/50">
                                    <span className="text-lg font-black text-purple-400 flex-shrink-0 w-5">{l}</span>
                                    <div>
                                        <p className="text-xs font-bold text-white">{name}</p>
                                        <p className="text-xs text-gray-500">{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p className="mb-4">
                            Para ejercer cualquiera de estos derechos, deberá enviar una solicitud al correo oficial del Responsable, incluyendo:
                        </p>
                        <ol className="space-y-1 ml-4 mb-4">
                            {[
                                'Su nombre completo y correo electrónico registrado en GlobalStore.',
                                'El derecho que desea ejercer (A, R, C u O) y una descripción específica de su solicitud.',
                                'Copia digitalizada de su identificación oficial vigente.',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-400">
                                    <span className="text-purple-400 font-bold flex-shrink-0">{i + 1}.</span>
                                    {item}
                                </li>
                            ))}
                        </ol>

                        <p>
                            El Responsable acusará recibo en un máximo de <strong className="text-gray-200">5 días hábiles</strong> y emitirá su resolución en un plazo no mayor a <strong className="text-gray-200">20 días hábiles</strong>, prorrogables por causas justificadas.
                        </p>

                        {/* Email CTA */}
                        <div className="mt-4 rounded-xl bg-purple-950/40 border border-purple-600/30 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <div>
                                <p className="text-xs text-gray-500">Dirija su solicitud ARCO a:</p>
                                <p className="text-base font-bold text-purple-300">privacidad@globalstore.mx</p>
                            </div>
                            <div className="flex gap-2 flex-shrink-0">
                                <button
                                    onClick={copyEmail}
                                    className="inline-flex items-center gap-2 text-xs font-medium text-purple-400 hover:text-purple-300 border border-purple-600/40 rounded-lg px-3 py-2 transition-all bg-purple-900/20 hover:bg-purple-900/40"
                                >
                                    {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                                    {copiedEmail ? 'Copiado' : 'Copiar'}
                                </button>
                                <a
                                    href="mailto:privacidad@globalstore.mx?subject=Ejercicio%20de%20Derecho%20ARCO"
                                    className="inline-flex items-center gap-2 text-xs font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-lg px-3 py-2 transition-all"
                                >
                                    <Send className="w-3.5 h-3.5" />
                                    Enviar solicitud
                                </a>
                            </div>
                        </div>

                        {/* INAI */}
                        <div className="mt-3 flex items-start gap-2.5 p-3 rounded-lg bg-gray-800/40 border border-gray-700 text-xs text-gray-400">
                            <AlertTriangle className="w-3.5 h-3.5 text-amber-400 mt-0.5 flex-shrink-0" />
                            <span>
                                Si considera que su solicitud no fue atendida conforme a la ley, puede interponer una queja ante el{' '}
                                <strong className="text-gray-300">INAI</strong> en{' '}
                                <a href="https://www.inai.org.mx" target="_blank" rel="noopener noreferrer"
                                    className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2">
                                    www.inai.org.mx
                                </a>{' '}
                                o al tel. <strong className="text-gray-300">800 835 4324</strong>.
                            </span>
                        </div>
                    </div>

                    <hr className="border-gray-800" />

                    {/* VI. Modificaciones */}
                    <div>
                        <h2 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                            <ChevronRight className="w-4 h-4 text-cyan-400" />
                            VI. Modificaciones al Aviso de Privacidad
                        </h2>
                        <p>
                            El presente Aviso de Privacidad puede ser modificado en cualquier momento. Cualquier cambio relevante le será notificado con al menos <strong className="text-gray-200">15 días naturales de anticipación</strong> a través del correo electrónico registrado en su cuenta y mediante un aviso en la plataforma.
                        </p>
                        <p className="mt-3">
                            Para conocer el detalle completo sobre las medidas de seguridad implementadas, los períodos de retención de datos, el protocolo de notificación de brechas y la lista exhaustiva de transferencias, consulte la{' '}
                            <Link href="/privacidad" target="_blank" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 inline-flex items-center gap-1">
                                Política de Privacidad completa <ExternalLink className="w-3 h-3" />
                            </Link>.
                        </p>
                    </div>

                    <hr className="border-gray-800" />

                    {/* VII. Contacto */}
                    <div>
                        <h2 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                            <Mail className="w-4 h-4 text-cyan-400" />
                            VII. Contacto
                        </h2>
                        <div className="grid sm:grid-cols-3 gap-3">
                            {[
                                { icon: Mail, label: 'Correo', value: 'privacidad@globalstore.mx' },
                                { icon: Phone, label: 'Teléfono', value: '+52 (55) 1234-5678' },
                                { icon: MapPin, label: 'Domicilio', value: 'Ciudad de México, México' },
                            ].map(({ icon: Icon, label, value }) => (
                                <div key={label} className="flex items-center gap-2.5 p-3 rounded-lg bg-gray-900/50 border border-gray-800">
                                    <Icon className="w-4 h-4 text-gray-500 flex-shrink-0" />
                                    <div>
                                        <p className="text-xs text-gray-600">{label}</p>
                                        <p className="text-xs font-medium text-gray-300">{value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Pie del documento */}
                <div className="rounded-xl bg-gray-900/30 border border-gray-800 p-5 text-center space-y-2">
                    <p className="text-xs text-gray-500 leading-relaxed max-w-2xl mx-auto">
                        Este Aviso de Privacidad fue elaborado conforme a la <strong className="text-gray-400">Ley Federal de Protección de Datos Personales en Posesión de Particulares</strong> y los Lineamientos del Aviso de Privacidad publicados en el DOF el 17 de enero de 2013.
                    </p>
                    <p className="text-xs text-gray-700">GlobalStore S.A. de C.V. · Versión 1.0 · Julio 2026</p>
                    <div className="flex items-center justify-center gap-4 pt-1">
                        <Link href="/privacidad" target="_blank"
                            className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 transition-colors">
                            <ExternalLink className="w-3 h-3" />
                            Política de Privacidad completa
                        </Link>
                        <Link href="/register" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
                            Volver al registro
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}

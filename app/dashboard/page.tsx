'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
    const [user, setUser] = useState<any>(null);
    const router = useRouter();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (!storedUser) {
            router.push('/');
            return;
        }
        setUser(JSON.parse(storedUser));
    }, [router]);

    if (!user) return <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">Cargando...</div>;

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100">
            {/* Navbar */}
            <nav className="border-b border-gray-800 bg-black/20 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                                Portal Inversiones
                            </span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-sm text-gray-400 hidden sm:block">Hola, {user.Nombre || 'Usuario'}</span>
                            <button
                                onClick={() => {
                                    localStorage.removeItem('user');
                                    router.push('/');
                                }}
                                className="px-3 py-1.5 text-sm bg-red-500/10 text-red-400 border border-red-500/20 rounded hover:bg-red-500/20 transition-colors"
                            >
                                Cerrar Sesión
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Profile Card */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-gray-800/50 border border-gray-700 rounded-xl p-6 shadow-xl backdrop-blur-sm">
                        <h2 className="text-xl font-semibold mb-4 text-white">Información Personal</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">RUT</p>
                                <p className="font-mono text-lg text-blue-300">{user.RUT}</p>
                            </div>
                            <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Nombre</p>
                                <p className="text-lg">{user.Nombre}</p>
                            </div>
                            <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email</p>
                                <p className="text-lg break-all text-gray-300">{user.Mail || 'No registrado'}</p>
                            </div>
                            <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Teléfono</p>
                                <p className="text-lg text-gray-300">{user.Telefono || 'No registrado'}</p>
                            </div>
                        </div>
                    </div>

                    {/* Bank Info Card */}
                    <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 shadow-xl backdrop-blur-sm">
                        <h2 className="text-xl font-semibold mb-4 text-white">Datos Bancarios</h2>
                        <div className="space-y-4">
                            <div className="p-3 bg-gray-900/50 rounded border-l-4 border-emerald-500">
                                <p className="text-xs text-gray-400 mb-1">Banco Principal</p>
                                <p className="font-medium text-white">{user.Banco_1 || 'No registrado'}</p>
                                <p className="text-sm font-mono text-gray-400">{user.Cuenta_1}</p>
                            </div>
                            {(user.Banco_2 || user.Cuenta_2) && (
                                <div className="p-3 bg-gray-900/50 rounded border-l-4 border-blue-500">
                                    <p className="text-xs text-gray-400 mb-1">Banco Secundario</p>
                                    <p className="font-medium text-white">{user.Banco_2}</p>
                                    <p className="text-sm font-mono text-gray-400">{user.Cuenta_2}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Debug Info (Only visible if needed) */}
                {/*
        <div className="mt-8 p-4 border border-dashed border-gray-700 rounded opacity-30 text-xs font-mono">
           <p className="mb-2 text-gray-500">Raw Data:</p>
           <pre className="whitespace-pre-wrap">{JSON.stringify(user, null, 2)}</pre>
        </div>
        */}
            </main>
        </div>
    );
}

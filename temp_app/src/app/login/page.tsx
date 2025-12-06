'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, User, ArrowRight } from 'lucide-react';

export default function LoginPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Mock login connection
        setTimeout(() => {
            // Set cookie
            document.cookie = "auth_token=valid; path=/; max-age=3600";
            setLoading(false);
            router.push('/dashboard');
            router.refresh();
        }, 1000);
    };

    return (
        <div className="flex h-full min-h-[calc(100vh-200px)] items-center justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8 bg-white p-8 shadow-xl rounded-lg border border-gray-100">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-bold tracking-tight text-[var(--primary)]">
                        Acceso Privado
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Intranet de Clientes y Partners
                    </p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                    <div className="space-y-4 rounded-md shadow-sm">
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="appearance-none rounded-md relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[var(--primary)] focus:border-[var(--primary)] focus:z-10 sm:text-sm"
                                    placeholder="Correo Electrónico"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Contraseña</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="appearance-none rounded-md relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[var(--primary)] focus:border-[var(--primary)] focus:z-10 sm:text-sm"
                                    placeholder="Contraseña"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-[var(--primary)] focus:ring-[var(--primary)] border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                Recordarme
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-[var(--primary)] hover:text-[var(--primary)]/80">
                                ¿Olvidaste tu contraseña?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[var(--primary)] hover:bg-[var(--primary)]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary)] transition-all"
                        >
                            {loading ? (
                                <span className="animate-spin mr-2">⏳</span>
                            ) : (
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <ArrowRight className="h-4 w-4 text-[var(--accent)] group-hover:text-white transition-colors" />
                                </span>
                            )}
                            {loading ? 'Ingresando...' : 'Iniciar Sesión'}
                        </button>
                    </div>
                </form>

                <div className="mt-6 border-t border-gray-100 pt-6">
                    <p className="text-center text-xs text-gray-500">
                        Este es un sistema seguro. Su IP está siendo registrada.
                    </p>
                </div>
            </div>
        </div>
    );
}

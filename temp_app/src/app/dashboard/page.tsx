import { FileText, Users, DollarSign, Activity } from 'lucide-react';

export default function DashboardPage() {
    const stats = [
        { name: 'Portafolio Activo', value: '$12.5M', icon: DollarSign, change: '+2.5%' },
        { name: 'Operaciones', value: '156', icon: Activity, change: '+12%' },
        { name: 'Documentos', value: '45', icon: FileText, change: '0%' },
        { name: 'Equipo', value: '12', icon: Users, change: '+3%' },
    ];

    return (
        <div className="bg-slate-50 min-h-screen py-8">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-[var(--primary)]">Dashboard</h1>
                    <p className="text-gray-600">Bienvenido de nuevo, Usuario.</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat) => (
                        <div key={stat.name} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                                    <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                                </div>
                                <div className="p-3 bg-blue-50 rounded-full">
                                    <stat.icon className="h-6 w-6 text-[var(--primary)]" />
                                </div>
                            </div>
                            <div className="mt-4">
                                <span className="text-sm text-green-600 font-medium">{stat.change}</span>
                                <span className="text-sm text-gray-400 ml-2">vs mes anterior</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Recent Activity Section */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-gray-800">Operaciones Recientes</h3>
                        <button className="text-sm text-[var(--primary)] font-medium hover:underline">Ver todo</button>
                    </div>
                    <div className="divide-y divide-gray-100">
                        {[1, 2, 3, 4, 5].map((item) => (
                            <div key={item} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold">
                                        OP
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Operación #{202400 + item}</p>
                                        <p className="text-xs text-gray-500">Factoring Nacional • Cliente A</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-bold text-gray-900">$1,250,000</p>
                                    <p className="text-xs text-green-600">Aprobado</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

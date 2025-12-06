import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[var(--primary)] text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4">VESTING PARTNERS</h3>
                        <p className="text-gray-300 text-sm max-w-md">
                            Especialistas en el análisis y gestión de riesgo crediticio.
                            Enfocados en crear retornos diferenciados para nuestros clientes.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-semibold mb-4 text-[var(--accent)]">Navegación</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="#" className="hover:text-white">Nosotros</Link></li>
                            <li><Link href="#" className="hover:text-white">Productos y Servicios</Link></li>
                            <li><Link href="#" className="hover:text-white">Contacto</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold mb-4 text-[var(--accent)]">Contacto</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>Rosario Norte 100, piso 19</li>
                            <li>Las Condes, Santiago</li>
                            <li>contacto@vestingpartners.cl</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-12 pt-8 text-center text-xs text-gray-400">
                    © {new Date().getFullYear()} Vesting Partners. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}

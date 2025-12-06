'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold tracking-tight text-[var(--primary)]">VESTING</span>
                        <span className="text-xs tracking-widest text-[var(--secondary)] uppercase">PARTNERS</span>
                    </div>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="#" className="text-sm font-medium text-gray-600 hover:text-[var(--primary)] transition-colors">
                        NOSOTROS
                    </Link>
                    <Link href="#" className="text-sm font-medium text-gray-600 hover:text-[var(--primary)] transition-colors">
                        PRODUCTOS Y SERVICIOS
                    </Link>
                    <Link href="#" className="text-sm font-medium text-gray-600 hover:text-[var(--primary)] transition-colors">
                        CONTACTO
                    </Link>
                    <Link href="/login" className="btn btn-primary">
                        LOGIN
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-gray-600"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-t border-gray-100 bg-white absolute w-full left-0 shadow-lg">
                    <div className="flex flex-col p-4 gap-4">
                        <Link href="#" className="text-sm font-medium text-gray-600 py-2">
                            NOSOTROS
                        </Link>
                        <Link href="#" className="text-sm font-medium text-gray-600 py-2">
                            PRODUCTOS Y SERVICIOS
                        </Link>
                        <Link href="#" className="text-sm font-medium text-gray-600 py-2">
                            CONTACTO
                        </Link>
                        <Link href="/login" className="btn btn-primary text-center">
                            LOGIN
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

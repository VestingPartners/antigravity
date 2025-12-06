import { NextResponse } from 'next/server';
import { getPool } from '@/lib/db';
import sql from 'mssql';

export async function POST(request: Request) {
    try {
        const { identifier } = await request.json();

        if (!identifier) {
            return NextResponse.json({ success: false, message: 'RUT es requerido' }, { status: 400 });
        }

        const pool = await getPool();

        // Query to find the user by RUT
        const result = await pool.request()
            .input('rut', sql.VarChar, identifier)
            .query('SELECT TOP 1 * FROM RUT WHERE RUT = @rut');

        if (result.recordset.length > 0) {
            const user = result.recordset[0];
            // Start a session or just return success for now (simple demo)
            return NextResponse.json({ success: true, user });
        } else {
            return NextResponse.json({ success: false, message: 'Usuario no encontrado en la base de datos' }, { status: 401 });
        }
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json({ success: false, message: 'Error de conexión con el servidor' }, { status: 500 });
    }
}

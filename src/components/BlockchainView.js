import React, { useEffect, useState } from 'react';
import { getChain } from '../services/blockchainAPI';

const BlockchainView = () => {
    const [chain, setChain] = useState([]);

    useEffect(() => {
        const fetchChain = async () => {
            try {
                const data = await getChain();
                setChain(data);
            } catch (error) {
                console.error('Error al cargar la cadena de bloques:', error);
            }
        };

        // Llamada inicial para obtener la cadena
        fetchChain();

        // Configurar el intervalo para actualizar cada 10 segundos
        const intervalId = setInterval(fetchChain, 10000);

        // Limpiar el intervalo cuando el componente se desmonte
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Cadena de Bloques</h2>
            <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                {chain.map((block, index) => (
                    <div 
                        key={index} 
                        className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                    >
                        <h4 className="text-lg font-semibold text-gray-700 mb-2">Bloque {block.index}</h4>
                        <p className="text-sm text-gray-600"><strong>Hash:</strong> {block.hash}</p>
                        <p className="text-sm text-gray-600"><strong>Hash Anterior:</strong> {block.previousHash}</p>
                        <p className="text-sm text-gray-600"><strong>Datos:</strong> {JSON.stringify(block.data)}</p>
                        <p className="text-sm text-gray-600"><strong>Timestamp:</strong> {new Date(block.timestamp).toLocaleString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlockchainView;

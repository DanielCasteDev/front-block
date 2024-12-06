import React, { useState } from 'react';
import { verifyChain } from '../services/blockchainAPI';

const VerifyChain = () => {
    const [isValid, setIsValid] = useState(null);

    const handleVerify = async () => {
        try {
            const response = await verifyChain();
            setIsValid(response.isValid);
        } catch (error) {
            console.error('Error al verificar la cadena:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-8 px-4">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Verificar Cadena de Bloques</h2>
                <button
                    onClick={handleVerify}
                    className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                    Verificar
                </button>
                {isValid !== null && (
                    <p
                        className={`mt-4 text-center font-medium ${
                            isValid ? 'text-green-500' : 'text-red-500'
                        }`}
                    >
                        La cadena de bloques es {isValid ? 'válida' : 'inválida'}
                    </p>
                )}
            </div>
        </div>
    );
};

export default VerifyChain;

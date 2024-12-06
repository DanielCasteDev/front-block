import React, { useState } from 'react';
import { addBlock } from '../services/blockchainAPI';

const AddBlock = () => {
    const [data, setData] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await addBlock(data);
            setMessage(response.message);
        } catch (error) {
            setMessage('Error al agregar el bloque');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-8 px-4">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Agregar Bloque</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <textarea
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                        placeholder="Ingresa los datos del bloque"
                        rows="4"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                        Agregar Bloque
                    </button>
                </form>
                {message && (
                    <p
                        className={`mt-4 text-center font-medium ${
                            message === 'Error al agregar el bloque'
                                ? 'text-red-500'
                                : 'text-green-500'
                        }`}
                    >
                        {message}
                    </p>
                )}
            </div>
        </div>
    );
};

export default AddBlock;

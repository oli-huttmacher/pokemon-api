"use client"
import { useEffect, useState } from "react";

interface PokemonData {
    message: string;
    data: string[];
}

const Pokemon: React.FC = () => {
    const [data, setData] = useState<PokemonData | null>(null);
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        fetch('http://localhost:3001/pokemon?valid=true')
        
        .then(response => {
            if(!response.ok) {
                throw new Error (`HTTPP error! status: ${response.status}`);
            }
            return response.json()
        })
        .then((data: PokemonData) => setData(data))
        .catch(error => setError(error.message));
    }, []);

    return (
        <div>
            <h1>Data from Node.js</h1>
            {error ? (
                <p>Error: {error}</p>
            ) : data ? (
                <div>
                    <p>{data.message}</p>
                    <ul>
                        {data.data.map((pokemon, index) => (
                            <li key={index}>{pokemon}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Pokemon;
import React, { useEffect, useState } from 'react';

export default function App() {
    const [serverMessage, setServerMessage] = useState('Calling API...');

    useEffect(() => {
        fetch('./api').then(
            response => response.json()
        ).then(
            payload => setServerMessage(payload.message)
        );
    }, []);

    return (
        <section className="eds-l-mar-all-4">
            <h1>This is your App ! Yay</h1>
            <p>{serverMessage}</p>
        </section>
    );
}
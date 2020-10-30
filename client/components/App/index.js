import React from 'react';

const App = () => (
  <section className="eds-l-mar-all-4">
    <h1>This is your App ! Yay</h1>
    <p>This is a placeholder for the server message</p>
  </section>
);

export default App;

// const [serverMessage, setServerMessage] = useState('Calling API...');

//   useEffect(() => {
//     fetch('./api').then(
//       response => response.json()
//     ).then(
//       payload => setServerMessage(payload.message)
//     );
//   }, []);

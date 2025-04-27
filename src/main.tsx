import { createRoot } from 'react-dom/client';
import ComponentA from 'component-a';
import ComponentB from 'component-b';
import ComponentC from 'component-c';
import { ReactElement } from 'react';

export function App(): ReactElement {
    return (
        <div>
            <h1>Main Application</h1>
            <ComponentA />
            <ComponentB />
            <ComponentC />
        </div>
    );
};

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(<App />)
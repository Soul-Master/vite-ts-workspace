import ComponentA from 'component-a';
import { ReactElement } from 'react';

export default function ComponentC(): ReactElement {
    return (
        <div>
            <h2>Hello from Component C!</h2>
            <div>
                <h4>Embedded Component A:</h4>
                <ComponentA />
            </div>
        </div>
    );
}
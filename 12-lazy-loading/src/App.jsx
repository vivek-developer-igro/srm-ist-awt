import React, { Suspense, lazy } from 'react';

const ComponentA = lazy(() => import('./ComponentA'));
const ComponentB = lazy(() => import('./ComponentB'));

export default function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading Component A...</div>}>
        <ComponentA />
      </Suspense>

      <Suspense fallback={<div>Loading Component B...</div>}>
        <ComponentB />
      </Suspense>
    </div>
  );
}

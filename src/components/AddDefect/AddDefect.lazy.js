import React, { lazy, Suspense } from 'react';

const LazyAddDefect = lazy(() => import('./AddDefect'));

const AddDefect = props => (
  <Suspense fallback={null}>
    <LazyAddDefect {...props} />
  </Suspense>
);

export default AddDefect;

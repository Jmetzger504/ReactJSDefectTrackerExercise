import React, { lazy, Suspense } from 'react';

const LazyDefectTracker = lazy(() => import('./DefectTracker'));

const DefectTracker = props => (
  <Suspense fallback={null}>
    <LazyDefectTracker {...props} />
  </Suspense>
);

export default DefectTracker;

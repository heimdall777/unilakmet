import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Material from './material';
import MaterialDetail from './material-detail';
import MaterialUpdate from './material-update';
import MaterialDeleteDialog from './material-delete-dialog';

const MaterialRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<Material />} />
    <Route path="new" element={<MaterialUpdate />} />
    <Route path=":id">
      <Route index element={<MaterialDetail />} />
      <Route path="edit" element={<MaterialUpdate />} />
      <Route path="delete" element={<MaterialDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default MaterialRoutes;

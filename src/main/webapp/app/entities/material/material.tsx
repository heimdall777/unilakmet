import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IMaterial } from 'app/shared/model/material.model';
import { getEntities } from './material.reducer';

export const Material = () => {
  const dispatch = useAppDispatch();

  const location = useLocation();
  const navigate = useNavigate();

  const materialList = useAppSelector(state => state.material.entities);
  const loading = useAppSelector(state => state.material.loading);

  useEffect(() => {
    dispatch(getEntities({}));
  }, []);

  const handleSyncList = () => {
    dispatch(getEntities({}));
  };

  return (
    <div>
      <h2 id="material-heading" data-cy="MaterialHeading">
        <Translate contentKey="unilakmetApp.material.home.title">Materials</Translate>
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="unilakmetApp.material.home.refreshListLabel">Refresh List</Translate>
          </Button>
          <Link to="/material/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="unilakmetApp.material.home.createLabel">Create new Material</Translate>
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {materialList && materialList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="unilakmetApp.material.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="unilakmetApp.material.name">Name</Translate>
                </th>
                <th>
                  <Translate contentKey="unilakmetApp.material.unit">Unit</Translate>
                </th>
                <th>
                  <Translate contentKey="unilakmetApp.material.item">Item</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {materialList.map((material, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/material/${material.id}`} color="link" size="sm">
                      {material.id}
                    </Button>
                  </td>
                  <td>{material.name}</td>
                  <td>
                    <Translate contentKey={`unilakmetApp.Unit.${material.unit}`} />
                  </td>
                  <td>{material.item ? <Link to={`/item/${material.item.id}`}>{material.item.id}</Link> : ''}</td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`/material/${material.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`/material/${material.id}/edit`} color="primary" size="sm" data-cy="entityEditButton">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`/material/${material.id}/delete`} color="danger" size="sm" data-cy="entityDeleteButton">
                        <FontAwesomeIcon icon="trash" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.delete">Delete</Translate>
                        </span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && (
            <div className="alert alert-warning">
              <Translate contentKey="unilakmetApp.material.home.notFound">No Materials found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Material;

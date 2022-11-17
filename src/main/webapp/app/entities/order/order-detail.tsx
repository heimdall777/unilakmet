import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './order.reducer';

export const OrderDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const orderEntity = useAppSelector(state => state.order.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="orderDetailsHeading">
          <Translate contentKey="unilakmetApp.order.detail.title">Order</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{orderEntity.id}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="unilakmetApp.order.name">Name</Translate>
            </span>
          </dt>
          <dd>{orderEntity.name}</dd>
          <dt>
            <span id="description">
              <Translate contentKey="unilakmetApp.order.description">Description</Translate>
            </span>
          </dt>
          <dd>{orderEntity.description}</dd>
          <dt>
            <span id="startDate">
              <Translate contentKey="unilakmetApp.order.startDate">Start Date</Translate>
            </span>
          </dt>
          <dd>{orderEntity.startDate ? <TextFormat value={orderEntity.startDate} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="estimatedEndDate">
              <Translate contentKey="unilakmetApp.order.estimatedEndDate">Estimated End Date</Translate>
            </span>
          </dt>
          <dd>
            {orderEntity.estimatedEndDate ? <TextFormat value={orderEntity.estimatedEndDate} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="status">
              <Translate contentKey="unilakmetApp.order.status">Status</Translate>
            </span>
          </dt>
          <dd>
            <Translate contentKey={`unilakmetApp.OrderStatus.${orderEntity.status}`} />
          </dd>
          <dt>
            <span id="url">
              <Translate contentKey="unilakmetApp.order.url">Url</Translate>
            </span>
          </dt>
          <dd>
            <a href={orderEntity.url} target="_blank" rel="noreferrer noopener">
              {orderEntity.url}
            </a>
          </dd>
        </dl>
        <Button tag={Link} to="/order" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/order/${orderEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default OrderDetail;

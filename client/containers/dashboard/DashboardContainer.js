import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import custom components
import Dashboard from '../../components/dashboard/Dashboard';
import * as crudAction from '../../../common-modules/client/actions/crudAction';

const DashboardContainer = ({ entity, title }) => {
  const dispatch = useDispatch();
  const { data, error } = useSelector((state) => state[entity]);

  useEffect(() => {
    dispatch(crudAction.fetchAll(entity, {}));
  }, []);

  return <Dashboard stats={data || {}} title={title} />;
};

export default DashboardContainer;

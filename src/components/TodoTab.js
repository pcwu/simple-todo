import React, { PropTypes } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';

const TodoTab = ({ setFilter }) => (
  <Tabs>
    <Tab
      label="ALL"
      icon={<FontIcon className="material-icons">assignment</FontIcon>}
      onClick={() => setFilter('SHOW_ALL')}
    />
    <Tab
      label="ACTIVE"
      icon={<FontIcon className="material-icons">today</FontIcon>}
      onClick={() => setFilter('SHOW_ACTIVE')}
    />
    <Tab
      label="COMPLETED"
      icon={<FontIcon className="material-icons">check_circle</FontIcon>}
      onClick={() => setFilter('SHOW_COMPLETED')}
    />
  </Tabs>
);

export default TodoTab;

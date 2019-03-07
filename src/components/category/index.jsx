import React from 'react';
import { List, Icon } from 'semantic-ui-react';

import './style/index.scss';

const Category = () => (
  <div className="myCategories">
    <List horizontal relaxed="very" className="category">
      <List.Item>
        <List.Content className="catContent">
          <List.Header className="myListText">All Categories</List.Header>
          <Icon name="sidebar" />
        </List.Content>
      </List.Item>
      <List.Item className="categoryLists">
        <List.Content className="myListText">
          Daniel Louise
        </List.Content>
      </List.Item>
      <List.Item className="categoryLists">
        <List.Content>
          Stevie Feliciano
        </List.Content>
      </List.Item>
      <List.Item className="categoryLists">
        <List.Content>
          Elliot Fu
        </List.Content>
      </List.Item>
    </List>
  </div>
);

export default Category;

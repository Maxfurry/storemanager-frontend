import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import faker from 'faker';

import './style/index.scss';

const Products = () => (
  <div className="productContainer">
    <div>
      <p>Home</p>
      <h1>Popular</h1>
    </div>
    <div className="myProducts">
      <Card className="myCard">
        <Image src={faker.image.fashion(400, 500)} className="previewImage" />
        <Card.Content className="productDetails">
          <Card.Header className="productTitle">Matthew</Card.Header>
          <Card.Meta className="productPrice">
            <span className="date">Joined in 2015</span>
          </Card.Meta>
          <Button animated="vertical" className="addToCart">
            <Button.Content visible>Shop</Button.Content>
            <Button.Content hidden>
              <Icon name="shop" />
            </Button.Content>
          </Button>
        </Card.Content>
      </Card>

      <Card className="myCard">
        <Image src={faker.image.food(400, 500)} className="previewImage" />
        <Card.Content className="productDetails">
          <Card.Header className="productTitle">Matthew</Card.Header>
          <Card.Meta className="productPrice">
            <span className="date">Joined in 2015</span>
          </Card.Meta>
          <Button animated="vertical" className="addToCart">
            <Button.Content visible>Shop</Button.Content>
            <Button.Content hidden>
              <Icon name="shop" />
            </Button.Content>
          </Button>
        </Card.Content>
      </Card>

      <Card className="myCard">
        <Image src="http://cm3inc.com/wp-content/uploads/2016/08/npa2.jpg" className="previewImage" />
        <Card.Content className="productDetails">
          <Card.Header className="productTitle">Matthew</Card.Header>
          <Card.Meta className="productPrice">
            <span className="date">Joined in 2015</span>
          </Card.Meta>
          <Button animated="vertical" className="addToCart">
            <Button.Content visible>Shop</Button.Content>
            <Button.Content hidden>
              <Icon name="shop" />
            </Button.Content>
          </Button>
        </Card.Content>
      </Card>

      <Card className="myCard">
        <Image src={faker.image.people(400, 500)} className="previewImage" />
        <Card.Content className="productDetails">
          <Card.Header className="productTitle">Matthew</Card.Header>
          <Card.Meta className="productPrice">
            <span className="date">Joined in 2015</span>
          </Card.Meta>
          <Button animated="vertical" className="addToCart">
            <Button.Content visible>Shop</Button.Content>
            <Button.Content hidden>
              <Icon name="shop" />
            </Button.Content>
          </Button>
        </Card.Content>
      </Card>

      <Card className="myCard">
        <Image src={faker.image.transport(400, 500)} className="previewImage" />
        <Card.Content className="productDetails">
          <Card.Header className="productTitle">Matthew</Card.Header>
          <Card.Meta className="productPrice">
            <span className="date">Joined in 2015</span>
          </Card.Meta>
          <Button animated="vertical" className="addToCart">
            <Button.Content visible>Shop</Button.Content>
            <Button.Content hidden>
              <Icon name="shop" />
            </Button.Content>
          </Button>
        </Card.Content>
      </Card>

      <Card className="myCard">
        <Image src={faker.image.technics(400, 500)} className="previewImage" />
        <Card.Content className="productDetails">
          <Card.Header className="productTitle">Matthew</Card.Header>
          <Card.Meta className="productPrice">
            <span className="date">Joined in 2015</span>
          </Card.Meta>
          <Button animated="vertical" className="addToCart">
            <Button.Content visible>Shop</Button.Content>
            <Button.Content hidden>
              <Icon name="shop" />
            </Button.Content>
          </Button>
        </Card.Content>
      </Card>

      <Card className="myCard">
        <Image src={faker.image.sports(400, 500)} className="previewImage" />
        <Card.Content className="productDetails">
          <Card.Header className="productTitle">Matthew</Card.Header>
          <Card.Meta className="productPrice">
            <span className="date">Joined in 2015</span>
          </Card.Meta>
          <Button animated="vertical" className="addToCart">
            <Button.Content visible>Shop</Button.Content>
            <Button.Content hidden>
              <Icon name="shop" />
            </Button.Content>
          </Button>
        </Card.Content>
      </Card>

      <Card className="myCard">
        <Image src={faker.image.food(400, 500)} className="previewImage" />
        <Card.Content className="productDetails">
          <Card.Header className="productTitle">Matthew</Card.Header>
          <Card.Meta className="productPrice">
            <span className="date">Joined in 2015</span>
          </Card.Meta>
          <Button animated="vertical" className="addToCart">
            <Button.Content visible>Shop</Button.Content>
            <Button.Content hidden>
              <Icon name="shop" />
            </Button.Content>
          </Button>
        </Card.Content>
      </Card>
    </div>
  </div>
);

export default Products;

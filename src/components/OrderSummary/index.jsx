import React from 'react';

import Card from '../ui/Card';
import Feature from '../ui/Feature';

const OrderSummary = () => (
  <Card>
    <Card.Header />
    <Card.Body>
      <Card.Title>Order Summary</Card.Title>
      <Card.Description>
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </Card.Description>

      <Feature>
        <Feature.Icon src="./images/icon-music.svg" alt="Price" />
        <Feature.Info>
          <Feature.Title>
            Annual Plan
          </Feature.Title>
          <Feature.Text>
            $59.99/year
          </Feature.Text>
        </Feature.Info>
        <Feature.Action label="Change" />
      </Feature>

      <Card.Actions>
        <Card.Confirm>
          Proceed to Payment
        </Card.Confirm>
        <Card.Cancel>
          Cancel Order
        </Card.Cancel>
      </Card.Actions>
    </Card.Body>
  </Card>
);

export default OrderSummary;

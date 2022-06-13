import { Client, Environment } from 'square';

import {
  listCustomers,
  createCustomer
} from './src/customers';
import {
  createBreakType
} from './src/labor';
import {
  listPayments
} from './src/payments';

const client = new Client({
  accessToken: 'ACCESS_TOKEN',
  environment: Environment.Sandbox,
});

// Customers endpoints
listCustomers(client);
createCustomer(client);

// Labor endpoints
createBreakType(client);

// Payments endpoints
listPayments(client);

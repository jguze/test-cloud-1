import type { Client } from 'square';
/**
  * Lists a business's customers.
*/
export async function listCustomers(client: Client) {
  try {
  const response = await client.customersApi.listCustomers();

  console.log(response.result);
} catch(error) {
  console.log(error);
}
};

/**
  * Creates a new customer for a business, which can have associated cards on file.
*/
export async function createCustomer(client: Client) {
  try {
  const response = await client.customersApi.createCustomer({
    givenName: 'Amelia',
    familyName: 'Earhart',
    emailAddress: 'Amelia.Earhart@example.com',
    address: {
      addressLine1: '500 Electric Ave',
      addressLine2: 'Suite 600',
      locality: 'New York',
      administrativeDistrictLevel1: 'NY',
      postalCode: '10003',
      country: 'US'
    },
    phoneNumber: '1-212-555-4240',
    referenceId: 'YOUR_REFERENCE_ID',
    note: 'a customer'
  });

  console.log(response.result);
} catch(error) {
  console.log(error);
}
};

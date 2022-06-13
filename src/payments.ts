import type { Client } from 'square';
/**
  * Retrieves a list of payments taken by the account making the request.
*/
export async function listPayments(client: Client) {
  try {
  const response = await client.paymentsApi.listPayments();

  console.log(response.result);
} catch(error) {
  console.log(error);
}
};

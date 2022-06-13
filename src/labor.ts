import type { Client } from 'square';
/**
  * Creates a new `BreakType`.
*/
export async function createBreakType(client: Client) {
  try {
  const response = await client.laborApi.createBreakType({
    idempotencyKey: 'PAD3NG5KSN2GL',
    breakType: {
      locationId: 'CGJN03P1D08GF',
      breakName: 'Lunch Break',
      expectedDuration: 'PT30M',
      isPaid: true
    }
  });

  console.log(response.result);
} catch(error) {
  console.log(error);
}
};



// const env = process.env.NODE_ENV == "production";
const apiServer = "http://localhost:8081/"
/**
 *
 * final case class Transaction(
  networkId: NetworkId,
  inputs: Set[Address],
  outputs: Set[(Address, BigNat)],
)
 */
export function transaction() {
  return fetch(apiServer + "/transaction", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      networkId: 0,
      inputs: [],
      outputs: []
    })
  })
}


/**
 *
 * @param json responseするjson
 * @returns 200 OK Response
 */
export default function responseOk(json: Object): Response {
  const jsonString = JSON.stringify(json)

  return new Response(jsonString, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

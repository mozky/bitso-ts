// TODO: Need to find a way of parsing the JSON payload to T

export default class BitsoResponse<T> {
  public success: string
  public payload: T[]
}

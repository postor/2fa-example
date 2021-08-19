import { useState } from "react"
import { Result } from "./Result"

export const Generate = () => {
  let [key, setKey] = useState('testkey')

  return <div>
    secret:<input value={key} onChange={e => setKey(e.target.value)} />
    <Result key={key} secret={key} />
  </div>
}
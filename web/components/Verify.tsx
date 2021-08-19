import { useState } from "react"
import { validate } from "../../apis/totp"

export const Verify = () => {
  let [key, setKey] = useState('testkey')
  let [token, setToken] = useState('')
  let [message, setMessage] = useState('')
  return <div>
    secret:<input value={key} onChange={e => setKey(e.target.value)} />
    <br />
    token:<input value={token} onChange={e => setToken(e.target.value)} />
    <br />
    <button onClick={() => {
      validate(token, key)
        .then(ok => setMessage(ok === null ? `fail!` : `pass!`))
        .catch(e => setMessage(JSON.stringify(e)))
    }}>validate</button>
    <p>{message}</p>
  </div>
}
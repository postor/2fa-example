import { useEffect, useState } from "react"
import { base32 } from "../../apis/totp"
import QRCode from 'qrcode.react'

export const Authy = () => {
  let [key, setKey] = useState('testkey')
  let [uri, setUri] = useState('')

  useEffect(() => {
    base32(key).then(x => setUri(`otpauth://totp/ABC:userabc?secret=${x}&issuer=ABC`))
  }, [key])

  return <div>
    secret:<input value={key} onChange={e => setKey(e.target.value)} />
    {key ? <div>
      uri:{uri}
      <br />
      <QRCode value={uri} />
    </div> : null}
    <p>手机下载authy客户端扫码添加账号 | download authy app to scan QRCode</p>
  </div>
}
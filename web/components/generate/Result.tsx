import { generate } from "../../../apis/totp"
import { useEffect, useState } from "react"

export const Result = ({ secret = '' }) => {
  let [start, setStart] = useState(new Date())
  let [tick, setTick] = useState(-1)
  let [otp, setOtp] = useState('loading...')
  useEffect(() => {
    setTick(30)
    setOtp('loading...')
    generate(secret).then(token => setOtp(token))
  }, [start])

  useEffect(() => {
    if (tick == -1) return
    if (tick > 0) {
      let timeout = setTimeout(() => setTick(x => x - 1), 1000)
      return () => clearTimeout(timeout)
    }
    // tick==0
    setStart(new Date())
  }, [tick])

  return <div>
    <p>tick:{tick}</p>
    <p>OTP:{otp}</p>
  </div>
}
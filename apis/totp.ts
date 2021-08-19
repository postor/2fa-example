import { TOTP, base32 as base32FromLib } from '2fa-hotp-totp'

export const validate = async (token: string, key: string) => TOTP.validate({ token, key })
export const generate = async (key: string) => TOTP.generate({ key })
export const base32 = async (key: string) => base32FromLib(key)
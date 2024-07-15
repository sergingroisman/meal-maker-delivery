import { AccountModel } from '@/domain/models/account-model'

type AuthenticationParams = {
    phoneNumber: string
    password: string
}
/**
 * * Authentication Protocol layer
 */
export interface Authentication {
    auth: (params: AuthenticationParams) => Promise<AccountModel>
}
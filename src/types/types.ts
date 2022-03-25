type CompanyType = {
    name: string
    catchPhrase: string
    bs: string
}

type GeoType = {
    lat: string
    lng: string
}

type AddressType = {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: GeoType
}

export type UsersType = {
    id: number
    name: string
    username: string
    email: string
    address: AddressType
    phone: string
    website: string
    company: CompanyType
}
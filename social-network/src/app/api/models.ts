type Email = string;
type ID = number;
type PhoneNumber = string;
type Website = string;

export interface IPost {
    userId: ID,
    id: number,
    title: string,
    body: string
}

export interface IComment {
    postId: ID,
    id: ID,
    name: string,
    email: Email,
    body: string
}

export interface ICoordinates {
    lat: string,
    lng: string
}

export interface IAddress {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: ICoordinates
}

export interface ICompany {
    name: string,
    catchPhrase: string,
    bs: string
  }

export interface IUser {
    id: ID,
    name: string,
    username: string,
    email: Email,
    address: IAddress,
    phone: PhoneNumber,
    website: Website,
    company: ICompany
  }

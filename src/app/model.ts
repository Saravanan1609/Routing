export interface UserData{
    id?:string,
    username:string,
    phone :number,
    email: string,
    country:string,
    state :string,
    countrycode:number,
    skills: Array<Skills>
}
interface Skills{
    rating : string,
    Skillname : string
}
export interface LoginData {
    email : string,
    password : string
}

export interface TokenData{
    token : string
}
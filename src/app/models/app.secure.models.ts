export class RegisterUser {
  constructor(
    public Email: string,
    public Password: string,
    public ConfirmPassword: string
  ){}
}

export class LoginUser {
  constructor(
    public UserName: string,
    public Password: string
  ){}
}

export class ResponseData {
  constructor(
    public message: string
  ){}
}

export class Product {
  constructor(public ProductRowId: number,
     public ProductName: string,
     public Price: number
    ){
  }
}

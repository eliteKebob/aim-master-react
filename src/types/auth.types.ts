export interface ILogoutRequest {
  refresh: string;
}

export interface IAuthRequest {
  username: string;
  password: string;
}

export interface IAuthResponse {
  access: string;
  refresh: string;
}

export type RoleEnum = "role_admin" | "ROLE_CLIENT";

export type CredentialsDTO = {
    email: string;
    password: string;
};

export type AccessTokenPayloadDTO = {
    exp: number,
    user_name: string,
    authorities: RoleEnum[];
};

export interface LoginResponse {

    id: string; //sesion id
    module_name: string; // name of module - for instance - users
     name_value_list: {
        user_name: {
            name: string,
            value: string // User name .value - for instance combuscol
        },
        user_id: {
            name: string,
            value: string // User id .value - for instance hexadecimal
        },
      
        user_language: {
            name: string,
            value: string
        },
        user_currency_id: {
            name: string,
            value: number
        },
        user_currency_name: {
            name: string,
            value: string
        }
 }
}

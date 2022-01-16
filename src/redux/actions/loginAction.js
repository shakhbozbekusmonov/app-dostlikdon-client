import axios from "axios";

export function login(event, errors, values) {
    console.log(values);

    axios.post("https://dostlikdon.herokuapp.com/auth/token/login", values)
        .then((res) => {
            console.log(res);

        })

    return {}
}
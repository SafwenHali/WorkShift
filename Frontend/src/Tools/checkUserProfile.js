/* import axios from "axios";
import {
    useReducer,
    useEffect
} from "react";

const initialState = {
    data: [],
    loading: false,
};

function checkUserProfile(navigate) {
    //const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {

        dispatch({
            type: "api_request"
        });

        const access_token = localStorage.getItem("at");
        console.log(access_token);
        console.log("Render the <--> system");

        axios
            .post(
                "http://127.0.0.1:7000/getRole", {
                    key: "posted-elem"
                }, {
                    headers: {
                        "Content-Type": "application/json",
                        at: access_token
                    },
                }
            )
            .then((r) => {
                console.log(r);
                if (r.data.role === "instructor") {
                    // navigate("/formateur", { replace: true });
                } else if (r.data.role === "student") {
                    // navigate("/student", { replace: true });
                } else if (r.data.role === "admin") {
                    // navigate("/Admin", { replace: true });
                } else if (r.data.role === "enterprise") {
                    // navigate("/Enterprise", { replace: true });
                } else {
                    // alert("undefined Role");
                }
            });



    }, []);

    return state;
}

export default checkUserProfile; */
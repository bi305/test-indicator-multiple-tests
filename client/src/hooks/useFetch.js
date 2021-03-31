import { useEffect, useReducer } from "react";
import axios from "axios";

const ACTIONS = {
    MAKE_REQUEST: "make-request",
    GET_DATA: "get-data",
    ERROR: "error",
};

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.MAKE_REQUEST:
            return { loading: true, data: [] };
        case ACTIONS.GET_DATA:
            return { ...state, loading: false, data: action.payload.data };
        case ACTIONS.ERROR:
            return { ...state, loading: false, error: action.payload.error, data: [] };
        default:
            return state;
    }
}

export default function useFetch(url) {
    const [state, dispatch] = useReducer(reducer, { data: [], loading: true, error: false });

    useEffect(() => {
        dispatch({ type: ACTIONS.MAKE_REQUEST });

        const cancelToken = axios.CancelToken.source();
        axios
            .get(url, { cancelToken: cancelToken.token })
            .then((res) => {
                dispatch({ type: ACTIONS.GET_DATA, payload: { data: res.data } });
            })
            .catch((err) => {
                console.log(err);
                dispatch({ type: ACTIONS.ERROR, payload: { error: err } });
            });

        return () => cancelToken.cancel();
    }, [url]);

    return state;
}

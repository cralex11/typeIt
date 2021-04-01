import {useCallback, useEffect, useState} from "react";

const storageName = "userData"
export const useAuth = () => {

    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = useCallback((jwtToken, id, remember = false) => {
        setToken(jwtToken)
        setUserId(id)
        localStorage.setItem(storageName, JSON.stringify({
            userId: id, token: jwtToken
        }))
    }, [])
    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        localStorage.removeItem(storageName)
    }, [])


    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))

        if (data && data.token)
            login(data.token, data.userId)
        setLoading(false)
    }, [login])

    return {login, logout, token, userId, loading}
}

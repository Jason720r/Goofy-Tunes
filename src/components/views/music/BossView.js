import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

export const BossPage = () => {
    
    const [ boss, setBoss ] = useState([]);

    const navigate = useNavigate()

    useEffect(() => {
        fetch("http://localhost:8088/bosses")
            .then((response) => response.json())
            .then((BossArray) => {
                setBoss(BossArray);
            })
    }, []);
return (
    <>
    </>
)
}
import {memo, useEffect, useState} from "react";
import {Select2} from "../atoms/select";
import axios from "axios";

interface onShiftDate{
    pic_id: number;
    pic_name: string;
    date: string;
    time:string;
    am_flag: boolean;
    pm_flag: boolean;
}

export const Test = (props: {
    data: number;
    }) => {
    //axiosでmocksのjsonを取得
    const [onShift, setOnShift] = useState([] as onShiftDate[]);
    useEffect(() => {
        axios.get("http://localhost:3005/data").then((res) => {
            setOnShift(res.data);
        })
    }
    ,[]);

    console.log("onShift", onShift);
    console.log("props_data", props.data);

    return (
        <>
            <Select2 data={onShift} defaultValue={props.data} onChange={(event:number) => {
                console.log(event)
            }}/>
        </>
    )
}

export default memo(Test);

//json server　起動　json-server --watch db.json --port 3000
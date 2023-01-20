// export const Select2 = (props: {
//                             data: any[];
//                             defaultValue: string | number | readonly string[] | undefined;
//                             onChange: (event: number) => void;
//
// }
//
//
// const [onShift, setOnShift] = useState([] as onShiftDate[]);
//
// <Select2 {...{
//     data: onShift,
//     defaultValue: props.pic_id,
//     onChange: (event:number) => {
//         sendData.pic_id = Number(event)
//     }
// }}/>
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import {Select2} from "../compoents/atoms/select";
import Select, {Test} from "../compoents/organisms/select";
import {NextRouter, useRouter} from "next/router";

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
    const router: NextRouter = useRouter()
    console.log("router",router.query.pic_id)
    return (
        <>
           <Test
               data={Number(router.query.pic_id)}
              />
        </>
    )
}


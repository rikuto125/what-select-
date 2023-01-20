import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    //router.query.pic_idを作成して、それをSelectに渡す
    return (
        <>
            <Link href="/select?pic_id=2">
                <span>select</span>
            </Link>
        </>
    )
}
'use server'

import { headers } from "next/headers";

export default async function getUserAgent(){
    const userAgent = headers().get('user-agent') || 'No User Agent';

    return userAgent;
}
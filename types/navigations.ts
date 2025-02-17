import React from "react"

export type Navigation = {
    name: string,
    arName: string,
    href: string,
    style: string,
    FlayOutConent?: React.ReactNode,
    noCourserPointer?: boolean,
}
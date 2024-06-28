import React from 'react'
import {Helmet} from "react-helmet";

interface IHelmet {
  title: string
}

const HelmetComponent = ({title}: IHelmet) => {
    return (
        <Helmet>
            <meta charSet="utf-8"/>
            <title>{title}</title>
        </Helmet>
    )
}

export default HelmetComponent;

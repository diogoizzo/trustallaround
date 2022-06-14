import {useRouter} from "next/router";
import Link from "next/link";
import {useLanguageQuery} from "next-export-i18n";
import React from "react";

function ChangeLanguage({children, lang,}, ref) {
    const router = useRouter();
    const [query] = useLanguageQuery();

    function handleClick(e) {
        if (query.lang === lang) {
            e.preventDefault();
        }
    }

    return (

        <Link href={{pathname: router.pathname, query: {lang}}}>
            <a ref={ref} onClick={(e) => handleClick(e)}>{children}</a>
        </Link>
    )
}

const ForwardRef = React.forwardRef(ChangeLanguage);
export default ForwardRef;

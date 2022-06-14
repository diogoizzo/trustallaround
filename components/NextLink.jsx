import React from "react";
import Link from "next/link";


const NextLink = React.forwardRef((props, ref) => {
    const {href, children, as, ...rest} = props;
    return (
        <Link href={href} as={as}>
            <a ref={ref}{...rest}>{children}</a>
        </Link>
    )
})

NextLink.displayName = "NextLink";

export default NextLink;
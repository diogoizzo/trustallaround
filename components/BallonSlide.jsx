import { useLanguageQuery } from "next-export-i18n";
import Image from "next/image";

export default function Ballon({ arq }) {
    const [query] = useLanguageQuery();

    return (
        <>
            {query?.lang === "pt" ? (
                <Image
                    alt={`Como podemos facilitar sua vida hoje?`}
                    src={`/images/${arq[0]}.svg`}
                    width={387}
                    height={387}
                    layout={"intrinsic"}
                    priority={true}
                />
            ) : query?.lang === "en" ? (
                <Image
                    alt={`How can we make your life easier today?`}
                    src={`/images/${arq[1]}.svg`}
                    width={387}
                    height={387}
                    layout={"intrinsic"}
                    priority={true}
                />
            ) : (
                <Image
                    alt={`¿Cómo podemos hacer tu vida más fácil hoy?`}
                    src={`/images/${arq[2]}.svg`}
                    width={387}
                    height={387}
                    layout={"intrinsic"}
                    priority={true}
                />
            )}
        </>
    );
}

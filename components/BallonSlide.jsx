import { useLanguageQuery } from "next-export-i18n";
import Image from "next/image";

export default function Ballon({ arq }) {
    const [query] = useLanguageQuery();

    return (
        <>
            {query?.lang === "pt" ? (
                <Image
                    alt={`Como podemos facilitar sua vida hoje?`}
                    src={`/images/${arq[0]}.png`}
                    width={387}
                    height={387}
                    layout={"intrinsic"}
                />
            ) : query?.lang === "en" ? (
                <Image
                    alt={`How can we make your life easier today?`}
                    src={`/images/${arq[1]}.png`}
                    width={387}
                    height={387}
                    layout={"intrinsic"}
                />
            ) : (
                <Image
                    alt={`¿Cómo podemos hacer tu vida más fácil hoy?`}
                    src={`/images/${arq[2]}.png`}
                    width={387}
                    height={387}
                    layout={"intrinsic"}
                />
            )}
        </>
    );
}

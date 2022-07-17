import { useLanguageQuery, useTranslation } from "next-export-i18n";
import Image from "next/image";

export default function Ballons({ arq }) {
    const { t } = useTranslation();
    const [query] = useLanguageQuery();

    return (
        <>
            {query?.lang === "pt" ? (
                <Image
                    alt={`nossa ${arq[0]}`}
                    src={`/images/${arq[0]}.png`}
                    width={164}
                    height={163}
                    layout={"fixed"}
                />
            ) : query?.lang === "en" ? (
                <Image
                    alt={`our ${arq[1]}`}
                    src={`/images/${arq[1]}.png`}
                    width={164}
                    height={163}
                    layout={"fixed"}
                />
            ) : (
                <Image
                    alt={`nuestra ${arq[1]}`}
                    src={`/images/${arq[2]}.png`}
                    width={164}
                    height={163}
                    layout={"fixed"}
                />
            )}
        </>
    );
}

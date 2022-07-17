import Link from "next/link";
import { useTranslation } from "next-export-i18n";

export default function BtnSaibaMais() {
    const { t } = useTranslation();
    return (
        <span
            className={
                "relative w-19 text-brand-blue self-end z-12 px-4 py-2 border border-brand-blue hover:bg-brand-blue-hover rounded-xl"
            }
        >
            <Link href={"/pdf/PORTOS_PORTS_PUERTOS.pdf"}>
                {t("portos.btnMais")}
            </Link>
        </span>
    );
}

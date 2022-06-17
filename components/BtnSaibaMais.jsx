import Link from "next/link";

export default function BtnSaibaMais() {
    return (
        <span
            className={'relative w-19 text-brand-blue self-end z-12 px-4 py-2 border border-brand-blue hover:bg-brand-blue-hover rounded-xl'}>
            <Link href={'/images/aviao.png'}>MAIS PORTOS</Link>
        </span>
    )
}
export default function BtnPais({ pais }) {
    return (
        <button
            className={`max-w-[175px] text-brand-blue p-2 rounded-xl bg-white  hover:bg-brand-orange-hover transition-colors border border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-orange focus:ring-offset-2`}
        >
            {pais}
        </button>
    );
}

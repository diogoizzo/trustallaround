import Image from "next/image";
import Link from "next/link";

export default function Incoterms({ setOption, btnVoltar }) {
    return (
        <div className={"lg:mt-8 sm:px-[6%] lg:ml-12 lg:pb-6"}>
            <div>
                <h1
                    className={
                        "text-5xl font-semibold text-center lg:text-left text-brand-orange "
                    }
                >
                    Incoterms
                </h1>
                <button
                    className={
                        "text-xl text-brand-blue mt-2 hover:text-brand-orange transition-colors mb-8"
                    }
                    onClick={() => setOption(null)}
                >
                    <span className={"flex items-center space-x-2"}>
                        <Image
                            src={"/icons/arrow-left.svg"}
                            height={16}
                            width={16}
                            layout={"fixed"}
                            alt={"seta para voltar"}
                        />
                        <p>{btnVoltar}</p>
                    </span>
                </button>
            </div>
            <Link href={"/images/incoTable.jpg"}>
                <Image
                    src={"/images/incoTable.jpg"}
                    alt={"tabela com os tipos de incoterms"}
                    width={1557}
                    height={771}
                    layout={"intrinsic"}
                />
            </Link>
        </div>
    );
}

import Image from "next/image";

export default function PortosPais({ bandeira, pais, portos }) {
    return (
        <div className={"mt-3"}>
            <div className={"flex flex-col md:flex-row items-center"}>
                <div className={"flex items-center flex-col"}>
                    <Image
                        priority={true}
                        src={bandeira}
                        alt={`bandeira do ${pais}`}
                        height={133}
                        width={144}
                        layout={"fixed"}
                    />
                </div>
                <div className="ml-3">
                    <h4
                        className={
                            "text-xl text-left font-semibold text-brand-blue mb-1"
                        }
                    >
                        {pais}
                    </h4>
                    <p className={" text-brand-blue"}>{portos}</p>
                </div>
            </div>
        </div>
    );
}

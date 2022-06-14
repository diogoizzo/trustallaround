import Image from 'next/image'

export default function HeaderBanner() {
    return (
        <div className="bg-[#808080] h-10 ">
            <div className="h-full flex px-[6%] justify-end items-center shrink">
                <a href="https://www.instagram.com/" className="relative h-7 w-7 mr-6">
                    <Image className="fill-white" alt="ícone do instagram" src="/icons/Instagram.svg" layout="fill"/>
                </a>
                <a href="#" className="relative h-7 w-7 mr-6">
                    <Image alt="ícone do skype" src="/icons/Skype.svg" layout="fill"/>
                </a>
                <a href="#" className="relative h-7 w-7 mr-6">
                    <Image alt="ícone do whatsapp" src="/icons/Whatsapp.svg" layout="fill"/>
                </a>
                <a href="#" className="relative h-7 w-7">
                    <Image alt="ícone do linkedin" src="/icons/Linkedin.svg" layout="fill"/>
                </a>
            </div>
        </div>
    )
}
import Link from 'next/link'
import Image from "next/image";

export function Header() {
    return (
        <>
            <div className="fixed flex w-[100%] h-[99px] justify-between items-center bg-[#1E1E1E] bg-opacity-[0.39] px-[22px]">
                <Link href="/"><Image src={'./images/logo.svg'} width={69} height={75} alt="" /></Link>
                <nav className="flex gap-[89px] items-center  text-white font-body">
                    <Link href="/">Главная</Link>
                    <Link href="/products">Продукция</Link>
                    <Link href="/about">О нас</Link>
                    <Link href="/cart"><Image
                        src='./images/cart.svg'
                        width={59}
                        height={43}
                        alt="" />
                    </Link>
                </nav>
                <Link href="/register"><Image src={'./images/user.svg'} width={50} height={45} alt="" /></Link>

            </div>

        </>
    )


}
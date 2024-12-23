
import Image from "next/image"


function Products() {

  return (
    <>

    <div className="flex gap-[40px] mx-[22px] pt-[139px] h-[100%] flex-col justify-center items-center">

        <h1 className="font-body text-white text-[32px]">Готовые решения</h1>

        <div className="flex gap-5">

          <div className="flex flex-col gap-3 justify-center items-center w-[274px] h-[312px] border-[#C34D3F] border-2 border-solid font-body text-white">
            <Image src='./images/product_1.svg' width={244} height={200} alt="" />
            <p className="">Стоимость от 1 млн.руб</p>
            <button className="w-[244px] h-[42px] border-[#C34D3F] border-x border-y border-solid font-bold">Подробнее</button>
          </div>

          <div className="flex flex-col gap-3 justify-center items-center w-[274px] h-[312px] border-[#C34D3F] border-2 border-solid font-body text-white">
            <Image src='./images/product_1.svg' width={244} height={200} alt="" />
            <p className="">Стоимость от 1 млн.руб</p>
            <button className="w-[244px] h-[42px] border-[#C34D3F] border-x border-y border-solid font-bold">Подробнее</button>
          </div>

          <div className="flex flex-col gap-3 justify-center items-center w-[274px] h-[312px] border-[#C34D3F] border-2 border-solid font-body text-white">
            <Image src='./images/product_1.svg' width={244} height={200} alt="" />
            <p className="">Стоимость от 1 млн.руб</p>
            <button className="w-[244px] h-[42px] border-[#C34D3F] border-x border-y border-solid font-bold">Подробнее</button>
          </div>

          <div className="flex flex-col gap-3 justify-center items-center w-[274px] h-[312px] border-[#C34D3F] border-2 border-solid font-body text-white">
            <Image src='./images/product_1.svg' width={244} height={200} alt="" />
            <p className="">Стоимость от 1 млн.руб</p>
            <button className="w-[244px] h-[42px] border-[#C34D3F] border-x border-y border-solid font-bold">Подробнее</button>
          </div>

        </div>
          
    </div>
    </>
  )
}

export default Products



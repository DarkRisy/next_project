import React from "react"
import Image from "next/image"

function User() {

    return (
        <>
            <div>

                <div className="flex pt-[129px] pl-[22px]">
                    <div className="flex justify-center items-center gap-[42px] w-[764px] h-[252px] font-light  bg-[url('/public/images/user_back.svg')]">
                        <Image src="./images/user_account.svg" width={152} height={137} alt="" />
                        <div className="flex flex-col gap-[21px]" >
                            <div className="flex justify-center ml-[47px] items-center w-[340.5px] h-[38px] bg-[url('/public/images/user_form_back.svg')] font-body text-white ]">
                                <p>Фамилия Имя Отчество</p>
                            </div>
                            <div className="flex justify-center ml-[22px] items-center w-[340.5px] h-[38px] bg-[url('/public/images/user_form_back.svg')] font-body text-white ]">
                                <p>email@gmail.com</p>
                            </div>
                            <div className="flex justify-center items-center w-[340.5px] h-[38px] bg-[url('/public/images/user_form_back.svg')] font-body text-white ]">
                                <p>+7 999 999 99 99</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[36px]">
                        <button className=" w-[330px] h-[60px] ml-[60px] bg-[url('/public/images/user_btn_back.svg')] text-white font-body font-bold transition-all hover:bg-[url('/public/images/user_btn_back1.svg')] hover:text-black" >Изменить данные</button>
                        <button className=" w-[330px] h-[60px] ml-[30px] bg-[url('/public/images/user_btn_back.svg')] text-white font-body font-bold transition-all hover:bg-[url('/public/images/user_btn_back1.svg')] hover:text-black" >Удалить аккаунт</button>
                        <button className=" w-[330px] h-[60px] bg-[url('/public/images/user_btn_back.svg')] text-white font-body font-bold transition-all hover:bg-[url('/public/images/user_btn_back1.svg')] hover:text-black" >Выход</button>
                    </div>
                </div>
                <div className="pt-[30px] pl-[22px]">
                    <div className="flex justify-center items-center w-[667px] h-[60px] text-2xl font-body font-bold text-white bg-[url('/public/images/user_product_back.svg')]">
                        <p>Мои заказы</p>
                    </div>
                    <div className=" mt-[20px] w-[644px] h-[192px] border border-[#C34D3F]">

                    </div>
                </div>

            </div>
        </>
    )
}

export default User
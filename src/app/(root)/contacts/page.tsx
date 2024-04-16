

const page = () => {
  return (
    <section className="py-10 bg-[#f6f6f6] h-[calc(100vh-269px)]">
        <div className="container">
            <div>
                <h3 className="text-[30px] text-[#242424] font-medium mb-5">
                    Murojat uchun
                </h3>

                <ul className="flex flex-col gap-y-1">
                    <li className="flex items-center gap-x-2 text-[18px]">
                        <span className="font-bold">Call-center: </span>
                        <span>+998 93 361 94 47</span>
                    </li>
                    <li className="flex items-center gap-x-2 text-[18px]">
                        <span className="font-bold">Elektron pochta: </span>
                        <span>davran9559@gmail.com</span>
                    </li>
                    <li className="flex items-center gap-x-2 text-[18px]">
                        <span className="font-bold">Telegram: </span>
                        <span className="text-[#eb0000]">@SabirbayevD</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default page
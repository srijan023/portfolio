import { useState } from "react";

export default function Button({ Icon, text }: { Icon: React.ReactNode, text: string }) {
    const [isActive, setActive] = useState(false);
    return <div onMouseOver={() => { setActive(true) }} onMouseOut={() => { setActive(false) }} className='bg-white transition-all duration-300 flex gap-2 items-center p-3 hover:shadow-md hover:text-gray-500 rounded-full shadow-sm text-gray-300'>
        <div>
            {Icon}
        </div>
        {
            isActive && <p className="text-sm">{text}</p>
        }
    </div>
}


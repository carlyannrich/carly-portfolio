import { type } from "os";
import { FC } from "react";

interface Choice {
    link: string;
    h2text: string;
}

const Choice = ({ link = '/', h2text = '', }: Choice) => (

    <div className="flex flex-col items-center py-8">
        <a href={link}>
            <h2 className="focus:ring focus:ring-violet-300 min-w-[200px] text-center text-3xl text-gray-900 bg-gradient-to-r from-white via-stone-300 to-amber-200 py-20 px-1 rounded font-inter transition hover:scale-125">
                {h2text}
            </h2>
        </a>
    </div>

);

export default Choice;
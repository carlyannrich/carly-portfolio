const Choice = ({ link = '/', h2text = '', svg }) => (
    <a href={link} className="hover:scale-150 focus:ring focus:ring-violet-300 rounded-lg">
        <div className="flex flex-col items-center py-8">
            <h2 className="text-center text-4xl text-white font-mansalva">
                {h2text}
            </h2>
            {svg}
        </div>
    </a>
);

export default Choice;
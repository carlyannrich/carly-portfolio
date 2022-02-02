import { Menu } from '@headlessui/react'

function Dropdown() {
    return (
        <Menu>
            <Menu.Button><input className='cursor-pointer w-[350px] h-[40px] mt-10'></input></Menu.Button>
            <Menu.Items className="flex flex-col">
                {/* Use the `active` render prop to conditionally style the active item. */}
                <Menu.Item>
                    {({ active }) => (
                        <a
                            className={`${active ? 'bg-blue-500 text-white' : 'bg-white text-black'
                                }`}
                            href="/developer"
                        >
                            Developer
                        </a>
                    )}
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                        <a
                            className={`${active ? 'bg-blue-500 text-white' : 'bg-white text-black'
                                }`}
                            href="/researcher"
                        >
                            Researcher
                        </a>
                    )}
                </Menu.Item>
                {/* ... */}
            </Menu.Items>
        </Menu>
    )
}

export default Dropdown;
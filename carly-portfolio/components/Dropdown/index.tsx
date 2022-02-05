import { Menu } from '@headlessui/react'

function Dropdown() {
    return (
        <Menu as="div" className="relative inline-block">
            <Menu.Button>
                <p className='cursor-pointer my-2 p-2 rounded bg-gray-900 text-center text-amber-200 font-inter text-sm hover:text-white transition duration-150 ease-out'>
                    choose mode
                </p></Menu.Button>
            <Menu.Items className="flex flex-col justify-center font-inter text-2xl">
                {/* Use the `active` render prop to conditionally style the active item. */}
                <Menu.Item>
                    {({ active }) => (
                        <a
                            className={`${active ? 'bg-amber-300 text-black' : ' text-white'
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
                            className={`${active ? 'bg-amber-300 text-black' : ' text-white'
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
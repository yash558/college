import Link from 'next/link';

const Navbar: React.FC = () => {
    const links = [
        {
            href: "/university",
            label: "University",
        },
        {
            href: "/campus",
            label: "Campus",
        },
        {
            href: "/top-picks",
            label: "Top Picks",
        },
    ];

    return (
        <nav className="fixed top-0 w-full bg-white shadow-lg z-10">
            <div className="container mx-auto py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="text-xl md:text-2xl font-bold mr-4 md:mr-10">
                            <Link href="/">
                                College
                            </Link>
                        </div>
                        <div className="hidden md:flex space-x-4">
                            {links.map((link) => (
                                <Link key={link.href} href={link.href} className="text-gray-700 hover:text-blue-500">
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <Link href="/explore" className="px-4 py-2 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition duration-300">
                            Explore
                        </Link>
                        <Link href="/signin" className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300">
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

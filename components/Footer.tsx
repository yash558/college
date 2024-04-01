import Link from 'next/link';

const Footer: React.FC = () => {
    const links = [
        {
            href: "/faq",
            label: "FAQs",
            bold: true,
        }, {
            href: "/support",
            label: "Support",
            bold: false,
        }, {
            href: "/contact",
            label: "Contact us",
            bold: false,
        }, {
            href: "/how-it-works",
            label: "How it works",
            bold: false,
        }, {
            href: "/get-in-touch",
            label: "Get in touch",
            bold: false,
        }
    ];
    return (
        <footer className="bg-white py-8">
            <div className="container mx-auto flex justify-between items-start">
                <div className="text-black flex flex-col justify-between h-full">
                    <div className='mb-12'>
                        <h1 className="text-2xl md:text-3xl font-bold">CollegeConsult</h1>
                        <p className="text-gray-600">Serving students since 1997!</p>
                    </div>
                    <div>
                        <p className="text-gray-600">Owner: +91 83684/4182</p>
                    </div>
                </div>
                <div className="text-black">
                    <ul className="flex gap-2 flex-col">
                        {links.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} className={`text-gray-600 hover:text-black ${link.bold ? 'font-bold' : ''}`}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

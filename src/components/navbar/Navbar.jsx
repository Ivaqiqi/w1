import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-xl font-bold">
                    <Link href="/">
                        <img src="/images/logo.png" alt="Logo" className="h-8 w-auto" />
                    </Link>
                </div>
                <div className="flex space-x-4">
                    <Link href="/geraete" className="text-gray-300 hover:text-white">Alle Geräte</Link>
                    <Link href="/profil" className="text-gray-300 hover:text-white">Profil</Link>
                    <Link href="/geraetregistrierung" className="text-gray-300 hover:text-white">Gerätregistrierung</Link>
                    <Link href="/reservierung" className="text-gray-300 hover:text-white">Reservierung</Link>
                    <Link href="/reservierungsverwaltung" className="text-gray-300 hover:text-white">Reservierungsverwaltung</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

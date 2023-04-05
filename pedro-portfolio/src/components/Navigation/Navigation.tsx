import Link from "next/link"
import "./Navigation.module.css"

const Navigation = () => {

    const logoName: string = "Pedro Suárez Gallardo"
    return (
        <nav className="Navigation m-10 flex justify-between items-center ms-10">
            <div className="text-center align-middle">
                <h1><Link href={"/"}>{logoName}</Link></h1>
            </div>
            <div>
                <ul className="flex justify-between items-center space-x-6 ">
                    <li><Link href={"/about"}>About</Link></li>
                    <li><Link href={"/projects"}>Projects</Link></li>
                    <li><Link href={"/contact"}>Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation
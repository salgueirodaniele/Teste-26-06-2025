import Link from "next/link";

export default function Header(){
    return(
<>
<header>
    <div>
        MinhaLoGo
    </div>

        <nav>
        <Link href="/">Início</Link>
        <Link href="/pages/Serviço">Serviço</Link>
        <Link href="/">Contato</Link>
        </nav>
</header>
</>
    )
}
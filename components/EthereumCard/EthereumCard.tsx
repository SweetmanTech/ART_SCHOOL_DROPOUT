import { ConnectButton } from "@rainbow-me/rainbowkit"

const EthereumCard = () => {

    return (
        <a href="#" className="py-10 px-3 border rounded-lg border-black">
            <div className="text-2xl pb-5">Ethereum</div>
            <ConnectButton />
        </a>
    )
}

export default EthereumCard
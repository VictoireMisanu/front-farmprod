interface logoProps{
    className: string
}
const Logo = ({className}:logoProps) => {
    return(
        <a href="#" className={className}>FarmProd</a>
    )
}
export default Logo

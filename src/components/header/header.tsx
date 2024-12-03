import Logo from "../logo/logo"

interface headerProps{

    className : string
}



const Header = ({className}:headerProps) => {
    return(
        <div className={className}>
            <Logo/>
        </div>
    )
}

export default Header

interface headerProps{

    className : string;
    children: JSX.Element | JSX.Element [];
}


const Header = ({className, children}:headerProps) => {
    return(
        <div className={className}>
            {children}
        </div>
    )
}

export default Header
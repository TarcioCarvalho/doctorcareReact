interface LogoProps {
    textDark?: boolean
    className?: string
    pointer?: boolean
    footer?: boolean
}

export default function Logo(props: LogoProps) {
    return (
        <div className={`${props.pointer ? "cursor-pointer" : ''}`}>

            <span className={`
                ${props.textDark ? 'text-gray-h' : 'text-text-light'} text-xl
                ${props.className}`}>
                Doctor
            </span>

            <span className={`
                ${props.textDark ? 'text-dark-green' : 'text-text-light'} 
                font-black text-xl ${props.className}`}>
                Care
            </span>
        </div>
    )
}
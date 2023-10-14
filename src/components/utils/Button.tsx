interface buttonProps {
    children?: any
    className?: string
    textClassName?: string
    text: string
}

export default function Button(props: buttonProps) {
    return (
        <div className={`
            flex gap-2 items-center w-60 justify-center text-text-light
            uppercase px-4 py-2 rounded-3xl bg-dark-green
            hover:opacity-90  cursor-pointer
            ${props.className || ""}
        `}>
            {props.children}

            <p className={`text-sm ${props.textClassName || ""}`}>
                {props.text}
            </p>
        </div>
    )
}
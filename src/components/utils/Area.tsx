interface propsArea {
    children: any
    className?: string
}

export default function Area(props: propsArea) {
    return (
        <div className={`
            flex flex-col px-6 md:px-0 py-4 mx-auto xl:max-w-[1200px] lg:max-w-[980px]
            ${props.className || ''}
        `}>
            {props.children}
        </div>
    )
}
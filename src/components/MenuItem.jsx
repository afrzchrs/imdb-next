export default function MenuItem({ title, address, Icon }){
    return (
        <Link href={address}>
            <icon/>
            <p>
                {title}
            </p>
        </Link>
    )
}
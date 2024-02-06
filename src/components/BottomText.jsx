import {Link} from 'react-router-dom'


export function Bottomtext({text,underlineText,to}){
    return(
        <div className="flex justify-center gap-2 font-thin text-md mt-2 mb-1">
            <div>{text}</div>
            <Link className="underline cursor-pointer" to={to}>{underlineText}</Link>
        </div>
    )
}
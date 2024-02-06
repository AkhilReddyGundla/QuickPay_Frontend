export function Inputfields({text,type,placeholder,onChange}){
    
    return (
        <div className="flex flex-col p-2">
            <div className="pb-1 font-semibold">{text}</div>
            <input type={type} placeholder={placeholder} onChange = {onChange} className="border border-gray-300 p-2 rounded-lg"/>
            
        </div>
    )
}
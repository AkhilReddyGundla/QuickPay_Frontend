

export function Button({text,onPress}){
    return (
        <div className="flex justify-center pt-2 pb-2 text-white text-0.5xl md:text-1xl lg:text-1.5xl bg-blue-700 m-2 rounded-lg hover:bg-blue-900 w-full">
            <button onClick = {onPress} className="font-bold w-full cursor-pointer">{text}</button>
        </div>
    )

    
}


import { useEffect, useState } from "react"

export const Snackbar = ({visible, setVisible, duration=5}) => {
    const [progressWidth, setProgressWidth] = useState(100)
    useEffect(() => {
        let isMounted = true;
        const timeoutId = setTimeout(() => {
            if(isMounted) {
                setVisible(false)
            }
        }, duration*1000)

        return () => {
            isMounted = false
            clearTimeout(timeoutId)
        }
    }, [])

    useEffect(() => {
        const perSecDecrease = 100 / duration;
        const perFrameDecrease = perSecDecrease / 1000 * 16
        const intervalId = setInterval(() => {
            setProgressWidth(prev => prev-perFrameDecrease)
        }, 16)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return (
        <div className="w-full flex justify-center mx-auto mt-8 absolute top-0 left-0">
            <div className="flex  justify-between bg-green-600 rounded w-32 h-9 text-white flex-col overflow-hidden">
                <div className="mx-auto">Snackbar</div>
                {/* Progress Bar */}
                <div className="bg-gray-400 h-1" style={{"width": `${progressWidth}%`}} />
            </div>
        </div>
    )
}
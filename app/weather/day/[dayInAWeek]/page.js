
export default function WeatherDayInAWeek({params}) {
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

    if(!days.includes(params.dayInAWeek)) {
        return (
            <>
            <p>Wrong day!</p>
            <p>Allowed days: {JSON.stringify(days)}</p>
            </>
        )
    }
    return <p>WeatherDayInAWeek Page - {params.dayInAWeek}</p>
}
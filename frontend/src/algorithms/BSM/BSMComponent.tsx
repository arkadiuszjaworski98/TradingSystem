import { useState } from "react"

const BSMComponent = () => {

    const [stockPrice, setStockPrice] = useState<number | undefined>(undefined)
    const [strikePrice, setStrikePrice] = useState<number | undefined>(undefined)
    const [rate, setRate] = useState<number | undefined>(undefined)
    const [time, setTime] = useState<number | undefined>(undefined)
    const [volatility, setVolatility] = useState<number | undefined>(undefined)
    const [dividend, setDividend] = useState<number | undefined>(undefined)

    const handleSubmit = (e) => {
        e.preventDefault()
        api({stockPrice,strikePrice,rate,time,volatility,dividend})
    }

    const api = (apiParams: {stockPrice, strikePrice, rate, time, volatility, dividend}): boolean => {
        console.log('***Calling backend API for BSM with ', apiParams)
        return true
    }

    return (
    <div>
    <h5>BSM</h5>
    <form onSubmit={handleSubmit}>
        <div>
            <label>Stock Price </label>
            <input value={stockPrice} onChange={(e) => setStockPrice(parseInt(e.target.value))} /> 
        </div>
        <div>
            <label>Strike Price </label>
            <input value={strikePrice} onChange={(e) => setStrikePrice(parseInt(e.target.value))} />
        </div>
        <div>
            <label>Rate </label>
            <input value={rate} onChange={(e) => setRate(parseInt(e.target.value))} />
        </div>
        <div>
            <label>Time </label>
            <input value={time} onChange={(e) => setTime(parseInt(e.target.value))} /> 
        </div>
        <div>
            <label>Volatility </label>
            <input value={volatility} onChange={(e) => setVolatility(parseInt(e.target.value))} />
        </div>
        <div>
            <label>Dividend </label>
            <input value={dividend} onChange={(e) => setDividend(parseInt(e.target.value))} />
        </div>
        <input type='submit' />
    </form>
    </div>
    )
}

export default BSMComponent
    
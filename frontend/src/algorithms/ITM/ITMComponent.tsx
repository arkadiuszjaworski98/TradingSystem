import { useState } from "react"

const ITMComponent = () => {

    const optionTypes = {
        'LC': 'Long Call',
        'LP': 'Long Put',
        'SC': 'Short Call',
        'SP': 'Short Put'
    }

    const [option, setOption] = useState<string>(optionTypes['LC'])
    const [stockPrice, setStockPrice] = useState<number | undefined>(undefined)
    const [strikePrice, setStrikePrice] = useState<number | undefined>(undefined)

    const handleSubmit = (e) => {
        e.preventDefault()
        api({option,stockPrice,strikePrice})
    }

    const api = (apiParams: {option, stockPrice, strikePrice}): boolean => {
        console.log('***Calling backend API for ITM with ', apiParams)
        return true
    }

    return (
    <div>
    <h5>ITM</h5>
    <form onSubmit={handleSubmit}>
        <div>
            <label>Stock Price </label>
            <input value={stockPrice}onChange={(e) => setStockPrice(parseInt(e.target.value))}/> 
        </div>
        <div>
        <label>Strike Price </label>
        <input value={strikePrice}onChange={(e) => setStrikePrice(parseInt(e.target.value))}/>
        </div>
        <div>
        <label>Option Type </label>
        <select value={option} onChange={(e) => setOption(e.target.value)} >
            <option value='LC'>{optionTypes['LC']}</option>
            <option value='LP'>{optionTypes['LP']}</option>
            <option value='SC'>{optionTypes['SC']}</option>
            <option value='SP'>{optionTypes['SP']}</option>
        </select>
        </div>
        <div>
        <input type='submit' />
        </div>
    </form>
    </div>
    )
}

export default ITMComponent
    
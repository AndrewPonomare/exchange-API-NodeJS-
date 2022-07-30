import axios from "axios";

export async function getRate() {
    try {
        const requestURL = await axios.get('https://api.binance.com/api/v3/ticker/price?symbol=BTCUAH'
        )

        return {
            value: requestURL.data.price,
            status: 'succes',
        }
    } catch (error) {
        return { status: 'fail' }
    }

}

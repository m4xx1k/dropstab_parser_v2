const Coin = require('./coin.model')

async function updateDbData (){
    const coins = await Coin.find()

    

    let sum = 0
    for (const coinsKey in coins) {
        if(coins[coinsKey].market_cap)
        sum += Number(coins[coinsKey].market_cap)
    }
    for (const coinsKey in coins) {

        // +percentage_of_the_market - U \\

        if(coins[coinsKey].market_cap && sum !== 0)
        coins[coinsKey].percentage_of_the_market = Number(coins[coinsKey].market_cap) / sum * 100
        

        // +ath_percent - V \\

        if(coins[coinsKey].price && coins[coinsKey].ath_price && coins[coinsKey].ath_price != 0 && sum !== 0)
        coins[coinsKey].ath_percent = 100 - Number(coins[coinsKey].price) / Number(coins[coinsKey].ath_price) * 100


        // x_history - Y \\
        
        if(coins[coinsKey].price && coins[coinsKey].atl_price && coins[coinsKey].atl_price != 0 && sum !== 0)
        coins[coinsKey].x_history = Number(coins[coinsKey].price) / Number(coins[coinsKey].atl_price)


        // atl_percent - Z \\

        if(coins[coinsKey].price && coins[coinsKey].ath_price && coins[coinsKey].atl_price && sum !== 0)
        coins[coinsKey].atl_percent = Number(coins[coinsKey].price) * (Number(coins[coinsKey].ath_price) - Number(coins[coinsKey].atl_price)) * 100 


        // max_cap - AD \\

        if(coins[coinsKey].price && coins[coinsKey].total_supply && sum !== 0)
        coins[coinsKey].max_cap =  Number(coins[coinsKey].price) * Number(coins[coinsKey].total_supply) * process.env.coefficient_max_cap


        // percent_emission_by_algorithm - BA \\

        if(coins[coinsKey].max_supply && coins[coinsKey].total_supply && coins[coinsKey].total_supply != 0 && sum !== 0)
        coins[coinsKey].percent_emission_by_algorithm = Number(coins[coinsKey].max_supply) / Number(coins[coinsKey].total_supply) * 100


        // `difference_between_emission - BB` \\

        if(coins[coinsKey].percent_emission && coins[coinsKey].percent_emission_by_algorithm  && sum !== 0)
        coins[coinsKey].difference_between_emission = Number(coins[coinsKey].percent_emission) - Number(coins[coinsKey].percent_emission_by_algorithm)


        // emission - BD \\

        if(coins[coinsKey].emission_max_rate && coins[coinsKey].emission_inflation && sum !== 0)
        coins[coinsKey].emission = Number(coins[coinsKey].emission_max_rate) - Number(coins[coinsKey].emission_inflation)


        // emission_price_after_with_inflation - BE \\

        if(coins[coinsKey].price && coins[coinsKey].price && coins[coinsKey].emission_inflation && sum !== 0)
        coins[coinsKey].emission_price_after_with_inflation = Number(coins[coinsKey].price) - Number(coins[coinsKey].price) * Number(coins[coinsKey].emission_inflation)


        // save changes \\
        await coins[coinsKey].save().catch(e => {console.log("error: ", e)})

    }


}

module.exports = updateDbData
const db= require('./db')

const schema = new db.Schema({
    name:{
        type: String,
    },
    img:{
        type:String,
    },
    price: {
        type: String,
    },
    ath_price: {
        type: String,
    },
    ath_time: {
        type: String,
    },
    atl_price: {
        type: String,
    },
    atl_time: {
        type: String,
    },
    full_name:{
      type:String,
    },
    market_cap: {
        type: String,
    },
    total_supply:{
        type:String,
    },
    search_group: {
        type: Number,
    },
    id: {
        type: Number,
    },
    classification: {
        type: String,
    },
    class: {
        type: String,
    },
    type: {
        type: String,
    },
    subtype: {
        type: String,
    },
    proof_consensus: {
        type: String,
    },
    expected_rise_to_decline: {
        type: Number,
    },
    expected_1_5_years: {
        type: Number,
    },
    possible_passage: {
        type: Number,
    },
    floor1: {
        type: Number,
    },
    near_good_price: {
        type: Number,
    },
    percent_of_good_price: {
        type: Number,
    },
    ceiling1: {
        type: Number,
    },
    ceiling2: {
        type: Number,
    },
    percent_90_ath: {
        type: Number,
    },
    percent_93_ath: {
        type: Number,
    },
    percent_95_ath: {
        type: Number,
    },
    percentage_of_the_market: {
        type: Number,
    },
    ath_percent: {
        type: Number,
    },
    x_history: {
        type: Number,
    },
    atl_percent: {
        type: Number,
    },
    max_supply: {
        type: Number,
    },
    max_cap: {
        type: Number,
    },
    percent__out_of_supply: {
        type: Number,
    },
    x_on_token_sales: {
        type: Number,
    },
    price_pre_seed: {
        type: Number,
    },
    amount_pre_seed: {
        type: Number,
    },
    price_seed: {
        type: Number,
    },
    amount_seed: {
        type: Number,
    },
    price_private_round: {
        type: Number,
    },
    amount_private_round: {
        type: Number,
    },
    price_early_supporters: {
        type: Number,
    },
    amount_early_supporters: {
        type: Number,
    },
    price_ico_public: {
        type: Number,
    },
    amount_ico_public: {
        type: Number,
    },
    price_ieo: {
        type: Number,
    },
    amount_ieo: {
        type: Number,
    },
    price_ido: {
        type: Number,
    },
    amount_ido: {
        type: Number,
    },
    aver_price: {
        type: Number,
    },
    average_price: {
        type: Number,
    },
    total_involved: {
        type: Number,
    },
    percent_emission: {
        type: Number,
    },
    percent_emission_by_algorithm: {
        type: Number,
    },
    difference_between_emission: {
        type: Number,
    },
    emission_max_rate: {
        type: Number,
    },
    emission: {
        type: Number,
    },
    emission_price_after_with_inflation: {
        type: Number,
    },
    emission_inflation: {
        type: Number,
    },
    emission_inflation_token_day: {
        type: String,
    },
    emission_inflation_token_week: {
        type: Number,
    },
    emission_inflation_token_month: {
        type: Number,
    },
    true: {
        type: Boolean,
    },
    wallets: {
        type: Number,
    },
    site_with_wallets: {
        type: String,
    },
    wallet1: {
        type: Number,
    },
    wallet2: {
        type: Number,
    },
    wallet3: {
        type: Number,
    },
    wallet4: {
        type: Number,
    },
    wallet5: {
        type: Number,
    },
    holders: {
        type: Number,
    },
    transfers: {
        type: Number,
    },
    number_of_funds_invested: {
        type: Number,
    },
    have_own_fund: {
        type: Boolean,
    },
    ratio_of_funds: {
        type: Number,
    },
    number_of_exchangers: {
        type: Number,
    },
    is_on_coinbase_and_kraken: {
        type: Boolean,
    },
    watchlist_on_coinmarketcap: {
        type: Number,
    },
    largest_price_of_the_mining: {
        type: Number,
    },
    reddit_members: {
        type: Number,
    },
    twitter_followers: {
        type: Number,
    },
    gitHub_commits: {
        type: Number,
    },
    gitHub_stars: {
        type: Number,
    },
    gitHub_followers: {
        type: Number,
    },
    gitHub_contributors: {
        type: Number,
    },
    marketing_site: {
        type: Number,
    },
    marketing_google: {
        type: Number,
    },
    marketing_youtube: {
        type: Number,
    },
    unnamed: {
        type: Number,
    }

})

module.exports = db.model('Coin', schema)

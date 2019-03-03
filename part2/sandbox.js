const fetch = require('node-fetch')
require('dotenv').config();
const result =
    fetch('https://vatapi.com/v1/country-code-check?code=DE',
        {
            headers: {
                'Apikey': process.env.VAT_API
            }
        }
    )
        .then(res => {
            return res.json()
        }).then(
            data=>data.rates
        )
        .catch(err => console.log("error =>", err))
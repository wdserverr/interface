/* eslint-disable */
require('dotenv').config({ path: '.env.production' })
const { exec } = require('child_process')
const dataConfig = require('./relay.config')
const thegraphConfig = require('./relay_thegraph.config')
/* eslint-enable */

const THEGRAPH_API_URL = 'https://community-subgraphs.graph-eu.p2pify.com/284d914650336b96423a99b391559b13/uniswap-v3'
exec(`get-graphql-schema ${THEGRAPH_API_URL} > ${thegraphConfig.schema}`)

console.log(process.env.REACT_APP_AWS_API_ENDPOINT)
exec(
  `get-graphql-schema --h Origin=https://app.uniswap.org ${process.env.REACT_APP_AWS_API_ENDPOINT} > ${dataConfig.schema}`
)

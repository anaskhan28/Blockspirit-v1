import React from 'react'
import {Link} from 'react-router-dom'
import CoinItem from './Coinitem'
import Coin from '../routes/Coin'
import './Coins.css';
const Coins = (props) => {
  return (
    <div className='container'>
        <div>
            <div className='heading'>
                <p>#</p>
                <p className='coin-name text-color'>Coin</p>
                <p className='text-color'>Price</p>
                <p className='text-color'>24h</p>
                <p className='text-color hide-mobile'>Volume</p>
                <p className='text-color hide-mobile'>Mkt Cap</p>
            </div>
            
            {props.coins.map(coins =>{
                return (
                    <Link to ={`/coin/${coins.id}`} element = {<Coin/>} key={coins.id} >
                    <CoinItem coins = {coins} />
                    </Link>
                )
            })}

        </div>
    </div>
  )
}

export default Coins
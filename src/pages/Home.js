import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Coin from '../components/Coin';
import { fetchCoinsAction } from '../redux/coins/coins';
import Global from '../components/Global';
import Details from './Details';

const Home = () => {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coins.coins);
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(fetchCoinsAction());
  }, [dispatch]);

  const filteredCoins = coins.filter(
    (coin) => coin.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <div className="search-bar">
        <input
          className="search"
          type="text"
          placeholder="Search for Cryptocurrency"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <Global />
      <div className="cointop">
        <p>Cryptocurrencies</p>
      </div>
      <div className="coin-container">
        {filteredCoins.map((coin) => (
         <Link
            className="coin-link"
            to={`/details/${coin.id}`}
            key={coin.id}
            element={<Details />}
          >
            <Coin
              id={coin.id}
              name={coin.name}
              image={coin.image}
              price={coin.current_price}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;

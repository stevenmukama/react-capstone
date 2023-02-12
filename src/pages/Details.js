import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCoinAction } from '../redux/singlecoin/fetchCoin';
import './Details.css';

const Details = () => {
  const { coinId } = useParams();
  const dispatch = useDispatch();
  const { coindata: data } = useSelector((state) => state.coin);
  const fetchCoin = useCallback(
    () => dispatch(fetchCoinAction(coinId)),
    [dispatch, coinId],
  );

  useEffect(() => {
    fetchCoin();
  }, [fetchCoin]);

  return (
    <div>
      <div className="details">
        <img className="detailsimage" src={data.image} alt="crypto" />
        <div className="det-name-price">
          <h2>{data.name}</h2>
          <h3 className="details-price">
            Current Price: $
            {data.price}
          </h3>
        </div>
      </div>
      <div className="cointop">
        <p>Cryptocurrency Details</p>
      </div>
      <div className="details-info">
        {[
          { label: 'Market Cap Rank', value: data.market_cap_rank },
          { label: 'Market Cap', value: data.market_cap },
          { label: '24h High', value: data.high_24h },
          { label: '24h Low', value: data.low_24h },
          { label: 'Price Change 24h', value: data.price_change },
          { label: 'Market Cap Change', value: data.market_cap_change },
          { label: 'Total Supply', value: data.total_supply },
          { label: 'Max Supply', value: data.max_supply },
          { label: 'Circulating Supply', value: data.circulating_supply },
        ].map(({ label, value }) => (
          <div className="coin-det" key={label}>
            <h3>{label}</h3>
            <h3>{value}</h3>
            <i className="fa-sharp fa-solid fa-arrow-right" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;

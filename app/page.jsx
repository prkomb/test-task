"use client";

import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Preloader from "./components/Preloader/Preloader";
import { SiBitcoin, SiSolana } from "react-icons/si";
import { simulateFetch, prettyTimeFormat } from "./page.utils";
import { SymbolButton } from "./components/ButtonController/SymbolButton";
import ButtonController from "./components/ButtonController/ButtonController";

const PriceChart = dynamic(() => import("./components/PriceChart/PriceChart"), {
  ssr: false,
});

export default function Page() {
  const [symbol, setSymbol] = useState("BTC");
  const [loading, setLoading] = useState(true);
  const [series, setSeries] = useState({ labels: [], prices: [] });
  const [lastUpdated, setLastUpdated] = useState(null);

  const symbolsProps = {
    symbols: [
      { title: "BTC", icon: <SiBitcoin /> },
      { title: "SOL", icon: <SiSolana /> },
    ],
    symbolProps: {
      current: symbol,
      onChange: setSymbol,
      disabled: loading,
    },
  };

  useEffect(() => {
    let ignore = false;

    async function load() {
      setLoading(true);
      const data = await simulateFetch(symbol);
      if (ignore) return;
      setSeries(data);
      setLoading(false);
      setLastUpdated(new Date());
    }

    load();

    return () => {
      ignore = true;
    };
  }, [symbol]);

  const prettyTime = useMemo(
    () => prettyTimeFormat(lastUpdated),
    [lastUpdated]
  );

  return (
    <>
      <Preloader loading={loading} symbol={symbol} />

      <div className="container">
        <div className="header">
          <div className="title">{symbol} Price (demo data)</div>
          <div className="controls">
            <ButtonController {...symbolsProps}></ButtonController>
          </div>
        </div>

        <div className="card">
          <PriceChart
            labels={series.labels}
            prices={series.prices}
            symbol={symbol}
          />
          <div className="meta">Updated: {prettyTime}</div>
        </div>
      </div>
    </>
  );
}

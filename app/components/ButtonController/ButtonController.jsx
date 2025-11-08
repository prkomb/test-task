"use client";

export default function ButtonController(props) {
  const {
    symbols,
    symbolProps: { current, disable, onChange },
  } = props;

  return (
    <>
      {symbols.map((symbol) => {
        return (
          <button
            key={symbol.title}
            className={`btn ${symbol.title === current ? "active" : ""}`}
            onClick={() => onChange(symbol.title)}
            disabled={disable}
            aria-label={`Показать ${symbol.title}`}
            title={`${symbol.title}`}
          >
            {symbol.icon} {symbol.title}
          </button>
        );
      })}
    </>
  );
}

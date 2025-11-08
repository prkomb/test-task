export function SymbolButton({
  value,
  icon: Icon,
  current,
  onChange,
  disabled,
}) {
  return (
    <button
      className={`btn ${current === value ? "active" : ""}`}
      onClick={() => onChange(value)}
      disabled={disabled}
    >
      <Icon /> {value}
    </button>
  );
}

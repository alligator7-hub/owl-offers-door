type ScreenProps = {
  compact?: boolean;
};

function Landscape({ dusk = false }: { dusk?: boolean }) {
  return (
    <svg className={`shop-land${dusk ? " is-dusk" : ""}`} viewBox="0 0 360 90" preserveAspectRatio="none" aria-hidden="true">
      <rect width="360" height="90" fill={dusk ? "#1a1610" : "#221c16"} />
      <path d="M0 58c40-18 70-8 110-16 36-7 54 4 90-6 40-11 70-4 100-12 20-5 40 2 60-4v70H0z" fill={dusk ? "#2a2218" : "#3a2c1c"} />
      {Array.from({ length: 18 }, (_, i) => {
        const x = 8 + i * 20;
        return <rect key={x} x={x} y={42} width="3" height="28" fill="#0f0e0c" opacity="0.85" />;
      })}
      <rect x="268" y="50" width="42" height="14" fill="#c46a3a" />
      <rect x="272" y="42" width="18" height="10" fill="#8d4a28" />
    </svg>
  );
}

export function ShopBefore({ compact = false }: ScreenProps) {
  return (
    <figure className={`device${compact ? " is-compact" : ""}`}>
      <figcaption className="device-cap">
        <span>Before</span>
        <span className="device-url">northfork.example</span>
      </figcaption>
      <div className="device-chrome" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="shop-screen shop-before">
        <Landscape />
        <div className="shop-copy">
          <p className="shop-name">Northfork Fence &amp; Gate</p>
          <h3>Quality you can see.</h3>
          <div className="shop-btns">
            <span>Gallery</span>
            <span>About</span>
            <span>Contact</span>
          </div>
        </div>
      </div>
    </figure>
  );
}

export function ShopAfter({ compact = false }: ScreenProps) {
  return (
    <figure className={`device${compact ? " is-compact" : ""}`}>
      <figcaption className="device-cap">
        <span>After</span>
        <span className="device-url">northfork.example</span>
      </figcaption>
      <div className="device-chrome" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="shop-screen shop-after">
        <Landscape dusk />
        <div className="shop-copy">
          <p className="shop-name">Northfork Fence &amp; Gate</p>
          <h3>Wood and vinyl fence for rural lots and river-county homes.</h3>
          <p className="shop-line">Call 555-0148. We pick up, or we call you back the same business day.</p>
          <div className="shop-btns">
            <span className="is-primary">Call 555-0148</span>
            <span>See fence types</span>
          </div>
        </div>
      </div>
    </figure>
  );
}

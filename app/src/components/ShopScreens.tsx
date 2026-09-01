type ScreenProps = {
  compact?: boolean;
};

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
        <div className="shop-sky">
          <div className="shop-ridge" />
          <div className="shop-truck" />
        </div>
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
        <div className="shop-sky shop-sky-quiet">
          <div className="shop-ridge" />
        </div>
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

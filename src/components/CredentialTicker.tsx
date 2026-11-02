import { credentialTicker } from "../content/programs";

// Slow-scrolling credentials band. Pauses on hover; static and wrapped when motion is reduced.
export default function CredentialTicker() {
  return (
    <section className="ticker overflow-hidden bg-iron py-4 text-chalk" aria-label="Credentials">
      <div className="ticker-track">
        {[0, 1].map((copy) => (
          <ul key={copy} className={`flex shrink-0 ${copy === 1 ? "ticker-copy" : ""}`} aria-hidden={copy === 1}>
            {credentialTicker.map((item) => (
              <li key={item} className="mono flex items-center gap-6 whitespace-nowrap px-6 !text-[0.8125rem]">
                {item}
                <span className="text-brand-light" aria-hidden="true">
                  ✕
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}

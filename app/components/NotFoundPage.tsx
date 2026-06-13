import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="not-found-shell">
      <style>{notFoundStyles}</style>
      <section className="not-found-page">
        <header className="not-found-header">
          <div>
            <p className="not-found-eyebrow">404</p>
            <h1 className="not-found-title">Page not found</h1>
          </div>
        </header>

        <div className="not-found-center">
          <section className="not-found-card">
            <div className="not-found-visual" aria-hidden="true">
              <div className="not-found-house">
                <span />
                <span />
                <span />
              </div>
            </div>
            <p className="not-found-copy">
              The page you are looking for does not exist or has moved.
            </p>

            <div className="not-found-actions">
              <Link
                className="not-found-button not-found-button-primary"
                href="/en"
              >
                Open calculator
              </Link>
              <Link
                className="not-found-button not-found-button-secondary"
                href="/de"
              >
                Zum Rechner
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

const notFoundStyles = `
  .not-found-shell {
    min-height: 100vh;
    background: linear-gradient(180deg, #f7f5ef 0%, #f1eee6 100%);
    color: #171717;
    font-family: Arial, Helvetica, sans-serif;
  }

  .not-found-page {
    box-sizing: border-box;
    display: flex;
    min-height: 100vh;
    width: 100%;
    max-width: 1500px;
    flex-direction: column;
    margin: 0 auto;
    padding: 12px 16px;
  }

  .not-found-header {
    margin-bottom: 12px;
    border-bottom: 1px solid #d8d3c9;
    padding-bottom: 12px;
  }

  .not-found-eyebrow {
    margin: 0 0 8px;
    color: #2f6a57;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.18em;
    line-height: 1.2;
    text-transform: uppercase;
  }

  .not-found-title {
    margin: 0;
    color: #171717;
    font-size: clamp(40px, 7vw, 72px);
    font-weight: 700;
    letter-spacing: 0;
    line-height: 0.98;
  }

  .not-found-center {
    display: grid;
    flex: 1;
    place-items: center;
    padding: 40px 0;
  }

  .not-found-card {
    box-sizing: border-box;
    width: 100%;
    max-width: 760px;
    border: 1px solid #d8d3c9;
    border-radius: 8px;
    background: #ffffff;
    padding: 28px;
    box-shadow: 0 18px 60px rgba(23, 23, 23, 0.08);
  }

  .not-found-visual {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 88px;
    height: 88px;
    margin-bottom: 24px;
    border-radius: 8px;
    background: linear-gradient(135deg, #10211e, #132420);
  }

  .not-found-house {
    position: relative;
    width: 54px;
    height: 46px;
    background: #f4f2ed;
    clip-path: polygon(50% 0, 100% 34%, 82% 34%, 82% 100%, 18% 100%, 18% 34%, 0 34%);
  }

  .not-found-house span {
    position: absolute;
    bottom: 10px;
    width: 8px;
    background: #171717;
  }

  .not-found-house span:nth-child(1) {
    left: 19px;
    height: 12px;
  }

  .not-found-house span:nth-child(2) {
    left: 31px;
    height: 19px;
  }

  .not-found-house span:nth-child(3) {
    left: 43px;
    height: 27px;
  }

  .not-found-copy {
    max-width: 620px;
    margin: 0;
    color: #4d4a44;
    font-size: 20px;
    line-height: 1.65;
  }

  .not-found-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 32px;
  }

  .not-found-button {
    display: inline-flex;
    min-height: 44px;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    padding: 0 20px;
    font-size: 14px;
    font-weight: 700;
    line-height: 1;
    text-decoration: none;
    transition: border-color 150ms ease, background-color 150ms ease, color 150ms ease;
  }

  .not-found-button-primary {
    border: 1px solid #2f6a57;
    background: #2f6a57;
    color: #ffffff;
  }

  .not-found-button-primary:hover {
    background: #255646;
    border-color: #255646;
  }

  .not-found-button-secondary {
    border: 1px solid #c8c0b3;
    background: #fbfaf7;
    color: #4d4a44;
  }

  .not-found-button-secondary:hover {
    border-color: #2f6a57;
    color: #2f6a57;
  }

  @media (min-width: 640px) {
    .not-found-page {
      padding-left: 24px;
      padding-right: 24px;
    }

    .not-found-card {
      padding: 40px;
    }
  }

  @media (min-width: 1024px) {
    .not-found-page {
      padding-left: 32px;
      padding-right: 32px;
    }
  }

  @media (max-width: 520px) {
    .not-found-card {
      padding: 22px;
    }

    .not-found-actions {
      display: grid;
    }

    .not-found-button {
      width: 100%;
    }
  }
`;

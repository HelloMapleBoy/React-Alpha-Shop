import { ReactComponent as Logo } from "../../assets/Icons/logo.svg";
import { ReactComponent as FacebookIcon } from "../../assets/Icons/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/Icons/instagram.svg";
import { ReactComponent as Whatsapp } from "../../assets/Icons/whatsapp.svg";

import Container from "../UI/Container";
import classes from "./Footer.module.scss";

const footer = () => {
  return (
    <section className={classes.section}>
      <Container className={classes.container}>
        <Logo />
        <div className={classes.description}>
          <div>
            <h2>客戶服務</h2>
            <div>運送說明</div>
            <div>退換貨相關</div>
            <div>付款資訊</div>
            <div>FAQ</div>
          </div>
          <div>
            <h2>關於我們</h2>
            <div>品牌故事</div>
            <div>媒體連繫</div>
            <div>Press kit</div>
          </div>
          <div>
            <h2>資訊</h2>
            <div>隱私權政策</div>
            <div>Cookie</div>
            <div>GDPR</div>
          </div>
          <div>
            <h2>追蹤 ALPHA Shop</h2>
            <div>+886 02123-45678</div>
            <span>
              <FacebookIcon />
              <Instagram />
              <Whatsapp />
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default footer;

import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import img4 from "../image/mirrorless.jpg";
import img7 from "../image/z6.jpg";
import img8 from "../image/a7.jpg";
import img9 from "../image/z7.png";
import img10 from "../image/xt100.jpg";
import img11 from "../image/a600.jpg";
const styles = theme => ({
  button: {
    marginLeft: "55%",
    marginTop: "-18%",
    backgroundColor: " rgb(115, 70, 124)",
    border: "none",
    color: "white",
    fontFamily: "'Montserrat', sans-serif"
  },
  div: {
    width: "100%",
    height: "20em",
    marginBottom: "1%"
  },
  top: {
    fontSize: 25,
    textTransform: "uppercase",
    marginTop: "-35%",
    marginLeft: "1%",
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
    border: "2px solid black",
    padding: "2%",
    fontFamily: " 'Lato', light 300 ",
    position: "absolute"
  },
  ima: {
    opacity: 0.9,
    width: "100%",
    height: "150%",
    paddingBottom: "4%"
  },
  ima1: {
    width: "50%",
    height: "50%",
    marginLeft: "20%"
  },
  part: {
    padding: "3%",
    border: "1px solid rgb(115, 70, 124)",
    marginBottom: "5%"
  },
  tag: {
    fontSize: "12px",
    marginLeft: "50%"
  },
  tag1: {
    fontSize: 10,
    marginTop: "-20%",
    marginLeft: "45%",
    textAlign: "center",
    color: "black",
    fontFamily: " 'Lato', light 300 ",
    position: "absolute"
  }
});

class Pocetnik extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <section id="content">
          <div className="container">
            <div>
              <div>
                <Card component="div" className={classes.div}>
                  <img className={classes.ima} src={img4} alt="img4" />
                  <h3 className={classes.top}>
                    Tebi odgovara <br /> mirrorless fotoaparat!
                  </h3>
                  <p className={classes.tag1}>Photo by Math on Unsplash</p>
                </Card>

                <Card className={classes.part}>
                  <p>
                    {" "}
                    Spremni ste za “step-up” od Vašeg pametnog mobitela ili
                    kompaktnog fotoaparata, ali Vas je strah koristiti DSLR zbog
                    njegove glomaznosti. U tom slučaju, preporučamo “mirrorless”
                    fotoaparate. Kombinirajući određene funkcije DSLR-a s
                    fizičkim karakteristikama kompakta, mirrorlessi
                    predstavljaju prijelazni model između ove dvije kategorije.
                    Kompaktnost tijela i izmjenjivost objektiva prvo je što
                    možete uočiti kod ovih fotoaparata. Nadalje, nešto
                    skrivenije, no ništa manje važno obilježje, jest senzor. On
                    je kod ovakvih modela veći nego kod onih koje nalazimo u
                    kompaktima, a za razliku od DSLR modela ispred njega se ne
                    nalazi sustav s ogledalom.
                  </p>
                  <p>
                    Unatoč navedenim obilježjima karakterističnim za sve
                    mirrorless modele, unutar same kategorije nailazimo na
                    veliko "šarenilo". U sličnom cjenovnom rasponu možemo dobiti
                    modele pri čijem se kreiranju fokusiralo na različite domene
                    funkcionalnosti. Stoga ćemo, u svrhu stvaranja osnovne
                    percepcije spomenutoga, usporediti nekoliko najistaknutijih,
                    a povoljnijih fotoaparata oslanjajući se na njihove
                    karakteristike.{" "}
                  </p>
                  <p>
                    “Mirrorless” znači da umjesto optičkog tražila koji se
                    nalazi na DSLR-ovim fotoaparatima, ovakvi fotoaparati se
                    temelje na elektroničkom tražilu. Premda, najjeftinije
                    “mirrorless” kamere ne dolaze niti s takvim tražilom, te
                    umjesto toga, fotografija se jedino može vidjeti preko
                    stražnjeg zaslona, što je uobičajeno na kompaktnim
                    fotoaparatima i pametnim mobitelima.
                  </p>
                  <p>
                    Bilo da tražite bolju kameru od one na pametnom telefonu ili
                    tražite napredan, vrhunski model kako biste još više
                    izrazili svoju kreativnost, u nastavku vam donosimo neke od
                    boljih mirrorless fotoaparata koje možete kupiti.
                  </p>

                  <h4>
                    <b>Nikon Z6</b>
                  </h4>
                  <p>
                    <ul>
                      <li>24.5MP FX-Format BSI CMOS Sensor </li>
                      <li>UHD 4K30 Video; N-Log & 10-Bit HDMI Out</li>
                      <li>12 fps Shooting; ISO 100-51200</li>
                      <li>273-Point Phase-Detect AF System</li>
                      <li>Wi-Fi and Bluetooth</li>
                      <li>3.2" 2.1m-Dot Tilting Touchscreen LCD</li>
                    </ul>
                  </p>
                  <p>
                    Nikonov Z6 se našao na vrhu najboljih mirrorless
                    fotoaparata.Z6 je za mrvicu bolji od Sony Alpha A7 III i to
                    samo zato što je bolji spoj značajki i performansi. Senzor
                    od 24,5 megapiksela daje izvanredne rezultate s izvrsnom
                    reprodukcijom boja i detaljima, dok AF sustav od 273 točke
                    (premda nije toliko sofisticiran kao AF 693 točke u A7 III)
                    i snimanje do 12 sličica u sekundi označava da nikada ne
                    propuštate važne trenutke.
                  </p>
                  <img className={classes.ima1} src={img7} alt="img7" />
                  <p className={classes.tag}>
                    https://en.nikon.ca/nikon-products/product/mirrorless-cameras/z-6.html
                  </p>
                  <h4>
                    <b>Sony Alpha A7 III</b>
                  </h4>
                  <p>
                    <ul>
                      <li>24MP Full-Frame Exmor R BSI CMOS Sensor </li>
                      <li>693-Point AF System & 10 fps Shooting</li>
                      <li>ISO 204800 & Pixel Shift Multi Shooting</li>
                      <li>Built-In Wi-Fi and NFC, Dual SD Slots</li>
                      <li>ISO 204800 & Pixel Shift Multi Shooting</li>
                      <li>3.0" 922k-Dot Tilting Touchscreen LCD</li>
                    </ul>
                  </p>
                  <p>
                    Ovo je sjajan izbor za entuzijasta ili profesionalca, a kada
                    pogledate specifikaciju, lako je vidjeti zašto. Sony je uzeo
                    neke od najboljih dijelova svojih vodećih fotoaparata Alpha
                    A9 i A7R III te ih stavio u jedan fotoaparat koji nudi
                    fantastičnu mješavinu performansi i kvalitete slike. Senzor
                    od 24,2 megapiksela s full-frame odličan je u različitim
                    uvjetima osvjetljenja, dok napredni AF od 693 točki izgleda
                    još bolje s nadogradnjom upravljačkog softvera. To je jedna
                    napredna kamera koja ima odličnu cijenu s obzirom na
                    značajke i performanse koje nudi.
                  </p>
                  <img className={classes.ima1} src={img8} alt="img8" />
                  <p className={classes.tag}>
                    Photo by GMax Studios on Unsplash
                  </p>
                  <h4>
                    <b>Nikon Z7</b>
                  </h4>
                  <p>
                    <ul>
                      <li>45.7MP FX-Format BSI CMOS Sensor </li>
                      <li>UHD 4K30 Video; N-Log & 10-Bit HDMI Out</li>
                      <li>493-Point Phase-Detect AF System</li>
                      <li>3.2" 2.1m-Dot Tilting Touchscreen LCD</li>
                      <li>9 fps Continuous Shooting; ISO 64-25600</li>
                    </ul>
                  </p>
                  <p>
                    Volite Nikon Z6, ali želite više megapiksela? Tada bi Z7 sa
                    45.7MP trebao napraviti trik. Dijelivši identičan dizajn s
                    modelom Z6, Nikonova prva kamera full-frame mirrorless pravi
                    je trijumf. Možda je to kamera prve generacije, ali Nikon je
                    napravio tako da ga se ne može lako nadmašiti. Senzor od
                    45,7 megapiksela je briljantan i pruža neke od najboljih
                    rezultata koje smo vidjeli na mirrorless fotoaparatu, te
                    pruža i učinkovitu stabilizaciju slike. Faktor u prekrasnom
                    EVF-u, izvrsnom upravljanju, vrlo kompetentnim performansama
                    AF-a i odličnim odazivom tijekom cijelog vremena, lako je
                    vidjeti zašto je Z7 takav užitak za korištenje.
                  </p>
                  <img className={classes.ima1} src={img9} alt="img9" />
                  <p className={classes.tag}>
                    https://en.nikon.ca/nikon-products/product/mirrorless-cameras/z-7.html
                  </p>
                  <h4>
                    <b>Fujifilm X-T100</b>
                  </h4>
                  <p>
                    <ul>
                      <li> Retro & Lightweight</li>
                      <li> Electronic Viewfinder</li>
                      <li> 3 Way Tilt LCD</li>
                      <li> Touchscreen Operation</li>
                      <li>Wireless Connectivity</li>
                      <li> 24M APS-C Sensor</li>
                      <li> 4K Burst Shooting</li>
                    </ul>
                  </p>
                  <p>
                    U ovom modelu nepostojanje X Trans senzora je pomalo
                    razočaravajuće (Fujifilm-ov premium senzor), stvarnost je da
                    je to omogućilo Fujifilmu da malo skuplje košta. Također je
                    pošteno reći da će za većinu fotografa razlika biti
                    zanemariva, budući da X-T100 pruža neke od najboljih
                    rezultata koje ćete vidjeti od mirrorless kamere. 4K
                    snimanje videozapisa ograničeno na 15 slika u sekundi
                    također je malo spušteno, dok brzine izoštravanja ponekad
                    mogu biti spore. Inače, Fujifilmova nova kamera bez zrcala
                    ne razočarava. Lijepo gledati i koristiti, X-T100 je odličan
                    izbor ako tražite svoju prvu mirrorless kameru koja je u
                    jeftinijem cjenovnom rangu.
                  </p>
                  <img className={classes.ima1} src={img10} alt="img10" />
                  <p className={classes.tag}>
                    https://www.amateurphotographer.co.uk/reviews/compactsystemcameras/fujifilm-x-t100-review-the-entry-level-x-t-model
                  </p>
                  <h4>
                    <b>Sony Alpha A6000</b>
                  </h4>
                  <p>
                    <ul>
                      <li>
                        {" "}
                        24,3MP CMOS Exmor APS HD senzor i slikovni procesor
                        BIONZ X
                      </li>
                      <li> brzo inteligentno automatsko fokusiranje</li>
                      <li>
                        {" "}
                        univerzalni sustav zamijenjivih objektiva E-mount
                      </li>
                      <li>
                        {" "}
                        mogućnost potpuno ručnog nadzora nad kreativnom
                        fotografijom
                      </li>
                      <li> jednostavan nadzor za Wi-Fi i NFC povezivanje</li>
                    </ul>
                  </p>
                  <p>
                    Ne dopustite da vas cijena zavara. A6000 košta jednako kao i
                    ostale mirrorless kamere, ali je napredna i moćna i cijena
                    nije padala od 2014! Unatoč tome, njegove specifikacije i
                    danas izgledaju dobro, uključujući senzor od 24 milijuna
                    piksela, brzi hibridni sustav autofokusa s 179 točaka i
                    kontinuirano snimanje pri 11 sličica u sekundi. Međutim, ovo
                    je stariji model i ima svoje nedostatke, snima samo HD
                    videozapise koji nisu 4K, a zaslon nije osjetljiv na dodir.
                    Iako je dovoljno jeftin, vrhunske značajke modela A6000 čine
                    ga malo naprednijim za početnike.
                  </p>
                  <img className={classes.ima1} src={img11} alt="img11" />
                  <p className={classes.tag}>
                    https://www.pocket-lint.com/cameras/reviews/sony/129463-sony-alpha-a6000-review
                  </p>
                </Card>
              </div>
            </div>
            <div />
          </div>
        </section>
      </div>
    );
  }
}
Pocetnik.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Pocetnik);

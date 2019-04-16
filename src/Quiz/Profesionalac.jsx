import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import img4 from "../image/oprema.jpg";
import img from "../image/eos6d.jpg";
import img2 from "../image/eos5dsr.jpg";
import img3 from "../image/k1.jpg";
import img5 from "../image/d5.png";
import img6 from "../image/markIV.jpg";
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
    color: "#d5d4d6",
    border: "2px solid #d5d4d6",
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
    marginTop: "-15%",
    marginLeft: "45%",
    textAlign: "center",
    color: "white",
    fontFamily: " 'Lato', light 300 ",
    position: "absolute"
  }
});

class Profesionalac extends Component {
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
                    Tebi odgovara <br /> profesionalni DSLR!
                  </h3>
                  <p className={classes.tag1}>
                    Photo by Jeff Hopper on Unsplash
                  </p>
                </Card>
                <Card className={classes.part}>
                  <p>
                    Pravo je vrijeme da si priuštite fotoaparat kojeg ste
                    oduvijek željeli - full-frame DSLR s odličnom tehnikom
                    snimanja, izvrsnom kontrolom nad ISO i nad najmanjim
                    detaljima. To je ono što pravi profesionalci koriste.
                    Čestitamo, uspjeli ste!
                  </p>
                  <p>
                    Ako se smatrate profesionalnim fotografom, odnosno živite od
                    snimanja i prodaje snimljenih fotografija, tada svaka
                    uložena kuna u ove uređaje vrijedi. I zato Vam trebaju
                    full-frame DSLR fotoaparati jer su oni najbolji među
                    najboljima.
                  </p>
                  <p>
                    Ukratko opisano , full-frame DSLR fotoaparati (Digital
                    Single-Lens Reflex) su oni koji koriste senzor slike koji je
                    ekvivalent 35-milimetarskom formatu, odnosno 36 x 24
                    milimetarskom filmu. Radi se o digitalcima s vrlo moćnim
                    karakteristikama, te u nastavku su navedeni neke od
                    najboljih koje trenutno možete kupiti.
                  </p>
                  <p>
                    U nastavku su preporuke za popularnije profesionalne
                    DSLR-ove.
                  </p>
                  <h4>
                    <b>Canon EOS 6D</b>
                  </h4>

                  <p>
                    <ul>
                      <li>Senzor punog kadra s 20,2 megapiksela </li>
                      <li>Izdržljiva, lagana konstrukcija</li>
                      <li>
                        Maksimalna ISO vrijednost 25 600 (može se proširiti do
                        ISO 102 400)
                      </li>
                      <li>AF u 11 točaka osjetljiv do -3 EV</li>
                      <li>GPS* bilježi vašu lokaciju </li>
                      <li>Wi-Fi** prijenos datoteka i daljinska kontrola</li>
                      <li>Full HD videozapisi</li>
                    </ul>
                  </p>
                  <p>
                    Novi Canon EOS 6D je vjerojatno jedan od najisplativijih
                    full-frame DSLR fotoaparata na tržištu. Ovo je zaista
                    vrhunski digitalac koji maksimalno iskorištava svoje
                    mogućnosti. Mnogi ga uspoređuju si modelom EOS 5D Mark III.
                    Inače je i jedan od najlakših digitalaca u klasi, pa ako
                    namjeravate snimati puno, možda i po cijeli dan, vaš bi
                    izbor mogao pasti na EOS 6D.
                  </p>
                  <img className={classes.ima1} src={img} alt="img" />
                  <p className={classes.tag}>
                    Photo by Oscar Ivan Esquivel Arteaga on Unsplash
                  </p>
                  <h4>
                    <b>Canon EOS 5DS R</b>
                  </h4>
                  <p>
                    <ul>
                      <li>CMOS senzor s 50,6 megapiksela</li>
                      <li>Dva procesora DIGIC 6, do 5 sličica u sekundi</li>
                      <li>Senzor za RGB+IR mjerenje sa 150 000 piksela</li>
                      <li>AF u 61 točki</li>
                      <li>Snimanje uz obrezivanje, USB 3.0 </li>
                      <li>Sustav za kontrolu vibracija zrcala</li>
                      <li>Snimanje s mjeračem intervala</li>
                    </ul>
                  </p>
                  <p>
                    Najjača karakteristika ovog modela je njegova visora
                    rezolucija od čak 50,6 megapiksela, tako da će vam u
                    full-frame formatu ponuditi nevjerojatno detaljne
                    fotografije. Posebno je efikasan u kontroliranim uvjetima,
                    recimo u studiju za snimanje.
                  </p>
                  <img className={classes.ima1} src={img2} alt="img2" />
                  <p className={classes.tag}>
                    http://www.everyothershot.com/canon-5dsr-list-of-suitable-lenses/
                  </p>
                  <h4>
                    <b>Pentax K1</b>
                  </h4>
                  <p>
                    <ul>
                      <li>CMOS senzor s 36,4 megapiksela</li>
                      <li>Do 4,4 sličica u sekundi</li>
                      <li>Snimanje u 1080p rezoluciji</li>
                    </ul>
                  </p>
                  <p>
                    {" "}
                    Može se pohvaliti vrlo robusnim kućištem od magnezijske
                    legure. Spomenimo i kako je Pentax K1 u vlasništvu Ricoha,
                    te je vrlo jednostavan i intuitivan za korištenje što može
                    zahvaliti i ergonomskom rukohvatu. Kažu i kako u ovom
                    cjenovnom razredu radi daleko najbolje fotografije.
                  </p>
                  <img className={classes.ima1} src={img3} alt="img3" />
                  <p className={classes.tag}>
                    https://www.practicalphotography.com/group-tests-articles/2016/8/24/6-best-dslr-and-csc-cameras-with-super-high-resolutions
                  </p>
                  <h4>
                    <b>Nikon D5</b>
                  </h4>
                  <p>
                    <ul>
                      <li>CMOS senzor s 20,8 megapiksela</li>
                      <li>Do 12 sličica u sekundi</li>
                      <li>Snimanje u 2160p rezoluciji</li>
                    </ul>
                  </p>
                  <p>
                    Ako ste najčešće u pokretu, ovo je digitalac koji bi trebali
                    uzeti u obzir. Njegov 20,8 MP full-frame senzor ima
                    auto-fokus u čak 153 točke, a u sekundi može ispaliti čak 12
                    slika što je odlično za snimanje objeaka u pokretu. Kućište
                    je veliko, čvrsto i s dvostrukim rukohvatom što dodatno
                    olakšava snimanje. Omiljeni je digitalac sportskih
                    fotografa. Možda nema neki veliki dinamički raspon kao
                    konkurencija, ali zato ima odličan ISO raspon, a i može
                    snimiti 4K video.
                  </p>
                  <img className={classes.ima1} src={img5} alt="img5" />
                  <p className={classes.tag}>
                    https://www.nikon.hr/hr_HR/product/digital-cameras/slr/professional/d5#tech_specs
                  </p>
                  <h4>
                    <b>Canon EOS 5DS Mark IV</b>
                  </h4>
                  <p>
                    <ul>
                      <li>CMOS senzor s 30 megapiksela</li>
                      <li>Dual Pixel CMOS AF, do 12 sličica u sekundi</li>
                      <li>
                        Mikroprilagodba slike, pomak zamućenja pozadine,
                        smanjenje pojave dvostruke slike{" "}
                      </li>
                      <li>
                        AF do 61 točka / 21 križna AF točka (s mogućnošću
                        pojedinačnog odabira)
                      </li>
                      <li>
                        Full HD do 50/60p, HD do 100/120p HDR videozapis,
                        videozapis s ubrzanim prolaskom vremena
                      </li>
                    </ul>
                  </p>
                  <p>
                    Možda jedan od najboljih sve-u-jednom digitalaca koji je
                    odličan na svim područjima. Omiljen je kod svih vrsta
                    fotografa, od amatera do profesionalaca. Ističe se po
                    jedinstvenom Dual Pixel auto-fokusu, snimanjem 4K videa, a
                    ekran je osjetljiv na dodir. Svidjet će vam se i podrška za
                    Wi-Fi i GPS. Jednostavno svestran, tko ga ne bi volio.
                  </p>
                  <img className={classes.ima1} src={img6} alt="img6" />
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
Profesionalac.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Profesionalac);

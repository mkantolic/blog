import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import img4 from "../image/amater.jpg";
import img7 from "../image/d3500.png";
import img8 from "../image/d3400.png";
import img9 from "../image/eos800.png";
import img10 from "../image/d5600.jpg";
import img11 from "../image/eos750.jpg";
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
    backgroundColor: "rgba(212, 211, 211, 0.747)",
    fontSize: 25,
    textTransform: "uppercase",
    marginTop: "-55%",
    width: "60%",
    marginLeft: "1%",
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
    border: "2px solid black",
    padding: "2%",
    fontFamily: " 'Lato', light 300 ",
    position: "relative"
  },
  ima: {
    opacity: 0.9,
    width: "100%",
    height: "170%",
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

class Amater extends Component {
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
                    Tebi odgovara <br /> početnički DSLR!
                  </h3>
                  <p className={classes.tag}>
                    Photo by Tom Pumford on Unsplash
                  </p>
                </Card>

                <Card className={classes.part}>
                  <p>
                    Ako ste spremni napraviti korak od svog pametnog telefona
                    ili point'n'shoot kamere, u nastavku možete pronaći jedne od
                    najboljih početničkih DSLR u 2019. godini.
                  </p>
                  <p>
                    DSLR za početnike je pametan potez kada imate želju
                    napredovati ili više niste zadovoljni slikama sa svojeg
                    dosadašnjeg pametnog mobitela ili kompaktnog fotoaparata.
                    Ako je to slučaj, došli ste na pravo mjesto da saznate koji
                    je najbolji DSLR za početnike koji će pomoći da Vaše
                    fotografije budu na većoj razini.
                  </p>
                  <p>
                    DSLR uređaji za početnike pružaju veliki korak u kvaliteti
                    slike od kompaktnog fotoaparata ili pametnog telefona. Mogu
                    dijeliti istu količinu megapiksela, ali je veličina senzora
                    DSLR-a fizički mnogo veća u većini slučajeva, što omogućuje
                    vrhunske rezultate s više detalja i boljim performansama pri
                    slabom osvjetljenju. To ne zaboravlja da DSLR uređaji na
                    početnoj razini nude mnogo više ručne kontrole i mogućnost
                    promjene objektiva kako bi se uhvatili u koštac s velikim
                    brojem projekata. Ipak, ne brinite - postoji i niz
                    automatskih načina rada koji će vam pomoći dok ne budete
                    zadovoljni kreativnijim kontrolama koje nudi DSLR.
                  </p>
                  <p>
                    Očito, što više značajki želite na svom početničkom DSLR-u,
                    to ćete više platiti, ali jesu li vam zapravo potrebni? Ove
                    vrhunske kamere jedne su od najjeftinijih na tržištu, ali i
                    dalje nude impresivne performanse i kvalitetu slike, plus
                    dovoljno značajki za obradu većine zadataka fotografiranja,
                    osobito ako još uvijek učite.
                  </p>
                  <p>
                    U nastavku su preporuke za popularnije profesionalne
                    DSLR-ove.
                  </p>
                  <h4>
                    <b>Nikon D3500</b>
                  </h4>
                  <p>
                    <ul>
                      <li>APS-C CMOSa s 24,2 megapiksela </li>
                      <li>Do 5 sličica u sekundi</li>
                      <li>Snimanje u 1080p rezoluciji</li>
                    </ul>
                  </p>
                  <p>
                    Nikonov najnoviji model zamjenjuje D3400, i dok iznutra
                    dijele slične specifikacije, D3500 omogućava lakše rukovanje
                    i kontrolu. Nikonov pametni "Guide mode" omogućava lakše
                    savladavanje nad ključnim postavkama prilikom slikanja. Ako
                    tražite svoj prvi DSLR, bilo koji drugi će teško nadmašiti
                    D3500.
                  </p>
                  <img className={classes.ima1} src={img7} alt="img7" />
                  <p className={classes.tag}>
                    https://imaging.nikon.com/lineup/dslr/d3500/
                  </p>
                  <h4>
                    <b>Nikon D3400</b>
                  </h4>
                  <p>
                    <ul>
                      <li>APS-C CMOSa s 24,2 megapiksela </li>
                      <li>Do 5 sličica u sekundi</li>
                      <li>Snimanje u 1080p rezoluciji</li>
                    </ul>
                  </p>
                  <p>
                    Upravo zamijenjen sa D3500, ali nemojte odbiti D3400.
                    Podržava veliki raspon značajki koji su savršeni za amatere,
                    te je i dalje odličan fotoaparat za početnike koji žele biti
                    kreativniji s svojom fotografijom. . Dijeljenje većinu istih
                    specifikacija kao i D3500, trajanje baterije je sjajno, te
                    slike neće razočarati. Ako vam ne smeta što nemate najnoviji
                    model, možete odabrati D3400 za manje novaca od D3500, to je
                    i dalje ogroman napredak.
                  </p>
                  <img className={classes.ima1} src={img8} alt="img8" />
                  <p className={classes.tag}>
                    https://imaging.nikon.com/lineup/dslr/d3400/
                  </p>
                  <h4>
                    <b>Canon EOS Rebel T7i / Canon EOS 800D</b>
                  </h4>
                  <p>
                    <ul>
                      <li>APS-C CMOSa s 24,2 megapiksela </li>
                      <li>Do 6 sličica u sekundi</li>
                      <li>Snimanje u 1080p rezoluciji</li>
                    </ul>
                  </p>
                  <p>
                    EOS Rebel T7i (poznat kao EOS 800D izvana) nalazi se na vrhu
                    Canonovog EOS DSLR opsega. Zahvaljujući novodizajniranom
                    senzoru od 24,2 megapiksela koji pruža poboljšanu visoku ISO
                    performansu u odnosu na starije modele, autofokus Rebel T7i
                    također dobiva poticaj, sada s rasporedom od 45 točaka koji
                    je podržan izvrsnim "live-view" AF sustavom. Tu je i novo
                    dizajnirano grafičko sučelje koje će ovaj fotoaparat učiniti
                    još privlačnijim za nove korisnike, ali nedostatak 4K videa
                    i kvaliteta vanjskih materijala razočaravaju. Možda
                    najskuplja opcija, ali definitivno jedna od najboljih.
                  </p>
                  <img className={classes.ima1} src={img9} alt="img9" />
                  <p className={classes.tag}>
                    https://www.canon.hr/cameras/eos-800d/
                  </p>
                  <h4>
                    <b>Nikon D5600</b>
                  </h4>
                  <p>
                    <ul>
                      <li>APS-C CMOSa s 24,2 megapiksela </li>
                      <li>Do 5 sličica u sekundi</li>
                      <li>Snimanje u 1080p rezoluciji</li>
                    </ul>
                  </p>
                  <p>
                    D5600 izravno se natječe s Canonovim EOS Rebel T7i / EOS
                    800D pri vrhu DSLR tržišta. Gdje su Nikonove fotoaparate
                    serije D3000 dizajnirane kao početničke DSLR-ove, D5000
                    serija je poželjnija ako želite biti kreativniji. D5600 ima
                    veliki 3.2-inčni zaslon osjetljiv na dodir s promjenjivim
                    kutom i dok je brzina fokusiranja u živom prikazu brža, AF
                    sustav od 39 točaka je najbolji koji ćete pronaći u DSLR-u
                    početne razine. S D2400MP senzorom od 24,2 megapiksela nema
                    puno pogrešaka, što daje izvrsne rezultate, dok logičan
                    raspored upravljanja D5600 olakšava korištenje.
                  </p>
                  <img className={classes.ima1} src={img10} alt="img10" />
                  <p className={classes.tag}>
                    https://imaging.nikon.com/lineup/dslr/d5600/
                  </p>
                  <h4>
                    <b>Canon EOS Rebel T6i / Canon EOS 750D</b>
                  </h4>
                  <p>
                    <ul>
                      <li>APS-C CMOSa s 24,2 megapiksela </li>
                      <li>Do 5 sličica u sekundi</li>
                      <li>Snimanje u 1080p rezoluciji</li>
                    </ul>
                  </p>
                  <p>
                    EOS Rebel T6i (nazvan EOS 750D izvan SAD-a) možda je do
                    prošle godine bio upravo kao EOS Rebel T7i / 800D, ali je i
                    dalje odlična opcija ako vam cijena novog modela nije
                    prihvatljiva. Iako senzor nije toliko dobar kao onaj u
                    novijem T7i unatoč tome što ima istu razlučivost, još uvijek
                    je vrlo dobar, varijantni zaslon osjetljiv na dodir još
                    uvijek jedan od najboljih. Izvedbe automatskog izoštravanja
                    mogle bi biti bolje, ali svejedno je to još uvijek vrlo
                    dobar DSLR za amatere.
                  </p>
                  <img className={classes.ima1} src={img11} alt="img11" />
                  <p className={classes.tag}>
                    https://www.canon.hr/for_home/product_finder/cameras/digital_slr/eos_750d/
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
Amater.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Amater);

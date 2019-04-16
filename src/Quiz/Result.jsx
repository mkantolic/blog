import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import img4 from "../image/cam3.jpg";
import img from "../image/sonyrx.jpg";
import img2 from "../image/zf100.jpg";
import img3 from "../image/nikonC.png";
import img6 from "../image/canonPOWER.jpg";
const styles = theme => ({
  div: {
    width: "100%",
    height: "15em"
  },
  top: {
    fontSize: 15,
    textTransform: "uppercase",
    marginTop: "-20%",
    marginLeft: "25%",
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
    border: "2px solid black",
    padding: "2%",
    fontFamily: " 'Lato', light 300 ",
    position: "absolute"
  },
  ima: {
    width: "60%",
    height: "140%",
    paddingBottom: "4%"
  },
  ima1: {
    width: "50%",
    height: "50%",
    marginLeft: "20%"
  },
  header: {
    borderRadius: "5px",
    fontSize: "30px",
    paddingBottom: "-10%",
    paddingLeft: " 5%",
    fontFamily: "'Lobster', cursive",
    color: "rgb(115, 70, 124)",
    width: "100%",
    height: "2em"
  },
  part: {
    padding: "3%",
    border: "1px solid rgb(115, 70, 124)",
    marginBottom: "5%"
  },
  tag: {
    fontSize: "12px",
    marginLeft: "50%"
  }
});

class Result extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card component="div" className={classes.div}>
          <img className={classes.ima} src={img4} alt="img4" />
          <Typography className={classes.top}>
            <strong>{this.props.quizResult}</strong>!
          </Typography>{" "}
        </Card>
        <Card className={classes.part}>
          <p>
            Bridge kamere izgledaju kao savršeno rješenje za sve vaše potrebe za
            fotografiranjem. Imaju sve kontrole i značajke odgovarajućih DSLR i
            mirrorless fotoaparata, ali dolaze s fiksiranim ultra-zoom
            objektivima koje jednostavno ne možete dobiti nigdje drugdje. Bridge
            kamere doista izgledaju kao ultimativan do-it-all rješenje koje
            svaki fotograf traži. No postoje zamke i kompromisi, a najbolji
            modeli nisu jeftini.
          </p>
          <p>
            Prva i najvažnija stvar koju trebate biti svjesni s bridge kamerama
            je njihova veličina senzora. Proizvođači fotoaparata mogu koristiti
            objektiv za zumiranje samo s tim golemim rasponom pomoću manjeg
            senzora. Do nedavno, gotovo sve bridge fotoaparati koristili su male
            senzore od 1 / 2,3 inča koje uobičajeno možete pronaći u kamerama za
            snimanje i u nekim pametnim telefonima. Dobivate veliki raspon
            zumiranja po pristupačnoj cijeni, ali kvaliteta slike je ograničena.
          </p>
          <p>
            Tada su Sony, Panasonic i Canon na tržište stavili naprednije kamere
            s mnogo većim senzorima. Ovi senzori nisu toliko veliki kao oni u
            DSLR i mirrorless fotoaparatima, ali nisu niti toliko zaostali, a
            kvaliteta je mnogo bolja od uobičajenih i dosadašnjih bridge kamera.
          </p>
          <p>
            U nastavku su preporuke za neke od popularnijih bridge fotoaparata.
          </p>
          <h4>
            <b>Sony RX10 IV</b>
          </h4>

          <p>
            <ul>
              <li> Ultrabrzo automatsko fokusiranje, (0,03 s 2) </li>
              <li>24fps4 s neprekidnim snimanjem uz praćenje AF-a/AE-a</li>
              <li> objektiv od 24-600 mm7 F2.4-4</li>
              <li>senzor Exmor RS™</li>{" "}
            </ul>
          </p>
          <p>
            Automatsko fokusiranje vrhunske brzine s odličnim rasponom zumiranja
            Sada je jednostavnije snimiti još veličanstvenije slike i
            videozapise u svakoj prigodi. Novi model RX10 IV mnogo je više od
            samo čvrstog, pametnog višenamjenskog kompaktnog uređaja. On
            obuhvaća i revolucionarne inovacije kojima će se diviti čak i
            profesionalci; od iznimno brzog sustava za automatsko fokusiranje do
            legendarne optike ostvarene kroz raspon zumiranja od 25x, pa sve do
            iznimno precizne, snažne obrade slika i još mnogo toga.
          </p>
          <img className={classes.ima1} src={img} alt="img" />
          <p className={classes.tag}>
            https://www.sony.hr/electronics/cyber-shot-kompaktni-fotoaparati/dsc-rx10m4#product_details_default
          </p>
          <h4>
            <b>Panasonic FZ1000</b>
          </h4>
          <p>
            <ul>
              <li>CMOS senzor s 20.1 MP</li>
              <li>
                {" "}
                Wi-Fi s NFC funkcijom (posebna aplikacija za mobitele omogućava
                potpunu kontrolu)
              </li>
              <li>
                {" "}
                5 osni stabilizator slike POWER OIS s korekcijom horizontalnog
                položaja
              </li>
              <li>Brz AF sustav</li>
              <li>
                {" "}
                Za pregled ima 7,62 cm (3") inteligentni LCD zaslon rezolucije
                921.000 točaka.
              </li>
            </ul>
          </p>
          <p>
            FZ1000 se čini kao bolja opcija jer u startu ima bolji objektiv nego
            većina DSLR koji dolaze s kit objektivom. Mnoge ljude, izmjenjivi
            objektivi odbijaju, s obzirom da to vide kao dodatan trošak, tako da
            je za bolju optiku, FZ1000 idealno rješenje u koje se investira samo
            jednom. DSLR ili mirrorless će i dalje biti bolji pri slabom svjetlu
            radi većeg senzora, no priznajmo si - svi uglavnom snimamo po danu
            kada ta razlika nije očigledna. Sve skupa, FZ1000 jedan od boljih i
            zanimljivijih fotoaparata, iako je stavljen na tržište 2014., i
            dalje drži visoku poziciju.
          </p>
          <img className={classes.ima1} src={img2} alt="img2" />
          <p className={classes.tag}>
            https://usporedi.hr/testovi/kompaktan-profesionalac-panasonic-lumix-dmc-fz1000-recenzija
          </p>
          <h4>
            <b>Nikon P900</b>
          </h4>
          <p>
            <ul>
              <li>
                CMOS senzor slike sa 16 megapiksela s pozadinskim osvjetljenjem
              </li>
              <li>Podrška za GPS/GLONASS/QZSS uz POI</li>
              <li>Ugrađena podrška za Wi-Fi® i NFC</li>
              <li>Videozapisi pune HD razlučivosti</li>
            </ul>
          </p>
          <p>
            {" "}
            Ako ste fotograf koji voli snimati životinjski svijet ili noćno
            nebo, fotoaparat COOLPIX P900 od 16 megapiksela i s nevjerojatnim
            83x optičkim zumom vam omogućuje dohvaćanje detalja koji nisu
            vidljivi golim okom. Snimajte u trenu s brzim AF-om i smanjenim
            kašnjenjem vremena snimanja, a optički VR (smanjenje vibracija) s
            dvostrukim otkrivanjem u 5,0 stupnjeva smanjuje zamućenja. Uživajte
            u fleksibilnoj kompoziciji pomoću monitora s promjenjivim kutom i
            ugrađenim elektroničkim tražilom, za snimanje detaljnih fotografija
            u odličnoj telefotografskoj razlučivosti i videozapisa pune HD
            razlučivosti. Uz ugrađenu podršku za GPS/GLONASS/QZSS možete
            precizno u točku u trenu podijeliti lokaciju snimanja i slike pomoću
            ugrađene podrške za Wi-Fi®¹ i NFC². Izgrađen za ugodno snimanje, uz
            fotoaparat COOLPIX P900 ljepotama prirode se možete približiti više
            nego ikad prije.
          </p>
          <img className={classes.ima1} src={img3} alt="img3" />
          <p className={classes.tag}>
            https://www.nikon.hr/hr_HR/product/digital-cameras/coolpix/bridge/coolpix-p900#overview
          </p>

          <h4>
            <b> Canon PowerShot G3 X</b>
          </h4>
          <p>
            <ul>
              <li>CMOS senzor s 20,2 megapiksela</li>
              <li>Full HD izmjena sličica od 24p do 60p</li>
              <li>Objektiv: 24-600mm (equiv.) f/2.8-5.6</li>
              <li>Optičko zumiranje od 25x uz izuzetno široki kut</li>
            </ul>
          </p>
          <p>
            Veliki senzor u kombinaciji s objektivom s izuzetno velikim
            zumiranjem od 25x Jasan, izuzetno širokokutni objektiv od 24 mm za
            zumiranje u kombinaciji sa senzorom tipa 1,0 omogućava nevjerojatno
            detaljno snimanje svih objekata, bez obzira na udaljenost. Bez
            obzira snimate li fotografije ili videozapise, PowerShot G3 X
            omogućava snimanje scena s predivno zamućenom pozadinom i postizanje
            jasnih snimki, čak i u uvjetima slabog osvjetljenja.
          </p>
          <img className={classes.ima1} src={img6} alt="img6" />
          <p className={classes.tag}>
            https://www.canon.hr/for_home/product_finder/cameras/digital_camera/powershot/powershot_g3_x/?slide=3
          </p>
        </Card>
      </div>
    );
  }
}
Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};
Result.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Result);

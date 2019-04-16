import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import img4 from "../image/sony.jpg";
import img7 from "../image/canon.jpg";
import img8 from "../image/panasonic.jpeg";
import img9 from "../image/nikonP.jpg";
import img10 from "../image/lumix.jpg";
import img11 from "../image/ixus.jpg";
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
    height: "24em",
    marginBottom: "1%"
  },
  top: {
    backgroundColor: "rgba(212, 211, 211, 0.747)",
    fontSize: 25,
    textTransform: "uppercase",
    marginTop: "-62%",
    width: "70%",
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

class Kompaktni extends Component {
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
                    Tebi odgovara <br /> kompaktni fotoaparat!
                  </h3>
                  <p className={classes.tag}>
                    Photo by Malte Wingen on Unsplash
                  </p>
                </Card>

                <Card className={classes.part}>
                  <p>
                    {" "}
                    Ponekad, DSLR ili mirrorless kamera su previše. Što ako
                    želite kameru koja vam daje DSLR kvalitetu, ali se i dalje
                    uklapa u vaš džep jakne? Što ako trebate kameru koju cijela
                    obitelj može koristiti, ili onu koja može preživjeti
                    raznorazna kretanja? Što ako želite najveći mogući raspon
                    zumiranja za najmanji mogući novac?
                  </p>
                  <p>
                    Kompaktni fotoaparati zapravo dolaze u svim oblicima i
                    veličinama, te u nastavku se neke koje preporučujemo.
                    Počinjemo s najboljim kompaktnim fotoaparatima vrhunske
                    kvalitete za ozbiljne fotografe, obje s objektivima za
                    zumiranje i osnovnim objektivima s fiksnom žarišnom
                    duljinom. Te i jednostavnije za one kojima treba
                    najjednostavnija kamera.
                  </p>
                  <h4>
                    <b> Canon PowerShot G1 X Mark III</b>
                  </h4>
                  <p>
                    <ul>
                      <li>APS-C CMOS s 24.5MP </li>
                      <li>
                        Objektiv je 15 – 45 mm (35 mm ekvivalentno: 24 – 72 mm)
                      </li>
                      <li>
                        Optički 3x ZoomPlus 6x Digitalno pribl. 4x (s digitalnim
                        telekonverterom pribl. 1,6x ili 2x1) Kombinirano pribl.
                        12x
                      </li>
                      <li>
                        Maksimalno 49 AF točaka (fiksna lokacija na mreži 7 x 7)
                        uz automatski odabir fotoaparata
                      </li>
                      <li>
                        Aktivni dodirni LCD i automatsko izoštravanje dodirom i
                        povlačenjem dostupni su kada se koristi elektroničko
                        tražilo.
                      </li>
                      <li>
                        Dodirni LCD (TFT) s promjenjivim kutom od 7,5 cm (3
                        inča) i ojačanim staklom.
                      </li>
                    </ul>
                  </p>
                  <p>
                    Canon je doista učinio nevjerojatan posao s G1 X Mark III.
                    Da,za ovaj fotoaparat morat ćete izdvojiti nešto više
                    novaca, ali u njemu se nalazi skoro isti 24-megapikselni
                    APS-C senzor u tankom kućištu kao što ćete naći u Canon EOS
                    80D DSLR i EOS M mirrorless fotoaparatima. To je povezano s
                    objektivom za zumiranje koji je još nevjerojatniji, jer
                    pokriva žarišnu duljinu od 24-72 ekvivalenta i još uvijek se
                    može povući natrag u tijelo fotoaparata kada ne
                    fotografirate. Istina je da maksimalni otvor blende znatno
                    opada dok povećavate sliku, od f / 2,8 do f / 5,6, ali
                    svejedno dobivate to s kompaktnim DSLR i bez ogledala. G1 X
                    Mark je prilično skup, ali trenutno je u svojoj klasi za
                    vrhunski kompaktni fotoaparat s zoomom.
                  </p>
                  <img className={classes.ima1} src={img7} alt="img7" />
                  <p className={classes.tag}>
                    https://www.canon.hr/cameras/powershot-g1-x-mark-iii/
                  </p>
                  <h4>
                    <b>Panasonic Lumix LX100 II</b>
                  </h4>
                  <p>
                    <ul>
                      <li>
                        {" "}
                        Up to 17MP images (from crops of 20MP Four Thirds CMOS
                        sensor)
                      </li>
                      <li> 24-75mm equivalent F1.7-2.8 zoom</li>
                      <li>
                        {" "}
                        4:3, 3:2, 16:9 and 1:1 aspect ratios using selector
                        switch on lens
                      </li>
                      <li> 4K video at up to 30p</li>
                      <li> 2.76M-dot equiv. electronic viewfinder</li>
                      <li> 1.24M-dot rear touchscreen</li>
                      <li>Wi-Fi with always-connected Bluetooth</li>
                    </ul>
                  </p>
                  <p>
                    Nedostatak kada imate fotoaparat s velikim senzorom je taj
                    da Vam uz njega treba i veliki objektiv, tako da tu odlazi
                    ušteda na prostoru. Ali Panasonic je naišao na odlično
                    rješenje s Panasonic LX100 II. On kombinira Micro Four
                    Thirds senzor koji nije mnogo manji od ASP-C senzora koji se
                    nalazi u DSLR-ovima, s minijaturnim sklopom leća koji se
                    svodi da stane u tijelo fotoaparata i dovoljno tanak da ga
                    nosi svugdje. LX100 II je potpuno nova verzija originalnog
                    LX100, koji je, doduše, počeo pokazivati ​​svoju starost.
                    Novi model ima 16-megapikselni "multi-aspect" senzor, što
                    znači da možete koristiti njegov izvorni omjer 4: 3, omjer
                    3: 2 koji koristi većina DSLR-ova i modela bez zrcala, ili
                    16: 9 'široki' format, bez obrezivanja slike i gubitka
                    piksela. Uz vanjsko brzo biranje okidača, prsten objektiva
                    objektiva i prekidač omjera širine i visine, LX100 II je
                    kompaktni fotoaparat iz snova za entuzijaste i stručnjake.
                  </p>
                  <img className={classes.ima1} src={img8} alt="img8" />
                  <p className={classes.tag}>
                    https://www.dpreview.com/reviews/panasonic-dc-lx100-ii
                  </p>
                  <h4>
                    <b>Nikon Coolpix P900</b>
                  </h4>
                  <p>
                    <ul>
                      <li>16MP CMOS Sensor</li>
                      <li> 24-2000mm 35mm Equivalent Focal Length</li>
                      <li>83x Optical Zoom NIKKOR Super ED VR Lens</li>
                      <li>Vari-Angle TFT LCD Screen</li>
                      <li> Electronic Viewfinder</li>
                      <li> Dual Detect Optical VR</li>
                      <li>Full HD 1080/60p Video</li>
                      <li>Built-In Wi-Fi, NFC, and GPS</li>
                      <li>Auto & Full Manual Exposure Control</li>
                      <li>166x Dynamic Fine Zoom, 332x Digi Zoom</li>
                    </ul>
                  </p>
                  <p>
                    Sa svojim 24-2000mm zoom objektivom, Coolpix P900 je svakako
                    ambiciozna kamera. Ne podudara se s rasponom zumiranja
                    novijeg Coolpix P1000, ali je mnogo jeftiniji. S ovom vrstom
                    zoom duljine povećavate zumiranje više nego s prosječnim
                    DSLR-ovim objektivom, što objašnjava zašto je to bio veliki
                    uspjeh među amaterskim astrofotografima. Objektiv je
                    opremljen Nikonovim sustavom smanjenja vibracija s pet
                    stupnjeva, a uz Wi-Fi, NFC, pa čak i GPS sustav dobivate
                    obilje ručne kontrole nad postavkama ekspozicije. Naravno,
                    neće biti za svakoga; nema snimanja u RAW formatu, zaslon
                    nije osjetljiv na dodir. Ipak, P900 nudi nešto zaista
                    jedinstveno na ovoj razini.
                  </p>
                  <img className={classes.ima1} src={img9} alt="img9" />
                  <p className={classes.tag}>
                    https://www.bhphotovideo.com/c/product/1127274-REG/nikon_26499_coolpix_p900_digital_camera.html{" "}
                  </p>
                  <h4>
                    <b>Panasonic TZ200 / SZ200</b>
                  </h4>
                  <p>
                    <ul>
                      <li> 20.1-million-pixel, 1-inch sensor</li>
                      <li> 24-360mm equiv. f/3.3-6.4 lens</li>
                      <li>2.33m-dot LCD viewfinder</li>
                      <li>1.24m-dot 3-inch touchscreen</li>
                      <li>4K video recording</li>
                      <li>Bluetooth and Wi-Fi connectivity</li>
                    </ul>
                  </p>
                  <p>
                    Ako idete na putovanje, zadnje što želite je da budete
                    opterećeni dodatnom opremom. Ali želite fotoaparat koji može
                    snimiti bilo koji dio Vašeg putovanja i da je što moguće
                    bliže kvaliteti "odgovarajuće" kamere. Tada je za Vas
                    Panasonic TZ200 / SZ200. Zamjenjuje stariji TZ100 / SZ100, ,
                    koji je još uvijek u prodaji. TZ200 / SZ200 zadržava isti
                    1-inčni 20-megapikselni senzor - ali dodaje i veći 15x zoom
                    objektiv. S time pokriva širokokutni prikaz od 24 mm, sve do
                    telefoto podešavanja dugog dometa od 360 mm. To nije najduži
                    raspon zumiranja bilo koje kompaktne kamere, ali to je
                    najduže što ćete dobiti u ovom fotoaparatu s velikim
                    senzorom. TZ200 / SZ200 proizvodi izvrsne JPEG slike izravno
                    iz fotoaparata, baš kao i njegov prethodnik, i ima mogućnost
                    snimanja u RAW formatu i 4K videozapisa. Makro način rada
                    omogućuje Vam da se fokusirate na objekte udaljene samo 3
                    cm, a Panasonicov 4K foto način rada može generirati 8K
                    slika iz niza snimaka snimljenih pri 30 sličica u sekundi. U
                    načinu rada 4K Photo možete odabrati točku izoštravanja
                    nakon što snimite fotografiju. Panasonic TZ200 / SZ200 je
                    jedan od najboljih kompaktnih fotoaparata koje trenutačno
                    možete kupiti.
                  </p>
                  <img className={classes.ima1} src={img10} alt="img10" />
                  <p className={classes.tag}>
                    https://www.trustedreviews.com/reviews/panasonic-tz200{" "}
                  </p>
                  <h4>
                    <b>Canon Ixus 185 HS</b>
                  </h4>
                  <p>
                    <ul>
                      <li>20.0MP</li>
                      <li>
                        {" "}
                        zumiranje: 5 – 40 mm (ekvivalent formatu 35 mm: 28 – 224
                        mm) ), Optičko 8x ZoomPlus 16x Digitalno pribl. 4x
                        Kombinirano pribl. 32x 2
                      </li>
                      <li>
                        AiAF (prepoznavanje lica / 9 točaka), 1 točka
                        automatskog izoštravanja (fiksno u središtu)
                      </li>
                      <li>
                        LCD: 6,8 cm (2,7 inča) LCD (TFT), pribl. 230.000 točaka
                      </li>
                      <li> Kontinuirano snimanje: Pribl. 0,8 snimki/s </li>
                    </ul>
                  </p>
                  <p>
                    Nema svatko potrebu imati Leica Q ili imati sve tehnološke
                    mogućnosti u malom kompaktnom fotoaparatu. Ponekad, sve što
                    trebate je jednostavna, laka, džepna kamera i kamera koja
                    može koristiti cijela obitelj, te ako se dogodi da se
                    izgrebe, ili se ostavi negdje ne bi bila potpuna katastrofa.
                    Mali Canon Ixus 185 savršeno se uklapa u Vaše želje. Njegov
                    mali senzor ne proizvodi kvalitetnu sliku kakve možete
                    vidjeti u galeriji, ali kontrole su vrlo jednostavne, i to
                    jedna od najjeftinijih, ali kvalitetnih kamera s 8x zumom o
                    kojem pametni telefoni mogu samo sanjati.
                  </p>
                  <img className={classes.ima1} src={img11} alt="img11" />
                  <p className={classes.tag}>
                    https://www.canon.hr/cameras/ixus-185/
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
Kompaktni.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Kompaktni);

'use client'
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Navbar, NavbarBrand, NavLink } from 'react-bootstrap';
import { Button} from "react-bootstrap";
import { MdTranslate } from "react-icons/md";
import { SiGoogletranslate } from "react-icons/si";
import { FormSelect } from 'react-bootstrap';


const MAX_CHARS = 5000;

export default function Home() {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState('en');
  const [targetLanguage, setTargetLanguage] = useState('es');
  const [isLoading, setIsLoading] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const handleInputChange = (e) => {
    const text = e.target.value;
    if (text.length <= MAX_CHARS) {
      setInputText(text);
      setCharCount(text.length);
    }
  };

  const handleSwitch = () => {
    const tempLang = sourceLanguage;
    setSourceLanguage(targetLanguage);
    setTargetLanguage(tempLang);

    setInputText(translatedText);
    setTranslatedText(inputText);
  };

  const handleTranslate = async () => {
    if (!inputText.trim()) {
      alert('Please enter some text to translate');
      return;
    }

    if (!sourceLanguage || !targetLanguage) {
      alert('Please select both source and target languages');
      return;
    }

    if (sourceLanguage === targetLanguage) {
      alert('Source and target languages cannot be the same');
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch('/api/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: inputText,
          source: sourceLanguage,
          target: targetLanguage,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setTranslatedText(data.translatedText);
      } else {
        console.error(data.error);
        alert('Translation failed: ' + (data.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error during translation: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="mt-5">
      <Container>
        <Navbar expand="lg" style={{ borderRadius: '20px', borderColor: 'white', backgroundColor: '#212121' }} className='p-3'>
          <Container>
            <NavbarBrand href="#" style={{ color: 'white', alignItems: 'center', textAlign: 'center' }}>Simple Language Translator</NavbarBrand>
            <Row>
              <Col>
                <NavLink style={{ color: 'white' }} href="https://tlynx538.github.io/"> <span>By</span> Vinayak Jaiwant Mooliyil</NavLink>
              </Col>
            </Row>
          </Container>
        </Navbar>
        <Container className="mt-3 mb-3">
          <Row className="d-flex justify-content-center align-items-center">
            <Col md={5}>
              <Container style={{ color: "white", borderRadius: "20px", backgroundColor: '#212121' }} className='mt-4'>
                <Col>
                  <Row className='p-2'>
                    <FormSelect className="mt-4 bg-dark" style={{ borderRadius: '45px', borderColor: 'grey', borderWidth: '2px', color: 'white' }} aria-label='Choose Input Language' value={sourceLanguage} onChange={(e) => setSourceLanguage(e.target.value)}>
                      <option>Choose Input Language</option>
                      <option value="ab">Abkhaz</option>
                      <option value="ace">Acehnese</option>
                      <option value="ach">Acholi</option>
                      <option value="af">Afrikaans</option>
                      <option value="sq">Albanian</option>
                      <option value="alz">Alur</option>
                      <option value="am">Amharic</option>
                      <option value="ar">Arabic</option>
                      <option value="hy">Armenian</option>
                      <option value="as">Assamese</option>
                      <option value="awa">Awadhi</option>
                      <option value="ay">Aymara</option>
                      <option value="az">Azerbaijani</option>
                      <option value="ban">Balinese</option>
                      <option value="bm">Bambara</option>
                      <option value="ba">Bashkir</option>
                      <option value="eu">Basque</option>
                      <option value="btx">Batak Karo</option>
                      <option value="bts">Batak Simalungun</option>
                      <option value="bbc">Batak Toba</option>
                      <option value="be">Belarusian</option>
                      <option value="bem">Bemba</option>
                      <option value="bn">Bengali</option>
                      <option value="bew">Betawi</option>
                      <option value="bho">Bhojpuri</option>
                      <option value="bik">Bikol</option>
                      <option value="bs">Bosnian</option>
                      <option value="br">Breton</option>
                      <option value="bg">Bulgarian</option>
                      <option value="bua">Buryat</option>
                      <option value="yue">Cantonese</option>
                      <option value="ca">Catalan</option>
                      <option value="ceb">Cebuano</option>
                      <option value="ny">Chichewa (Nyanja)</option>
                      <option value="zh-CN">Chinese (Simplified)</option>
                      <option value="zh-TW">Chinese (Traditional)</option>
                      <option value="cv">Chuvash</option>
                      <option value="co">Corsican</option>
                      <option value="crh">Crimean Tatar</option>
                      <option value="hr">Croatian</option>
                      <option value="cs">Czech</option>
                      <option value="da">Danish</option>
                      <option value="din">Dinka</option>
                      <option value="dv">Divehi</option>
                      <option value="doi">Dogri</option>
                      <option value="dov">Dombe</option>
                      <option value="nl">Dutch</option>
                      <option value="dz">Dzongkha</option>
                      <option value="en">English</option>
                      <option value="eo">Esperanto</option>
                      <option value="et">Estonian</option>
                      <option value="ee">Ewe</option>
                      <option value="fj">Fijian</option>
                      <option value="fil">Filipino (Tagalog)</option>
                      <option value="fi">Finnish</option>
                      <option value="fr">French</option>
                      <option value="fr-FR">French (French)</option>
                      <option value="fr-CA">French (Canadian)</option>
                      <option value="fy">Frisian</option>
                      <option value="ff">Fulfulde</option>
                      <option value="gaa">Ga</option>
                      <option value="gl">Galician</option>
                      <option value="lg">Ganda (Luganda)</option>
                      <option value="ka">Georgian</option>
                      <option value="de">German</option>
                      <option value="el">Greek</option>
                      <option value="gn">Guarani</option>
                      <option value="gu">Gujarati</option>
                      <option value="ht">Haitian Creole</option>
                      <option value="cnh">Hakha Chin</option>
                      <option value="ha">Hausa</option>
                      <option value="haw">Hawaiian</option>
                      <option value="iw">Hebrew</option>
                      <option value="hil">Hiligaynon</option>
                      <option value="hi">Hindi</option>
                      <option value="hmn">Hmong</option>
                      <option value="hu">Hungarian</option>
                      <option value="hrx">Hunsrik</option>
                      <option value="is">Icelandic</option>
                      <option value="ig">Igbo</option>
                      <option value="ilo">Iloko</option>
                      <option value="id">Indonesian</option>
                      <option value="ga">Irish</option>
                      <option value="it">Italian</option>
                      <option value="ja">Japanese</option>
                      <option value="jw">Javanese</option>
                      <option value="kn">Kannada</option>
                      <option value="pam">Kapampangan</option>
                      <option value="kk">Kazakh</option>
                      <option value="km">Khmer</option>
                      <option value="cgg">Kiga</option>
                      <option value="rw">Kinyarwanda</option>
                      <option value="ktu">Kituba</option>
                      <option value="gom">Konkani</option>
                      <option value="ko">Korean</option>
                      <option value="kri">Krio</option>
                      <option value="ku">Kurdish (Kurmanji)</option>
                      <option value="ckb">Kurdish (Sorani)</option>
                      <option value="ky">Kyrgyz</option>
                      <option value="lo">Lao</option>
                      <option value="ltg">Latgalian</option>
                      <option value="la">Latin</option>
                      <option value="lv">Latvian</option>
                      <option value="lij">Ligurian</option>
                      <option value="li">Limburgan</option>
                      <option value="ln">Lingala</option>
                      <option value="lt">Lithuanian</option>
                      <option value="lmo">Lombard</option>
                      <option value="luo">Luo</option>
                      <option value="lb">Luxembourgish</option>
                      <option value="mk">Macedonian</option>
                      <option value="mai">Maithili</option>
                      <option value="mak">Makassar</option>
                      <option value="mg">Malagasy</option>
                      <option value="ms">Malay</option>
                      <option value="ms-Arab">Malay (Jawi)</option>
                      <option value="ml">Malayalam</option>
                      <option value="mt">Maltese</option>
                      <option value="mi">Maori</option>
                      <option value="mr">Marathi</option>
                      <option value="chm">Meadow Mari</option>
                      <option value="mni-Mtei">Meiteilon (Manipuri)</option>
                      <option value="min">Minang</option>
                      <option value="lus">Mizo</option>
                      <option value="mn">Mongolian</option>
                      <option value="my">Myanmar (Burmese)</option>
                      <option value="nr">Ndebele (South)</option>
                      <option value="new">Nepalbhasa (Newari)</option>
                      <option value="ne">Nepali</option>
                      <option value="nso">Northern Sotho (Sepedi)</option>
                      <option value="no">Norwegian</option>
                      <option value="nus">Nuer</option>
                      <option value="oc">Occitan</option>
                      <option value="or">Odia (Oriya)</option>
                      <option value="om">Oromo</option>
                      <option value="pag">Pangasinan</option>
                      <option value="pap">Papiamento</option>
                      <option value="ps">Pashto</option>
                      <option value="fa">Persian</option>
                      <option value="pl">Polish</option>
                      <option value="pt">Portuguese</option>
                      <option value="pt-PT">Portuguese (Portugal)</option>
                      <option value="pt-BR">Portuguese (Brazil)</option>
                      <option value="pa">Punjabi</option>
                      <option value="pa-Arab">Punjabi (Shahmukhi)</option>
                      <option value="qu">Quechua</option>
                      <option value="rom">Romani</option>
                      <option value="ro">Romanian</option>
                      <option value="rn">Rundi</option>
                      <option value="ru">Russian</option>
                      <option value="sm">Samoan</option>
                      <option value="sg">Sango</option>
                      <option value="sa">Sanskrit</option>
                    </FormSelect>
                  </Row>
                  <Row className="p-3">
                    <textarea
                      placeholder="Type your text here"
                      className="p-2"
                      style={{ height: '200px', borderRadius: '20px', borderColor: 'black' }}
                      value={inputText}
                      onChange={handleInputChange}
                      maxLength={MAX_CHARS}
                    />
                    <small className="text-muted mt-2" style={{ color: 'white !important' }}>
                      {charCount}/{MAX_CHARS} characters
                    </small>
                  </Row>
                </Col>
              </Container>
            </Col>
            <Col md={1}>
              <Container>
                <Col className='mt-5'>
                  <Row style={{ minHeight: '50px', minWidth: '50px' }} className='mt-3'>
                    <Button
                      className='bg-dark'
                      style={{ borderRadius: '45px', borderColor: 'grey', borderWidth: '2px' }}
                      onClick={handleTranslate}
                      disabled={isLoading || !inputText.trim()}
                    >
                      {isLoading ? (
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                      ) : (
                        <MdTranslate style={{ maxHeight: '30px', maxWidth: '50px', minHeight: '30px', minWidth: '30px' }} />
                      )}
                    </Button>
                  </Row>
                </Col>
              </Container>
            </Col>
            <Col md={5}>
              <Container style={{ color: "white", borderRadius: "20px", backgroundColor: '#212121' }} className='mt-4'>
                <Col>
                  <Row className='p-2'>
                    <FormSelect className="mt-4 bg-dark" style={{ borderRadius: '45px', borderColor: 'grey', borderWidth: '2px', color: 'white' }} aria-label='Choose Input Language' value={targetLanguage} onChange={(e) => setTargetLanguage(e.target.value)}
                    >
                      <option>Choose Output Language</option>
                      <option value="ab">Abkhaz</option>
                      <option value="ace">Acehnese</option>
                      <option value="ach">Acholi</option>
                      <option value="af">Afrikaans</option>
                      <option value="sq">Albanian</option>
                      <option value="alz">Alur</option>
                      <option value="am">Amharic</option>
                      <option value="ar">Arabic</option>
                      <option value="hy">Armenian</option>
                      <option value="as">Assamese</option>
                      <option value="awa">Awadhi</option>
                      <option value="ay">Aymara</option>
                      <option value="az">Azerbaijani</option>
                      <option value="ban">Balinese</option>
                      <option value="bm">Bambara</option>
                      <option value="ba">Bashkir</option>
                      <option value="eu">Basque</option>
                      <option value="btx">Batak Karo</option>
                      <option value="bts">Batak Simalungun</option>
                      <option value="bbc">Batak Toba</option>
                      <option value="be">Belarusian</option>
                      <option value="bem">Bemba</option>
                      <option value="bn">Bengali</option>
                      <option value="bew">Betawi</option>
                      <option value="bho">Bhojpuri</option>
                      <option value="bik">Bikol</option>
                      <option value="bs">Bosnian</option>
                      <option value="br">Breton</option>
                      <option value="bg">Bulgarian</option>
                      <option value="bua">Buryat</option>
                      <option value="yue">Cantonese</option>
                      <option value="ca">Catalan</option>
                      <option value="ceb">Cebuano</option>
                      <option value="ny">Chichewa (Nyanja)</option>
                      <option value="zh-CN">Chinese (Simplified)</option>
                      <option value="zh-TW">Chinese (Traditional)</option>
                      <option value="cv">Chuvash</option>
                      <option value="co">Corsican</option>
                      <option value="crh">Crimean Tatar</option>
                      <option value="hr">Croatian</option>
                      <option value="cs">Czech</option>
                      <option value="da">Danish</option>
                      <option value="din">Dinka</option>
                      <option value="dv">Divehi</option>
                      <option value="doi">Dogri</option>
                      <option value="dov">Dombe</option>
                      <option value="nl">Dutch</option>
                      <option value="dz">Dzongkha</option>
                      <option value="en">English</option>
                      <option value="eo">Esperanto</option>
                      <option value="et">Estonian</option>
                      <option value="ee">Ewe</option>
                      <option value="fj">Fijian</option>
                      <option value="fil">Filipino (Tagalog)</option>
                      <option value="fi">Finnish</option>
                      <option value="fr">French</option>
                      <option value="fr-FR">French (French)</option>
                      <option value="fr-CA">French (Canadian)</option>
                      <option value="fy">Frisian</option>
                      <option value="ff">Fulfulde</option>
                      <option value="gaa">Ga</option>
                      <option value="gl">Galician</option>
                      <option value="lg">Ganda (Luganda)</option>
                      <option value="ka">Georgian</option>
                      <option value="de">German</option>
                      <option value="el">Greek</option>
                      <option value="gn">Guarani</option>
                      <option value="gu">Gujarati</option>
                      <option value="ht">Haitian Creole</option>
                      <option value="cnh">Hakha Chin</option>
                      <option value="ha">Hausa</option>
                      <option value="haw">Hawaiian</option>
                      <option value="iw">Hebrew</option>
                      <option value="hil">Hiligaynon</option>
                      <option value="hi">Hindi</option>
                      <option value="hmn">Hmong</option>
                      <option value="hu">Hungarian</option>
                      <option value="hrx">Hunsrik</option>
                      <option value="is">Icelandic</option>
                      <option value="ig">Igbo</option>
                      <option value="ilo">Iloko</option>
                      <option value="id">Indonesian</option>
                      <option value="ga">Irish</option>
                      <option value="it">Italian</option>
                      <option value="ja">Japanese</option>
                      <option value="jw">Javanese</option>
                      <option value="kn">Kannada</option>
                      <option value="pam">Kapampangan</option>
                      <option value="kk">Kazakh</option>
                      <option value="km">Khmer</option>
                      <option value="cgg">Kiga</option>
                      <option value="rw">Kinyarwanda</option>
                      <option value="ktu">Kituba</option>
                      <option value="gom">Konkani</option>
                      <option value="ko">Korean</option>
                      <option value="kri">Krio</option>
                      <option value="ku">Kurdish (Kurmanji)</option>
                      <option value="ckb">Kurdish (Sorani)</option>
                      <option value="ky">Kyrgyz</option>
                      <option value="lo">Lao</option>
                      <option value="ltg">Latgalian</option>
                      <option value="la">Latin</option>
                      <option value="lv">Latvian</option>
                      <option value="lij">Ligurian</option>
                      <option value="li">Limburgan</option>
                      <option value="ln">Lingala</option>
                      <option value="lt">Lithuanian</option>
                      <option value="lmo">Lombard</option>
                      <option value="luo">Luo</option>
                      <option value="lb">Luxembourgish</option>
                      <option value="mk">Macedonian</option>
                      <option value="mai">Maithili</option>
                      <option value="mak">Makassar</option>
                      <option value="mg">Malagasy</option>
                      <option value="ms">Malay</option>
                      <option value="ms-Arab">Malay (Jawi)</option>
                      <option value="ml">Malayalam</option>
                      <option value="mt">Maltese</option>
                      <option value="mi">Maori</option>
                      <option value="mr">Marathi</option>
                      <option value="chm">Meadow Mari</option>
                      <option value="mni-Mtei">Meiteilon (Manipuri)</option>
                      <option value="min">Minang</option>
                      <option value="lus">Mizo</option>
                      <option value="mn">Mongolian</option>
                      <option value="my">Myanmar (Burmese)</option>
                      <option value="nr">Ndebele (South)</option>
                      <option value="new">Nepalbhasa (Newari)</option>
                      <option value="ne">Nepali</option>
                      <option value="nso">Northern Sotho (Sepedi)</option>
                      <option value="no">Norwegian</option>
                      <option value="nus">Nuer</option>
                      <option value="oc">Occitan</option>
                      <option value="or">Odia (Oriya)</option>
                      <option value="om">Oromo</option>
                      <option value="pag">Pangasinan</option>
                      <option value="pap">Papiamento</option>
                      <option value="ps">Pashto</option>
                      <option value="fa">Persian</option>
                      <option value="pl">Polish</option>
                      <option value="pt">Portuguese</option>
                      <option value="pt-PT">Portuguese (Portugal)</option>
                      <option value="pt-BR">Portuguese (Brazil)</option>
                      <option value="pa">Punjabi</option>
                      <option value="pa-Arab">Punjabi (Shahmukhi)</option>
                      <option value="qu">Quechua</option>
                      <option value="rom">Romani</option>
                      <option value="ro">Romanian</option>
                      <option value="rn">Rundi</option>
                      <option value="ru">Russian</option>
                      <option value="sm">Samoan</option>
                      <option value="sg">Sango</option>
                      <option value="sa">Sanskrit</option>
                    </FormSelect>
                  </Row>
                  <Row className="p-3"><textarea placeholder="Your translated text appears here" className="p-2" style={{ height: '200px', borderRadius: '20px', borderColor: 'black' }} value={translatedText} readOnly /></Row>
                </Col>
              </Container>
            </Col>
          </Row>
          <Container className='p-3 d-flex justify-content-center align-items-center' style={{color: 'white'}}>
              <h5>Made possible using</h5>
              <a href='https://translate.google.com/' ><SiGoogletranslate style={{ height: "50px", width: "50px" }} className='p-2'/></a>
          </Container>
        </Container>
      </Container>
    </div>
  );
}

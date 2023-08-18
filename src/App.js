import './index.css';
import {useState,useEffect}from'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { CliqueDesativado } from './CliqueDesativado';
import { useRef } from 'react';


function App() {

 
  var jsonItens = {
    


  "produtos":   [
            {
              
                "codigo": 669520,
                "image": "76bb9b401de9b14fdf7b6f8625d2ce42.png",
                "imageMarca": "9514c484b06975a6ea37aca9b9808941.png",
                "title": "ESCOVA DENTAL ADT TWISTER L2 P1",
                "Marca": "COLGATE-PALMOLIVE",
                "idFiltro": 1,
                "codigoMarca": "ESCOVA DENTAL ADT TWISTER L2 P1",
                "NomeMarca": "COLGATEPALMOLIVE"
            },
            {
                "codigoMarca": "718572 | COLGATEPALMOLIVE",
                "codigo": 718572,
                "image": "36d7d2e0846172add3e9048ab5fb148f.png",
                "imageMarca": "9514c484b06975a6ea37aca9b9808941.png",
                "title": "ESCOVA DENTAL ADULTA CLASSIC CLEAN LEVE 3 PAGUE 2",
                "Marca": "COLGATE-PALMOLIVE",
                
            },
            {
                "codigoMarca": "170576 | COSMODERMA",
                "codigo": 170576,
                "image": "846037abc6bfde3346c87a05bb203e1b.png",
                "imageMarca": "36d3682212d3c78a5dd63fee7fc85069.png",
                "title": "DERMILON PELICULA PROTETORA SPRAY 100 ML",
                "Marca": "COSMODERMA"
            },
            {
                "codigoMarca": "74543 | DAUDT",
                "image": "275323c99c1119ed03097a2095dfd1c4.png",
                "imageMarca": "10dda393aff2927e062d3979bb64d826.png",
                "title": "DERSANI 200 ML LOÇÃO",
                "Marca": "DAUDT"
            },
            {
                "codigoMarca": "636193 | FARMAX",
                "image": "3d56f589b0b9dea885e0151dba73c998.png",
                "imageMarca": "f10c66613cb24c2f585f3ad5dfc49f96.png",
                "title": "PEDRA HUME SPRAY 30 ML X12 (PÓS BARBA) C/ GLICERINA",
                "Marca": "FARMAX"
            },
            {
                "codigoMarca": "623539 | FARMAX",
                "image": "9c744d655dc4b44d398b2005af0a7b7f.png",
                "imageMarca": "f10c66613cb24c2f585f3ad5dfc49f96.png",
                "title": "ÁGUA OXIGENADA 10VOL 900 ML",
                "Marca": "FARMAX"
            },
            {
                "codigoMarca": "637467 | FARMAX",
                "image": "25b00444e1d33c07b7354a2d8b7f2279.png",
                "imageMarca": "f10c66613cb24c2f585f3ad5dfc49f96.png",
                "title": "AMONIA LÍQUIDA 100 ML C/ 12",
                "Marca": "FARMAX"
            },
            {
                "codigoMarca": "638528 | FARMAX",
                "image": "892288dafe08478971e5248e84c9e725.png",
                "imageMarca": "f10c66613cb24c2f585f3ad5dfc49f96.png",
                "title": "DESCOLORANTE ÁGUA OXIGENADA CR 20VOL 900 ML (CREMOSA)",
                "Marca": "FARMAX"
            },
            {
                "codigoMarca": "693391 | FREEDENT",
                "image": "a619232b95e35dbd4d649c89cc1e81da.png",
                "imageMarca": "ba1a6df6a34254e086c302b706ad704e.png",
                "title": "CREME DENTAL 50 G FREEDENT (1500PPM)"
            },
            {
                "codigoMarca": "662895 | NUTRIEX-SOLARGOLD",
                "image": "f606043d8747abb9b8c6db94fbeb0e63.png",
                "imageMarca": "92676e592fc1fb2cb060096911800221.png",
                "title": "LOÇÃO REHIDRATANTE ESSENCIAL 120 ML (UREADERME 3)"
            },
            {
                "codigoMarca": "654922 | NUTRIEX-SOLARGOLD",
                "image": "0ae294a98b1931777047748ca3acbcf5.png",
                "imageMarca": "92676e592fc1fb2cb060096911800221.png",
                "title": "LOÇÃO REHIDRATANTE ESSENCIAL 120 ML (UREADERME)"
            },
            {
                "codigoMarca": "646890 | PROCTEREGAMBLE",
                "image": "42688b66e9c2ad0f2e9d1651d4f01f49.png",
                "imageMarca": "e708b8966250c3785cbdc60207687aaf.png",
                "title": "CREME DENTAL 100 G STAGES (FROZEN)"
            },
            {
                "codigoMarca": "669539 | PROCTEREGAMBLE",
                "image": "88ddea59bd65bb09511016facea4efcc.png",
                "imageMarca": "e708b8966250c3785cbdc60207687aaf.png",
                "title": "ESCOVA DENTAL PRO GENGIVA C/ 1"
            },
            {
                "codigoMarca": "648221 | PROCTEREGAMBLE",
                "image": "31131dbfb253da895712329b9527af33.png",
                "imageMarca": "e708b8966250c3785cbdc60207687aaf.png",
                "title": "ESCOVA DENTAL INF STAGES 2 C/ 6 (MICKEY/MINNIE)"
            },
            {
                "codigoMarca": "648230 | PROCTEREGAMBLE",
                "image": "314018623ecdfb5db0e967b55835543a.png",
                "imageMarca": "e708b8966250c3785cbdc60207687aaf.png",
                "title": "ESCOVA DENTAL INF STAGES 8 C/ 6 (STAR WARS)"
            },
            {
                "codigoMarca": "649856 | PROCTEREGAMBLE",
                "image": "040e22031464a08d6fa175f55b509e3c.png",
                "imageMarca": "e708b8966250c3785cbdc60207687aaf.png",
                "title": "ESCOVA DENTAL PORTÁTIL C/ 6"
            },
            {
                "codigoMarca": "653080 | PROCTEREGAMBLE",
                "image": "c89fc50732b46c6e97bcd27473ea78bd.png",
                "imageMarca": "e708b8966250c3785cbdc60207687aaf.png",
                "title": "ESCOVA DENTAL ULTRA FINO 35 2 UND X6"
            },
            {
                "codigoMarca": "669679 | PROCTEREGAMBLE",
                "image": "7be67d65090cb78eb8715479c4ed2cf0.png",
                "imageMarca": "e708b8966250c3785cbdc60207687aaf.png",
                "title": "REFIL P/ ESCOVA ELÉTRICA FLOSS ACTION"
            },
            {
                "codigoMarca": "669687 | PROCTEREGAMBLE",
                "image": "dd5ef5e55a60aa3f9f977b537ef927c7.png",
                "imageMarca": "e708b8966250c3785cbdc60207687aaf.png",
                "title": "REFIL P/ ESCOVA ELÉTRICA PRECISION CLEAN"
            },
            {
                "codigoMarca": "677892 | RIOQUIMICA",
                "image": "bba4a1973bfc7f3444d4e8925b58dee9.png",
                "imageMarca": "98cfb5345541ecd335f5bc0b1933e3f8.png",
                "title": "ACETONA 500 ML (ACE RIO) REMOV. ESMALTE"
            },
            {
                "codigoMarca": "56570 | RIOQUIMICA",
                "image": "ee30332a5138574a3dec36223cef7cc9.png",
                "imageMarca": "98cfb5345541ecd335f5bc0b1933e3f8.png",
                "title": "CLOREXIDINA 0,2% SOL AQUOSA 100 ML (RIOHEX/DERMO SUAVE)"
            },
            {
                "codigoMarca": "39527 | RIOQUIMICA",
                "image": "718af133fb115a21c7cf3b8e67d122da.png",
                "imageMarca": "98cfb5345541ecd335f5bc0b1933e3f8.png",
                "title": "ÁLCOOL IODADO 0,1% 1000 ML"
            },
            {
                "codigoMarca": "589977 | RIOQUIMICA",
                "image": "b8a1130877ec4b34619cd5be751eadb1.png",
                "imageMarca": "98cfb5345541ecd335f5bc0b1933e3f8.png",
                "title": "CLOREXIDINA 1% SOL AQUOSA 1000 ML"
            },
            {
                "codigoMarca": "689971 | RIOQUIMICA",
                "image": "08b64d493f061f6a320bb62c996c485b.png",
                "imageMarca": "98cfb5345541ecd335f5bc0b1933e3f8.png",
                "title": "CLOREXIDINA 2% SOL AQUOSA 1000 ML"
            },
            {
                "codigoMarca": "85243 | RIOQUIMICA",
                "image": "ee0856eab6b7453f02dff39c3c203e2c.png",
                "imageMarca": "98cfb5345541ecd335f5bc0b1933e3f8.png",
                "title": "CLOREXIDINA 2% DEGERMANTE 1000 ML"
            },
            {
                "codigoMarca": "27561 | RIOQUIMICA",
                "image": "e6c0f69c11088186b6dbfe8a427d8712.png",
                "imageMarca": "98cfb5345541ecd335f5bc0b1933e3f8.png",
                "title": "GLICERINA BRANCA FARM.LITRO"
            },
            {
                "codigoMarca": "35998 | RIOQUIMICA",
                "image": "1dd832343a48b8e5e685e2b1b1530315.png",
                "imageMarca": "98cfb5345541ecd335f5bc0b1933e3f8.png",
                "title": "ÓLEO RICINO 30 ML C/ 1FR"
            },
            {
                "codigoMarca": "68179 | RIOQUIMICA",
                "image": "a009aba2722b9c19e7332e8ed363ebf0.png",
                "imageMarca": "98cfb5345541ecd335f5bc0b1933e3f8.png",
                "title": "ÓLEO RICINO 60 ML"
            },
            {
                "codigoMarca": "994316 | RIOQUIMICA",
                "image": "d30257c0fbb466d1ec7b10b1f968b9cc.png",
                "imageMarca": "98cfb5345541ecd335f5bc0b1933e3f8.png",
                "title": "PASTA D'ÁGUA 100 G C/ 12 (PASTOL SIMPLES)"
            },
            {
                "codigoMarca": "50555 | RIOQUIMICA",
                "image": "f1500d1e632d4a7cfc496f80ed609e46.png",
                "imageMarca": "98cfb5345541ecd335f5bc0b1933e3f8.png",
                "title": "RIODEINE 10% DERMO SUAVE DEGERMANTE 100 ML"
            },
            {
                "codigoMarca": "1084 | RIOQUIMICA",
                "image": "c94db0a1a6588269ee30ef7bccd9001f.png",
                "imageMarca": "98cfb5345541ecd335f5bc0b1933e3f8.png",
                "title": "RIODEINE 10% DERMO SUAVE TÓPICO 100 ML SPRAY"
            },
            {
                "codigoMarca": "39772 | RIOQUIMICA",
                "image": "f3a76c646e77e5b799b5ddde39f587e5.png",
                "imageMarca": "98cfb5345541ecd335f5bc0b1933e3f8.png",
                "title": "RIODEINE 10% DERMO SUAVE TÓPICO 30 ML"
            },
            {
                "codigoMarca": "50571 | RIOQUIMICA",
                "image": "80dbf1b05826b4cedad056940c654b26.png",
                "imageMarca": "98cfb5345541ecd335f5bc0b1933e3f8.png",
                "title": "RIODEINE TINTURA 100 ML ALMOTOLIA"
            },
            {
                "codigoMarca": "50563 | RIOQUIMICA",
                "image": "7cb0be34a4cc60f92579aaef3aa06294.png",
                "imageMarca": "98cfb5345541ecd335f5bc0b1933e3f8.png",
                "title": "RIODEINE TÓPICO 100 ML DERMO SUAVE"
            },
            {
                "codigoMarca": "37435 | RIOQUIMICA",
                "image": "41ef6259f43aaa0607fbef6943d6b954.png",
                "imageMarca": "98cfb5345541ecd335f5bc0b1933e3f8.png",
                "title": "TINTURA DE IODO 2% 1LT"
            },
            {
                "codigoMarca": "991368 | RIOQUIMICA",
                "image": "dca67f4dd8ce76013aa88dda6bba852c.png",
                "imageMarca": "98cfb5345541ecd335f5bc0b1933e3f8.png",
                "title": "VASELINA LÍQUIDA 100 ML C/ 12"
            },
            {
                "codigoMarca": "693146 | RIOQUIMICA",
                "image": "6a2f0ab8d4640081e28fbe5e19992cb5.png",
                "imageMarca": "98cfb5345541ecd335f5bc0b1933e3f8.png",
                "title": "ÁCIDO FOSFÓRICO DESINCR E REVITAL 5LT (OXIMAX)"
            },
            {
                "codigoMarca": "681610 | RIOQUIMICA",
                "image": "6ee9f494877102692497bc782672a9d5.png",
                "imageMarca": "98cfb5345541ecd335f5bc0b1933e3f8.png",
                "title": "ÁGUA OXIGENADA 10VOL 100 ML ALMOTOLIA"
            },
            {
                "codigoMarca": "991376 | RIOQUIMICA",
                "image": "e9bda8f07c19125a419d856a19f07b14.png",
                "imageMarca": "98cfb5345541ecd335f5bc0b1933e3f8.png",
                "title": "ÁGUA OXIGENADA CR 20VOL 90 ML C/ 12"
            },
            {
                "codigoMarca": "657956 | RIOQUIMICA",
                "image": "99c279a9d9da960d35b7244adeddcdf9.png",
                "imageMarca": "98cfb5345541ecd335f5bc0b1933e3f8.png",
                "title": "ÁLCOOL IODADO 0,1% 100 ML (ALMOTOLIA/TWIST OFF)"
            },
            {
                "codigoMarca": "39527 | RIOQUIMICA",
                "image": "718af133fb115a21c7cf3b8e67d122da.png",
                "imageMarca": "98cfb5345541ecd335f5bc0b1933e3f8.png",
                "title": "ÁLCOOL IODADO 0,1% 1000 ML"
            },
            {
                "codigoMarca": "589977 | RIOQUIMICA",
                "image": "b8a1130877ec4b34619cd5be751eadb1.png",
                "imageMarca": "98cfb5345541ecd335f5bc0b1933e3f8.png",
                "title": "CLOREXIDINA 1% SOL AQUOSA 1000 ML (RIOHEX)"
            },
            {
                "codigoMarca": "85243 | RIOQUIMICA",
                "image": "ee0856eab6b7453f02dff39c3c203e2c.png",
                "imageMarca": "98cfb5345541ecd335f5bc0b1933e3f8.png",
                "title": "CLOREXIDINA 2% DEGERMANTE 1000 ML (RIOHEX/TENSOATIVO)"
            },
            {
                "codigoMarca": "85057 | RIOQUIMICA",
                "image": "4469a43a6e3b07ccfabc6440b21fce8a.png",
                "imageMarca": "98cfb5345541ecd335f5bc0b1933e3f8.png",
                "title": "GLUTARON 5 LITROS 32 DIAS"
            },
            {
                "codigoMarca": "991406 | RIOQUIMICA",
                "image": "61b25d4ab1b3bde185b4b0dda575d6b2.png",
                "imageMarca": "98cfb5345541ecd335f5bc0b1933e3f8.png",
                "title": "ÓLEO MINERAL 100 ML C/ 12"
            },
            {
                "codigoMarca": "709859 | RIOQUIMICA",
                "image": "770d28e66193390b378af9e6af66db74.png",
                "imageMarca": "98cfb5345541ecd335f5bc0b1933e3f8.png",
                "title": "PERMASSIM 100 MG C/ 50ENV C/ 10 CPR"
            },
            {
                "codigoMarca": "709840 | RIOQUIMICA",
                "image": "04df82e23caa642ff0c49574cea9e445.png",
                "imageMarca": "98cfb5345541ecd335f5bc0b1933e3f8.png",
                "title": "REMOVEX SENSITIVE SPRAY 30 ML"
            },
            {
                "codigoMarca": "21067 | RIOQUIMICA",
                "image": "042f5d37d382ef70ec56d5f4d7bceef1.png",
                "imageMarca": "98cfb5345541ecd335f5bc0b1933e3f8.png",
                "title": "RIODEINE 10% DERMO SUAVE TÓPICO 1 L"
            },
            {
                "codigoMarca": "713406 | RIOQUIMICA",
                "image": "25d4c8882423759b01261ee6dfe4031e.png",
                "imageMarca": "98cfb5345541ecd335f5bc0b1933e3f8.png",
                "title": "RIODERM PROTECTION CREME BARREIRA 92 G"
            },
            {
                "codigoMarca": "709867 | RIOQUIMICA",
                "image": "d985fbbf22bc55ac8797e1151155a40e.png",
                "imageMarca": "98cfb5345541ecd335f5bc0b1933e3f8.png",
                "title": "RIOHEX 2% LENÇO UMID. 1 ML X 120 SACHÊ"
            },
            {
                "codigoMarca": "715280 | RIOQUIMICA",
                "image": "ee0a3b1212cbb4ae05394d560474e651.png",
                "imageMarca": "98cfb5345541ecd335f5bc0b1933e3f8.png",
                "title": "RIOHEX GARD 0,12% 1 L ENXAG BUCAL SAB. HORTELÃ"
            },
            {
                "codigoMarca": "657964 | RIOQUIMICA",
                "image": "398e0f01f4b00dcb85ae723e242567b4.png",
                "imageMarca": "98cfb5345541ecd335f5bc0b1933e3f8.png",
                "title": "VASELINA LIQUIDA 100 ML ALMOTOLIA (TWIST OFF)"
            },
    
            {
                "codigoMarca": "689980 | RIOQUIMICA",
                "image": "8356f1dcd0a3942be7ab48f2369edb78.png",
                "imageMarca": "98cfb5345541ecd335f5bc0b1933e3f8.png",
                "title": "VASELINA SÓLIDA POM. C/ 30 G TÓPICO"
            },
            {
                "codigoMarca": "170717 | SUNMAX",
                "image": "9a3c1305538f24e02659243270334a46.png",
                "imageMarca": "e76e1267a5edcc0de2272c00fc9b3b64.png",
                "title": "PROTETOR SOLAR FPS 50 FR 60 ML (SENSITIVE OL FREE)"
            },
            {
                "codigoMarca": "51 | UNIPHAR",
                "image": "8c4ff62305eec7c31bec1b1a8298663e.png",
                "imageMarca": "c1decfb057b782a184f4e0e83d26c714.png",
                "title": "ÓLEO DE COPAÍBA 30 ML C/ 12"
            },
            {
                "codigoMarca": "1316 | UNIPHAR",
                "image": "22599285b42ef143fdb3a14d10da2f57.png",
                "imageMarca": "c1decfb057b782a184f4e0e83d26c714.png",
                "title": "ÓLEO DOCE 30 ML C/ 12 (AZEITE DOCE)"
            },
            {
                "codigoMarca": "4472 | UNIPHAR",
                "image": "54b12d78cc2f3837448e7e0ab4679da8.png",
                "imageMarca": "c1decfb057b782a184f4e0e83d26c714.png",
                "title": "ÓLEO MINERAL 100 ML C/ 12"
            },
            {
                "codigoMarca": "694185 | UNIPHAR",
                "image": "fe0033a1bbb3fcf7796fec0028ac0813.png",
                "imageMarca": "c1decfb057b782a184f4e0e83d26c714.png",
                "title": "PEDRA HUME SPRAY 30 ML X12 (FECHA OS POROS)"
            },
            {
                "codigoMarca": "712906 | UNIPHAR",
                "image": "ad6bb60f63a162b85c267e6178669ffc.png",
                "imageMarca": "c1decfb057b782a184f4e0e83d26c714.png",
                "title": "POMADA PROTETORA 10 G C/ 12 (BAZELIN)"
            },
            {
                "codigoMarca": "1641 | UNIPHAR",
                "image": "c98d999d7c36748c3e281f2f8f5c62fa.png",
                "imageMarca": "c1decfb057b782a184f4e0e83d26c714.png",
                "title": "ÁLCOOL IODADO 0,1% 100 ML C/ 12"
            },
            {
                "codigoMarca": "101850 | UNIPHAR",
                "image": "4070ad2e0c61e021e20530dc86c49525.png",
                "imageMarca": "c1decfb057b782a184f4e0e83d26c714.png",
                "title": "ALUMEN DE POTÁSSIO 30 GX12 (PEDRA HUME)"
            },
            {
                "codigoMarca": "138371 | UNIPHAR",
                "image": "4632362d993d262fbf08a2ca810353b6.png",
                "imageMarca": "c1decfb057b782a184f4e0e83d26c714.png",
                "title": "GLICERINA BRANCA FARM.100 ML C/ 12"
            },
            {
                "codigoMarca": "39373 | UNIPHAR",
                "image": "977afbd91a6f3284655a3e15844449af.png",
                "imageMarca": "c1decfb057b782a184f4e0e83d26c714.png",
                "title": "ÓLEO DE AMÊNDOAS DOCE 100 ML C/ 12"
            },
            {
                "codigoMarca": "1324 | UNIPHAR",
                "image": "e7da9521c31cfd973be421d8108d1c2e.png",
                "imageMarca": "c1decfb057b782a184f4e0e83d26c714.png",
                "title": "PASTA D'ÁGUA 100 G C/ 12"
            },
            {
                "codigoMarca": "169918 | UNIPHAR",
                "image": "c60bf6bb9c5b175e2280349811c7b998.png",
                "imageMarca": "c1decfb057b782a184f4e0e83d26c714.png",
                "title": "PERMANGANATO POTÁSSIO 30 ENV 10X100 MG"
            },
            {
                "codigoMarca": "36030 | UNIPHAR",
                "image": "2ce55b6b47f7543c46db147c281648fa.png",
                "imageMarca": "c1decfb057b782a184f4e0e83d26c714.png",
                "title": "SAL AMARGO CX 30 G C/ 12"
            },
            {
                "codigoMarca": "135160 | UNIPHAR",
                "image": "067407d14bee32d3b7c0ac727a5eff21.png",
                "imageMarca": "c1decfb057b782a184f4e0e83d26c714.png",
                "title": "VASELINA LÍQUIDA 100 ML C/ 12"
            },
            {
                "codigoMarca": "642991 | UNIPHAR",
                "image": "d39f6664c683860bdd34a854e1b19bbe.png",
                "imageMarca": "c1decfb057b782a184f4e0e83d26c714.png",
                "title": "ÁGUA OXIGENADA 10VOL 100 ML X12 ALMOTOLIA"
            },
            {
                "codigoMarca": "1042 | UNIPHAR",
                "image": "9cbf041fef9e319224f6803018033677.png",
                "imageMarca": "c1decfb057b782a184f4e0e83d26c714.png",
                "title": "ALFAZEMA FLOR 05 G CX C/ 12"
            },
            {
                "codigoMarca": "646431 | UNIPHAR",
                "image": "79994b2c90af6b8dc96caa708a3ba19c.png",
                "imageMarca": "c1decfb057b782a184f4e0e83d26c714.png",
                "title": "CLOR. MAGNÉSIO PA 500 MG C/ 60 CPS"
            },
            {
                "codigoMarca": "636533 | UNIPHAR",
                "image": "8f2ac27b83c2514ea77682030bf212a1.png",
                "imageMarca": "c1decfb057b782a184f4e0e83d26c714.png",
                "title": "VASELINA SÓLIDA GEL POTE 900 G"
            }
            
    
    
    
            
    
    
           
            // Adicione mais itens do JSON aqui, se necessário
        ]
    };

  var select = {

   "itens": [
    {
      "id":1,
      "nome":"UNIPHAR"
    },
    {
      "id":2,
      "nome":"COSMODERMA"
    },
    {
      "id":3,
     "nome":"FARMAX"
    },
    {
      "id":4,
      "nome":"COLGATE-PALMOLIVE"
    }
  ]
    
  }  
  const [marca, setmarca] = useState('')
  const [produtos, setProdutos] = useState(jsonItens.produtos);
  const [pesquisa, setPesquisa] = useState('')
  
  const dropDownRef = useRef(null)
  const [isActive, setIsActive] = useState(false)
 
    
  function testes2(){
   setIsActive(!isActive)
  }
  function teste(){
  
  const produtosAtualizado  = produtos.filter((item)=>{ return item.Marca===marca});
 setProdutos(produtosAtualizado) 

  }

  useEffect(()=>{
    
    teste();
    console.log(marca)
     
  }, [marca]);
  useEffect(()=>{
    
    pesquisaFunction();
     
  }, [pesquisa]);
    
  function pesquisaFunction(){
    if (pesquisa){
    let pesquisaItens = produtos.filter((item)=> {
      return   item.title.toLowerCase().match(pesquisa.toLowerCase())
    })
    setProdutos(pesquisaItens)}
    if(!pesquisa){
      setProdutos(jsonItens.produtos)
    }
  }

 
  return (
    <div className="App">
      
  
      <header>
        <div className="content">
          <img src={require("./images/recmed.logo3.png")} alt="Logo" />
        </div>
        <nav>
          <ul>
            <li><a href="#catalogo">Home</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>

        <div className='botao-menu'> 
        <button  onClick={testes2}>
            <image icon={faBars}/>
            <FontAwesomeIcon icon={faBars}/>
          </button>
        </div>
        

<div
  ref={dropDownRef}
  className={`menu ${isActive ? "active" : "inactive"}`}
>
  <div className='menu-lista'>
    <ul className='menu-lista-ul'>
      <li><a href="#catalogo">Home</a></li>
      <li><a href="#sobre">Sobre</a></li>
      <li><a href="#contato">Contato</a></li>
    </ul>
  </div>
    

</div> 



   
    
  

         
  
      </header>
    
    <section className="catalogo" id="catalogo">
    <div className="content">
      <div className="title-wrapper-catalogo">
        <p>Encontre o que você quer</p>
        <h3>Catálogo</h3>
      </div>
      <div className="filter-card">
        <input type="text" className="search-input flex-1" placeholder="Digite o que você procura" onChange={(e)=> setPesquisa(e.target.value)}/>


     

        
         
          <select className='filtros flex-2' onChange={(e)=>setmarca(e.target.value)}>
       <option selected disabled>Filtrar p/ marca</option>
       {
          select.itens.map((item)=>(
            <option value={item.nome}>{item.nome}</option>
          ))
       
        
        }
       
          </select>
        
          
       
        

     
        
        
        
        {/* <button className="search-button" onClick={teste}>Procurar</button> */}
      </div>
      <div className="card-wrapper">

       {
        produtos ? (
          produtos.map(({title,codigoMarca,image,imageMarca})=>(
            <div class="card-item">
           <img src={require(`./images/${image}`)}/> 
            <div class="card-content">
              <h3>{title}</h3>
              <p> {codigoMarca}</p>
              <p class="largura-certa">--------------------------------------------------------------------------------------------------</p>
              <img class="little-img" src={require(`./images/${imageMarca}`)}/>
            </div>
          </div>
          ))
        ):
        <></>
       }

      </div>
    </div>

    
  </section>












  <section className="sobre" id="sobre">
    <div className="content">
      <div className="title-wrapper-sobre">
        <p>Saiba sobre nós</p>
        <h3>Sobre</h3>
      </div>
      <div className="content-sobre">
        <div className="left">
          <img src={require("./images/wall.jpg")}/>
        </div>
        <div className="right">
          <h3>Conheça nossos serviços</h3>
          <p>A Recmed é uma distribuidora atacadista de medicamentos e materiais hospitalares, atuante no mercado desde 2004. A organização iniciou suas atividades em sede própria no setor Bueno e devido ao crescimento do empreendimento, houve a necessidade de maior espaço físico para suas operações logísticas. Atualmente, a Matriz da Recmed está situada na região Sudoeste de Goiânia.</p>
        </div>
      </div>
    </div>
  </section>




  <section className="features" id="features">
    <div className="content">
      <div className="title-wrapper-features">
        <p>Conheça nossas parcerias</p>
        <h3>Empresas</h3>
      </div>
      <div className="feature-card-block">
        <div className="feature-card-item">
          <img src={require("./images/f10c66613cb24c2f585f3ad5dfc49f96.png")} alt="Feature" />
          <div className="feature-text-content">
            <h3>DAUDT</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="feature-card-item">
          <img src={require("./images/f10c66613cb24c2f585f3ad5dfc49f96.png")} alt="Feature" />
          <div className="feature-text-content">
            <h3>DAUDT</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div><div className="feature-card-item">
          <img src={require("./images/f10c66613cb24c2f585f3ad5dfc49f96.png")} alt="Feature" />
          <div className="feature-text-content">
            <h3>DAUDT</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div><div className="feature-card-item">
          <img src={require("./images/f10c66613cb24c2f585f3ad5dfc49f96.png")} alt="Feature" />
          <div className="feature-text-content">
            <h3>DAUDT</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div><div className="feature-card-item">
          <img src={require("./images/f10c66613cb24c2f585f3ad5dfc49f96.png")} alt="Feature" />
          <div className="feature-text-content">
            <h3>DAUDT</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div><div className="feature-card-item">
          <img src={require("./images/f10c66613cb24c2f585f3ad5dfc49f96.png")} alt="Feature" />
          <div className="feature-text-content">
            <h3>DAUDT</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
       
      </div>
    </div>
  </section>

  <footer>
    <div className="main">
      <div className="content footer-links">
        <div className="footer-company">
          <h4>UNIDADES</h4>
          <br/>
          <h6>Matriz: Rua Galileu N° 220, - Jardim Europa Goiânia - GO - CEP: 74325-060</h6>
          <br/>
          <h6>Fones: (62) 3088-7600 | 3088-7642</h6>
        </div>
        <div className="footer-rental">
          <h4>CNPJ : 06.696.359/0001-21</h4>
          <br/>
          <h6>RAZAO SOCIAL : RECMED COMÉRCIO DE MATERIAIS HOSPITALARES EIRELE - EM RECUPERAÇÃO JUDICIAL</h6>
          <br/>
          <h6>Filial: QS 118 Conj. 07 Lt. 05 Sls 1 a 4 Samanbaia Sul - Brasília - DF</h6>
          <br/>
          <h6>CEP: 72302-577 Fone: (61) 3033-1002</h6>
        </div>
        <div className="footer-social">
          <h4>Mantenha contato</h4>
          <div className="social-icons">
            <img src={require("./images/facebook.png")} />
            <img src={require("./images/instagramlogo.png")} />

          </div>
        </div>
        
      </div>
    </div>
    <div className="last" id="contato">Desenvolvido por RealSystem - www.realsystemsistemas.com.br</div>
  </footer>
    </div>


  
  );
}


export default App;

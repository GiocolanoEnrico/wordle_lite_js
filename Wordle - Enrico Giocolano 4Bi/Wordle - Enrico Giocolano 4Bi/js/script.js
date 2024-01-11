let wrd = word(); //Parola scelta dal computer.
let chance = 0; //Tentativi di inserimento della parola.
console.log("chance = " + chance);//Stampa del numero di possibilità 
//funzione per la scelta della parola
function word(){
    let arr = [ "ABACO", "ABATE", "ABATI", "ABATO", "ABAVI", "ABAVO", "ABBAI", "ABBIA", "ABBUI", "ABENA", "ABENE", "ABETE", "ABETI", "ABETO", 
                "ABICI", "ABILE", "ABILI", "ABITA", "ABITI", "ABITO", "ABOLI", "ABUNA", "ABUSA", "ABUSI", "ABUSO", "ACARI", "ACARO", "ACATI", 
                "ACATO", "ACAZI", "ACCHE", "ACCIA", "ACCIO", "ACERI", "ACERO", "ACESE", "ACESI", "ACETI", "ACETO", "ACHEA", "ACHEE", "ACHEI", 
                "ACHEO", "ACIDA", "ACIDE", "ACIDI", "ACIDO", "ACINI", "ACINO", "ACORI", "ACORO", "ACQUA", "ACQUE", "ACQUI", "ACQUO", "ACTEA", 
                "ACTEE", "ACUII", "ACUME", "ACUMI", "ACUTA", "ACUTE", "ACUTI", "ACUTO", "ADAGI", "ADAMI", "ADAMO", "ADDAI", "ADDAX", "ADDIA", 
                "ADDIO", "ADERI", "ADESA", "ADESE", "ADESI", "ADESO", "ADIBI", "ADIMA", "ADIMI", "ADIMO", "ADIPE", "ADIPI", "ADIRA", "ADIRE", 
                "ADIRI", "ADIRO", "ADITA", "ADITE", "ADITI", "ADITO", "ADIVA", "ADIVI", "ADIVO", "ADOBE", "ADONA", "ADONE", "ADONI", "ADONO", 
                "ADORA", "ADORI", "ADORO", "ADOXA", "ADOXE", "ADULA", "ADULI", "ADULO", "ADUNA", "ADUNI", "ADUNO", "ADUSA", "ADUSE", "ADUSI", 
                "ADUSO", "AERAI", "AEREA", "AEREE", "AEREI", "AEREO", "AFACA", "AFELI", "AFFLA", "AFFLI", "AFIDE", "AFIDI", "AFNII", "AFNIO", 
                "AFONA", "AFONE", "AFONI", "AFONO", "AFOSA", "AFOSE", "AFOSI", "AFOSO", "AFOXE", "AGAMA", "AGAME", "AGAMI", "AGAMO", "AGAPE", 
                "AGAPI", "AGATA", "AGATE", "AGAVE", "AGAVI", "AGERA", "AGERO", "AGGIA", "AGGIO", "AGIAI", "AGILE", "AGILI", "AGIRA", "AGIRE",
                "AGIRO", "AGITA", "AGITE", "AGITI", "AGITO", "AGIVA", "AGIVI", "AGIVO", "AGLIO", "AGONE", "AGONI", "AGORA", "AGUNA", "AGUNI", 
                "AGUNO", "AGURA", "AGURI", "AGURO", "AGUTI", "AGUTO", "AHIME", "AIOLA", "AIOLE", "AIOLI", "AIOLO", "AITAI", "AIUGA", "AIUTA", 
                "AIUTI", "AIUTO", "AIZZA", "AIZZI", "AIZZO", "AJOUR", "ALALA", "ALANA", "ALANE", "ALANI", "ALANO", "ALARE", "ALARI", "ALATA", 
                "ALATE", "ALATI", "ALATO", "ALAVA", "ALAVI", "ALAVO", "ALBUM", "ALCEA", "ALCEE", "ALCHE", "ALCOL", "ALCUN", "ALDIA", "ALDIE", 
                "ALDIO", "ALENA", "ALENI", "ALERA", "ALERE", "ALERO", "ALESA", "ALESI", "ALESO", "ALGHE", "ALGIA", "ALGIE", "ALIAI", "ALIAS", 
                "ALIBI", "ALICE", "ALICI", "ALIDA", "ALIDE", "ALIDI", "ALIDO", "ALIGA", "ALIMI", "ALIMO", "ALINO", "ALITA", "ALITE", "ALITI", 
                "ALITO", "ALLEA", "ALLEI", "ALLEO", "ALMEA", "ALMEE", "ALOBI", "ALONA", "ALONE", "ALONI", "ALONO", "ALOSA", "ALOSE", "ALPAX", 
                "ALTEA", "ALTEE", "ALTRA", "ALTRE", "ALTRI", "ALTRO", "ALULA", "ALULE", "ALVEI", "ALVEO", "ALZAI", "AMACA", "AMANO", "AMARA", 
                "AMARE", "AMARI", "AMARO", "AMASI", "AMATA", "AMATE", "AMATI", "AMATO", "AMAVA", "AMAVI", "AMAVO", "AMBIA", "AMBII", "AMBIO", 
                "AMBRA", "AMBRE", "AMEBA", "AMEBE", "AMENA", "AMENE", "AMENI", "AMENO", "AMERA", "AMERO", "AMICA", "AMICI", "AMICO", "AMIDA", 
                "AMIDE", "AMIDI", "AMIDO", "AMINA", "AMINE", "AMINO", "AMMAI", "AMMEN", "AMNII", "AMNIO", "AMOMI", "AMOMO", "AMORA", "AMORE", 
                "AMORI", "AMPEX", "AMPIA", "AMPIE", "AMPIO", "AMPLI", "AMPLO", "AMULI", "AMULO", "ANACE", "ANALE", "ANALI", "ANCHE", "ANCIA", 
                "ANCOI", "ANDAI", "ANDRA", "ANDRO", "ANELA", "ANELE", "ANELI", "ANELO", "ANETI", "ANETO", "ANGLA", "ANGLE", "ANGLI", "ANGLO", 
                "ANGUE", "ANGUI", "ANICE", "ANICI", "ANILE", "ANILI", "ANIMA", "ANIME", "ANIMI", "ANIMO", "ANNOI", "ANNUA", "ANNUE", "ANNUI", 
                "ANNUO", "ANOBI", "ANODI", "ANODO", "ANONA", "ANONE", "ANSAI", "ANSIA", "ANSIE", "ANSIO", "ANTRI", "ANTRO", "ANURA", "ANURE", 
                "ANURI", "ANURO", "AONIA", "AONIE", "AONIO", "AOPPI", "AORTA", "AORTE", "APALE", "APALI", "APIAI", "APICE", "APICI", "APIDE", 
                "APIDI", "APINA", "APINE", "APNEA", "APNEE", "APODA", "APODE", "APODI", "APODO", "APPAI", "APPIA", "APPIE", "APPIO", "APRII", 
                "APULA", "APULE", "APULI", "APULO", "AQUEA", "AQUEE", "AQUEI", "AQUEO", "ARABA", "ARABE", "ARABI", "ARABO", "ARANO", "ARARE", 
                "ARATA", "ARATE", "ARATI", "ARATO", "ARAVA", "ARAVI", "ARAVO", "ARCAI", "ARCHE", "ARCHI", "ARCUA", "ARCUI", "ARCUO", "ARDEA", 
                "ARDEE", "ARDII", "ARDUA", "ARDUE", "ARDUI", "ARDUO", "AREAI", "ARECA", "ARENA", "ARENE", "ARENI", "ARENO", "ARERA", "ARERO", 
                "ARGHI", "ARGON", "ARGOT", "ARGUI", "ARIDA", "ARIDE", "ARIDI", "ARIDO", "ARILE", "ARILI", "ARINO", "ARMAI", "ARNIA", "ARNIE", 
                "AROMA", "AROMI", "ARPIA", "ARPIE", "ARRAK", "ARRAY", "ARTAI", "ASARI", "ASARO", "ASCHI", "ASCIA", "ASCIO", "ASDIC", "ASILI", 
                "ASILO", "ASINA", "ASINE", "ASINI", "ASINO", "ASOLA", "ASOLE", "ASOLI", "ASOLO", "ASPIC", "ASPRA", "ASPRE", "ASPRI", "ASPRO", 
                "ASSAI", "ASSET", "ASTER", "ASTIO", "ASTRI", "ASTRO", "ATANO", "ATARE", "ATATA", "ATATE", "ATATI", "ATATO", "ATAVA", "ATAVE", 
                "ATAVI", "ATAVO", "ATCIU", "ATELE", "ATELI", "ATERA", "ATERO", "ATINO", "ATOMI", "ATOMO", "ATONA", "ATONE", "ATONI", "ATONO", 
                "ATOUT", "ATRII", "ATRIO", "ATTAI", "ATTUA", "ATTUI", "ATTUO", "AUDIO", "AUDIT", "AUFFA", "AUGGI", "AUGNA", "AUGNI", "AUGNO", 
                "AULOS", "AUNAI", "AUREA", "AUREE", "AUREI", "AUREO", "AURIO", "AUSAI", "AUTOS", "AVANA", "AVARA", "AVARE", "AVARI", "AVARO", 
                "AVEMO", "AVENA", "AVENE", "AVERE", "AVERI", "AVERO", "AVETE", "AVEVA", "AVEVI", "AVEVO", "AVIDA", "AVIDE", "AVIDI", "AVIDO", 
                "AVITA", "AVITE", "AVITI", "AVITO", "AVOCA", "AVOCO", "AVOLA", "AVOLE", "AVOLI", "AVOLO", "AVORI", "AVRAI", "AVREI", "AVRIA", 
                "AVUTA", "AVUTE", "AVUTI", "AVUTO", "AVVIA", "AVVII", "AVVIO", "AXONE", "AXONI", "AZERA", "AZERE", "AZERI", "AZERO", "AZIMA", 
                "AZIME", "AZIMO", "AZONI", "AZOTI", "AZOTO", "AZUKI", "BABAO", "BABAU", "BABBI", "BABBO", "BACAI", "BACCA", "BACCO", "BACHI", 
                "BACIA", "BACIE", "BACII", "BACIO", "BACON", "BADAI", "BADGE", "BADIA", "BADIE", "BAFFI", "BAFFO", "BAGEL", "BAGLI", "BAGNA", 
                "BAGNE", "BAGNI", "BAGNO", "BAIAI", "BAILA", "BAILE", "BAILI", "BAILO", "BAINO", "BAITA", "BAITE", "BALBO", "BALCO", "BALDA", 
                "BALDE", "BALDI", "BALDO", "BALIA", "BALIE", "BALII", "BALIO", "BALLA", "BALLE", "BALLI", "BALLO", "BALMA", "BALME", "BALSA", 
                "BALSE", "BALTA", "BALTE", "BALZA", "BALZE", "BALZI", "BALZO", "BAMBA", "BAMBE", "BAMBI", "BAMBO", "BAMBU", "BANCA", "BANCO", 
                "BANDA", "BANDE", "BANDI", "BANDO", "BANGI", "BANJO", "BANNA", "BANNI", "BANNO", "BANTU", "BARAI", "BARBA", "BARBE", "BARBI", 
                "BARBO", "BARCA", "BARCO", "BARDA", "BARDE", "BARDI", "BARDO", "BARGE", "BARIA", "BARIE", "BARII", "BARIO", "BARRA", "BARRE", 
                "BARRI", "BARRO", "BASAI", "BASCA", "BASCO", "BASIC", "BASII", "BASSA", "BASSE", "BASSI", "BASSO", "BASTA", "BASTE", "BASTI", 
                "BASTO", "BATCH", "BATIK", "BATTA", "BATTE", "BATTI", "BATTO", "BAULA", "BAULE", "BAULI", "BAULO", "BAUTA", "BAZAR", "BAZZA", 
                "BAZZE", "BEANO", "BEARE", "BEATA", "BEATE", "BEATI", "BEATO", "BEAVA", "BEAVI", "BEAVO", "BECCA", "BECCO", "BECHE", "BECHI", 
                "BEERA", "BEERO", "BEFFA", "BEFFE", "BEFFI", "BEFFO", "BEGHE", "BEGHI", "BEGLI", "BEGUM", "BEIGE", "BEINO", "BEISA", "BEISE", 
                "BELAI", "BELGA", "BELGI", "BELII", "BELIO", "BELLA", "BELLE", "BELLI", "BELLO", "BELTA", "BELVA", "BELVE", "BEMBE", "BENDA", 
                "BENDE", "BENDI", "BENDO", "BENNA", "BENNE", "BENSI", "BEOLA", "BEOLE", "BEONA", "BEONE", "BEONI", "BEOTA", "BEOTE", "BEOTI", 
                "BERCI", "BERGA", "BERMA", "BERME", "BERRA", "BERRO", "BERSI", "BERSO", "BERTA", "BERTE", "BERUF", "BERZA", "BERZE", "BESCI", 
                "BESSA", "BESSE", "BESSI", "BESSO", "BETEL", "BETON", "BETTA", "BETTE", "BEUTA", "BEUTE", "BEVEI", "BEVVE", "BEVVI", "BEZZI", 
                "BEZZO", "BIADA", "BIADE", "BIADI", "BIADO", "BIAVA", "BIAVE", "BIAVI", "BIAVO", "BIBBI", "BICCI", "BICHE", "BIDET", "BIECA", 
                "BIECO", "BIETA", "BIETE", "BIFFA", "BIFFE", "BIFFI", "BIFFO", "BIGHE", "BIGHI", "BIGIA", "BIGIE", "BIGIO", "BIGIU", "BIGNE", 
                "BIJOU", "BIKER", "BILIA", "BILIE", "BILLE", "BILLI", "BILTA", "BIMBA", "BIMBE", "BIMBI", "BIMBO", "BINAI", "BINDA", "BINDE", 
                "BINGO", "BIODI", "BIODO", "BIOMA", "BIOMI", "BIOVA", "BIOVE", "BIRBA", "BIRBE", "BIRBI", "BIRBO", "BIRCE", "BIRCI", "BIRRA", 
                "BIRRE", "BIRRI", "BIRRO", "BISCA", "BISCE", "BISCI", "BISEX", "BISSA", "BISSI", "BISSO", "BITTA", "BITTE", "BITTI", "BITTO", 
                "BIUTA", "BIUTE", "BIVIO", "BIZZA", "BIZZE", "BLASE", "BLEAH", "BLESA", "BLESE", "BLESI", "BLESO", "BLIMP", "BLINI", "BLINY", 
                "BLITZ", "BLOCK", "BLOOM", "BLUES", "BLUFF", "BLUMI", "BLUMO", "BLUSA", "BLUSE", "BOARA", "BOARD", "BOARE", "BOARI", "BOARO", 
                "BOATI", "BOATO", "BOBBA", "BOBBE", "BOCCA", "BOCCE", "BOCCI", "BOCHE", "BOCIA", "BOCIO", "BODDA", "BODDE", "BOEMA", "BOEME", 
                "BOEMI", "BOEMO", "BOERA", "BOERE", "BOERI", "BOERO", "BOGHE", "BOGLI", "BOHRI", "BOIDE", "BOIDI", "BOINA", "BOITE", "BOLDI", 
                "BOLDO", "BOLGE", "BOLLA", "BOLLE", "BOLLI", "BOLLO", "BOLSA", "BOLSE", "BOLSI", "BOLSO", "BOMBA", "BOMBE", "BOMBI", "BOMBO", 
                "BOMII", "BONCI", "BONET", "BONGO", "BONNE", "BONTA", "BONUS", "BONZA", "BONZE", "BONZI", "BONZO", "BORDA", "BORDE", "BORDI", 
                "BORDO", "BOREA", "BOREI", "BORGO", "BORIA", "BORIE", "BORII", "BORIO", "BORNI", "BORRA", "BORRE", "BORRI", "BORRO", "BORSA", 
                "BORSC", "BORSE", "BOSCO", "BOSSI", "BOSSO", "BOTAI", "BOTRI", "BOTRO", "BOTTA", "BOTTE", "BOTTI", "BOTTO", "BOULE", "BOXAI", 
                "BOXER", "BOZZA", "BOZZE", "BOZZI", "BOZZO", "BRACA", "BRACE", "BRACI", "BRACO", "BRADA", "BRADE", "BRADI", "BRADO", "BRAGA", 
                "BRAGE", "BRAGO", "BRAII", "BRAMA", "BRAME", "BRAMI", "BRAMO", "BRAND", "BRANI", "BRANO", "BRASA", "BRASI", "BRASO", "BRAVA", 
                "BRAVE", "BRAVI", "BRAVO", "BREAK", "BRENT", "BREVA", "BREVE", "BREVI", "BRICA", "BRICE", "BRIDA", "BRIDE", "BRIEF", "BRIGA", 
                "BRIGO", "BRINA", "BRINE", "BRINI", "BRINO", "BRODA", "BRODE", "BRODI", "BRODO", "BROLI", "BROLO", "BROMI", "BROMO", "BRUCA", 
                "BRUCE", "BRUCI", "BRUCO", "BRUGO", "BRUII", "BRULE", "BRUMA", "BRUME", "BRUNA", "BRUNE", "BRUNI", "BRUNO", "BRUSI", "BRUTA", 
                "BRUTE", "BRUTI", "BRUTO", "BUANA", "BUCAI", "BUCCE", "BUCCI", "BUCHE", "BUCHI", "BUCIO", "BUDDA", "BUDDI", "BUFAI", "BUFFA", 
                "BUFFE", "BUFFI", "BUFFO", "BUGIA", "BUGIE", "BUGIO", "BUGLI", "BUGNA", "BUGNE", "BUGNI", "BUGNO", "BUINA", "BUINE", "BULBI", 
                "BULBO", "BULGE", "BULLA", "BULLE", "BULLI", "BULLO", "BUNET", "BUONA", "BUONE", "BUONI", "BUONO", "BURBA", "BURBE", "BURGA", 
                "BURKA", "BURLA", "BURLE", "BURLI", "BURLO", "BURQA", "BURRI", "BURRO", "BURST", "BUSCA", "BUSCO", "BUSSA", "BUSSE", "BUSSI", 
                "BUSSO", "BUSTA", "BUSTE", "BUSTI", "BUSTO", "BUTTA", "BUTTE", "BUTTI", "BUTTO", "BUYER", "BUZZA", "BUZZE", "BUZZI", "BUZZO", 
                "BWANA", "CABAN", "CABLA", "CABLE", "CABLI", "CABLO", "CABRA", "CABRI", "CABRO", "CACAI", "CACAO", "CACCA", "CACCE", "CACCI", 
                "CACHE", "CACHI", "CACIO", "CACTI", "CACTO", "CADDE", "CADDI", "CADMI", "CADRA", "CADRO", "CAFFA", "CAFFE", "CAFFI", "CAFFO", 
                "CAFRA", "CAFRE", "CAFRI", "CAFRO", "CAGAI", "CAGHI", "CAGIU", "CAGLI", "CAGNA", "CAGNE", "CAIAC", "CAIBA", "CAIBE", "CAINI", 
                "CAINO", "CAIRN", "CAJUN", "CALAI", "CALAO", "CALCA", "CALCE", "CALCI", "CALCO", "CALDA", "CALDE", "CALDI", "CALDO", "CALEN", 
                "CALIA", "CALIE", "CALLA", "CALLE", "CALLI", "CALLO", "CALMA", "CALME", "CALMI", "CALMO", "CALSE", "CALTA", "CALTE", "CALVA", 
                "CALVE", "CALVI", "CALVO", "CALZA", "CALZE", "CALZI", "CALZO", "CAMBI", "CAMEO", "CAMMA", "CAMME", "CAMPA", "CAMPI", "CAMPO", 
                "CANAI", "CANDI", "CANEA", "CANEE", "CANGA", "CANGE", "CANGI", "CANNA", "CANNE",  ];
    let wrd = arr[Math.round(Math.random() * arr.length)]; //Algoritmo per il calcolo della parola casuale
    console.log(wrd); //Stampa della parola scelta dal computer per chi vuole sapere qual'era.
    return wrd;
}



function wordle(){
    //Controllo validità del form
    if(document.forms[0].checkValidity()){  
        out.innerHTML = "";
        //controllo del numero di chance per il giocatore
        if(chance == 6){
            let outs = document.getElementById("out");
            outs.innerHTML = "<hr /><p>hai perso :(</p>"
        }
        else{
            //variabile che permette di ricavare l'id delle lettere che dovranno essere inserite per creare la parola data dall'utente 
            let id0 = "l" + 0 + chance; 
            //Inserimento della prima lettera della parola inserita
            let start = document.getElementById(id0).value;
            //struttura iterativa utilizzata per la creazione della parola
            for(let i = 1; i <= 4; i++){
                let id = "l" + i + chance;
                console.log("id input = " + id);
                start += document.getElementById(id).value;
            }
            start = start.toUpperCase();
            //Stampa in console della parola inserita
            console.log(start);
            //Creazione dell'id del tag di output
            let outId = "out" + chance;
            //Stampa dell'id di output
            console.log("id dell\' output : " + outId);
            let out = document.getElementById(outId);
            //Controllo per verificare che la parola inserita sia quella corretta
            if(start == wrd){
                out.innerHTML = "<hr /><p>hai vinto !!!</p>";
            }
            else{
                //Struttura Iterativa che fa in modo di verificare la validità delle parola inserite
                for(let i = 0; i < wrd.length; i++){
                    let identity = "l" + i + chance;
                    let l = document.getElementById(identity);
                    //Se la lettera è al posto giusto ed è la lettera giusta allora la casella sarà verde 
                    if(start[i] == wrd[i]){
                        l.style.backgroundColor = "green";
                    }
                    else{
                        l.style.backgoundColor = "white";
                    }
                    //strutture per vedere se le parole sono arancioni o rosse 
                    let j = 0;
                    for(let x = 0; x < wrd.length; x++){
                        if(start[i] != wrd[j]){
                            j++;
                        }
                    }
                    if(j == wrd.length){
                        l.style.backgroundColor = "red";
                    }
                    else{
                        if(start[j] != wrd[j]){
                            l.style.backgroundColor = "orange";
                        }
                    }
                }
                //Aumento delle chance sprecate
                chance++;
                //Stampa delle chance
                console.log("chance = " + chance);

                //Crazione delle nuove caselle
                let id00 = "l" + 0 + chance;
                let outId0 = "out" + chance;
                console.log("id dell\' output : " + outId0);
                out.innerHTML += "<input type=\"text\" class=\"in\" id=" + id00 + " name=" + id00 + " maxlength=\"1\" required=\"required\" /><br />";
                
                for(let i = 1; i < 5; i++){
                    let id1 = "l" + i + chance;
                    out.innerHTML += "<input type=\"text\" class=\"in\" id=" + id1 + " name=" + id1 + " maxlength=\"1\" required=\"required\" /> <br />";
                    if(i == 4){
                        out.innerHTML += "<input type=\"button\" class=\"but\" value=\"check\" onclick=\"wordle() \"><br />";
                    }
                }
                out.innerHTML += "<output id=" + outId0 + "></output>";

            }
        }
    }
    else
    {
        let out = document.getElementById("out");
        out.innerHTML = "<br />Inserire lettere";
    }
}


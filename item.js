const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const itemNo = urlParams.get('no')

let items = [
    {
        title:'파나마운하 크루즈 15일',
        desc:'남미 크루즈 여행의 하이라이트 ! 파나마 운하 크루즈 !',
        imgT:'pc15/pc15-0.jpg',
        period:'14박 15일',
        course:'로스엔젤레스-카보산루카스(멕시코)-카보 샌루카스(멕시코)-알카풀코(멕시코)-푸에르토 께잘(과테말라)-샌후안델서(니카라과)-푼타레나스(코스타리카)-카르타헤나(콜럼비아)–마이아미(미국)',
        price: '문의 바랍니다.',
        map: `https://www.google.com/maps/d/u/2/embed?mid=1Gy0tJKJe6DeLr3xmYTM4PBXtFX4wL5a5`,
        imgs: ['pc15/pc15-0.jpg','pc15/pc15-1.jpg','pc15/pc15-2.jpg','pc15/pc15-3.jpg','pc15/pc15-4.jpg',],
        descL:`대서양과 태평양을 연결하면서, 12,668km 의 길이를 단축한 세계 최고의 경제적 항로인 파나마 운하
바다와 사막이 같이 있는 신비로운 도시 카보 산 루카스
멕시코의 최대 휴양 도시중 하나인 아카풀코
아름다운 태평양 바닷가 샌 후안 델서
‘모래로 된 돌출지형(sand point)’이란 뜻을 가진 푼타 아레나스
럭셔리 크루즈 투어의 결정판`
    },
    {
        title:'이스턴 캐리비안 크루즈 9일',
        desc:'초호화 초대형 뉴 크루즈로 떠나는 이스턴 캐리비안 !',
        imgT:'ec9/ec9-0.jpg',
        period:'8박 9일',
        course:'포트 로더데일(미국)-라바디(아이티섬)-샌 후안(푸에르토리코)-세인트 토마스-바스테르',
        price: '문의 바랍니다.',
        map:`https://www.google.com/maps/d/u/0/embed?mid=1VedsFmykBXja2fD9FdkNe1okz_5CJdku`,
        imgs: ['ec9/ec9-0.jpg','ec9/ec9-1.jpg','ec9/ec9-2.jpg','ec9/ec9-3.jpg','ec9/ec9-4.jpg',],
        descL:`오랜 시간 비행기에서 시간을 보낼것이 아니라 이번에 배를타고 일출과 일몰을 감상하며 온갖 이벤트, 카지노, 수영장등을 즐기면서 휴가를 보낼수 있는 초호화 웨스턴 캐러비안 크루즈 !
로열캐러비안 어드벤처 호가 추천하는 하일라이트 ! 더 리릭 대극장(The Lyric Theatre), 카지노 로얄(Casino Royal), 로얄 프라머네이드(길이 183m, 4층 높이의 실내거리), 스튜디오 B(아이스 링크), 암벽등반, 인공파도타기 (Flowrider®)`
    },
    {
        title:'웨스턴 캐리비안 8일 크루즈 (얼루어호)',
        desc:'초호화 초대형 뉴 크루즈로 떠나는 웨스턴 캐리비안 !',
        imgT:'wc8/wc8-0.jpg',
        period:'7박 8일',
        course:'포트 로더데일(미국)-라바디(아이티섬)-팔마우스(자마이카)-코즈멜 섬(멕시코)',
        price: '문의 바랍니다.',
        map:`https://www.google.com/maps/d/u/0/embed?mid=1lWkPAphL12U4O5IixURila9cuNsrem07`,
        imgs: ['wc8/wc8-0.jpg','wc8/wc8-1.jpg','wc8/wc8-2.jpg','wc8/wc8-3.jpg','wc8/wc8-4.jpg',],
        descL:`오랜 시간 비행기에서 시간을 보낼것이 아니라 이번에 배를타고 일출과 일몰을 감상하며 온갖 이벤트, 카지노, 수영장등을 즐기면서 휴가를 보낼수 있는 초호화 웨스턴 캐러비안 크루즈 !
        로열캐러비안 얼루어 호가 추천하는 하일라이트 ! 더 퍼펙트 스톰 워터슬라이드(The Perfect Storm Wwaterslides), 아쿠아 씨어터(Aqua Theater), 보드워크(Board Walk), 앰버 대극장(Amber Theater), 로얄 프라머네이드(길이 183m, 4층 높이의 실내거리), 카지노 로얄(Casino Royal) 그리고 센트럴 파크(Central Park)`
    },
    {
        title:'웨스턴 캐리비안 8일 크루즈 (하모니호)',
        desc:'초호화 초대형 뉴 크루즈로 떠나는 웨스턴 캐리비안 !',
        imgT:'wc8h/wc8h-0.jpg',
        period:'7박 8일',
        course:'포트 로더데일(미국)-라바디(아이티섬)-팔마우스(자마이카)-코즈멜 섬(멕시코)',
        price: '문의 바랍니다.',
        map:`https://www.google.com/maps/d/u/0/embed?mid=1lWkPAphL12U4O5IixURila9cuNsrem07`,
        imgs: ['wc8h/wc8h-0.jpg','wc8h/wc8h-1.jpg','wc8h/wc8h-2.jpg','wc8h/wc8h-3.jpg','wc8h/wc8h-4.jpg',],
        descL:`오랜 시간 비행기에서 시간을 보낼것이 아니라 이번에 배를타고 일출과 일몰을 감상하며 온갖 이벤트, 카지노, 수영장등을 즐기면서 휴가를 보낼수 있는 초호화 웨스턴 캐러비안 크루즈 !
        로열캐러비안 하모니 호가 추천하는 하일라이트 ! 더 퍼펙트 스톰 워터슬라이드(The Perfect Storm Wwaterslides), 아쿠아 씨어터(Aqua Theater), 보드워크(Board Walk) 그리고, 센트럴 파크(Central Park)`
    },
    {
        title:`호주/뉴질랜드 크루즈 투어 14일`,
        desc:'여유로운 자연의 분위기와 세계 각국의 다채로운 문화가 공존하는 호주와 뉴질랜드 탐험 !',
        imgT:'an14/an14-1.jpg',
        period:'13박 14일',
        course:'미국-시드니-멜버른(오스트레일리아)-밀포드사운드(뉴질랜드)-더스키 사운드-더니든-웰링톤-픽톤-타우랑가-오클랜드-미국',
        price: '문의 바랍니다.',
        map:`https://www.google.com/maps/d/u/0/embed?mid=1d1-06_QnDrTdgwApMi_sInLnXJNNK3ks`,
        imgs: ['an14/an14-0.jpg','an14/an14-1.jpg','an14/an14-2.jpg','an14/an14-3.jpg','an14/an14-4.jpg',],
        descL:`선상에서 즐기는 스타 세프의 훌륭한 요리와 즐거운 엔터테인먼트, 각 도시마다 특색있는 관광지, 황금빛으로 물든 해변, 대자연 오지 탐험이 새로운 세계를 보여드립니다.
        뉴질랜드의 총 1만 5천km에 이르는 해안선을 따라 크루즈하는 것, 이 나라의 아름다운 자연환경을 탐사하는 완벽한 여행 방법이다.
        뉴질랜드의 도시로 상공업의 중심도시 오클랜드, 오클랜드에서 가장 대표적인 바닷가 미션베이
        하버브리지, 맥콰리 포인트 등을 관광하게되는 오스트레일리아에서 가장 인구가 많은 시드니`
    },
    {
        title:`정통 남미(파타고니아) 크루즈 16일`,
        desc:'낭만이 있는 중년의 선택, 남미 크루즈 일주 !',
        imgT:'an14/an14-0.jpg',
        period:'15박 16일',
        course:'Valparaiso(칠레)-Puerto Montt-Amalia Glacier(선상)-Punta Arenas(칠레)-Ushuaia (아르헨티나)-cape Horn(칠레)-Stanley Falkland Island(영국령)-Puerto Madryn(아르헨티나)-Montevideo(우루과이)-Buenos Aires (아르헨티나 1박)',
        price: '문의 바랍니다.',
        map:`https://www.google.com/maps/d/u/0/embed?mid=1Q1-FPoy0KKKYA6RVvJgkHN0X8RvhMmcO`,
        imgs: ['an14/an14-0.jpg','an14/an14-1.jpg','an14/an14-2.jpg','an14/an14-3.jpg','an14/an14-4.jpg',],
        descL:`선상에서 즐기는 스타 세프의 훌륭한 요리와 즐거운 엔터테인먼트, 각 도시마다 특색있는 관광지, 황금빛으로 물든 해변, 대자연 오지 탐험이 새로운 세계를 보여드립니다.
        영화 <타이타닉>처럼 끝없는 바다 위로 저무는 석양을 바라보는 낭만도 즐길 수 있습니다.
        푸에르토몬트의 피오르드 해안 절경을 보고, 푼타아레나스와 우수아이아에서 펭귄 투어와 땅끝 기차 투어를 즐기고, 남미 최남단 케이프혼을 돌아 스탠리, 푸에르토 마드린, 몬테비데오를 경유해 부에노스아이레스에서 하선하게 되는 일정입니다.`
    },
    {
        title:`BAJA MEXICO 4박 5일`,
        desc:`항상 '산해진미가 깔려 있는' 여행..`,
        imgT:'bm5/bm5-0.jpg',
        period:'4박 5일',
        course:'로스앤젤레스-미국 카타리나 섬-멕시코 ENSENADA-로스앤젤레스',
        price: '문의 바랍니다.',
        map:`https://www.google.com/maps/d/embed?mid=1POvVkY7KAa3ApXSrv4taSTqYHnE`,
        imgs: ['bm5/bm5-0.jpg','bm5/bm5-1.jpg','bm5/bm5-2.jpg','bm5/bm5-3.jpg',],
        descL:`크루즈 여행은 넘치는 음식으로 유명하다. 바하멕시코 크루즈는 단기 크루즈에서도 최고급의 식사를 제공하며, 중간에 기착하는 엔세나다의 최고 관광지 라푸마도라에서는 바다에서 물기둥이 뿜어서 올라오는 장관을 감상할수 있습니다.
        짧지만 선상에서 즐기는 프로그램은 일반 7박이나 14박 여행과 다름없이 진행된다. 
        격조 높은 식사가 제공되는 디너파티는 물론 캡틴이 참석하는 선상 무도회까지 고품격의 프로그램들이 짧은 기간에 계속해서 이어진다. 
        이런 이유로 단기 크루즈에 승선할 때도 일반 크루즈와 같이 정장을 준비해야 하고 일부 승객들은 턱시도나 칵테일 드레스도 챙긴다.
        선상에는 수많은 게임이 벌어진다. 원반 던지기, 탁구, 주사위놀이, 카드놀이 등은 언제라도 즐길 수 있으며 토너먼트 형식의 수구, 릴레이 경기, 맥주 마시기 시합 같은 그룹 게임은 영어가 통하지 않는다 해도 외국인들과 함께 하며 참여할 수 있다. 또한 다양한 종류의 영화 상영, 관심 분야별 강습, 기항지의 역사와 문화 정보 등도 제공된다.
        단기 멕시코 크루즈는 특히 가족 단위 여행객들에게 인기가 높다. 유아부터 청소년에 이르는 모든 자녀들에게 신나는 경험과 즐거움을 선사하는 각종 프로그램들이 즐비한데 부모들은 자녀들을 이들 프로그램에 보낸 후 편안하고 여유로운 휴가를 즐기게 된다. 카니벌의 경우 어린이 탑승객들을 위한 ‘캠프 카니벌’(Camp Canival) 프로그램을 실시하고 있다.`
    },
    {
        title:`BAJA MEXICO 3박 4일`,
        desc:`항상 '산해진미가 깔려 있는' 여행..`,
        imgT:'bm4/bm4-0.jpg',
        period:'3박 4일',
        course:'로스앤젤레스-멕시코 ENSENADA-로스앤젤레스',
        price: '문의 바랍니다.',
        map:`https://www.google.com/maps/d/embed?mid=1Nts6mWT9Z_cQ7Nu3hc8jGyBxOv8`,
        imgs: ['bm4/bm4-0.jpg','bm4/bm4-1.jpg','bm4/bm4-2.jpg',],
        descL:`크루즈 여행은 넘치는 음식으로 유명하다. 바하멕시코 크루즈는 단기 크루즈에서도 최고급의 식사를 제공하며, 중간에 기착하는 엔세나다의 최고 관광지 라푸마도라에서는 바다에서 물기둥이 뿜어서 올라오는 장관을 감상할수 있습니다.
        짧지만 선상에서 즐기는 프로그램은 일반 7박이나 14박 여행과 다름없이 진행된다. 격조 높은 식사가 제공되는 디너파티는 물론 캡틴이 참석하는 선상 무도회까지 고품격의 프로그램들이 짧은 기간에 계속해서 이어진다. 이런 이유로 단기 크루즈에 승선할 때도 일반 크루즈와 같이 정장을 준비해야 하고 일부 승객들은 턱시도나 칵테일 드레스도 챙긴다.
        선상에는 수많은 게임이 벌어진다. 원반 던지기, 탁구, 주사위놀이, 카드놀이 등은 언제라도 즐길 수 있으며 토너먼트 형식의 수구, 릴레이 경기, 맥주 마시기 시합 같은 그룹 게임은 영어가 통하지 않는다 해도 외국인들과 함께 하며 참여할 수 있다. 또한 다양한 종류의 영화 상영, 관심 분야별 강습, 기항지의 역사와 문화 정보 등도 제공된다.
        단기 멕시코 크루즈는 특히 가족 단위 여행객들에게 인기가 높다. 유아부터 청소년에 이르는 모든 자녀들에게 신나는 경험과 즐거움을 선사하는 각종 프로그램들이 즐비한데 부모들은 자녀들을 이들 프로그램에 보낸 후 편안하고 여유로운 휴가를 즐기게 된다. 카니벌의 경우 어린이 탑승객들을 위한 ‘캠프 카니벌’(Camp Canival) 프로그램을 실시하고 있다.`
    },
    {
        title:`스페인/포르투갈 완전일주 12일`,
        desc:`햇살을 파는 도시 스페인, 설렘을 부르는 포르투갈 Best 핵심관광지 12일 !!`,
        imgT:'sppo/sppo0.jpg',
        period:'12일',
        course:'마드리드-세고비아-살라망카-포르투-파티마-까보다로까-리스본-베나길-세비야-그라나다-꼬르도바-똘레도-바르셀로나-몬세랏',
        price: '문의 바랍니다.',
        map:`https://www.google.com/maps/d/u/2/embed?mid=1N8i7dj0jpWV9wRulFmd5NYwjIIQSiRXU`,
        imgs: ['sppo/sppo0.jpg','sppo/sppo1.jpg','sppo/sppo2.jpg','sppo/sppo3.jpg',],
        descL:`서유럽과 동유럽을 다녀 오신 분 들이 꼭 여행 하시기를 원하는스페인과 포르투갈~
        ▶ 유네스코 세계 자연유산과 세계 문화유적지로 무수히 지정된 스페인의 진수 ! 지중해 해안의 휴양지들과 끝없이 펼쳐진 올리브 밭의 비옥함, 세계를 지배했던 스페인의 저력과 풍부한 문화, 주옥같은 일정과 코스 특급호텔 사용으로 편안하고 흥미로운 내용으로 가득차 있는 스페인 여행. 그리고, 참 여행이란 이런 것이구나라고 느낄수 있는 여유로운 일정과 특급호텔, 고급 호텔 식사 등으로 고객의 만족도 최상인 장대한 역사와 수려한 자연이 매혹적인 스페인의 진수를 드림투어를 통해서 경험 하시게 됩니다.
        ▶ 일주일 내내 돌아봐도 모자란 매력 넘치는 포르투갈 ! 포르투갈의 일상을 느낄수 있는 리스본 골목길과 트램
        ※ Covid 양성결과로 현지 잔류가 필요할 경우 모든 비용은 여행자 본인의 부담으로 합니다.`
    },
    {
        title:`고품격 여행 스페인 일주 9일`,
        desc:`우리의 마음이 춤추기 시작한 순간, 스페인 일주 9일 ! 품격 ! All about Spain !`,
        imgT:'spa/spa0.jpg',
        period:'9일',
        course:'마드리드-세고비아-톨레도-세비야-코르도바-그라나다-바르셀로나-몬세랏-바르셀로나',
        price: '문의 바랍니다.',
        map:`https://www.google.com/maps/d/u/2/embed?mid=1a7bp1pkZ3_Cq7Rjd9fL1vdrvdX6kaBrZ`,
        imgs: ['spa/spa0.jpg','spa/spa1.jpg','spa/spa2.jpg','spa/spa3.jpg',],
        descL:`서유럽과 동유럽을 다녀 오신 분 들이 꼭 여행 하시기를 원하는스페인
        ▶ 낮과는 다른 그라나다를 경험하다 ! 그라나다 야경투어 전격포함
        ▶ 6대 이색지역 특식 제공: 애져/핀쵸/빠에야/하몽 & 상그리아/몽골리안 BBQ
        ▶ 가우디와 함께 스페인을 대표하는 피카소 미술관 내부관람
        ▶ 유럽에서 가장 화려한 왕궁으로 꼽히는 마드리드 왕궁 내부관람
        ▶ 플라맹고 옵션과 함께 즐기는 여유로운 정찬식!!`
    },
    {
        title:`서유럽 6개국 9일`,
        desc:`가는 발길마다 엽서 속 풍경이 되는 여행 - 서유럽 6개국 9일`,
        imgT:'weu/weu0.jpg',
        period:'8박 9일',
        course:'런던-파리-브뤼셀-암스텔담-프랑크프르트-하이델베르크-스트라스부루그-인터라켄-밀라노',
        price: '문의 바랍니다.',
        map:`https://www.google.com/maps/d/u/0/embed?mid=1d5wpcrEQVm10cykXH8zNZFNbvH8tHpYX`,
        imgs: ['weu/weu0.jpg','weu/weu1.jpg','weu/weu2.jpg','weu/weu3.jpg',],
        descL:`알프스를 넘나들며 로마제국과 르네상스의 화려한 문명과 만날 수 있는 상품입니다.
        짧은 기간에 서유럽 핵심 관광지를 알차게 관람할 수 있는 순수 역사 문화 예술 탐방 !
        세계 4대 문명을 아우르는 엄청난 유물을 보유하고 54개 영연방 회원국의 수반인 영국!
        프랑스 절대왕권의 상징인 베르사이유 궁전내부
        세계 3대박물관으로 지정된 루브르 박물관
        여행객들의 가슴을 설레게 하는 산골짜기의 호수들, 눈과 빙하로 덮힌 알프스의 나라 스위스!`
    },
    {
        title:`서유럽 7개국 13일`,
        desc:`가는 발길마다 엽서 속 풍경이 되는 여행 - 서유럽 7개국 13일`,
        imgT:'weu7/weu70.jpg',
        period:'12박 13일',
        course:'런던-파리-브뤼셀-암스텔담-프랑크프르트-하이델베르크-스트라스부루그-인터라켄-밀라노-베니스-볼로냐-플로렌스-피렌체-로마-나폴리-폼페이-쏘렌토-로마',
        price: '문의 바랍니다.',
        map:`https://www.google.com/maps/d/embed?mid=1T7F_C8_Y5PN6aXEw0fjuI0JUuyU`,
        imgs: ['weu7/weu70.jpg','weu7/weu71.jpg','weu7/weu72.jpg','weu7/weu73.jpg','weu7/weu74.jpg',],
        descL:`세계 4대 문명을 아우르는 엄청난 유물을 보유하고 54개 영연방 회원국의 수반인 영국!
        예술과 낭만의 나라, 매혹적인 다양한 문화 유적지와 박물관, 미술관 등 경이와 신비로움의 프랑스!
        풍차마을로 유명한 잔세스칸스,자유로움의 상징! 암스테르담의 네덜란드
        프랑스 알자스의 아름다운 동화마을, 꽃보다 할배의 촬영지 쁘띠프랑스&스트라스부르, 가장 오래된 중세도시로 젊은 대학의 도시 하이델베르크가 있는 독일!
        여행객들의 가슴을 설레게 하는 산골짜기의 호수들, 눈과 빙하로 덮힌 알프스의 나라 스위스!
        발 닿는 곳마다 박물관이고 미술관이란 말이 있을 만큼 축적된 풍부한 유산이 넘쳐나는 나라 이탈리아!`
    },
    {
        title:`핵심 이태리 일주 7일`,
        desc:`고대와 중세 그리고 현재가 공존하는 핵심 이태리 일주 7일`,
        imgT:'ita/ita0.jpg',
        period:'6박 7일',
        course:'밀라노-베니스-볼로냐-피렌체-로마-폼페이-쏘렌토-나폴리-로마',
        price: '문의 바랍니다.',
        map:`https://www.google.com/maps/d/u/0/embed?mid=1V_JrrlQXqL7twVtgOUYrCE840deZcF-v`,
        imgs: ['ita/ita0.jpg','ita/ita1.jpg','ita/ita2.jpg','ita/ita3.jpg','ita/ita4.jpg',],
        descL:`신비로운 물의 도시 베니스 관광
        르네상스의 문화를 꽃피운 세계에서 가장 아름다운 예술의 도시 피렌체 관광
        유럽최고의 패션과 예술의 중심지 밀라노 관광
        세계에서 가장 작은 도시 바티칸을 품고 있는 로마 관광
        이탈리아의 아름다운 바다를 볼 수있는 남부지역 나폴리/폼페이/쏘렌토 관광`
    },
    {
        title:`발칸4국 8일`,
        desc:`아드리해의 보석 ◆ 발칸 8일`,
        imgT:'bk/bk0.jpg',
        period:'7박 8일',
        course:'비엔나-그라츠-자그레브-플리트비체-네움-두브로브닉-스플리트-트로기르-루블랴나-블래드-베니스',
        price: '문의 바랍니다.',
        map:`https://www.google.com/maps/d/u/0/embed?mid=1rpE3equAIdTbuXSB5Cg37UAhXeAbDJXN`,
        imgs: ['bk/bk0.jpg','bk/bk1.jpg','bk/bk2.jpg','bk/bk3.jpg','bk/bk4.jpg',],
        descL:`합스부르크 왕가의 여름별장이었던 ★쉔부른 궁전 및 정원★
        아드리아해의 진주로 불리는 두브로브니크!
        에머랄드 빛 물감을 풀어놓은듯한 16개의 호수와 크고 작은 폭포들이 조화롭게 펼쳐져 대자연의 경관을 느낄수 있는 플리트비체
        ※Covid 양성결과로 현지 잔류가 필요할 경우 모든 비용은 여행자 본인의 부담으로 합니다.`
    },
    {
        title:`터키, 그리스 + 산토리니 13일`,
        desc:`신들의 푸른정원 속에 숨겨진 지중해의 아름다운 보석 그리스 산토리니섬 & 터키 13일 !`,
        imgT:'t-g/t-g0.jpg',
        period:'12박 13일',
        course:'아테네-산토리니-고린도-이즈미르-에페소-차낙칼레-파묵갈레-안탈랴-콘야-카파도키아-이스탄불',
        price: '문의 바랍니다.',
        map:`https://www.google.com/maps/d/u/0/embed?mid=1X3ylFFJz0PGZVhlnsQ6QaE9CdFtgE2DC`,
        imgs: ['t-g/t-g0.jpg','t-g/t-g1.jpg','t-g/t-g2.jpg','t-g/t-g3.jpg','t-g/t-g4.jpg',],
        descL:`여유로움 한가득 ! 푸른 빛 설렘 가득한 터키, 그리스, 산토리니로 떠나 보세요 !
        ▶ 터키 제 1의 도시동서양의 문화가 공존하는 이스탄불
        ▶ 세계 7대 불가사의 중 하나인 아르테미스 신전을 중심으로 번영한 터키 고대 도시 유적 에페소
        ▶ 신들의 도시 아테네
        ▶ 시간이 멈춘 유럽, 지중해 유적지 에페소 유적이 있는 셀쭉
        ▶ 신과 인간이 만든 환상적인 경관 카파도키아
        ※Covid 양성결과로 현지 잔류가 필요할 경우 모든 비용은 여행자 본인의 부담으로 합니다.`
    },
    {
        title:`터키일주 10일`,
        desc:`신들의 푸른정원 속에 숨겨진 지중해의 아름다운 보석, 터키 완벽일주 11일 !`,
        imgT:'tk/tk0.jpg',
        period:'9박 10일',
        course:'이스탄불-이즈미르-에페소-파묵깔레-안탈야-콘야-카파도키아-이스탄불',
        price: '문의 바랍니다.',
        map:`https://www.google.com/maps/d/u/2/embed?mid=1hcWv-bGe62-nYLYhQGKsC__rcrZ2ug_J`,
        imgs: ['tk/tk0.jpg','tk/tk1.jpg','tk/tk2.jpg','tk/tk3.jpg',],
        descL:`완벽한 일정, 터키 대표 관광지 및 가는 곳곳마다 놓칠수 없는 4대 유네스코 세계문화유산 지역 탐방 (이스탄불 역사지구, 카파도키아, 에페소, 파묵갈레) 그리고 특별한 터키 맛 체험까지 !
        ▶ 로마시대부터 중심 역할을 하며, 도시자체에 동서양의 문화가 공존하는 도시 이스탄불
        ▶ 세계 7대 불가사의 중 하나인 아르테미스 신전, 터키 서부의 고대 도시 유적 에페소
        ▶ 신이 만들어낸 화산지형과 인간의 생활환경이 만들어낸 도시 카파도키아
        ▶ 로마시대에 온천도시로 번영을 누리던 히에라폴리스 도시유적이 펼쳐진 도시 파묵깔레
        ※Covid 양성결과로 현지 잔류가 필요할 경우 모든 비용은 여행자 본인의 부담으로 합니다.`
    },
    {
        title:`동유럽 5개국 9일`,
        desc:`잊지 못할 “동유럽 여행의 정석” 베스트만을 모은 동유럽 9일`,
        imgT:'eeu/eeu0.jpg',
        period:'8박 9일',
        course:'뮌헨-퓌센-잘츠브루크-잘츠감마굿-체스키크롬로프-프라하-오스트라바-아우슈비츠-비엘리츠카-타트라-부다페스트-비엔나',
        price: '문의 바랍니다.',
        map:`https://www.google.com/maps/d/u/0/embed?mid=1G17TeQ734PyiYQrwDaH70y7QWuP8ul23`,
        imgs: ['eeu/eeu0.jpg','eeu/eeu1.jpg','eeu/eeu2.jpg','eeu/eeu3.jpg','eeu/eeu4.jpg',],
        descL:`수 많은 예술가들이 사랑한 음악의 도시 비엔나
        죽게 전에 꼭 가봐야 할 유적지로 각광받는 비엔나의 아름다운 쉔부른 궁전
        프라하 근교의 리틀프라하로 불리는 동화같은 아기자기한 도시 체스키크롬로프
        과거전쟁 비극의 현장인 아우슈비츠 수용소
        유럽3대 야경으로 손꼽히며 ‘다뉴브의 진주’라 불리는 부다페스트
        보헤미아 왕국의 수도로서 천년의 세월을 간직한 백탑의 도시이자, 동유럽의 파리라고 불리며, 도시 전체가 유네스코 세계문화유산으로 보호 받고 있는 아름다운 도시 프라하`
    },
    {
        title:`동유럽 & 발칸 14일`,
        desc:`누구도 흉내낼 수 없는 다녀오신 분들이 극찬하는 믿고 떠나는 드림투어의 대표상품! 동유럽 발칸여행`,
        imgT:'eeu-bk/eeu-bk0.jpg',
        period:'8박 9일',
        course:'뮌헨-퓌센-잘츠브루크-잘츠감마굿-비엔나-체스키크롬로프-프라하-오스트라바-아우슈비츠-비엘리츠카-타트라-부다페스트-비엔나-그라츠-자그레브-플리트비체-네움-두브로브닉-스플리트-트로기르-루블랴나-블래드-베니스',
        price: '문의 바랍니다.',
        map:`https://www.google.com/maps/d/u/0/embed?mid=1IVO7oz0NDBtRiDQsKksE9jU_QSw`,
        imgs: ['eeu-bk/eeu-bk0.jpg','eeu-bk/eeu-bk1.jpg','eeu-bk/eeu-bk2.jpg','eeu-bk/eeu-bk3.jpg','eeu-bk/eeu-bk4.jpg',],
        descL:`동서유럽의 문화가 공존하는 독일
        아드리아해의 진주로 불리는 두브로브니크!
        에머랄드 빛 물감을 풀어놓은듯한 16개의 호수와 크고 작은 폭포들이 조화롭게 펼쳐져 대자연의 경관을 느낄수 있는 플리트비체
        과거전쟁 비극의 현장인 아우슈비츠 수용소
        세체니 다리를 지나 다뉴브 강변으로 펼쳐진 야경이 아름다운 도시 ‘다뉴브의 장미’ 부다페스트
        보헤미아 왕국의 수도로서 천년의 세월을 간직한 백탑의 도시이자, 동유럽의 파리라고 불리며, 도시 전체가 유네스코 세계문화유산으로 보호 받고 있는 아름다운 도시 프라하
        ※Covid 양성결과로 현지 잔류가 필요할 경우 모든 비용은 여행자 본인의 부담으로 합니다.`
    },
    {
        title:`북유럽 4개국 11일`,
        desc:`자연이 만들어낸 아름다운나라 북유럽4개국 11일 !`,
        imgT:'neu/neu0.jpg',
        period:'10박 11일',
        course:'코펜하겐(덴마크)-오슬로(노르웨이)-비토스톨렌-게이랑에르-브릭스달-송달-베르겐-보스-플롬-노렐젤-오슬로-칼스테드(스웨덴)-스톡홀롬-헬싱키(핀란드)',
        price: '문의 바랍니다.',
        map:`https://www.google.com/maps/d/u/0/embed?mid=1puYl8_LL3UfhOO1wFtcvn81lTuWW-NDz`,
        imgs: ['neu/neu0.jpg','neu/neu1.jpg','neu/neu2.jpg','neu/neu3.jpg','neu/neu4.jpg',],
        descL:`▶ 헬싱키 상뜨페테르부르크 고속열차 알레그로 탑승, 세계 3대 박물관 중 하나인 에르미타쥐 박물관
        ▶ 덴마크 코펜하겐 - 왕실의 보물이 전시되어 있는 로젠버그성 보석관(내부관광)
        ▶ 노르웨이 북유럽 상품의 하이라이트!! 게이랑에르 유람선 탑승, 장엄한 자연을 느낄 수 있는 플롬-뮈르달 구간 ‘로멘틱열차’
        ▶ 플롬라인 탑승관광(옵션이 아닙니다) ‘유럽의 푸른 눈’인 브릭스달 푸른빙하 전동차 탑승 관광
        ▶ 그림같은 풍경을 자랑하는 노르웨이 화가들의 작품이 소장되어 있는 국립 미술관
        ▶ 베르겐 시내 전망을 한눈에 볼 수 있는 플뢰엔산 전망대 관광
        ▶ 스웨덴 스톡홀름 - 북유럽 최고의 건축미를 자랑하는 시청사 내부 관광. 스웨덴 황실의 호화 전함 바사호가 전시되어 있는 바사 박물관 내부 관광. 연어회를 곁들인 한식
        ▶ 핀란드 헬싱키(숲과 호수의 나라) - 각종 국가의 종교 행사가 열리는 원로원 광장 및 대성당`
    },
    {
        title:`이집트, 이스라엘, 요르단 (성지순례) 16일`,
        desc:`나일강의 트 5성 유람선 탑승 ! 국내 항공이동하는 ♡성지순례 여행 / 이집트, 이스라엘, 요르단 16일 ♡`,
        imgT:'eij/eij5.jpg',
        period:'15박 16일',
        course:'카이로-아스완-아부심벨-아스완-콜옴보-에드푸-룩소-카이로-암만-페트라-여리고-사해-가나-갈릴리-예루살렘',
        price: '문의 바랍니다.',
        map:`https://www.google.com/maps/d/u/0/embed?mid=1CEgg2KN_asGYKMnrQBgTE_QkCl0yDcZU`,
        imgs: ['eij/eij0.jpg','eij/eij1.jpg','eij/eij2.jpg','eij/eij3.jpg','eij/eij4.jpg','eij/eij5.jpg',],
        descL:`성지 순례 ♥ 중세로의 여행, 예루살렘/베들레헴/갈릴리/페트라/암만 !
        ★ 모세의 하느님 발현 십계명 받은 시나이산 일출 ★
        ★ 예수님 탄생에서 승천 부활 복음의 밤 ★
        ▶ 이집트 5천년의 역사를 볼 수 잇는 “고고학 박물관” 카이로
        ▶ 파라오가 남긴 사랑의 증표, 아부심벨 신전을 볼 수 있는 도시 아부심벨
        ▶ 베드로 신앙고백지 가이샤라 빌립보
        ▶ 에돔 족속의 도시이자 세계 7대 불가사의로 선정된 페트라
        ▶ 신과 인간이 만든 환상적인 경관 카파도키아
        ※Covid 양성결과로 현지 잔류가 필요할 경우 모든 비용은 여행자 본인의 부담으로 합니다.`
    },
    {
        title:`요르단, 이스라엘 (성지 순례) 10일`,
        desc:`♡ 세계 7대 불가사의 페트라 & 사해 체험 ♡ 이스라엘+요르단 10일`,
        imgT:'ji/ji0.jpg',
        period:'9박 10일',
        course:'암만-헤스본-느보산-페트라-알렌비-사해-여리고-상부 갈릴리-갈릴리-가나-예루살렘-베들레헴-예루살렘',
        price: '문의 바랍니다.',
        map:`https://www.google.com/maps/d/u/0/embed?mid=1LrcvkDWwJYUspIdl399DvThIYKosvG8A`,
        imgs: ['ji/ji0.jpg','ji/ji1.jpg','ji/ji2.jpg','ji/ji3.jpg','ji/ji4.jpg','ji/ji5.jpg',],
        descL:`성지 순례 ♥ 중세로의 여행, 예루살렘/베들레헴/갈릴리/페트라/암만 !
        ★ 모세의 하느님 발현 십계명 받은 시나이산 일출 ★
        ★ 예수님 탄생에서 승천 부활 복음의 밤 ★
        ▶ 베드로 신앙고백지 가이샤라 빌립보
        ▶ 모세가 숨을 거둔 느보산(비스가산)
        ▶ 에돔 족속의 도시이자 세계 7대 불가사의로 선정된 페트라
        ▶ 신과 인간이 만든 환상적인 경관 카파도키아
        ※Covid 양성결과로 현지 잔류가 필요할 경우 모든 비용은 여행자 본인의 부담으로 합니다.`
    },
]

let item = items[itemNo]

let onLoadFunc = (no) => {
    // change background image
    console.log(document.querySelector(".masthead").style.color)
    document.getElementById('masthead').style.backgroundImage="url(assets/img/"+item.imgT+")"

    // slide show
    let imgTag = '', btnTag = ''
    
    item.imgs.forEach(function (v,i,a) {
        if (!i) {
            imgTag += '<div class="carousel-item active"><img src="assets/img/' + v + '" class="d-block w-100"></div>'
            btnTag += '<button type="button" data-bs-target="#slides" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>'
        } else {
            imgTag += '<div class="carousel-item"><img src="assets/img/' + v + '" class="d-block w-100"></div>'
            btnTag += '<button type="button" data-bs-target="#slides" data-bs-slide-to="' + i + '" aria-label="Slide ' + (i+1) + '"></button>'
        }
    })

    let hd = `<div id="slides" class="carousel slide" data-bs-ride="carousel"><div class="carousel-indicators">${btnTag}</div><div class="carousel-inner">
    
    `
    let tl = `</div> <!------ slide button -------->
<button class="carousel-control-prev" type="button" data-bs-target="#slides" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#slides" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </div>`

    document.getElementById('slideShow').innerHTML = hd + imgTag + tl

}
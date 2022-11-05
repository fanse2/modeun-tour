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
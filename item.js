const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const itemNo = urlParams.get('no')

let items = [
    {
        title:'파나마운하 크푸즈 15일',
        desc:'남미 크루즈 여행의 하이라이트 ! 파나마 운하 크루즈 !',
        imgT:'pc15/pc15-0.jpg',
        imgs: ['pc15/pc15-0.jpg','pc15/pc15-1.jpg','pc15/pc15-2.jpg','pc15/pc15-3.jpg','pc15/pc15-4.jpg',],
        descL:`대서양과 태평양을 연결하면서, 12,668km 의 길이를 단축한 세계 최고의 경제적 항로인 파나마 운하
바다와 사막이 같이 있는 신비로운 도시 카보 산 루카스
멕시코의 최대 휴양 도시중 하나인 아카풀코
아름다운 태평양 바닷가 샌 후안 델서
‘모래로 된 돌출지형(sand point)’이란 뜻을 가진 푼타 아레나스
럭셔리 크루즈 투어의 결정판`
    },
    {
        title:'이스턴 캐리비안 9일 크루즈',
        desc:'초호화 초대형 뉴 크루즈로 떠나는 이스턴 캐리비안 !',
        imgT:'ec9/ec9-0.jpg',
        imgs: ['ec9/ec9-0.jpg','ec9/ec9-1.jpg','ec9/ec9-2.jpg','ec9/ec9-3.jpg','ec9/ec9-4.jpg',],
        descL:`오랜 시간 비행기에서 시간을 보낼것이 아니라 이번에 배를타고 일출과 일몰을 감상하며 온갖 이벤트, 카지노, 수영장등을 즐기면서 휴가를 보낼수 있는 초호화 웨스턴 캐러비안 크루즈 !
로열캐러비안 어드벤처 호가 추천하는 하일라이트 ! 더 리릭 대극장(The Lyric Theatre), 카지노 로얄(Casino Royal), 로얄 프라머네이드(길이 183m, 4층 높이의 실내거리), 스튜디오 B(아이스 링크), 암벽등반, 인공파도타기 (Flowrider®)`
    }
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
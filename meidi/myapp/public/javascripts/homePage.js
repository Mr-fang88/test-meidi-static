$(function(){
  $.ajax({
    url: 'http://localhost:3000/users',
    type: 'get',
    success: function (res) {
      // console.log(res)
    }
  })
  
  function dropDown(){
    var flag = true
      $('#dropDown').on('click',function(){
        if(flag){
          $('.notice').stop().animate({height:'2.1rem'});
          $(this).css({transform:'rotate(180deg)'});
          flag = false
        } else if(!flag){
          $('.notice').stop().animate({height:'.7rem'});
          $(this).css({transform:'rotate(360deg)'});
          flag = true
        }
      })
  
  }
  dropDown()

  function home_banner(){
    var swiper = new Swiper('.swiper-container', {
      loop:'true',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    $('.swiper-pagination span').on('click',() => {
      $(this).css({'borderColor':'none','outline':'none'})
    })
  }
  home_banner()

  let footer = () => {
    $('.footer_a').on('click',function() {
      console.log($(this))
      $(this).css('color','#0092d8').siblings().css('color','#999')
    })
  }
  footer()
  
})

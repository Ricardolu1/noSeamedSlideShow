$(".images>img:nth-child(1)").addClass("current")
$(".images>img:nth-child(2)").addClass("enter")
let n=1
setTimeout(() => {
  if(n>3){
    n=n%3
    if(n===0)
    n=3
  }//n的值是1，2，3，不会是别的
  $(`.images>img:nth-child(${n})`).removeClass().addClass("leave")
  .one('transitionend',function(x) {
    $('x.currentTarget').removeClass().addClass('enter')
  })
  $(`.images>img:nth-child(${n+1})`).removeClass().addClass("current")
  n+=1
}, 2000)

setTimeout(() => {
  $(".images>img:nth-child(2)").removeClass().addClass("leave")
  .one('transitionend',function(x) {
    $('x.currentTarget').removeClass().addClass('enter')
  })

  $(".images>img:nth-child(3)").removeClass().addClass("current")
}, 4000)

setTimeout(() => {
  $(".images>img:nth-child(3)").removeClass().addClass("leave")
  .one('transitionend',function(x) {
    $('x.currentTarget').removeClass().addClass('enter')
  })

  $(".images>img:nth-child(1)").removeClass().addClass("current")
}, 6000)


























































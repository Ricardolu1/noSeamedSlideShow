
let n
initialize() 
setInterval(() => {
  $(`.images>img:nth-child(${judgeN(n)})`).removeClass().addClass("leave")
  .one('transitionend',function(x) {
    $(x.currentTarget).removeClass().addClass('enter')
  })
  $(`.images>img:nth-child(${judgeN(n+1)})`).removeClass().addClass("current")
  n+=1
}, 3000)

//我们要写一个函数，保证n的值是1，2，3不会是别的
function judgeN(n) {
  if (n>3) {
    n=n%3
    if (n===0){
      n=3
    }
  }
  return n
}

function initialize() {
  n=1
  $(`.images>img:nth-child(${n})`).addClass("current")
  .siblings().addClass('enter')
}

























































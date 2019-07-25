
let n
initialize() 
setInterval(() => {
  makeLeave(getImage(n))
  .one('transitionend',function(x) {
    makeEnter($(x.currentTarget))
  })
  makeCurrent(getImage(n+1))
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

function getImage(n) {
  return $(`.images>img:nth-child(${judgeN(n)})`)
}

function makeCurrent($node) {
  $node.removeClass("leave enter").addClass("current")
  return $node

}

function makeLeave($node) {
  $node.removeClass("current enter" ).addClass("leave")
  return $node
}
function makeEnter($node) {
  $node.removeClass("current leave").addClass("enter")
  return $node
}























































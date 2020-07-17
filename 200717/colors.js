var Links = {
  setColor:function (color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i< alist.length){
    //     alist[i].style.color = color;
    //     i = i + 1;
    // }
    // ' Ctrl + / ' 커맨드를 통해 내용 일괄 숨김 가능!
    $('a').css('color', color);
  }
}
var Body = {
  setColor:function (color){
    // document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  setBackgroundColor:function (color){
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}
function nightDayHandler(self){
// BodySetColor 등의 F로 교체되어서 var target은 필요없을듯. 삭제해도 작동 잘 됨 //
if(self.value === 'night'){
 Body.setBackgroundColor('black')
 Body.setColor('white')
 self.value = 'day';

 Links.setColor('powderblue');
} else {
 Body.setBackgroundColor('white')
 Body.setColor('black')
 self.value = 'night';

 Links.setColor('blue');
  }
}

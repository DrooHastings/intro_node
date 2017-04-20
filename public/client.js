console.log('hello world');

$(document).ready(onReady);

function onReady (){
  console.log('doc ready');


  $('#add-song').on('click',  addSong);
}


function addSong (){
  console.log('in addSong');
  var songName = $('#song-name').val();
  console.log('song name', songName);


  var objectToSend = {
    name: songName
  }

  $.ajax({
    method: 'POST', // POST means get data from the page
    url: '/song',
    data: objectToSend,
    success: function (response){
      console.log(response);
    }  // url to where you want the data to come from.
  })
}

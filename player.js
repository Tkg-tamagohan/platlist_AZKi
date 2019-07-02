var liveData = {
			"contents":[
				{
					"video":"ZVlBY2ZesEg",
					"start":"2000",
					"end":"3060",
					"note":"Set list\nMy Dearest/supercell\nオレンジ/とらドラ！\nCreating world/AZKi\n"
				},
				{
					"video":"_18K9CZjgGs",
					"start":"2065",
					"end":"3116",
					"note":"Set list\nただ君に晴れ/ヨルシカ\nリアルメランコリー/AZKi\nCreating world/AZKi\n???/AZKi?\n"
				},
				{
					"video":"giujAf5WV7k",
					"start":"2028",
					"end":"3330",
					"note":"Set list\nひかりのまち/AZKi\nI can't control myself/AZKi\nリアルメランコリー/AZKi\nフェリシア/AZKi\nCreating world/AZKi\n"
				},
				{
					"video":"58BJsUzMYo8",
					"start":"2217",
					"end":"3616",
					"note":"Set list\nI can't control myself/AZKi\nひかりのまち/AZKi\nフェリシア/AZKi\nStarry Regrets/AZKi\nCreating world/AZKi\n"
				},
				{
					"video":"ikpXTH-4SPA",
					"start":"1983",
					"end":"3750",
					"note":"Set list\nリアルメランコリー/AZKi\nフェリシア/AZKi\nFake.Fake.Fake/AZKi\nI can't control myself/AZKi\nいのち/AZKi\nCreating world/AZKi\n"
				},
				{
					"video":"A6RF2RgcOUI",
					"start":"2464",
					"end":"3905",
					"note":"Set list\nStarry Regrets/AZKi\nリアルメランコリー/AZKi\nシットデイズ/AZKi\nFake.Fake.Fake/AZKi\nCreating world/AZKi\n"
				},
				{
					"video":"XAmXi1HDMD0",
					"start":"3005",//3005
					"end":"4990",
					"note":"Set list\nさよならヒーロー/AZKi\nFake.Fake.Fake/AZKi\nハートビート/AZKi\nいのち/AZKi\nCreating world/AZKi\nfrom A to Z/AZKi\n"
				}
			]
		}.contents
// 2. This code loads the IFrame Player API code asynchronously.

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
var count = 0;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		height: '480',
		width: '853',
		videoId: liveData[count].video,
		playerVars:{
			start: liveData[count].start,
			end: liveData[count].end
		},
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	});
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
	event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1)
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event){
	if(event.data == 0 && !done){
		count += 1;
		done = true;
		if(count > 6){
			count = 0;
		}
		
		player.loadVideoById({
			videoId: liveData[count].video,
			startSeconds:Number(liveData[count].start),
			endSeconds:Number(liveData[count].end)
		});
	}else
		if(event.data == 1 && done){
			done = false;
		}
}

var setLive = function(Num){
	count = Num;
	player.loadVideoById({
		videoId: liveData[count].video,
		startSeconds:Number(liveData[count].start),
		endSeconds:Number(liveData[count].end)
	});
	
}
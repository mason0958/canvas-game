

var Elwidth = 101;
var Elwidth2 = 101;
var drawSamuelFast;
var gameEnded = false;
function move() {
    var elem = document.getElementById("myBar"); 
    
    // if (Elwidth <= 102){
    // 	var id = setInterval(frame, 10);
    // }
    frame();
    
    function frame() {
     	if (Elwidth <= 0) {
        
     		//trigger SAMUEL L JACKSON

     		clearInterval(loopAnime);
     		clearInterval(LoopAnimeMonster);

     		doThisNow = false;
     		gameEnded = true;

     		var elementThis = document.getElementById('sammy');
     		
     		var elementThisFive = document.getElementById('you-win');
     		var elementThisSix = document.getElementById('game-title');

     		document.getElementById("button1").style.display = "none";
     		document.getElementById("button2").style.display = "none";
     		document.getElementById("button3").style.display = "none";
     		document.getElementById("button4").style.display = "none";
     		document.getElementById("myProgress").style.display = "none";
     		document.getElementById("myProgress2").style.display = "none";
     		document.getElementById("myBar").style.display = "none";
     		document.getElementById("myBar2").style.display = "none";
     		document.getElementById("github-code").style.display = "none";
     		// var db = document.body.getElementsByTagName('canvas');
     		// db.setAttribute("style","visibility: hidden");


     		elementThis.style.display = "inline";
     		elementThisFive.style.visibility = "visible";
     		elementThisSix.style.visibility = "hidden";

     		// drawSamuelFast = setInterval(context.drawImage(samuelJackson,0,0),10);

      	} 
      	else {
        Elwidth--; 
        elem.style.width = Elwidth + '%'; 
        }
    }
}

move();


function move2() {
    var elem2 = document.getElementById("myBar2"); 
    
    // if (Elwidth <= 102){
    // 	var id = setInterval(frame, 10);
    // }
    frame2();
    
    function frame2() {
     	if (Elwidth2 <= 0) {
        
     		//trigger SAMUEL L JACKSON

     		clearInterval(loopAnime);
     		clearInterval(LoopAnimeMonster);

     		doThisNow = false;
     		gameEnded = true;

     		var elementThis = document.getElementById('sammy');
     		
     		var elementThisFive = document.getElementById('you-win2');
     		var elementThisSix = document.getElementById('game-title');

     		document.getElementById("button1").style.display = "none";
     		document.getElementById("button2").style.display = "none";
     		document.getElementById("button3").style.display = "none";
     		document.getElementById("button4").style.display = "none";
     		document.getElementById("myProgress").style.display = "none";
     		document.getElementById("myProgress2").style.display = "none";
     		document.getElementById("myBar").style.display = "none";
     		document.getElementById("myBar2").style.display = "none";
     		document.getElementById("github-code").style.display = "none";

     		elementThis.style.display = "inline";
     		elementThisFive.style.visibility = "visible";
     		elementThisSix.style.visibility = "hidden";

     		// drawSamuelFast = setInterval(context.drawImage(samuelJackson,0,0),10);

      	} 
      	else {
        Elwidth2--; 
        elem2.style.width = Elwidth2 + '%'; 
        }
    }
}
move2();



		function Player(name) {
			this.name = name;
			this.highscore = 0;
		}

		function newPlayer() {
			var playerNameDiv = document.getElementById('player-name');
			var playerName = playerNameDiv.value;
			document.getElementById('player-name-display').innerHTML = playerName;
			var player1 = new Player(playerName);
			console.log(player1);
		}

		var gameStart = 0;
		var gameEnd = 0;
		var timerInterval;
		var playerArray;
		var hitMarkerX = 50;
		var playerIsAttacking = false;
		var playerIsAttacking2 = false;
		var scoreMain = 0;


		function startGame() {
			isPaused = true;

			// gameStart = Date.now();
			// gameEnd = Date.now() + 30000;

			// timerInterval = setInterval(updateTimer, 500);
		}

		// function updateTimer() {
		// 	var newNow = Date.now();
		// 	var timeDifference = (gameEnd - newNow) / 1000;

		// 	if (timeDifference <= 0) {
		// 		clearInterval(timerInterval);
		// 		isPaused = false;
		// 		timeDifference = 0;
		// 		document.getElementById('timer').innerHTML = "Game Over";
		// 	}
		// 	else {
		// 		document.getElementById('timer').innerHTML = timeDifference + " seconds";
		// 	}
		// }


		
		// var canvas = document.getElementById('canvas-element').appendChild('canvas');

		var canvas = document.createElement('canvas');
		var context = canvas.getContext('2d');

		canvas.width = 512;
		canvas.height = 488;
		//canvas.setAttribute('style',"position: relative; left: 40px;bottom: 200px;");

		document.getElementById('canvas-element').appendChild(canvas);



		//IMAGES/SPRITES
		var backgroundImage = new Image();
		backgroundImage.src = "background4.gif";

		var samuelJackson = new Image();
		samuelJackson.src = "samuel.png";



		var hero = new Image();
		hero.src = "hero-sprite.png"
		var heroLocation = {
			x: 30,
			y: 373
		}

		// var dancer = new Image();
		// hero.src = "dance.gif"
		// var dancerLocation = {
		// 	x: 200,
		// 	y: 373
		// }

		hero.style = "width: 46px; height: 44px; "

		var monster = new Image();
		monster.src = "monster2.png"
		var monsterLocation = {
			x: 410,
			y: 392
		}



		//KEY EVENTS/ ARRAYS
		var keysDown = [];

		addEventListener('keyup', function(event) {

			delete keysDown[event.keyCode];

		});

		addEventListener('keydown', function(event){
			keysDown[event.keyCode] = true;
		});
		
		//context.drawImage(hero,1,20,50,95,heroLocation.x,heroLocation.y,50,95);
		var heroIsAnimated = false;
		var heroIsAnimated2 = false;
		var monsterIsAnimated = false;
		var monsterIsAnimated2 = false;
		var monsterFrameAttack = false;
		var monsterFrameAttack2 = false;
		var speedModifier = .3;
		var sx = 1;
		var sy = 20;
		var sWidth = 50;
		var sHeight = 95;
		var dWidth = 50;
		var dHeight = 95;

		// monster drawImage variables
		var msx = 15;
		var msy = 9;
		var mSWidth = 80;
		var mSHeight = 100;
		var mDWidth = 80;
		var mDHeight = 100;



		function update() {

			//user pressed right at some point because it's in the array
			if(68 in keysDown){
				if(heroLocation.x < 450) {
					heroLocation.x += (10 * speedModifier);
					
				}
				
				
			}
			if(65 in keysDown){
				if(heroLocation.x > 50) {
					heroLocation.x -= (10 * speedModifier);

				}
				
				
			}
			if(39 in keysDown){
				if(monsterLocation.x < 400) {
					monsterLocation.x += (10 * speedModifier);
					
				}
				
				
			}
			if(37 in keysDown){
				if(monsterLocation.x > 30) {
					monsterLocation.x -= (10 * speedModifier);

				}
				
				
			}

			// 68
			//65
			//39
			//37
			// if(38 in keysDown){
			// 	if(heroLocation.y > 40) {
			// 		heroLocation.y -= (10 * speedModifier);
			// 	}
				
			// }
			// //this is the down key
			// if(40 in keysDown){
			// 	if(heroLocation.y < 373) {
			// 		heroLocation.y += (10 * speedModifier);
			// 	}
			// 	console.log('This was pressed down4');
			// }
			// if(191 in keysDown){
				
			// 	console.log("This: / character was pressed down.")
			// 	//set the heroIsAnimated = true; triggering the hero animation
			// 	heroIsAnimated = true;
			
			// }

			//this

			if(heroLocation.x <= monsterLocation.x + hitMarkerX && heroLocation.y <= monsterLocation.y + 32 && monsterLocation.x <= heroLocation.x + hitMarkerX && monsterLocation.y <= heroLocation.y + 32 && playerIsAttacking){
				
				//hit the monster

				// var score1 = player1.highscore += 1;
				scoreMain++;
				setScoreInc();
				move();

				console.log("monster hit!");

			}

			if(monsterLocation.x <= heroLocation.x + hitMarkerX && monsterLocation.y <= heroLocation.y + 32 && heroLocation.x <= monsterLocation.x + hitMarkerX && heroLocation.y <= monsterLocation.y + 32 && playerIsAttacking2){
				
				//hit the monster

				// var score1 = player1.highscore += 1;
				// scoreMain++;
				// setScoreInc();
				move2();

				console.log("hero hit!");

			}

		}

		function setScoreInc(){
			document.getElementById('score-value').innerHTML = scoreMain;
		}

		 addEventListener('keydown', function(event){

            if(event.key == "q") {
                console.log('user pressed the q key');
                heroIsAnimated2 = true;
                hitMarkerX = 110;
                playerIsAttacking = true;
            }
        });
		addEventListener('keydown', function(event){

            if(event.key == "e") {
                console.log('user pressed the q key');
                heroIsAnimated = true;
                hitMarkerX = 110;
                playerIsAttacking = true;
            }
        });

		addEventListener('keydown', function(event){

            if(event.key == "w"){

                heroLocation.y -= 5;
            }
        });
        addEventListener('keydown', function(event){

            if(event.key == "s"){

                heroLocation.y += 5;
            }
        });

		addEventListener('keydown', function(event){

            if(event.key == "ArrowUp"){

                monsterLocation.y -= 5;
            }
        });
        addEventListener('keydown', function(event){

            if(event.key == "ArrowDown"){

                monsterLocation.y += 5;
            }
        });

        addEventListener('keydown', function(event){

            if(event.key == "Enter"){

                // monsterIsAnimated = true;
            }
        });

        addEventListener('keydown', function(event){

            if(event.key == "/"){

            	playerIsAttacking2 = true;
                monsterIsAnimated = true;
            }
        });



		function AnimateHeroFrameBall1() {
			// context.drawImage(hero,123,20,50,95,heroLocation.x,heroLocation.y,50,95);
			sx = 123;
			sy = 20;
			sWidth = 50;
			sHeight = 95;
			dWidth = 50;
			dHeight = 95;
			
		}

		function AnimateHeroFrameBall2() {
			sx = 254;
			sy = 20;
			sWidth = 50;
			sHeight = 95;
			dWidth = 50;
			dHeight = 95;
		}

		function AnimateHeroFrameBall3() {
			sx = 377;
			sy = 20;
			sWidth = 100;
			sHeight = 95;
			dWidth = 100;
			dHeight = 95;
		}
		function AnimateHeroFrameBall4() {
			sx = 500;
			sy = 20;
			sWidth = 140;
			sHeight = 95;
			dWidth = 140;
			dHeight = 95;
		}
		function AnimateHeroFrameBall5() {
			sx = 123;
			sy = 20;
			sWidth = 50;
			sHeight = 95;
			dWidth = 50;
			dHeight = 95;
		}

		function AnimateHeroLoop1() {
			sx = 1;
			sy = 120;
			sWidth = 50;
			sHeight = 95;
			dWidth = 50;
			dHeight = 95;
			playerIsAttacking = false;
		}
		function AnimateHeroLoop2() {
			sx = 123;
			sy = 120;
			sWidth = 50;
			sHeight = 95;
			dWidth = 50;
			dHeight = 95;
		}
		function AnimateHeroLoop3() {
			sx = 254;
			sy = 120;
			sWidth = 50;
			sHeight = 95;
			dWidth = 50;
			dHeight = 95;
		}
		function AnimateHeroLoop4() {
			sx = 377;
			sy = 120;
			sWidth = 50;
			sHeight = 95;
			dWidth = 50;
			dHeight = 95;
		}
		function AnimateMonsterLoop1() {

			playerIsAttacking2 = false;
			msx = 297;
			msy = 138;
			mSWidth = 80;
			mSHeight = 100;
			mDWidth = 80;
			mDHeight = 100;
			hitMarkerX = 50;
		}
		function AnimateMonsterLoop2() {
			msx = 549;
			msy = 139;
			mSWidth = 70;
			mSHeight = 100;
			mDWidth = 70;
			mDHeight = 100;
		}

		var heroFrameBall1;
		var heroFrameBall2;
		var heroFrameBall3;
		var heroFrameBall4;
		var heroFrameBall5;
		var heroFramePunch1;
		var heroFramePunch2;
		var heroFramePunch3;
		var heroFrameAnime1;
		var heroFrameAnime2;
		var heroFrameAnime3;
		var heroFrameAnime4;
		var monsterFrameAnime1;
		var monsterFrameAnime2;
		var LoopAnime;
		var LoopAnimeMonster;
		var loopPhysics;
		var returnToLoop;
		var returnToLoop2;


		function baseFrame() {
			sx = 1;
			sy = 20;
			sWidth = 50;
			sHeight = 95;
			dWidth = 50;
			dHeight = 95;
		}
		var doThisNow = true;
		var doThisNow2 = true;

		function loopAnimation() {
			if(doThisNow == true)
			{
				heroFrameAnime1 = setTimeout(AnimateHeroLoop1, 50);
				heroFrameAnime2 = setTimeout(AnimateHeroLoop2, 100);
				// heroFrameAnime3 = setTimeout(AnimateHeroLoop3, 600);
				// heroFrameAnime4 = setTimeout(AnimateHeroLoop4, 700);
				// heroFrameAnime3 = setTimeout(AnimateHeroLoop3, 800);
				// heroFrameAnime2 = setTimeout(AnimateHeroLoop2, 900);
			}
			

		}

		function loopAnimationMonster() {
			if(doThisNow2 == true)
			{
				monsterFrameAnime1 = setTimeout(AnimateMonsterLoop1, 200);
				monsterFrameAnime2 = setTimeout(AnimateMonsterLoop2, 300);
				// heroFrameAnime3 = setTimeout(AnimateHeroLoop3, 600);
				// heroFrameAnime4 = setTimeout(AnimateHeroLoop4, 700);
				// heroFrameAnime3 = setTimeout(AnimateHeroLoop3, 800);
				// heroFrameAnime2 = setTimeout(AnimateHeroLoop2, 900);
			}
			

		}




		function startTheLoop(DoTheThing) {

			if (DoTheThing == true) {
				loopAnime = setInterval(loopAnimation, 400);
			}
		}

		function startTheLoopMonster(DoTheThing) {

			if (DoTheThing == true) {
				loopAnimeMonster = setInterval(loopAnimationMonster, 400);
			}
		}

		function continuousPhysics(DoTheThing) {

			if (DoTheThing == true) {
				loopPhysics = setInterval(function setPhysicsIncrement(){

					if(heroLocation.y < 372)
					{
						heroLocation.y += 2;
					}

				}, 100);
			}
		}

		function enableLoop(setIt) {
			doThisNow = setIt;
		}

		function enableLoop2(setIt) {
			doThisNow2 = setIt;
		}

		startTheLoop(true);
		startTheLoopMonster(true);
		continuousPhysics(true);


		var isPaused = false;
		var isPaused2 = false;



		function draw() {
			// if (!gameEnded) {
				update();
			// }
			context.drawImage(backgroundImage,0,0);

			if (heroIsAnimated == true) {

				// startTheLoop(false);


				//begin clearing the interval
				clearInterval(loopAnime);
				clearTimeout(heroFrameAnime1);
				clearTimeout(heroFrameAnime2);
				clearTimeout(heroFrameAnime3);
				clearTimeout(heroFrameAnime4);
				doThisNow = false;

				//hero frame ball, set timouts to begin
				heroFrameBall1 = setTimeout(AnimateHeroFrameBall1, 50);
				heroFrameBall2 = setTimeout(AnimateHeroFrameBall2, 250);
				heroFrameBall3 = setTimeout(AnimateHeroFrameBall3, 450);
				heroFrameBall4 = setTimeout(AnimateHeroFrameBall4, 650);
				// heroFrameBall5 = setTimeout(baseFrame, 850);
				isPaused = setTimeout(enableLoop(true), 950);
				returnToLoop = setTimeout(startTheLoop(true), 950);

				heroIsAnimated = false;
			}
			else {
				//context.drawImage(hero,1,20,50,95,heroLocation.x,heroLocation.y,50,95);
				
				context.drawImage(hero,sx,sy,sWidth,sHeight,heroLocation.x,heroLocation.y - 230,dWidth,dHeight);
				context.drawImage(monster,msx,msy,mSWidth,mSHeight, monsterLocation.x, monsterLocation.y - 39 - 230, mDWidth, mDHeight);

			}

			if (heroIsAnimated2 == true) {

				//clear the interval
				clearInterval(loopAnime);
				clearTimeout(heroFrameAnime1);
				clearTimeout(heroFrameAnime2);
				clearTimeout(heroFrameAnime3);
				clearTimeout(heroFrameAnime4);
				doThisNow = false;

				heroFramePunch1 = setTimeout(function heroFramePunchAnimation1(){

					sx = 1;
					sy = 217;
					sWidth = 50;
					sHeight = 95;
					dWidth = 50;
					dHeight = 95;


				}, 50);

				heroFramePunch2 = setTimeout(function heroFramePunchAnimation2(){

					sx = 117;
					sy = 217;
					sWidth = 70;
					sHeight = 95;
					dWidth = 70;
					dHeight = 95;


				}, 100);

				// heroFramePunch3 = setTimeout(function heroFramePunchAnimation3(){

				// 	sx = 1;
				// 	sy = 217;
				// 	sWidth = 50;
				// 	sHeight = 95;
				// 	dWidth = 50;
				// 	dHeight = 95;


				// }, 50);

				console.log("this ran badGuy animation");


				isPaused = setTimeout(enableLoop(true), 250);
				returnToLoop = setTimeout(startTheLoop(true), 280);

				heroIsAnimated2 = false;
				
			}

			if (monsterIsAnimated == true) {

				clearInterval(loopAnimeMonster);
				clearTimeout(monsterFrameAnime1);
				clearTimeout(monsterFrameAnime2);
				doThisNow2 = false;

				monsterFrameAttack1 = setTimeout(function monsterFramePunchAnimation1(){

					msx = 420;
					msy = 409;
					mSWidth = 120;
					mSHeight = 95;
					mDWidth = 120;
					mDHeight = 95;


				}, 50);

				monsterFrameAttack2 = setTimeout(function monsterFramePunchAnimation2(){

					msx = 1;
					msy = 409;
					mSWidth = 140;
					mSHeight = 95;
					mDWidth = 140;
					mDHeight = 95;


				}, 200);

				isPaused2 = setTimeout(enableLoop2(true), 250);
				returnToLoop2 = setTimeout(startTheLoopMonster(true), 280);

				monsterIsAnimated = false;
				
			}

			if (monsterIsAnimated2 == true) {

				clearInterval(loopAnimeMonster);
				clearTimeout(monsterFrameAnime1);
				clearTimeout(monsterFrameAnime2);
				doThisNow2 = false;

				

				isPaused2 = setTimeout(enableLoop2(true), 250);
				returnToLoop2 = setTimeout(startTheLoopMonster(true), 280);

				monsterIsAnimated = false;
				
			}

			if (monsterIsAnimated2 == true) {

				
			}
			
			if(!gameEnded){
				requestAnimationFrame(draw);
			}
			
		}

		draw();


		
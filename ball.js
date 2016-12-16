function Ball() {
  this.x = 300;

  this.y = 560;
  
  this.rad = 20;
  
  this.xspeed = 5;
  
  this.yspeed = -5;

  this. display = function () {
    fill(200, 200, 200);
    ellipse(this.x, this.y, this.rad, this.rad)
    this.x = constrain( this.x, this.rad/2, width - this.rad/2)
    this.y = constrain( this.y, this.rad/2, height - this.rad/2)
    this.yspeed = constrain(this.yspeed, -6, 6)
    this.xspeed = constrain(this.xspeed, -6, 6)
  }
  
  this.move = function () {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }
  this.distroy = function() {
    if(this.x >= breaks[i].x - breaks[i].length/2 - this.rad/2 && this.x <= breaks[i].x + breaks[i].length/2 + this.rad/2){
      if(this.y == breaks[i].y + this.rad/2 + breaks[i].height/2 || this.y == breaks[i].y - this.rad/2 - breaks[i].height/2){
      console.log('ONCE AGAIN');
      this.yspeed *= -1;
      breaks[i].lifeLength --;
        t = t+50;
        if(breaks[i].lifeLength <=0){
          breaks.splice(i,1);
        }
      } 
    }
    else if(this.y >= breaks[i].y - breaks[i].height/2 -this.rad/2 && this.y <= breaks[i].y + breaks[i].height/2 +this.rad/2){
      if(this.x == breaks[i].x + this.rad/2 + breaks[i].length/2 || this.x == breaks[i].x - this.rad/2 - breaks[i].length/2){
        console.log('Is getting more interesting');
        this.xspeed *= -1;
        breaks[i].lifeLength --;
        t = t+50;
        if(breaks[i].lifeLength <=0){
          breaks.splice(i,1);
        }
      }
    }
  }
  this.distroyLevelOne = function() {
    if(this.x >= breaks[i].x - breaks[i].length/2 && this.x <= breaks[i].x + breaks[i].length/2){
      if(this.y <= breaks[i].y + ball.rad/2 + breaks[i].height/2 && this.y >= breaks[i].y - ball.rad/2 - breaks[i].height/2){
      console.log('ONCE AGAIN');
      this.yspeed *= -1;
      breaks[i].lifeLength --;
        total = total + 50;
        if(breaks[i].lifeLength <=0){
          breaks.splice(i,1);
        }
      } 
    }
    else if(this.y >= breaks[i].y - breaks[i].height/2 && this.y <= breaks[i].y + breaks[i].height/2){
      if(this.x <= breaks[i].x + ball.rad/2 + breaks[i].length/2 && this.x >= breaks[i].x - ball.rad/2 - breaks[i].length/2){
        console.log('Is getting more interesting');
        this.xspeed *= -1;
        breaks[i].lifeLength --;
        total = total+50;
        if(breaks[i].lifeLength <=0){
          breaks.splice(i,1);
        }
      }
    }
  }
  this.distroyLevelTwo = function() {
    if(this.x >= bar[j].x - bar[j].length/2 && this.x <= bar[j].x + bar[j].length/2){
      if(this.y <= bar[j].y + ball.rad/2 + bar[j].height/2 && this.y >= bar[j].y - ball.rad/2 - bar[j].height/2){
      console.log('ONCE AGAIN');
      this.yspeed *= -1;
      bar[j].lifeLength --;
        total = total + 50;
        if(bar[j].lifeLength <=0){
          bar.splice(i,1);
        }
      } 
    }
    else if(this.y >= bar[j].y - bar[j].height/2 && this.y <= bar[j].y + bar[j].height/2){
      if(this.x <= bar[j].x + ball.rad/2 + bar[j].length/2 && this.x >= bar[j].x - ball.rad/2 - bar[j].length/2){
        console.log('Is getting more interesting');
        this.xspeed *= -1;
        bar[j].lifeLength --;
        total = total+50;
        if(bar[j].lifeLength <=0){
          bar.splice(i,1);
        }
      }
    }
  }
  this.bounce = function () {
    if(this.x < this.rad/2 || this.x > width - this.rad/2){
      this.xspeed *= -1;
    }
    if(this.y < this.rad/2 || this.y > height - this.rad/2){
      this.yspeed *= -1;
    }
    
  }
  
  this.changeDir = function(){
    // console.log(this.xspeed);
    // console.log(this.yspeed);
    this.newYspeed = int(abs( 10*(this.y - plate.y)/(plate.height + this.rad)));
    this.newXspeed = int(abs( 10*(this.x - plate.x)/(plate.length + this.rad)));
    this.newXspeed = constrain(this.newXspeed, -6, 6);
    this.newYspeed = constrain(this.newYspeed, -6, 6);
    this.Xoptimizer = function(){
      if(this.newXspeed != 0){
        return this.newXspeed;
      }
      else if(this.newXspeed === 0 && ((this.y - plate.y)/(plate.height + this.rad)/2) < 0 ){
      console.log('should go left');
      return this.newXspeed = -1;
      
      }
      else if(this.newXspeed === 0 && ((this.y - plate.y)/(plate.height + this.rad)/2) > 0 ){
        console.log('should go right')
        return this.newXspeed = 1;
      }
    }
    this.Yoptimizer = function(){
      if(this.newYspeed != 0){
        return this.newYspeed;
      }
      else if(this.newYspeed === 0 && ((this.x - plate.x)/(plate.length + this.rad)/2) < 0 ){
      console.log('should go left');
      return this.newYspeed = -1;
      
      }
      else if(this.newYspeed === 0 && ((this.x - plate.x)/(plate.length + this.rad)/2) > 0 ){
        console.log('should go right')
        return this.newYspeed = 1;
      }
    }

    if(this.x >= plate.x - plate.length/2 - this.rad/2 && this.x <= plate.x + plate.length/2 + this.rad/2){
      if(this.y >= plate.y - plate.height/2 - this.rad/2 && this.y < plate.y - plate.height/2 - this.rad/2 + 5){
        this.yspeed = -5; 
        if(this.x == plate.x){
          this.xspeed *= -1;
        }
        else if(this.x > plate.x - plate.length/2 - this.rad/2 && this.x < plate.x){
          this.xspeed = -this.Xoptimizer();
        }
        else if(this.x > plate.x && this.x <= plate.x + plate.length/2 + this.rad/2){
          this.xspeed = this.Xoptimizer();
        }
      }
    }
    if(this.y >= plate.y - plate.height/2 - this.rad/2 && this.y <= plate.y + plate.height/2 + this.rad/2){
      if(this.x > plate.x - plate.length/2 - this.rad/2 && this.x < plate.x - plate.length/2 - this.rad/2 + 5){
        this.xspeed = -5;

        if(this.y == plate.y){
          this.yspeed *= -1;
        }
        else if(this.y > plate.y - plate.height/2 - this.rad/2 && this.y < plate.y){
          this.yspeed = -this.Yoptimizer();
        }
        else if(this.x > plate.x && this.x <= plate.x + plate.length/2 + this.rad/2){
          this.yspeed = this.Yoptimizer();
        }
      }
      else if(this.x > plate.x + plate.length/2 + this.rad/2 - 5 && this.x < plate.x + plate.length/2 + this.rad/2){
        this.xspeed = 5;

        if(this.y == plate.y){
          this.yspeed *= -1;
        }
        else if(this.y > plate.y - plate.height/2 - this.rad/2 && this.y < plate.y){
          this.yspeed = -this.Yoptimizer();
        }
        else if(this.x > plate.x && this.x <= plate.x + plate.length/2 + this.rad/2){
          this.yspeed = this.Yoptimizer();
        }
      }  
    }

   // if(this.x == plate.)

    //if(this.)

   
  }
}
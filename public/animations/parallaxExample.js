(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.sky = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sun
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,171.6).s().p("AyxSyQnynxAArBQAAq/HynyQHynyK/AAQLAAAHyHyQHyHyAAK/QAALBnyHxQnyHyrAAAQq/AAnynyg");
	this.shape.setTransform(480,175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// sky
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#3889B2","#FFFFFF"],[0,1],0.1,-92.4,0,92.5).s().p("EhPrANrIAA7VMCfXAAAIAAbVg");
	this.shape_1.setTransform(510,87.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.sky, new cjs.Rectangle(0,0,1020,345), null);


(lib.ground = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#993300").ss(1,1,1).p("AAAAnQABg2AAgX");
	this.shape.setTransform(15.4,12.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#993300").ss(1,1,1,3,true).p("EBNWgBUIAABGEBLyABVIAAhDEBKOgBUIAABGEBIqABVIAAipEBGZABVIAAhjEBDjgBUIAABGEA+0gBUIAABGEBBrABVIAAhjEA83ABVIAAhjEA5CgBUIAABGEA3FgBUIAABGEAyyABVIAAhGEAxOgBUIAACpEA0WgBUIAABeEA16ABVIAAhLEAu9gBUIAABjEAsHABVIAAhGEAqPgBUIAABjEAnYABVIAAhGEAlbgBUIAABjEAhmABVIAAhGAfpBVIAAhGAeehUIAABLAc6BVIAAheAWqBVIAAhGAYOhUIAABDAZyBVIAAhGAS1hUIAABjAVGhUIAACpAOHhUIAABjALQBVIAAhGAP/BVIAAhGADhBVIAAhGAFeBVIAAhGAJThUIAABjAAyBVIAAheACWhUIAABLAiVhUIAABLAgxBVIAAheApShUIAABjAldBVIAAhGAjgBVIAAhGArPBVIAAhGAuGhUIAABjA1FhUIAACpAy0hUIAABjAv+BVIAAhGA5xBVIAAhGA4NhUIAABDA2pBVIAAhGA85BVIAAheA+dhUIAABLA/oBVIAAhGEghlABVIAAhGEglagBUIAABjEgnXABVIAAhGEgqOgBUIAABjEgsGABVIAAhGEgu8gBUIAABjEg0VgBUIAABeEgxNgBUIAACpEgyxABVIAAhGEg3EgBUIAABGEg5BgBUIAABGEg15ABVIAAhLEg82ABVIAAhjEhBqABVIAAhjEg+zgBUIAABGEhDigBUIAABGEhGYABVIAAhjEhKNgBUIAABGEhIpABVIAAipEhNVgBUIAABGEhLxABVIAAhD");
	this.shape_1.setTransform(505,8.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#663300","#000000"],[0,1],0,11.5,0,-11.5).s().p("EBLyABVIAAhDIAABDIjIAAIAAipIAACpIiRAAIAAhjIAABjIkuAAIAAhjIAABjIk0AAIAAhjIAABjIm9AAIAAhLIAABLIjIAAIAAhGIAABGIhkAAIAAipIAACpIlIAAIAAhGIAABGIkuAAIAAhGIAABGIlyAAIAAhGIAABGIh9AAIAAhGIAABGIivAAIAAheIAABeIjIAAIAAhGIAABGIjIAAIAAhGIAABGIhkAAIAAipIAACpIlIAAIAAhGIAABGIkuAAIAAhGIAABGIlyAAIAAhGIAABGIh9AAIAAhGIAABGIivAAIAAheIAABeIhjAAIAAheIAABeIivAAIAAhGIAABGIh9AAIAAhGIAABGIlyAAIAAhGIAABGIkvAAIAAhGIAABGIlHAAIAAipIAACpIhkAAIAAhGIAABGIjIAAIAAhGIAABGIjIAAIAAheIAABeIivAAIAAhGIAABGIh9AAIAAhGIAABGIlyAAIAAhGIAABGIkvAAIAAhGIAABGIlHAAIAAipIAACpIhkAAIAAhGIAABGIjIAAIAAhLIAABLIm9AAIAAhjIAABjIkzAAIAAhjIAABjIkvAAIAAhjIAABjIiRAAIAAipIAACpIjIAAIAAhDIAABDIjIAAIAAipIBkAAIDIAAIBkAAIFHAAIEvAAIFyAAIB9AAICvAAIDIAAICRAAIEuAAIE0AAIG9AAIGQAAIDIAAICRAAIEuAAIE0AAIG9AAIErAAIG9AAIE0AAIEuAAICRAAIDIAAIGQAAIG9AAIE0AAIEuAAICRAAIDIAAICvAAIB9AAIFyAAIEvAAIFHAAIBkAAIDIAAIAABGIAAhGIBkAAIAACpgEhMhABQIADhOIgDBOgEAu9AAPIAAhjgEAqPAAPIAAhjgEAlbAAPIAAhjgAS1APIAAhjgAOHAPIAAhjgAJTAPIAAhjgApSAPIAAhjgAuGAPIAAhjgAy0APIAAhjgEglaAAPIAAhjgEgqOAAPIAAhjgEgu8AAPIAAhjgEA0WAAKIAAhegEg0VAAKIAAhegAeegJIAAhLgACWgJIAAhLgAiVgJIAAhLgA+dgJIAAhLgEBKOgAOIAAhGgEBDjgAOIAAhGgEA+0gAOIAAhGgEA5CgAOIAAhGgEA3FgAOIAAhGgEg3EgAOIAAhGgEg5BgAOIAAhGgEg+zgAOIAAhGgEhDigAOIAAhGgEhKNgAOIAAhGgEhNVgAOIAAhGgAYOgRIAAhDgA4NgRIAAhDgEBNWgBUg");
	this.shape_2.setTransform(505,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1,1010,19);


(lib.grassColors = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3F5E00").s().p("Aj2D4QhnhnAAiRQAAiQBnhmQBmhnCQAAQCRAABnBnQBmBmAACQQAACRhmBnQhnBmiRAAQiQAAhmhmg");
	this.shape.setTransform(35,35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70,70);


(lib.bubbles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1F5FF").s().p("AdaCoQgHgIAAgKQAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAQgKAAgIgHgEgoxABuQgPgPAAgUQAAgVAPgPQAPgOAUAAQAVAAAOAOQAPAPAAAVQAAAUgPAPQgOAPgVAAQgUAAgPgPgAjZBDQgHgGAAgLQAAgKAHgIQAIgHAKAAQALAAAGAHQAIAIAAAKQAAALgIAGQgGAIgLAAQgKAAgIgIgA3tBDQgHgGAAgLQAAgKAHgIQAHgHALAAQAKAAAHAHQAIAIAAAKQAAALgIAGQgHAIgKAAQgLAAgHgIgEg9NABDQgHgGAAgLQAAgKAHgHQAIgIAKAAQALAAAGAIQAIAHAAAKQAAALgIAGQgGAIgLAAQgKAAgIgIgEhIIABDQgIgGAAgLQAAgKAIgHQAHgIAKAAQAKAAAIAIQAHAHAAAKQAAALgHAGQgIAIgKAAQgKAAgHgIgEA/5AAKQgOgOAAgUQAAgVAOgPQAPgOAVAAQAUAAAPAOQAPAPAAAVQAAAUgPAOQgPAPgUAAQgVAAgPgPgEAtKAAKQgPgOAAgUQAAgVAPgPQAPgOAUAAQAVAAAOAOQAPAPAAAVQAAAUgPAOQgOAPgVAAQgUAAgPgPgEAm5AAKQgOgOAAgUQAAgVAOgPQAPgOAVAAQAUAAAPAOQAPAPAAAVQAAAUgPAOQgPAPgUAAQgVAAgPgPgEgg+AAKQgOgOAAgUQAAgVAOgPQAPgOAVAAQAUAAAPAOQAPAPAAAVQAAAUgPAOQgPAPgUAAQgVAAgPgPgEBHmgAgQgHgGAAgLQAAgLAHgHQAIgHAKAAQAKAAAIAHQAHAHAAALQAAALgHAGQgIAIgKAAQgKAAgIgIgEA7GgAgQgHgGAAgLQAAgLAHgHQAIgHAKAAQAKAAAIAHQAHAHAAALQAAALgHAGQgIAIgKAAQgKAAgIgIgEA2agAgQgHgGAAgLQAAgLAHgHQAIgHAKAAQAKAAAIAHQAHAHAAALQAAALgHAGQgIAIgKAAQgKAAgIgIgAXKggQgHgGAAgLQAAgLAHgHQAHgHALAAQALAAAGAHQAIAHAAALQAAALgIAGQgGAIgLAAQgLAAgHgIgAEaggQgHgGAAgLQAAgLAHgHQAHgHALAAQAKAAAIAHQAHAHAAALQAAALgHAGQgIAIgKAAQgLAAgHgIgAxdggQgHgGAAgLQAAgLAHgHQAIgHAKAAQALAAAGAHQAIAHAAALQAAALgIAGQgGAIgLAAQgKAAgIgIgEg1sgA0QgIgHAAgLQAAgKAIgHQAHgIAKAAQAKAAAIAIQAHAHAAAKQAAALgHAHQgIAHgKABQgKgBgHgHgEhFUgA0QgIgHAAgLQAAgKAIgHQAHgIAKAAQAKAAAIAIQAHAHAAAKQAAALgHAHQgIAHgKABQgKgBgHgHgEAx1gBZQgOgPAAgUQAAgVAOgPQAPgOAVAAQAUAAAPAOQAPAPAAAVQAAAUgPAPQgPAPgUAAQgVAAgPgPgEAgqgBZQgPgPAAgUQAAgVAPgPQAPgOAUAAQAVAAAOAOQAPAPAAAVQAAAUgPAPQgOAPgVAAQgUAAgPgPgAN6hZQgPgPAAgUQAAgVAPgPQAOgOAVAAQAUAAAPAOQAPAPAAAVQAAAUgPAPQgPAPgUAAQgVAAgOgPgAn+hZQgOgPAAgUQAAgVAOgPQAQgOAUAAQAVAAAOAOQAPAPAAAVQAAAUgPAPQgOAPgVAAQgUAAgQgPgEgvCgBZQgOgPAAgUQAAgVAOgPQAPgOAVAAQAUAAAPAOQAPAPAAAVQAAAUgPAPQgPAPgUAAQgVAAgPgPgEBMSgCEQgHgGAAgLQAAgLAHgHQAHgHALAAQAKAAAHAHQAIAHAAALQAAALgIAGQgHAIgKAAQgLAAgHgIgA5RiEQgHgGAAgLQAAgLAHgHQAIgHAKAAQAKAAAIAHQAHAHAAALQAAALgHAGQgIAIgKAAQgKAAgIgIgEgyRgCEQgHgGAAgLQAAgKAHgIQAIgHAKAAQAKAAAHAHQAIAIAAAKQAAALgIAGQgHAIgKAAQgKAAgIgIgEg6EgCEQgIgGAAgLQAAgKAIgIQAHgHAKAAQAKAAAIAHQAHAIAAAKQAAALgHAGQgIAIgKAAQgKAAgHgIgEhB5gCEQgHgGAAgLQAAgKAHgIQAIgHAKAAQAKAAAHAHQAIAIAAAKQAAALgIAGQgHAIgKAAQgKAAgIgIgEhM1gCEQgHgGAAgLQAAgKAHgIQAIgHAKAAQALAAAGAHQAIAIAAAKQAAALgIAGQgGAIgLAAQgKAAgIgIg");
	this.shape.setTransform(492.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,985,35);


(lib.band = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("ApXBpIAAjRISvAAIAADRg");
	this.shape.setTransform(60,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120.1,21);


(lib.water = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.bubbles("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(497.5,23.5,1,1,180,0,0,492.5,17.5);
	this.instance.alpha = 0.25;

	this.instance_1 = new lib.bubbles("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(512.5,27.5,1,1,0,0,0,492.5,17.5);
	this.instance_1.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 1
	this.instance_2 = new lib.bubbles("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(1502.5,27.5,1,1,0,0,0,492.5,17.5);
	this.instance_2.alpha = 0.25;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006699").s().p("EicPAD6IAAnzME4fAAAIAAHzg");
	this.shape.setTransform(1000,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.water, new cjs.Rectangle(0,0,2000,50), null);


(lib.grass = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// grass (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhO5AAoIAAhPMA3oAAAIDmAAIPIAAIAZAAIAoAAIDqAAINtAAIAiAAINaAAIAiAAMAynAAAIAABPgAkWgcIAJgBIABAAIABAAIAJgDIACAAQAfADA+AAIAAAAIAAAAIALAAIAOAAQBRgBBBgJQhBAJhRABIgOAAIgLAAIAAAAIAAAAQg+AAgfgDIgCAAIAggHIggAHQgggCgBgFQABALALAAIABAAIAAAAgA14gdQA5AABUgKQhUAKg5AAQgdAAg8gKQA8AKAdAAIAAAAgAkXgcQgLAAgBgLQABAFAgACIgJADIgBAAIgBAAIgJABIAAAAIgBAAg");
	mask.setTransform(505,6);

	// contents
	this.instance = new lib.grassColors("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-168.7,3.5,1.35,1.35,0,0,180,35,35);
	this.instance.alpha = 0.539;

	this.instance_1 = new lib.grassColors("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-114.8,-23.5,1.35,1.35,0,0,180,35,35);
	this.instance_1.alpha = 0.391;

	this.instance_2 = new lib.grassColors("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-47.3,17,1.35,1.35,0,0,180,35,35);
	this.instance_2.alpha = 0.391;

	this.instance_3 = new lib.grassColors("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(6.7,-10,1.35,1.35,0,0,180,35,35);
	this.instance_3.alpha = 0.57;

	this.instance_4 = new lib.grassColors("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(60.7,30.5,1.35,1.35,0,0,180,35,35);
	this.instance_4.alpha = 0.391;

	this.instance_5 = new lib.grassColors("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(101.2,-10,1.35,1.35,0,0,180,35,35);
	this.instance_5.alpha = 0.391;

	this.instance_6 = new lib.grassColors("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(870.4,30.5,1.35,1.35,0,0,0,35,35);
	this.instance_6.alpha = 0.488;

	this.instance_7 = new lib.grassColors("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(816.4,3.5,1.35,1.35,0,0,0,35,35);
	this.instance_7.alpha = 0.328;

	this.instance_8 = new lib.grassColors("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-101.3,3.5,1.35,1.35,0,0,180,35,35);
	this.instance_8.alpha = 0.391;

	this.instance_9 = new lib.grassColors("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-47.3,-23.5,1.35,1.35,0,0,180,35,35);
	this.instance_9.alpha = 0.391;

	this.instance_10 = new lib.grassColors("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(20.2,17,1.35,1.35,0,0,180,35,35);
	this.instance_10.alpha = 0.391;

	this.instance_11 = new lib.grassColors("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(74.2,-10,1.35,1.35,0,0,180,35,35);
	this.instance_11.alpha = 0.391;

	this.instance_12 = new lib.grassColors("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(128.1,30.5,1.35,1.35,0,0,180,35,35);
	this.instance_12.alpha = 0.391;

	this.instance_13 = new lib.grassColors("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(856.9,-10,1.35,1.35,0,0,0,35,35);
	this.instance_13.alpha = 0.328;

	this.instance_14 = new lib.grassColors("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(802.9,30.5,1.35,1.35,0,0,0,35,35);
	this.instance_14.alpha = 0.328;

	this.instance_15 = new lib.grassColors("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(749,3.5,1.35,1.35,0,0,0,35,35);
	this.instance_15.alpha = 0.328;

	this.instance_16 = new lib.grassColors("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(735.5,3.5,1.35,1.35,0,0,0,35,35);
	this.instance_16.alpha = 0.328;

	this.instance_17 = new lib.grassColors("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(681.5,-23.5,1.35,1.35,0,0,0,35,35);
	this.instance_17.alpha = 0.328;

	this.instance_18 = new lib.grassColors("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(614,17,1.35,1.35,0,0,0,35,35);
	this.instance_18.alpha = 0.328;

	this.instance_19 = new lib.grassColors("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(560,-10,1.35,1.35,0,0,0,35,35);
	this.instance_19.alpha = 0.859;

	this.instance_20 = new lib.grassColors("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(506,30.5,1.35,1.35,0,0,0,35,35);
	this.instance_20.alpha = 0.391;

	this.instance_21 = new lib.grassColors("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(465.6,-10,1.35,1.35,0,0,0,35,35);
	this.instance_21.alpha = 0.391;

	this.instance_22 = new lib.grassColors("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(411.6,30.5,1.35,1.35,0,0,0,35,35);
	this.instance_22.alpha = 0.391;

	this.instance_23 = new lib.grassColors("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(357.6,3.5,1.35,1.35,0,0,0,35,35);
	this.instance_23.alpha = 0.641;

	this.instance_24 = new lib.grassColors("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(276.6,3.5,1.35,1.35,0,0,0,35,35);
	this.instance_24.alpha = 0.719;

	this.instance_25 = new lib.grassColors("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(222.6,-23.5,1.35,1.35,0,0,0,35,35);
	this.instance_25.alpha = 0.391;

	this.instance_26 = new lib.grassColors("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(155.2,17,1.35,1.35,0,0,0,35,35);
	this.instance_26.alpha = 0.391;

	this.instance_27 = new lib.grassColors("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(924.4,-10,1.35,1.35,0,0,180,35,35);
	this.instance_27.alpha = 0.328;

	this.instance_28 = new lib.grassColors("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(978.3,30.5,1.35,1.35,0,0,180,35,35);
	this.instance_28.alpha = 0.5;

	this.instance_29 = new lib.grassColors("synched",0);
	this.instance_29.parent = this;
	this.instance_29.setTransform(1018.8,-10,1.35,1.35,0,0,180,35,35);
	this.instance_29.alpha = 0.5;

	this.instance_30 = new lib.grassColors("synched",0);
	this.instance_30.parent = this;
	this.instance_30.setTransform(1072.8,30.5,1.35,1.35,0,0,180,35,35);
	this.instance_30.alpha = 0.5;

	this.instance_31 = new lib.grassColors("synched",0);
	this.instance_31.parent = this;
	this.instance_31.setTransform(1126.8,3.5,1.35,1.35,0,0,180,35,35);
	this.instance_31.alpha = 0.5;

	this.instance_32 = new lib.grassColors("synched",0);
	this.instance_32.parent = this;
	this.instance_32.setTransform(975,5,1,1,0,0,0,35,35);
	this.instance_32.alpha = 0.539;

	this.instance_33 = new lib.grassColors("synched",0);
	this.instance_33.parent = this;
	this.instance_33.setTransform(935,-15,1,1,0,0,0,35,35);
	this.instance_33.alpha = 0.391;

	this.instance_34 = new lib.grassColors("synched",0);
	this.instance_34.parent = this;
	this.instance_34.setTransform(885,15,1,1,0,0,0,35,35);
	this.instance_34.alpha = 0.391;

	this.instance_35 = new lib.grassColors("synched",0);
	this.instance_35.parent = this;
	this.instance_35.setTransform(845,-5,1,1,0,0,0,35,35);
	this.instance_35.alpha = 0.57;

	this.instance_36 = new lib.grassColors("synched",0);
	this.instance_36.parent = this;
	this.instance_36.setTransform(805,25,1,1,0,0,0,35,35);
	this.instance_36.alpha = 0.391;

	this.instance_37 = new lib.grassColors("synched",0);
	this.instance_37.parent = this;
	this.instance_37.setTransform(775,-5,1,1,0,0,0,35,35);
	this.instance_37.alpha = 0.391;

	this.instance_38 = new lib.grassColors("synched",0);
	this.instance_38.parent = this;
	this.instance_38.setTransform(205,25,1,1,0,0,180,35,35);
	this.instance_38.alpha = 0.488;

	this.instance_39 = new lib.grassColors("synched",0);
	this.instance_39.parent = this;
	this.instance_39.setTransform(245,5,1,1,0,0,180,35,35);
	this.instance_39.alpha = 0.328;

	this.instance_40 = new lib.grassColors("synched",0);
	this.instance_40.parent = this;
	this.instance_40.setTransform(925,5,1,1,0,0,0,35,35);
	this.instance_40.alpha = 0.391;

	this.instance_41 = new lib.grassColors("synched",0);
	this.instance_41.parent = this;
	this.instance_41.setTransform(885,-15,1,1,0,0,0,35,35);
	this.instance_41.alpha = 0.391;

	this.instance_42 = new lib.grassColors("synched",0);
	this.instance_42.parent = this;
	this.instance_42.setTransform(835,15,1,1,0,0,0,35,35);
	this.instance_42.alpha = 0.391;

	this.instance_43 = new lib.grassColors("synched",0);
	this.instance_43.parent = this;
	this.instance_43.setTransform(795,-5,1,1,0,0,0,35,35);
	this.instance_43.alpha = 0.391;

	this.instance_44 = new lib.grassColors("synched",0);
	this.instance_44.parent = this;
	this.instance_44.setTransform(755,25,1,1,0,0,0,35,35);
	this.instance_44.alpha = 0.391;

	this.instance_45 = new lib.grassColors("synched",0);
	this.instance_45.parent = this;
	this.instance_45.setTransform(215,-5,1,1,0,0,180,35,35);
	this.instance_45.alpha = 0.328;

	this.instance_46 = new lib.grassColors("synched",0);
	this.instance_46.parent = this;
	this.instance_46.setTransform(255,25,1,1,0,0,180,35,35);
	this.instance_46.alpha = 0.328;

	this.instance_47 = new lib.grassColors("synched",0);
	this.instance_47.parent = this;
	this.instance_47.setTransform(295,5,1,1,0,0,180,35,35);
	this.instance_47.alpha = 0.328;

	this.instance_48 = new lib.grassColors("synched",0);
	this.instance_48.parent = this;
	this.instance_48.setTransform(305,5,1,1,0,0,180,35,35);
	this.instance_48.alpha = 0.328;

	this.instance_49 = new lib.grassColors("synched",0);
	this.instance_49.parent = this;
	this.instance_49.setTransform(345,-15,1,1,0,0,180,35,35);
	this.instance_49.alpha = 0.328;

	this.instance_50 = new lib.grassColors("synched",0);
	this.instance_50.parent = this;
	this.instance_50.setTransform(395,15,1,1,0,0,180,35,35);
	this.instance_50.alpha = 0.328;

	this.instance_51 = new lib.grassColors("synched",0);
	this.instance_51.parent = this;
	this.instance_51.setTransform(435,-5,1,1,0,0,180,35,35);
	this.instance_51.alpha = 0.859;

	this.instance_52 = new lib.grassColors("synched",0);
	this.instance_52.parent = this;
	this.instance_52.setTransform(475,25,1,1,0,0,180,35,35);
	this.instance_52.alpha = 0.391;

	this.instance_53 = new lib.grassColors("synched",0);
	this.instance_53.parent = this;
	this.instance_53.setTransform(505,-5,1,1,0,0,180,35,35);
	this.instance_53.alpha = 0.391;

	this.instance_54 = new lib.grassColors("synched",0);
	this.instance_54.parent = this;
	this.instance_54.setTransform(545,25,1,1,0,0,180,35,35);
	this.instance_54.alpha = 0.391;

	this.instance_55 = new lib.grassColors("synched",0);
	this.instance_55.parent = this;
	this.instance_55.setTransform(585,5,1,1,0,0,180,35,35);
	this.instance_55.alpha = 0.641;

	this.instance_56 = new lib.grassColors("synched",0);
	this.instance_56.parent = this;
	this.instance_56.setTransform(645,5,1,1,0,0,180,35,35);
	this.instance_56.alpha = 0.719;

	this.instance_57 = new lib.grassColors("synched",0);
	this.instance_57.parent = this;
	this.instance_57.setTransform(685,-15,1,1,0,0,180,35,35);
	this.instance_57.alpha = 0.391;

	this.instance_58 = new lib.grassColors("synched",0);
	this.instance_58.parent = this;
	this.instance_58.setTransform(735,15,1,1,0,0,180,35,35);
	this.instance_58.alpha = 0.391;

	this.instance_59 = new lib.grassColors("synched",0);
	this.instance_59.parent = this;
	this.instance_59.setTransform(165,-5,1,1,0,0,0,35,35);
	this.instance_59.alpha = 0.328;

	this.instance_60 = new lib.grassColors("synched",0);
	this.instance_60.parent = this;
	this.instance_60.setTransform(125,25,1,1,0,0,0,35,35);
	this.instance_60.alpha = 0.5;

	this.instance_61 = new lib.grassColors("synched",0);
	this.instance_61.parent = this;
	this.instance_61.setTransform(95,-5,1,1,0,0,0,35,35);
	this.instance_61.alpha = 0.5;

	this.instance_62 = new lib.grassColors("synched",0);
	this.instance_62.parent = this;
	this.instance_62.setTransform(55,25,1,1,0,0,0,35,35);
	this.instance_62.alpha = 0.5;

	this.instance_63 = new lib.grassColors("synched",0);
	this.instance_63.parent = this;
	this.instance_63.setTransform(15,5,1,1,0,0,0,35,35);
	this.instance_63.alpha = 0.5;

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15,this.instance_16,this.instance_17,this.instance_18,this.instance_19,this.instance_20,this.instance_21,this.instance_22,this.instance_23,this.instance_24,this.instance_25,this.instance_26,this.instance_27,this.instance_28,this.instance_29,this.instance_30,this.instance_31,this.instance_32,this.instance_33,this.instance_34,this.instance_35,this.instance_36,this.instance_37,this.instance_38,this.instance_39,this.instance_40,this.instance_41,this.instance_42,this.instance_43,this.instance_44,this.instance_45,this.instance_46,this.instance_47,this.instance_48,this.instance_49,this.instance_50,this.instance_51,this.instance_52,this.instance_53,this.instance_54,this.instance_55,this.instance_56,this.instance_57,this.instance_58,this.instance_59,this.instance_60,this.instance_61,this.instance_62,this.instance_63];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,2,1010,8);


(lib.backBuildings = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.band("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(490,86.1,1,1,0,0,0,60,10.5);
	this.instance.alpha = 0.789;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A2A2A2").s().p("AjHCyIAAgGIAAleIGPAAIAAFeIAAAGg");
	this.shape.setTransform(730,21.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8B8B8B").s().p("AhtJGIAAksIAAkrIAAksIAAkIIDbAAIAAEIIAAEsIAAErIAAEsg");
	this.shape_1.setTransform(315.6,95.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ADADAD").s().p("ACmCWIAAkrICGAAIAAErgAkrCWIAAkrID2AAIAAErg");
	this.shape_2.setTransform(310,109);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BEBEBE").s().p("ACmCWIAAkrICGAAIAAErgAkrCWIAAkrID2AAIAAErg");
	this.shape_3.setTransform(310,79);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CFCFCF").s().p("ACmCEIAAkHICGAAIAAEHgAkrCEIAAkHID2AAIAAEHg");
	this.shape_4.setTransform(310,50.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#616161").s().p("AiVCFIAAkJIErAAIkIEJg");
	this.shape_5.setTransform(485,82.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5B5B5B").s().p("AhjCFIAAkJIDHAAIAAEJg");
	this.shape_6.setTransform(460,82.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#515151").s().p("AhjCvIBTAAIhTB9gAhjghIAAkKIDHAAIAAEKg");
	this.shape_7.setTransform(440,99);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#858585").s().p("AGQEsIAAh9IBkAAIAAB9gAhjEsIAAh9IErAAIAAB9gAnzEsIBTh9IB1AAIAAB9gAGQghIAAkKIBkAAIAAEKgAhAghIEIkKIAAEKg");
	this.shape_8.setTransform(480,99);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("AGQBpIhkAAIjIAAIkrAAIjIAAIh1AAIhTAAIAAjRIDIAAIDIAAIAjAAIEIAAIDIAAIBkAAIDIAAIAADRg");
	this.shape_9.setTransform(490,106.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("EA5CAMCIAAtHIBNhyID3AAIBMByIAANHgEAuFAMCIAAx8IBlAAIAAAGIGQAAIAAgGIBlAAIAAR8gEAhlAMCIAAnCIK9AAIAAHCgAYNMCIAAqKIH0AAIAAKKgAD5MCIAAj6IDJAAIAAh9IDIAAIAAB9IEsAAIAAh9IDIAAIAAB9IBkAAIAAh9IDIAAIAAF3gAldMCIAAnCIGOAAIAAHCgAsPMCIAAksICGAAIAAEsgAzhMCIAAksID2AAIAAEsgEgqPAMCIAAkUQF3lfIVD1QCoBOCyAnIAAEJgEg0VAMCIAAzXIDIksIDIEsIAATXgEg/RAMCIAAxzIGQAAIAARzgATiC6IAAkJIDIAAIAAEJgAO2C6IAAkJIDIAAIAAEJg");
	this.shape_10.setTransform(405,77);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.backBuildings, new cjs.Rectangle(0,0,810,154), null);


(lib.land = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ground
	this.instance = new lib.ground("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1515,18.5,1,1,0,0,0,505,8.5);

	this.instance_1 = new lib.ground("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(505,18.5,1,1,0,0,0,505,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// grass
	this.instance_2 = new lib.grass("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(1505,5,1,1,0,0,0,505,5);

	this.instance_3 = new lib.grass("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(505,5,1,1,0,0,0,505,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.land, new cjs.Rectangle(0,2,2020,26), null);


// stage content:
(lib.parallaxExample = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// buildings (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAzkAMgIAAjIIDIAAIBkAAIAAmQIAAkrIGQAAIAAK7IEsAAIAADIgEAqMAMgIAAjIIAADIIjIAAIksAAIAAvnIEsAAIAADHIAAjHIDIAAIEsAAIAAPngEAnEAJYIAADIIAAjIIDIjIIAAjIIAADIIjIDIgEAnEADIIAADIIAAjIIDIjIIAAjHIAADHIjIDIgAV4MgIAAksIIHAAIAAEsgAOEMgIhkAAIAAmQIBkAAIhkAAIAAGQIksAAIAAmQIAAhkIEsAAIAAjIIBkAAIBkAAIAADIIhkAAIBkAAIAABkIAAGQgAhjMgIAAmQIAAhkIHzAAIAABkIAAGQgAq7MgIAAmQIAAhkIH0AAIAABkIAAGQgA4/MgIAAmQIH0AAIAAGQgEggzAMgIAAxLIH0AAIAAK7IAAGQgEgtTAMgIAAmQIGQhkIAAH0gEg2rAMgIAAmQIJYhkIAABkIAAGQgEhDLAMgIAA0TIDIAAIBkAAIDIDIIAABkIAAPngEA2sAJYIAAmQIBkAAIAAGQgAV4H0IAAjIIAAjIIIHAAIAADIIAADIgAH0EsIAAjIIEsAAIAADIgAhjEsIAAjIIHzAAIAADIgAq7EsIAAjIIH0AAIAADIgAV4BkIAAjHIIHAAIAADHgEA4QgBjIAAhkIAAhkIGQAAIAABkIAABkgAV4hjIAAi1IIHoHIAAK8gEg+fgHzIDIAAIAADIg");
	mask.setTransform(460,95);

	// back buildings
	this.buildingsTwo = new lib.backBuildings();
	this.buildingsTwo.name = "buildingsTwo";
	this.buildingsTwo.parent = this;
	this.buildingsTwo.setTransform(495,98,1,1,0,0,0,405,77);

	var maskedShapeInstanceList = [this.buildingsTwo];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.buildingsTwo).wait(1));

	// back buildings 2
	this.buildingsThree = new lib.backBuildings();
	this.buildingsThree.name = "buildingsThree";
	this.buildingsThree.parent = this;
	this.buildingsThree.setTransform(491,128,1.148,0.623,0,0,180,405,77);
	this.buildingsThree.alpha = 0.359;

	this.timeline.addTween(cjs.Tween.get(this.buildingsThree).wait(1));

	// ground
	this.ground = new lib.land();
	this.ground.name = "ground";
	this.ground.parent = this;
	this.ground.setTransform(505,186.5,1,1,0,0,0,505,13.5);

	this.timeline.addTween(cjs.Tween.get(this.ground).wait(1));

	// water
	this.water = new lib.water();
	this.water.name = "water";
	this.water.parent = this;
	this.water.setTransform(505,225,1,1,0,0,0,505,25);

	this.timeline.addTween(cjs.Tween.get(this.water).wait(1));

	// sky
	this.sky = new lib.sky();
	this.sky.name = "sky";
	this.sky.parent = this;
	this.sky.setTransform(510,87.5,1,1,0,0,0,510,87.5);

	this.timeline.addTween(cjs.Tween.get(this.sky).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.1,125,2390,345);
// library properties:
lib.properties = {
	id: '25FF44E5B9154C6B80FF17511653D0AD',
	width: 450,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['25FF44E5B9154C6B80FF17511653D0AD'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
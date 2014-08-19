var maxAvatarRadius = 25;
var width = 500;
var height = 500;
var beefPathColor = "red";
var influencedPathColor = "green";
var collabPathColor = "blue";

function Rapper(name, year){
  this.mName = name;
  this.mYear = year;
  this.mBeef = [];
  this.mInfluenced = [];
  this.mCollaborated = [];
  
  this.mPresence = 0;

  this.mCoords = { x: 0, y: 0, radius: 0 };

  this.mPaths = { beef: [], influenced: [], collaborated: [], };
}

Rapper.prototype = {
  setBeef: function(beefWith){
    this.mBeef.push(beefWith);
  },
  
  setInfluenced: function(influenced){
    this.mInfluenced.push(influenced);
  },

  setCollaborated: function(collaborater){
    this.mCollaborated.push(collaborater);
  },

  setPresence: function(){
    this.mPresence = this.mBeef.length + this.mInfluenced.length + this.mCollaborated.length;
  },
};

var rapperArray = [];

function getRapperFromName(name){
  var rapper = null;

  rapperArray.find(function(element, index, array){
    if(name === element.mName){
	  rapper = element;
	}
  });

  return rapper;
}

function randomInt(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}

/*
* in: rapper member variable
* out: [min, max]
*/
function getExtremes(property=0){
  var min = Number.MAX_VALUE;
  var max = 0;

  for(var i in rapperArray){
    var year = rapperArray[i][property];
    min = min > year ? year : min;
	max = max < year ? year : max;
  }

  return [min, max];
}

/*
* in: { x, y, radius }, { x, y, radius }
* out: { x, y }
*/
function getClosestPoint(point, center){  
  var dX = point.x - center.x;
  var dY = point.y - center.y;
  var mag = Math.sqrt((dX*dX) + (dY*dY));
  var endX = center.x + dX / (mag * center.radius);
  var endY = center.y + dY / (mag * center.radius);
	
  return { x: endX, y: endY };
}

function getElementsFromString(list, delim){
  var elems = list.replace(/, /g, ',').split(delim);
  return elems;
}


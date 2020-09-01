class Tree
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.body = Bodies.rectangle(x,y,50,50)
		this.image=loadImage("Plucking mangoes/tree.png")
		
	}
	display()
	{
			var posBottom = this.body.position;
			push()
			imageMode(CENTER);
			image(this.image,400,200);
			pop()
			
	}

}
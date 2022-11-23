interface d {
	arrangement: string;
	// actions: { [key: string]: Array<String> };
	actions: { [key: string]: Array<String> };
	angle: number;
	startingX: number;
	startingY: number;
	length: number;
	ctx: CanvasRenderingContext2D;
}
export function draw({ arrangement, actions, angle, startingX, startingY, ctx, length }: d) {
	let stack: Array<Array<any>> = [];

	let currentX: number = startingX;
	let currentY: number = startingY;

	// let length: number = 6;
	let current_rotation: number = 0;

	for (let i: number = 0; i < arrangement.length; i++) {
		for (const action of actions[arrangement.charAt(i)]) {
			switch (action) {
				case 'draw':
					let toX: number = currentX + Math.cos(current_rotation) * length;
					let toY: number = currentY + Math.sin(current_rotation) * length;

					ctx.moveTo(currentX, currentY);
					ctx.lineTo(toX, toY);
					ctx.stroke();
					ctx.closePath();

					currentX = toX;
					currentY = toY;
					break;
				case 'right':
					current_rotation += angle;
					break;
				case 'left':
					current_rotation -= angle;
					break;
				case 'push':
					stack.push([currentX, currentY, current_rotation]);
					break;
				case 'pop':
					let info = stack.pop();
					currentX = info![0];
					currentY = info![1];
					current_rotation = info![2];
					break;
			}
		}
	}
}

export function iterate(axiom: string, rules: { [key: string]: string }, count: number): string {
	let latest: string = axiom;
	for (let i: number = 0; i < count; i++) {
		let current: string = '';
		for (let index: number = 0; index < latest.length; index++) {
			let char: string = latest.charAt(index);
			if (char in rules) current += rules[char];
			else current += char;
		}
		latest = current;
	}
	return latest;
}

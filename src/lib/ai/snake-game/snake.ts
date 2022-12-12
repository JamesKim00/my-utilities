async function drawSnake(ctx: CanvasRenderingContext2D, pos: { x: number; y: number }) {
	ctx.fillRect(pos.x, pos.y, 12, 12);
}

export { drawSnake };

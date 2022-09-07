<script>
  import Zdog from 'zdog';
	import { onMount } from 'svelte';

	onMount(function () {
		let isSpinning = true;

		let illo = new Zdog.Illustration({
			element: '.zdog-canvas',
			dragRotate: true,
			onDragStart: function () {
				isSpinning = false;
			}
		});

		new Zdog.Cone({
			addTo: illo,
			diameter: 70,
			length: 90,
			stroke: false,
			color: '#636',
			backface: '#C25'
		});

		function animate() {
			illo.rotate.y += isSpinning ? 0.03 : 0;
			illo.updateRenderGraph();
			requestAnimationFrame(animate);
		}

		animate();
	});
</script>

<canvas class="zdog-canvas" width="240" height="240" />

<style>
	.zdog-canvas {
		background: #fdb;
		cursor: move;
	}
</style>

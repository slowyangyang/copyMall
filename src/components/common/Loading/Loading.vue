<template>
	<div class="loading" v-if="isShow">
		<div class="loader">

		</div>
	</div>
</template>

<script>
	export default {
		name: 'Loading',
		data() {
			return {
				isShow:false
			}
		},
		methods: {
			show() {
				this.isShow = true
			},
			hide() {
				this.isShow = false
			}
		}
	}
</script>

<style scoped>
	.loading{
		width: 100%;
		height: 100%;
		background-color: rgba(255,255,255,0.5);
		position: absolute;
		left: 0;
		top: 0;
		z-index: 100;
	}
.loader {
  position: relative;
  width: 2.5em;
  height: 2.5em;
  transform: rotate(165deg);
	z-index: 222;
}

  .loader:before,
  .loader:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 0.5em;
    height: 0.5em;
    border-radius: 0.25em;
    transform: translate(-50%, -50%);
  }
  
  .loader:before {
    animation: before 2s infinite;
  }
  
  .loader:after {
    animation: after 2s infinite;
  }

@keyframes before {
  0% {
    width: 0.5em;
    box-shadow:
      1em -0.5em rgba(337, 84, 48, 0.75),
      -1em 0.5em  rgba(190, 61, 65, 0.75);
  }
  35% {
    width: 2.5em;
    box-shadow:
      0 -0.5em rgba(337, 84, 48, 0.75),
      0   0.5em  rgba(190, 61, 65, 0.75);
  }
  70% {
    width: 0.5em;
    box-shadow:
      -1em -0.5em rgba(337, 84, 48, 0.75),
      1em 0.5em rgba(190, 61, 65, 0.75);
  }
  100% {
    box-shadow:
      1em -0.5em rgba(337, 84, 48, 0.75),
      -1em 0.5em rgba(190, 61, 65, 0.75);
  }
}

@keyframes after {
  0% {
    height: 0.5em;
    box-shadow:
      0.5em 1em rgba(160, 50, 48, 0.75),
      -0.5em -1em rgba( 41, 82, 52, 0.75);
  }
  35% {
    height: 2.5em;
    box-shadow:
        0.5em  0 rgba(160, 50, 48, 0.75),
      -0.5em 0 rgba( 41, 82, 52, 0.75);
  }
  70% {
    height: 0.5em;
    box-shadow:
      0.5em -1em rgba(160, 50, 48, 0.75),
      -0.5em 1em rgba( 41, 82, 52, 0.75);
  }
  100% {
    box-shadow:
      0.5em 1em rgba( 41, 82, 52, 0.75),
      -0.5em -1em rgba( 41, 82, 52, 0.75);
  }
}



/**
 * Attempt to center the whole thing!
 */

.loader {
  position: absolute;
  top: calc(50% - 1.25em);
  left: calc(50% - 1.25em);
}

</style>
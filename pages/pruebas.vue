<template>
	<div>
		<div class="content py-16">
			<h1>Magnolia Evelina Benjamn Velásquez</h1>
			<h2>Lorem ipsum dolor sit.</h2>
			<h3>Lorem ipsum dolor sit.</h3>
			<h4>Lorem ipsum dolor sit.</h4>
			<h5>Lorem ipsum dolor sit.</h5>
			<h6>Lorem ipsum dolor sit.</h6>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, error
				vero? Ut minus maiores deleniti ullam eligendi beatae culpa voluptas
				repudiandae molestiae? Placeat beatae similique repudiandae voluptate
				temporibus aperiam impedit.
			</p>
			<small>Lorem ipsum dolor sit.</small>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:400');

html {
	// font-size: 100%;
	font-size: 12px;
} /*16px*/

body {
	background: white;
	font-family: 'Poppins', sans-serif;
	font-weight: 400;
	line-height: 1.75;
	color: #000000;
}

p {
	margin-bottom: 1rem;
}

h1,
h2,
h3,
h4,
h5 {
	// margin: 3rem 0 1.38rem;
	font-family: 'Poppins', sans-serif;
	font-weight: 400;
	line-height: 1.3;
}

h1 {
	margin-top: 0;
	font-size: 3.052rem;
}

h2 {
	font-size: 2.441rem;
}

h3 {
	font-size: 1.953rem;
}

h4 {
	font-size: 1.563rem;
}

h5 {
	font-size: 1.25rem;
}

small,
.text_small {
	font-size: 0.8rem;
}

@media screen and (min-width: $md) {
	html {
		// font-size: 100%;
		font-size: 16px;
	} /*16px*/
}
</style>

<!-- Компонент карточка -->

<!-- Шаблон компонента -->
<template>
	<div class="grid__item card">
		<div class="card__body">
			<img :src="photo.urls.small" alt="">
		</div>
		<div class="card__footer media">
			<img :src="photo.user.profile_image.small" alt="" class="media__obj">
			<div class="media__body">
				<a :href="photo.user.portfolio_url" target="_blank">{{ photo.user.name }}</a>
			</div>
		</div>
	</div>
</template>

<!-- Скрипты компонента -->
<script>
	export default {
		props: ['photo']
	}
</script>

<!-- Стили компонента -->
<style scoped>
	
</style>
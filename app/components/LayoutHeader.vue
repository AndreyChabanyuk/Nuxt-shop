<template>
	<div class="header">
		<div class="header__logo">
			<NuxtLink to="/">
				<IconLogo />
			</NuxtLink>
		
		</div>
		<div class="header__content">
			<div class="header__menu">
			  <nuxt-link to="/catalog">Каталог</nuxt-link>
				<nuxt-link to="/about">О нас</nuxt-link>
			</div>
			<div class="header__hr" />
			<div class="header__icons">
				<nuxt-link to="#">
					<Icon name="icons:search" size="21px" />
				</nuxt-link>
				<nuxt-link to="/cart">
					<Icon name="icons:cart" size="21px" />
				</nuxt-link>
				<nuxt-link to="/favorites">
					<Icon name="icons:favorite" size="21px" />
				</nuxt-link>
				<nuxt-link to="/account">
					<Icon name="icons:user" size="21px" />
				</nuxt-link>
			</div>
		</div>
	</div>
</template>
<script lang="ts" setup></script>
<style lang="sass">
.header
  padding: 0 16px
  margin: 0 auto
  max-width: 1248px
  display: flex
  justify-content: space-between
  margin-top: 48px
  margin-bottom: 48px
  border-bottom: 1px solid var(--color-little-grey)
  &__content
    display: flex



.header__menu, .header__icons
  display: flex
  align-items: center

.header__menu, .header__content
  gap: 60px

.header__menu, .header__logo, .header__icons
  padding-bottom: 48px


.header__icons
  gap: 40px

a.router-link-active
  border-bottom: 1px solid var(--color-black)

.header__hr
  border-left: 1px solid var(--color-grey)
  height: 20px
  align-self: flex-start
  margin-top: 2px

.header__menu a
  font-size: 16px
  line-height: 27px
  color: var(--color-black)
  text-decoration: none
</style>

<template>
	<div class="footer">
        <hr >
		<div class="footer__top">
			<ul class="footer__list">
				<li>
					<NuxtLink to="#">Контакты</NuxtLink>
				</li>
				<li>
					<NuxtLink to="#">Условия покупки</NuxtLink>
				</li>
				<li>
					<NuxtLink to="#">Доставка и возврат</NuxtLink>
				</li>
			</ul>
			<div class="footer__form">
				<InputField placeholder="Введите email для новостей и акции" variant="black"/>
				<button class="footer__button"><Icon name="icons:arrow-right" size="8px"/></button>
			</div>
		</div>
		<div class="footer__bottom">
			<div>©{{ new Date().getFullYear() }} Shop</div>
			<div class="footer__social">
				<NuxtLink to="#"> <Icon name="icons:li" size="30px"/></NuxtLink>
				<NuxtLink to="#"> <Icon name="icons:fb" size="30px"/></NuxtLink>
				<NuxtLink to="#"> <Icon name="icons:in" size="30px"/></NuxtLink>
				<NuxtLink to="#"> <Icon name="icons:tw" size="30px"/></NuxtLink>
			</div>
		</div>
        
	</div>
</template>
<script setup lang="ts"></script>
<style lang="sass" scoped>

.footer
  margin: 0 auto
  max-width: 1248px
  gap: 50px
  display: flex
  flex-direction: column
  
.footer hr
  border: none
  border-bottom: 1px solid var(--color-little-grey)
.footer__top
  display: flex
  justify-content: space-between

.footer__list
  list-style: none
  display: flex
  padding: 0
  gap: 30px
.footer__list li a
   font-size: 16px
   font-weight: 400
   text-transform: uppercase
   color: var(--color-grey)
   text-decoration: none


.footer__bottom
    display: flex
    justify-content: space-between
.footer__social
    display: flex
    gap: 20px
.footer__social a 
    color: var(--color-grey)
.footer__social a:hover
    color: var(--color-black-hover)

.footer__form
    position: relative
.footer__form input
    min-width: 300px

.footer__button
    position: absolute
    right: 0
    top: 10px
    background: none
    border: none   
</style>

<template>
	<navbar></navbar>
	<div class="container">
		<div class="sider-box">
			<sider></sider>
		</div>
		<div class="content-box">
			
			<RouterView v-slot="{ Component }" :key="$route.fullPath">
				<Transition name="slide-fade">
					<component :is="Component"></component>
				</Transition>
			</RouterView>	
			
		</div>
	</div>
</template>
<script lang="ts">
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons-vue';
import sider from '../components/sider.vue';
import '../assets/style/style.css'
import navbar from '../components/navbar.vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
	components: {
		UserOutlined,
		navbar,
		sider,
		LaptopOutlined,
		NotificationOutlined,
	},
	setup() {
		return {
			selectedKeys1: ref<string[]>(['2']),
			selectedKeys2: ref<string[]>(['1']),
			collapsed: ref<boolean>(false),
			openKeys: ref<string[]>(['sub1']),
		};
	},
});
</script>
<style scoped>

html,
body {
  touch-action: manipulation;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}

.container {
	display: flex;
}

.sider-box {
	width: 15%;
}

.content-box {
	width: 85%;
	height: 90vh;
	padding: 1em;
	overflow: hidden auto;
	background-color: rgb(239, 238, 238);
}
</style>
  
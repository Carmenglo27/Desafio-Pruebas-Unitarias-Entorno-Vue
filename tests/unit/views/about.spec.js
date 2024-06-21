import { createRouter, createWebHistory } from 'vue-router'
import { shallowMount } from "@vue/test-utils";

import AboutView from '@/views/AboutView.vue'

describe('AboutView', () => {
    test('probando si existe componente o vista AboutView', async () => {
        const router = createRouter({
            history: createWebHistory(),
            routes: [{
                path: '/about',
                name: 'aboutView',
                component: AboutView
            }],
        })
        router.push('/about')
        await router.isReady()

        const wrapper = mount(AboutView, {
            global: {
                plugins: [router]
            }
        })
        expect(wrapper.findComponent(AboutView).exists()).toBe(true)
    })
    test('Validar match con Snapshot', () => {
        const wrapper = shallowMount(AboutView)
        expect(wrapper.html()).toMatchSnapshot()
    })
})

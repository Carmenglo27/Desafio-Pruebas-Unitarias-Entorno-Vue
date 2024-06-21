import { createRouter, createWebHistory } from 'vue-router'
import { mount, shallowMount } from "@vue/test-utils";

import ContactView from '@/views/ContactView.vue'

describe('ContactView', () => {
    test('probando si existe componente o vista ContactView', async () => {
        const router = createRouter({
           history: createWebHistory(),
           routes: [{
            path: '/contact',
            name: 'ContactView',
            component: ContactView            
           }],
        })
        router.push('/contact')
        await router.isReady()

        const wrapper = mount(ContactView, {
            global: {
                plugins: [router]
            }
        })
        expect(wrapper.findComponent(ContactView).exists()).toBe(true)
    })
})
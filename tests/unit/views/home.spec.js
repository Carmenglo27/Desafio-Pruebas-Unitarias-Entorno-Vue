import HomeView from "@/views/HomeView.vue";
import { shallowMount } from "@vue/test-utils";

describe('componente HomeView.vue', () => {
    test('validar match con snapshot', () => {
        const wrapper = shallowMount(HomeView)
        expect(wrapper.html()).toMatchSnapshot
    })
})
import {
	describe,
	it,
	expect,
	expectTypeOf
} from 'vitest'

import {
	mount
} from '@vue/test-utils'
import PopularVids from '../PopularVids.vue'

describe('PopularVids', () => {
	it('renders properly', () => {
		const wrapper = mount(PopularVids)
		expectTypeOf(wrapper)
			.toMatchTypeOf(Object)
	})
})
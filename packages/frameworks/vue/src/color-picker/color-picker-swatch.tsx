import { type SwatchProps } from '@zag-js/color-picker'
import { defineComponent, reactive, type PropType } from 'vue'
import { ark, type HTMLArkProps } from '../factory'
import type { Assign } from '../types'
import { useColorPickerContext } from './color-picker-context'
import { ColorPickerSwatchProvider } from './color-picker-swatch-context'

export interface ColorPickerSwatchProps extends Assign<HTMLArkProps<'button'>, SwatchProps> {}

export const ColorPickerSwatch = defineComponent({
  name: 'ColorPickerSwatch',
  props: {
    readOnly: {
      type: Boolean as PropType<SwatchProps['respectAlpha']>,
      default: undefined,
    },
    value: {
      type: [String, Object] as PropType<SwatchProps['value']>,
      required: true,
    },
  },
  setup(props, { slots, attrs }) {
    const api = useColorPickerContext()
    ColorPickerSwatchProvider(reactive(props))

    return () => (
      <ark.button {...api.value.getSwatchProps(props)} {...attrs}>
        {slots.default?.()}
      </ark.button>
    )
  },
})

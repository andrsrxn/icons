import type { Icon } from './types'

export const IconLightningFast: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='lightning-fast'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='m10.378 12.276 5.885-7.424c.287-.362.865-.084.762.366l-1.137 4.968a.433.433 0 0 0 .422.53h3.886c.363 0 .565.42.338.704l-6.167 7.729c-.29.363-.87.078-.76-.373l1.283-5.261a.433.433 0 0 0-.42-.537h-3.752a.433.433 0 0 1-.34-.702Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M10.284 7H4m6 10H4m3.448-5H4m12.263-7.818-5.885 8.12c-.225.31-.023.768.34.768h3.752c.28 0 .487.288.42.586l-1.283 5.755c-.11.494.47.805.76.408l6.167-8.454c.227-.31.025-.77-.338-.77H16.31c-.278 0-.484-.282-.422-.579l1.137-5.434c.103-.492-.475-.796-.762-.4Z'
      />
    </svg>
  )
}

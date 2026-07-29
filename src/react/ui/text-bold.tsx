import type { Icon } from '../types'

export const IconTextBold: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='text-bold'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M7.347 18.5v-13a1.5 1.5 0 0 1 1.5-1.5h4.501c.416 0 .814.171 1.073.496.61.762 1.656 2.263 1.579 3.504-.044.717-.473 1.506-.922 2.149-.515.738-.458 1.8.158 2.456.845.9 1.807 2.194 1.764 3.395-.049 1.37-1.414 2.909-2.116 3.612a1.362 1.362 0 0 1-.972.388H8.847a1.5 1.5 0 0 1-1.5-1.5Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M7.332 4v16.01m0-16.02h3.707c1.706 0 4.885 0 4.885 3.695 0 3.848-3.226 3.694-4.885 3.694H7.332h3.742c1.92 0 5.926 0 5.926 4.31 0 4.49-4.059 4.31-5.926 4.31H7.332'
      />
    </svg>
  )
}

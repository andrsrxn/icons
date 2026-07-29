import type { Icon } from '../types'

export const IconMerge: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='merge'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m8.515 17.877.653.654c1.333 1.336 2 2.004 2.829 2.004.829 0 1.496-.667 2.83-2.001l.658-.657M12 20.535v-5.863m0 0 3.008-2.849c.617-.583.925-.875 1.088-1.253.162-.379.162-.803.162-1.651V3.62M12 14.67l-3.014-2.864c-.613-.583-.92-.874-1.082-1.252-.162-.378-.162-.8-.162-1.647V3.62'
      />
    </svg>
  )
}

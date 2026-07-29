import type { Icon } from '../types'

export const IconListUnordered: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='list-unordered'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M8.656 6h11.609M8.656 12h11.609M8.656 18h11.609M5.44 6a.779.779 0 1 1-1.558 0A.779.779 0 0 1 5.44 6Zm0 6.004a.779.779 0 1 1-1.558 0 .779.779 0 0 1 1.558 0Zm0 6.003a.779.779 0 1 1-1.558 0 .779.779 0 0 1 1.558 0Z'
      />
    </svg>
  )
}

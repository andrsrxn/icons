import type { Icon } from './types'

export const IconTree: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='tree'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M15.263 16.175H8.737a2 2 0 0 1-2-2V8.833A5.252 5.252 0 0 1 12 3.587a5.252 5.252 0 0 1 5.263 5.245v5.343a2 2 0 0 1-2 2Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 20.23V8m0 3 2.4-1.385M12 12.693l-2.4-1.386m-.642 8.924h6.084m-6.305-4.056h6.526a2 2 0 0 0 2-2V8.832A5.252 5.252 0 0 0 12 3.587a5.252 5.252 0 0 0-5.263 5.245v5.344a2 2 0 0 0 2 1.999Z'
      />
    </svg>
  )
}

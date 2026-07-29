import type { Icon } from './types'

export const IconTriangle: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='triangle'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M10.342 6.354c.756-1.31 1.134-1.964 1.7-1.964.568 0 .946.654 1.701 1.964l5.953 10.31c.756 1.31 1.134 1.964.85 2.455-.283.491-1.039.491-2.55.491H6.09c-1.512 0-2.268 0-2.552-.49-.283-.492.095-1.146.85-2.456l5.954-10.31Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M10.342 6.354c.756-1.31 1.134-1.964 1.7-1.964.568 0 .946.654 1.701 1.964l5.953 10.31c.756 1.31 1.134 1.964.85 2.455-.283.491-1.039.491-2.55.491H6.09c-1.512 0-2.268 0-2.552-.49-.283-.492.095-1.146.85-2.456l5.954-10.31Z'
      />
    </svg>
  )
}

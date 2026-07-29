import type { Icon } from './types'

export const IconBriefcase: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='briefcase'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M3.738 9.863h16.524V16.2c0 1.886 0 2.828-.585 3.414-.586.586-1.53.586-3.415.586H7.738c-1.886 0-2.829 0-3.414-.586-.586-.586-.586-1.528-.586-3.414V9.863Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M20.262 9.852v6.349c0 1.886 0 2.828-.585 3.414-.586.586-1.53.586-3.415.586H7.738c-1.886 0-2.829 0-3.414-.586-.586-.586-.586-1.528-.586-3.414V9.852c0-.919 0-1.378.148-1.742a2 2 0 0 1 1.096-1.096c.363-.148.823-.148 1.742-.148h.067m0 0 .142-.4c.456-1.29.683-1.933 1.202-2.3.52-.367 1.203-.367 2.569-.367h2.552c1.383 0 2.075 0 2.597.374.522.374.745 1.029 1.19 2.338l.121.355m-10.373 0h10.373m0 0h.112c.919 0 1.379 0 1.742.148a2 2 0 0 1 1.096 1.096c.148.364.148.823.148 1.742m-16.524 0h16.524'
      />
    </svg>
  )
}

import type { Icon } from './types'

export const IconSquareBrackets: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='square-brackets'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M8.906 3.749H8.78c-1.885 0-2.828 0-3.414.586-.586.586-.586 1.528-.586 3.414v8.502c0 1.886 0 2.828.586 3.414.586.586 1.529.586 3.414.586h.126m6.188-16.502h.126c1.885 0 2.828 0 3.414.586.586.586.586 1.528.586 3.414v8.502c0 1.886 0 2.828-.586 3.414-.586.586-1.529.586-3.414.586h-.126'
      />
    </svg>
  )
}

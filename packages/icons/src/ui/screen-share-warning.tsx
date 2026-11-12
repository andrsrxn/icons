import type { Icon } from './types'

export const IconScreenShareWarning: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-screen-share-warning'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M16.27 19.12c2.82 0 4.24 0 5.12-.88s.88-2.3.88-5.12v-2.24c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88H7.73c-2.82 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v2.24c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88z'
        fill='currentColor'
      />
      <path d='M12 12.2V8.14' stroke='currentColor' />
      <path
        d='M12.49 15.64a.49.49 0 1 1-.98 0 .49.49 0 0 1 .98 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M1.73 13.12v-2.24c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h8.54c2.82 0 4.24 0 5.12.88s.88 2.3.88 5.12v2.24c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88H7.73c-2.82 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12'
        stroke='currentColor'
      />
    </svg>
  )
}

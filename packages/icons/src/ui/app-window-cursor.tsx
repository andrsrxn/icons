import type { Icon } from './types'

export const IconAppWindowCursor: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-app-window-cursor'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M21.79 10.62c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88H7.7c-2.82 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v2.68c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h7.98l-1.98-5.16 1.34-.73 6.75 2.4z'
        fill='currentColor'
      />
      <path
        d='M11.72 19.3H7.7c-2.82 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12v-2.68c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h8.09c2.82 0 4.24 0 5.12.88s.88 2.3.88 5.12v1.14'
        stroke='currentColor'
      />
      <path
        d='M6.45 8.55a.53.53 0 1 1-1.06 0 .53.53 0 0 1 1.06 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M10.46 8.55a.53.53 0 1 1-1.06 0 .53.53 0 0 1 1.06 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M14.46 8.55a.53.53 0 1 1-1.05 0 .53.53 0 0 1 1.05 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='m15.62 19.65-.98-2.99c-.54-1.63-.81-2.45-.38-2.88.43-.44 1.25-.18 2.89.35l3 .96c1.16.38 1.74.57 1.93.84a1 1 0 0 1 .04 1.1c-.18.28-.75.5-1.89.95a4 4 0 0 0-.82.37 2 2 0 0 0-.54.55c-.13.18-.2.4-.37.82-.44 1.12-.66 1.69-.94 1.86a1 1 0 0 1-1.1-.02c-.27-.2-.46-.77-.84-1.91'
        stroke='currentColor'
      />
    </svg>
  )
}

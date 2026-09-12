import type { Icon } from './types'

export const IconStickyNote: Icon = ({
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
      data-slot='icon-ui-sticky-note'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M6.7 2.68c-1.9 0-2.84 0-3.42.59-.59.58-.59 1.53-.59 3.41V17.7c0 1.88 0 2.81.58 3.4s1.52.59 3.39.6l3.31.03c1.73.02 2.6.02 3.17-.5.58-.5.67-1.37.84-3.09l.08-.75c.14-1.39.21-2.08.61-2.55a2 2 0 0 1 .4-.36c.51-.35 1.2-.35 2.6-.35 1.54 0 2.3 0 2.84-.4a2 2 0 0 0 .4-.4c.4-.54.4-1.3.4-2.84V6.7c0-1.9 0-2.84-.59-3.42-.58-.59-1.53-.59-3.41-.59z'
        fill='currentColor'
      />
      <path
        d='M8.7 2.68c-2.84 0-4.25 0-5.13.88s-.88 2.3-.88 5.12v6.62c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h3.93c1.25 0 1.87 0 2.43-.23s1-.69 1.87-1.58l2.69-2.76c.84-.86 1.26-1.3 1.48-1.84s.22-1.14.22-2.35V8.68c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88z'
        stroke='currentColor'
      />
      <path
        d='M13.7 21.1v-3.39c0-1.89 0-2.83.59-3.42.58-.58 1.52-.58 3.41-.58h3.4'
        stroke='currentColor'
      />
    </svg>
  )
}

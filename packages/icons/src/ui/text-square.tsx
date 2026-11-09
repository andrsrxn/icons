import type { Icon } from './types'

export const IconTextSquare: Icon = ({
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
      data-slot='icon-ui-text-square'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M13.24 2.76c3.77 0 5.66 0 6.83 1.17s1.17 3.06 1.17 6.83v2.15c0 3.77 0 5.66-1.17 6.83S17 20.9 13.24 20.9h-2.48c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83v-2.15c0-3.77 0-5.66 1.17-6.83S7 2.76 10.76 2.76z'
        fill='currentColor'
      />
      <path
        d='M2.76 13.24v-2.48c0-3.77 0-5.66 1.17-6.83S7 2.76 10.76 2.76h2.48c3.77 0 5.66 0 6.83 1.17s1.17 3.06 1.17 6.83v2.48c0 3.77 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17h-2.48c-3.77 0-5.66 0-6.83-1.17S2.76 17 2.76 13.24'
        stroke='currentColor'
      />
      <path d='M12 6.95v10.52' stroke='currentColor' />
      <path d='M13.74 17.47h-3.48' stroke='currentColor' />
      <path
        d='M7.74 8.18c0-.68.55-1.23 1.23-1.23h6.06c.68 0 1.23.55 1.23 1.23'
        stroke='currentColor'
      />
    </svg>
  )
}

import type { Icon } from './types'

export const IconCheckSquare: Icon = ({
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
      data-slot='icon-ui-check-square'
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
        d='m7.47 12.52 1.36 1.67c.72.88 1.08 1.32 1.55 1.32.48 0 .84-.44 1.55-1.33l4.6-5.68'
        stroke='currentColor'
      />
      <path
        d='M2.76 13.24v-2.48c0-3.77 0-5.66 1.17-6.83S7 2.76 10.76 2.76h2.48c3.77 0 5.66 0 6.83 1.17s1.17 3.06 1.17 6.83v2.48c0 3.77 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17h-2.48c-3.77 0-5.66 0-6.83-1.17S2.76 17 2.76 13.24'
        stroke='currentColor'
      />
    </svg>
  )
}

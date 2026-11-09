import type { Icon } from './types'

export const IconElevator: Icon = ({
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
      data-slot='icon-ui-elevator'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M13.24 2.76c3.77 0 5.66 0 6.83 1.17 1.17 1.18 1.17 3.06 1.17 6.83v2.48c0 3.77 0 5.65-1.17 6.83s-3.06 1.17-6.83 1.17h-2.48c-3.77 0-5.66 0-6.83-1.17-1.17-1.18-1.17-3.06-1.17-6.83v-2.48c0-3.77 0-5.65 1.17-6.83S7 2.76 10.76 2.76z'
        fill='currentColor'
      />
      <path
        d='M21.38 13.38v-2.76c0-3.78 0-5.66-1.17-6.83s-3.06-1.17-6.83-1.17h-2.77c-3.77 0-5.66 0-6.83 1.17s-1.17 3.05-1.17 6.83v2.76c0 3.78 0 5.66 1.17 6.83s3.06 1.17 6.83 1.17h2.77c3.77 0 5.66 0 6.83-1.17s1.17-3.05 1.17-6.83'
        stroke='currentColor'
      />
      <path
        d='m8.31 14.7.86.86c1.33 1.34 2 2 2.83 2s1.5-.66 2.83-2l.86-.86'
        stroke='currentColor'
      />
      <path d='m8.31 9.3.86-.86c1.33-1.34 2-2 2.83-2s1.5.66 2.83 2l.86.86' stroke='currentColor' />
    </svg>
  )
}

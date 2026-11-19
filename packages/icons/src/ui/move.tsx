import type { Icon } from './types'

export const IconMove: Icon = ({
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
      data-slot='icon-ui-move'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='m8.91 19.16.26.25c1.33 1.34 2 2 2.83 2s1.5-.66 2.83-2l.26-.25'
        stroke='currentColor'
      />
      <path
        d='m19.18 8.93.24.24c1.34 1.33 2 2 2 2.83s-.66 1.5-2 2.83l-.24.24'
        stroke='currentColor'
      />
      <path
        d='m4.87 15.07-.24-.24c-1.34-1.33-2-2-2-2.83s.66-1.5 2-2.83l.24-.24'
        stroke='currentColor'
      />
      <path
        d='m15.05 4.83-.22-.22c-1.33-1.33-2-2-2.83-2s-1.5.66-2.83 2h0l-.22.22'
        stroke='currentColor'
      />
      <path d='M21.22 12H2.78' stroke='currentColor' />
      <path d='M12 21.19V2.76' stroke='currentColor' />
    </svg>
  )
}

import type { Icon } from './types'

export const IconDna: Icon = ({
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
      data-slot='icon-ui-dna'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m11.31 17.75-1.98 3.32-6.32-6.34 3.57-2.1c.2-.13.31-.19.42-.22.12-.04.23-.05.47-.06l2.2-.15c1.08-.07 1.62-.1 1.94.22.32.33.28.87.19 1.95l-.21 2.52c-.02.23-.03.34-.07.45-.03.11-.09.2-.2.4'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='m13.1 6.33 2.09-3.4 6.05 6.08-3.64 2.23c-.2.12-.3.18-.4.21-.1.04-.22.05-.45.07l-2.03.2c-1.14.12-1.71.17-2.05-.17s-.27-.9-.13-2.05l.27-2.36c.03-.22.04-.32.08-.43q.04-.13.2-.38'
        fill='currentColor'
      />
      <path
        d='M1.6 15.73c1.21-1.15 4.2-3.29 10.2-3.56 6.01-.28 9.49-2.78 10.6-3.9'
        stroke='currentColor'
      />
      <path
        d='M15.73 1.6c-1.15 1.21-3.29 4.2-3.57 10.2-.27 6.01-2.77 9.49-3.89 10.6'
        stroke='currentColor'
      />
      <path d='m3.13 14.69 6.18 6.18' stroke='currentColor' />
      <path d='m14.96 2.9 6.18 6.18' stroke='currentColor' />
      <path d='m6.73 13 4.26 4.27' stroke='currentColor' />
      <path d='m13.28 6.49 4.26 4.27' stroke='currentColor' />
    </svg>
  )
}

import type { Icon } from './types'

export const IconSeekBackwardFifteenRtl: Icon = ({
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
      data-slot='icon-ui-seek-backward-fifteen-rtl'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M2.69 12a9.57 9.57 0 1 0 19.14 0A9.57 9.57 0 0 0 2.7 12'
        fill='currentColor'
      />
      <path d='M20.3 6.18a11 11 0 0 0-9.49-3.63 9.51 9.51 0 1 0 9.1 15.07' stroke='currentColor' />
      <path
        d='M17.14 7.26h1.1c1.42 0 2.13 0 2.57-.44s.44-1.14.44-2.56V3.15'
        stroke='currentColor'
      />
      <path
        d='M13.28 16h1.6a1.76 1.76 0 1 0 0-3.51h-1.82q0 0 0 0v-1.53c0-.48 0-.72.08-.92a1 1 0 0 1 .52-.51c.19-.09.43-.09.92-.09h1.69'
        stroke='currentColor'
      />
      <path
        d='m6.81 11.7 1.6-1.44c.71-.65 1.07-.98 1.37-.85s.3.62.3 1.59v4.98'
        stroke='currentColor'
      />
    </svg>
  )
}

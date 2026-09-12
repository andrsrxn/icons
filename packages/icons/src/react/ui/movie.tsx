import type { Icon } from './types'

export const IconMovie: Icon = ({
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
      data-slot='icon-ui-movie'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='2.67'
        y='10.64'
        width='18.66'
        height='10.7'
        rx='3'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M3.28 8.75c-.24-.92-.36-1.38-.16-1.74.21-.36.67-.48 1.6-.72l1.42-.37c1.49-.38 2.23-.58 2.64-.17.4.41.2 1.16-.2 2.64-.15.52-.22.77-.4.96-.17.18-.42.26-.93.42l-1.4.45c-.94.3-1.4.46-1.78.25-.38-.2-.5-.68-.76-1.63z'
        fill='currentColor'
      />
      <rect x='2.67' y='10.64' width='18.66' height='10.7' rx='3' stroke='currentColor' />
      <path
        opacity='.2'
        d='M21.05 4.09c.24.91.37 1.37.16 1.73s-.67.48-1.6.72l-1.42.37c-1.49.39-2.23.58-2.63.17-.41-.41-.2-1.15.2-2.64.14-.51.21-.77.39-.95.17-.19.42-.27.93-.43l1.4-.45c.94-.3 1.4-.45 1.78-.25s.5.68.76 1.64z'
        fill='currentColor'
      />
      <rect
        x='2.43'
        y='6.8'
        width='18.66'
        height='4.31'
        rx='1'
        transform='rotate(-15 2.43 6.8)'
        stroke='currentColor'
      />
      <path d='M9.4 5.02 8.12 9.5' stroke='currentColor' />
      <path d='M15.89 3.38 14.6 7.85' stroke='currentColor' />
    </svg>
  )
}

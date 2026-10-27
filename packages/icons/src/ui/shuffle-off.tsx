import type { Icon } from './types'

export const IconShuffleOff: Icon = ({
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
      data-slot='icon-ui-shuffle-off'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M17.56 17.52h3.66' stroke='currentColor' />
      <path d='M2.34 7.05h4.63' stroke='currentColor' />
      <path
        d='M21.22 7.05h-.24c-2.68 0-4.02 0-5.2.53-1.18.54-2.06 1.55-3.83 3.57l-2.92 3.33c-.84.97-1.27 1.46-1.76 1.83a6 6 0 0 1-2.4 1.09c-.6.12-1.24.12-2.53.12'
        stroke='currentColor'
      />
      <path
        d='m19.3 3.86.36.36c1.34 1.33 2 2 2 2.82 0 .83-.66 1.5-2 2.83l-.35.36'
        stroke='currentColor'
      />
      <path
        d='m19.3 14.34.71.7c1 1 1.5 1.5 1.62 2.09a2 2 0 0 1 0 .78c-.12.6-.62 1.1-1.61 2.09'
        stroke='currentColor'
      />
      <path d='m2.74 2.74 18.52 18.52' stroke='currentColor' />
    </svg>
  )
}

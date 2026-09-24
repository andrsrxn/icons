import type { Icon } from './types'

export const IconPopcorn: Icon = ({
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
      data-slot='icon-ui-popcorn'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M7.79 21.47a1.92 1.92 0 0 0 1.9-2.15l-.9-7.4a1.94 1.94 0 0 0-2.7-1.53l-.16.07a2.5 2.5 0 0 0-1.45 2.84l1.43 6.65c.19.89.97 1.52 1.88 1.52'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M16.37 21.47a1.92 1.92 0 0 1-1.9-2.15l.9-7.4a1.94 1.94 0 0 1 2.7-1.53l.16.07c1.1.48 1.7 1.67 1.45 2.84l-1.43 6.65a1.9 1.9 0 0 1-1.88 1.52'
        fill='currentColor'
      />
      <path
        d='m19.49 12.66-.92 4.11c-.5 2.25-.76 3.38-1.58 4.04s-1.97.66-4.28.66H11.3c-2.32 0-3.48 0-4.3-.67-.83-.66-1.07-1.8-1.56-4.06l-.95-4.34a1.74 1.74 0 0 1 2.1-2.07l.9.2h0l.61.13c.47.07.69.06 1.15-.06.12-.03.35-.1.83-.27h0c.6-.2 1.31-.39 1.92-.4.68 0 1.5.21 2.15.44h0l.52.17c.58.18.91.2 1.51.06l.34-.09h0l.57-.15a1.94 1.94 0 0 1 2.4 2.3'
        stroke='currentColor'
      />
      <path
        d='M7.98 6.86C7.39 5.94 6.46 5.4 4.7 5.72a2.97 2.97 0 0 0-1.98 3.73c.13.43.5 1.18 1.34 1.56'
        stroke='currentColor'
      />
      <path
        d='M16.02 6.86c.59-.92 1.52-1.45 3.28-1.14a2.97 2.97 0 0 1 1.98 3.73c-.13.43-.5 1.18-1.34 1.56'
        stroke='currentColor'
      />
      <path d='M12.19 4.62a2.78 2.78 0 0 0-5.44 1.17' stroke='currentColor' />
      <path d='M12.19 4.62a2.78 2.78 0 0 1 5.48.94' stroke='currentColor' />
      <path d='M15.57 10.77 14.2 21.4' stroke='currentColor' />
      <path d='m9.17 10.77.78 10.62' stroke='currentColor' />
    </svg>
  )
}

import type { Icon } from './types'

export const IconFilmWarning: Icon = ({
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
      data-slot='icon-ui-film-warning'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M6.72 21.23c.3 0 .44 0 .57-.03a1 1 0 0 0 .72-.73c.03-.12.03-.27.03-.56V4.09c0-.3 0-.44-.03-.56a1 1 0 0 0-.72-.73c-.13-.03-.27-.03-.57-.03-.89 0-1.33 0-1.7.1a3 3 0 0 0-2.16 2.16c-.1.37-.1.81-.1 1.7v10.54c0 .89 0 1.33.1 1.7a3 3 0 0 0 2.17 2.16c.36.1.8.1 1.7.1'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M17.64 12.22c-.7 0-1.06 0-1.31-.17a1 1 0 0 1-.27-.27c-.17-.25-.17-.6-.17-1.31V4.09c0-.3 0-.44.03-.56a1 1 0 0 1 .72-.73c.12-.03.27-.03.56-.03.89 0 1.33 0 1.7.1a3 3 0 0 1 2.16 2.16c.1.37.1.8.1 1.7V8.7c0 1.42 0 2.13-.35 2.63a2 2 0 0 1-.53.54c-.51.34-1.22.34-2.64.34'
        fill='currentColor'
      />
      <path
        d='M13.9 21.23h-3.13c-3.77 0-5.66 0-6.83-1.17-1.17-1.18-1.17-3.06-1.17-6.83v-2.46c0-3.77 0-5.65 1.17-6.83S7 2.77 10.77 2.77h2.46c3.77 0 5.66 0 6.83 1.17 1.17 1.18 1.17 3.06 1.17 6.83V12'
        stroke='currentColor'
      />
      <path d='M21.12 12H3.15' stroke='currentColor' />
      <path d='M8.04 2.77v17.7' stroke='currentColor' />
      <path d='M15.89 2.77V12' stroke='currentColor' />
      <path d='M7.7 16.61H3.15' stroke='currentColor' />
      <path d='M18.76 18.72v-3.67' stroke='currentColor' />
      <path
        d='M19.2 21.84a.44.44 0 1 1-.88 0 .44.44 0 0 1 .88 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='M7.7 7.39H2.96' stroke='currentColor' />
      <path d='M20.9 7.39h-4.75' stroke='currentColor' />
    </svg>
  )
}

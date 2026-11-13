import type { Icon } from './types'

export const IconFilmMusic: Icon = ({
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
      data-slot='icon-ui-film-music'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M6.32 15.76a1 1 0 0 0 1-1V2.66a1 1 0 0 0-1-1h-.04a3 3 0 0 0-2.98 3v8.11a3 3 0 0 0 2.99 2.99z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M15.31 8.72c-.94 0-1.41 0-1.7-.3-.3-.29-.3-.76-.3-1.7V2.67a1 1 0 0 1 1-1h.04a3 3 0 0 1 2.99 2.99v4.06z'
        fill='currentColor'
      />
      <path
        d='M17.4 8.72V7.67c0-2.82 0-4.24-.88-5.12s-2.3-.88-5.13-.88H9.3c-2.83 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v2.09c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h.78'
        stroke='currentColor'
      />
      <path d='M17.34 8.72H3.59' stroke='currentColor' />
      <path d='M7.33 1.8v13.75' stroke='currentColor' />
      <path d='M13.31 1.8v6.88' stroke='currentColor' />
      <path d='M6.96 5.2h-3.6' stroke='currentColor' />
      <path d='M7.1 12.24H3.65' stroke='currentColor' />
      <path d='M17.34 5.2h-3.6' stroke='currentColor' />
      <path
        opacity='.2'
        d='M19.3 13.53q.32-.1.44-.17a1 1 0 0 0 .5-.85c0-.1-.03-.22-.07-.45-.06-.3-.1-.45-.14-.56a1 1 0 0 0-.99-.57c-.12 0-.26.06-.55.15l-4.35 1.46q-.24.07-.34.12a1 1 0 0 0-.5.66c-.02.09-.02.18-.03.37-.02.37-.03.55 0 .7a1 1 0 0 0 1.02.77c.14-.01.32-.07.67-.19z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M13.19 20.8a1.62 1.62 0 1 1-3.24 0 1.62 1.62 0 0 1 3.24 0'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M20.31 19.74a1.62 1.62 0 1 1-3.23 0 1.62 1.62 0 0 1 3.23 0'
        fill='currentColor'
      />
      <path d='M13.19 20.8a1.62 1.62 0 1 0-3.24 0 1.62 1.62 0 0 0 3.24 0' stroke='currentColor' />
      <path d='M20.31 19.74a1.62 1.62 0 1 0-3.23 0 1.62 1.62 0 0 0 3.23 0' stroke='currentColor' />
      <path
        d='M13.19 20.7v-4.72c0-1.08 0-1.61.16-2.08a3 3 0 0 1 1-1.4c.39-.31.9-.49 1.9-.84h0c1.26-.44 1.89-.66 2.4-.58a2 2 0 0 1 1.42 1.02c.24.44.24 1.1.24 2.44v5.27'
        stroke='currentColor'
      />
      <path d='m13.19 15.53 6.91-2.55' stroke='currentColor' />
    </svg>
  )
}

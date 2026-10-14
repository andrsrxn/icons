import type { Icon } from './types'

export const IconFilmSwap: Icon = ({
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
      data-slot='icon-ui-film-swap'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M18.96 9.24v-1c0-1.88 0-2.83-.59-3.41-.58-.59-1.52-.59-3.41-.59h-.23'
        stroke='currentColor'
      />
      <path d='M5.04 14.7v1c0 1.88 0 2.82.6 3.4.58.6 1.52.6 3.4.6h.23' stroke='currentColor' />
      <path
        d='M21.52 7.91c-1.07 1.08-1.6 1.62-2.26 1.71a2 2 0 0 1-.6 0c-.65-.1-1.19-.63-2.26-1.7'
        stroke='currentColor'
      />
      <path
        d='M2.48 15.98c1.08-1.08 1.61-1.62 2.26-1.71a2 2 0 0 1 .6 0c.65.1 1.19.63 2.27 1.7'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M11.48 3.17c0 .76-.62 1.37-1.38 1.37H3.28a1.37 1.37 0 1 1 0-2.74h6.82c.76 0 1.38.61 1.38 1.37'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M11.48 9.1c0-.77-.62-1.39-1.39-1.39H3.3a1.38 1.38 0 1 0 0 2.77h6.8c.77 0 1.39-.62 1.39-1.38'
        fill='currentColor'
      />
      <path
        d='M1.71 6.46V5.8c0-1.89 0-2.83.6-3.42.58-.58 1.52-.58 3.4-.58h1.9c1.9 0 2.83 0 3.42.58.59.59.59 1.53.59 3.42v.66c0 1.88 0 2.83-.59 3.41s-1.53.59-3.41.59h-1.9c-1.9 0-2.83 0-3.42-.59-.59-.58-.59-1.53-.59-3.41'
        stroke='currentColor'
      />
      <path d='M1.9 7.44h9.58' stroke='currentColor' />
      <path d='M1.9 4.82h9.58' stroke='currentColor' />
      <path d='M6.67 1.8v3.02' stroke='currentColor' />
      <path d='M6.67 7.44v3.02' stroke='currentColor' />
      <path
        opacity='.2'
        d='M22.19 14.95c0 .75-.62 1.37-1.37 1.37h-6.83a1.37 1.37 0 0 1 0-2.75h6.83c.75 0 1.37.62 1.37 1.38'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M22.19 20.87c0-.76-.62-1.38-1.38-1.38H14a1.38 1.38 0 0 0 0 2.77h6.8c.76 0 1.38-.62 1.38-1.39'
        fill='currentColor'
      />
      <path
        d='M12.43 18.24v-.67c0-1.88 0-2.83.58-3.41.59-.59 1.53-.59 3.42-.59h1.9c1.89 0 2.83 0 3.41.59.59.58.59 1.53.59 3.41v.67c0 1.88 0 2.83-.59 3.41-.58.59-1.52.59-3.41.59h-1.9c-1.89 0-2.83 0-3.42-.59-.58-.58-.58-1.53-.58-3.41'
        stroke='currentColor'
      />
      <path d='M12.62 19.22h9.57' stroke='currentColor' />
      <path d='M12.62 16.6h9.57' stroke='currentColor' />
      <path d='M17.38 13.57v3.02' stroke='currentColor' />
      <path d='M17.38 19.22v3.02' stroke='currentColor' />
    </svg>
  )
}

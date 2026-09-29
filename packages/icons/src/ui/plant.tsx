import type { Icon } from './types'

export const IconPlant: Icon = ({
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
      data-slot='icon-ui-plant'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M14.03 22.24c1.5 0 2.25 0 2.79-.42s.72-1.15 1.09-2.6l.63-2.48H5.46L6 19.1c.33 1.5.5 2.26 1.04 2.7.55.44 1.32.44 2.86.44z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M14.72 3.27a6 6 0 0 1 3-1.4c.9-.16 1.35-.24 2.08.48.74.72.67 1.15.54 2.01a6 6 0 0 1-1.44 3.06 3.2 3.2 0 0 1-4.53.45c-.92-.82-1.4-3.04.35-4.6'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M9 7.43a6 6 0 0 0-3.2-.8c-.92.02-1.38.03-1.96.88s-.43 1.26-.13 2.08c.33.92.93 1.93 2 2.72 1.8 1.34 3.72.64 4.53-.44.74-.98.8-3.25-1.24-4.44'
        fill='currentColor'
      />
      <path
        d='M14.72 3.27A6.6 6.6 0 0 1 19 1.75c.54-.02.81-.02 1.11.26s.3.55.32 1.08a6 6 0 0 1-1.52 4.33 3.2 3.2 0 0 1-4.53.45c-.92-.82-1.4-3.04.35-4.6'
        stroke='currentColor'
      />
      <path
        d='M8.96 7.21a6.6 6.6 0 0 0-4.48-.66c-.53.1-.8.14-1.04.48s-.2.6-.1 1.11a6 6 0 0 0 2.33 3.96c1.8 1.34 3.72.64 4.53-.44.74-.99.8-3.25-1.24-4.45'
        stroke='currentColor'
      />
      <path d='M16.89 5.22a12.5 12.5 0 0 0-4.39 11.51' stroke='currentColor' />
      <path d='M12.3 15.97c-.35-2.92-3.15-5.6-5.2-6.38' stroke='currentColor' />
      <path
        d='m18.54 16.74-.64 2.5c-.37 1.44-.56 2.16-1.1 2.58s-1.29.42-2.78.42H9.98c-1.49 0-2.23 0-2.77-.42s-.73-1.14-1.1-2.58l-.65-2.5'
        stroke='currentColor'
      />
      <path d='M4.41 16.73h15.18' stroke='currentColor' />
    </svg>
  )
}

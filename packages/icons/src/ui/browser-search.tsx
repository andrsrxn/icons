import type { Icon } from './types'

export const IconBrowserSearch: Icon = ({
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
      data-slot='icon-ui-browser-search'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.97 6.32c0-2.1 1.69-3.78 3.78-3.78h12.48A3.8 3.8 0 0 1 22 6.32c0 .52-.43.94-.95.94H2.91a.94.94 0 0 1-.94-.94'
        fill='currentColor'
      />
      <path
        d='M10.51 18.15h-.74c-3.58 0-5.37 0-6.52-1.06l-.22-.22c-1.06-1.15-1.06-2.94-1.06-6.53 0-3.58 0-5.37 1.06-6.52l.22-.22C4.4 2.54 6.19 2.54 9.77 2.54h4.92c3.11 0 4.67 0 5.74.82a4 4 0 0 1 .76.75C22 5.2 22 6.74 22 9.85'
        stroke='currentColor'
      />
      <path d='M21.73 7.26H2.25' stroke='currentColor' />
      <path
        opacity='.2'
        d='M20.37 14.93a3.42 3.42 0 1 1-6.85 0 3.42 3.42 0 0 1 6.85 0'
        fill='currentColor'
      />
      <path d='M19.77 17.7 22 19.94' stroke='currentColor' />
      <path d='M20.47 14.98a3.47 3.47 0 1 0-6.95 0 3.47 3.47 0 0 0 6.95 0' stroke='currentColor' />
    </svg>
  )
}

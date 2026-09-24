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
        d='M14.56 3.19a6 6 0 0 1 3-1.4c.9-.16 1.35-.24 2.08.48.74.72.67 1.15.54 2.02a6 6 0 0 1-1.44 3.05 3.2 3.2 0 0 1-4.53.45c-.92-.82-1.4-3.03.35-4.6'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M10.68 8.47a6 6 0 0 0-3-1.4c-.9-.16-1.34-.24-2.08.48-.74.73-.67 1.16-.54 2.02.16.96.55 2.07 1.44 3.05 1.51 1.67 3.53 1.36 4.53.46.92-.83 1.41-3.04-.35-4.6'
        fill='currentColor'
      />
      <path
        d='M14.56 3.19a6.6 6.6 0 0 1 4.27-1.52c.54-.01.81-.02 1.11.27.3.28.3.54.32 1.07a6 6 0 0 1-1.52 4.33 3.2 3.2 0 0 1-4.53.45c-.92-.82-1.4-3.03.35-4.6'
        stroke='currentColor'
      />
      <path
        d='M10.68 8.25a6.6 6.6 0 0 0-4.27-1.52c-.54 0-.8-.01-1.1.27s-.31.55-.33 1.07a6 6 0 0 0 1.52 4.34c1.51 1.66 3.53 1.35 4.53.45.92-.83 1.41-3.04-.35-4.6'
        stroke='currentColor'
      />
      <path d='M16.73 5.14c-1.64 1.32-5.93 5.3-4.22 11.52' stroke='currentColor' />
      <path d='M12.35 16.1c-.23-2.39-2.15-4.74-3.96-5.87' stroke='currentColor' />
      <path
        d='m18.54 16.74-.64 2.5c-.37 1.44-.56 2.16-1.1 2.58s-1.29.42-2.78.42H9.98c-1.49 0-2.23 0-2.77-.42s-.73-1.14-1.1-2.58l-.65-2.5'
        stroke='currentColor'
      />
      <path d='M4.41 16.73h15.18' stroke='currentColor' />
    </svg>
  )
}

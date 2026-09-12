import type { Icon } from './types'

export const IconGlobeLock: Icon = ({
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
      data-slot='icon-ui-globe-lock'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M12 22.3a10.3 10.3 0 1 1 9.1-5.44l-1.81-2.1-1.52.78-1.24 2.32-.27 3.39A7 7 0 0 1 12 22.31'
        fill='currentColor'
      />
      <path d='M12 22.3A10.3 10.3 0 1 1 22.3 12' stroke='currentColor' />
      <path
        d='M12 22.3c-2.41 0-4.37-4.6-4.37-10.3S9.59 1.7 12 1.7s4.37 4.6 4.37 10.3'
        stroke='currentColor'
      />
      <path d='M1.7 12h20.6' stroke='currentColor' />
      <rect x='15.92' y='17.54' width='6.39' height='4.77' rx='1' stroke='currentColor' />
      <path d='m20.91 17.54-.16-1.34a1.63 1.63 0 0 0-3.23-.01l-.17 1.35' stroke='currentColor' />
    </svg>
  )
}

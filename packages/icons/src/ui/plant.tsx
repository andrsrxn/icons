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
        d='M15.55 5.2a7.5 7.5 0 0 1 4.06-1.74c.97-.13 1.45-.19 2.14.48s.65 1.14.56 2.07a7 7 0 0 1-1.78 4.14c-1.8 1.99-4.2 1.61-5.4.54-1.1-.99-1.68-3.62.42-5.5'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M8.73 10.16a7.5 7.5 0 0 0-4.33-.92c-.97.07-1.46.1-2 .89-.55.79-.42 1.24-.15 2.14a7 7 0 0 0 2.55 3.71c2.15 1.6 4.44.77 5.4-.52.88-1.18.95-3.88-1.47-5.3'
        fill='currentColor'
      />
      <path
        d='M15.55 5.2a8 8 0 0 1 5.34-1.82c.55 0 .82 0 1.11.27.29.28.3.55.33 1.08a7.4 7.4 0 0 1-1.8 5.42c-1.8 1.99-4.2 1.61-5.4.54-1.1-.99-1.68-3.62.42-5.5'
        stroke='currentColor'
      />
      <path
        d='M8.68 9.9a8 8 0 0 0-5.6-.75c-.53.11-.8.17-1.03.5s-.2.58-.12 1.11a7.4 7.4 0 0 0 2.82 4.97c2.15 1.6 4.44.76 5.4-.52.88-1.18.95-3.88-1.47-5.3'
        stroke='currentColor'
      />
      <path d='M18.13 7.52C16.18 9.09 12.8 13.6 13.4 21.2' stroke='currentColor' />
      <path d='M13.4 21.23c-1-3.86-4.48-7.28-6.95-8.49' stroke='currentColor' />
    </svg>
  )
}

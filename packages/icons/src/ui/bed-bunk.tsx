import type { Icon } from './types'

export const IconBedBunk: Icon = ({
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
      data-slot='icon-ui-bed-bunk'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M15.45 13.37c2.68 0 4.03 0 4.89.8l.16.16c.8.86.8 2.2.8 4.89v1.02h-9.75v-2.97c0-1.8 0-2.69.53-3.26l.11-.11c.58-.53 1.47-.53 3.26-.53'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M15.45 2.98c2.68 0 4.03 0 4.89.8l.16.17c.8.86.8 2.2.8 4.88v1.03h-9.75V6.88c0-1.79 0-2.68.53-3.25l.11-.11c.58-.54 1.47-.54 3.26-.54'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M21.3 20.24v-1.02c0-2.68 0-4.03-.8-4.89l-.16-.16c-.86-.8-2.2-.8-4.9-.8-1.78 0-2.67 0-3.25.53l-.11.11c-.53.57-.53 1.47-.53 3.26v2.97'
        stroke='currentColor'
      />
      <path
        d='M21.3 9.86V8.83c0-2.68 0-4.02-.8-4.88l-.16-.17c-.86-.8-2.2-.8-4.9-.8-1.78 0-2.67 0-3.25.54l-.11.1c-.53.58-.53 1.47-.53 3.26v2.98'
        stroke='currentColor'
      />
      <path d='M2.7 20.24h18.57' stroke='currentColor' />
      <path d='M2.7 9.86h18.57' stroke='currentColor' />
      <path d='M2.7 22.25V1.75' stroke='currentColor' />
      <path d='M21.3 22.25V8.04' stroke='currentColor' />
      <path
        opacity='.2'
        d='M5.09 15.98a2.03 2.03 0 1 0 4.07 0 2.03 2.03 0 0 0-4.07 0'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M5.09 5.6a2.03 2.03 0 1 0 4.07 0 2.03 2.03 0 0 0-4.07 0'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M5.09 15.98a2.03 2.03 0 1 1 4.07 0 2.03 2.03 0 0 1-4.07 0' stroke='currentColor' />
      <path d='M5.09 5.6a2.03 2.03 0 1 1 4.07 0 2.03 2.03 0 0 1-4.07 0' stroke='currentColor' />
    </svg>
  )
}

import type { Icon } from './types'

export const IconHandReceivingBox: Icon = ({
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
      data-slot='icon-ui-hand-receiving-box'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M2.2 15.68c0-.94 0-1.41.28-1.7.3-.3.77-.3 1.72-.3.94 0 1.42 0 1.7.3.3.29.3.76.3 1.7v3.91c0 .94 0 1.41-.3 1.7-.28.3-.76.3-1.7.3-.95 0-1.42 0-1.72-.3-.29-.29-.29-.76-.29-1.7z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M17.47 10.4h-3.69a2.5 2.5 0 0 1-2.5-2.5V4.36a2.5 2.5 0 0 1 2.5-2.5h3.69a2.5 2.5 0 0 1 2.5 2.5V7.9a2.5 2.5 0 0 1-2.5 2.5'
        fill='currentColor'
      />
      <path
        d='M11.03 17.99c1.53 0 3.15.1 3.92-.36m0 0a27 27 0 0 0 3.72-2.7 1.98 1.98 0 0 1 2.96.45c.35.58.35 1.3-.05 1.85-.85 1.17-2.53 3.13-4.66 3.86-2.93 1-4.61 1.2-7.91.46a8 8 0 0 1-2.8-1.29m8.74-2.63c.64-1.56.45-2.81-.24-3.06a11 11 0 0 0-4.03-.62c-3.73 0-4.48.87-4.48.87'
        stroke='currentColor'
      />
      <path
        d='M4.2 21.59c.94 0 1.42 0 1.7-.3.3-.29.3-.76.3-1.7v-3.91c0-.94 0-1.41-.3-1.7-.28-.3-.76-.3-1.7-.3v0c-.95 0-1.42 0-1.72.3-.29.29-.29.76-.29 1.7v3.91c0 .94 0 1.41.3 1.7.29.3.76.3 1.7.3'
        stroke='currentColor'
      />
      <path
        d='M15.6 10.4c1.71 0 2.57 0 3.19-.4q.45-.3.74-.75c.4-.62.4-1.47.4-3.18v0c0-1.7 0-2.56-.4-3.18a3 3 0 0 0-.74-.74c-.62-.4-1.48-.4-3.18-.4v0c-1.71 0-2.57 0-3.18.4q-.46.29-.75.74c-.4.62-.4 1.47-.4 3.18v0c0 1.7 0 2.56.4 3.18q.3.45.75.75c.61.4 1.47.4 3.18.4'
        stroke='currentColor'
      />
      <path d='M15.6 1.75v3.74' stroke='currentColor' />
    </svg>
  )
}

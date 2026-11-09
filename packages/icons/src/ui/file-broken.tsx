import type { Icon } from './types'

export const IconFileBroken: Icon = ({
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
      data-slot='icon-ui-file-broken'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M20.2 14.08v-2.2c0-1.3 0-1.95-.28-2.43a2 2 0 0 0-.67-.66c-.48-.3-1.13-.3-2.44-.3-1.3 0-1.95 0-2.43-.29a2 2 0 0 1-.67-.67c-.29-.47-.29-1.13-.29-2.43v-.17c0-1.15 0-1.73-.23-2.16a2 2 0 0 0-.86-.85c-.44-.23-1.01-.22-2.16-.21-2.26.02-3.4.03-4.25.49a4 4 0 0 0-1.68 1.7c-.45.86-.45 2-.45 4.25v5.76l4.24-1.95 3.77 2.12 4.25-1.94z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M16.13 22.23H7.96c-1.09 0-1.63 0-2.07-.13a3 3 0 0 1-1.96-1.97c-.14-.44-.14-.98-.14-2.06l4.24-2.16 4.13 1.74 3.9-1.74 4.15 2.25c0 1 0 1.5-.12 1.9a3 3 0 0 1-2.05 2.06c-.4.11-.9.11-1.9.11'
        fill='currentColor'
      />
      <path
        d='M20.2 18.16c0 1 0 1.5-.1 1.9a3 3 0 0 1-2.06 2.06c-.4.11-.9.11-1.9.11H7.86c-1 0-1.5 0-1.9-.11a3 3 0 0 1-2.05-2.06c-.12-.4-.12-.9-.12-1.9'
        stroke='currentColor'
      />
      <path
        d='M3.8 14.26V9.14c0-3.16 0-4.74.83-5.82a4 4 0 0 1 .7-.7c1.09-.84 2.67-.84 5.83-.84 1.37 0 2.06 0 2.7.21l.45.2c.6.28 1.08.77 2.06 1.74h0l.84.84.58.57c1.2 1.16 1.79 1.74 2.1 2.49.32.74.32 1.57.32 3.24v3.27'
        stroke='currentColor'
      />
      <path
        d='M13.22 2.3v2.46c0 1.89 0 2.83.58 3.42.59.58 1.53.58 3.42.58h2.48'
        stroke='currentColor'
      />
      <path
        d='m3.8 14.28 1.98-1.24a5 5 0 0 1 1.56-.79q.4-.06.8.02c.44.08.85.32 1.68.82a5 5 0 0 0 1.65.81q.4.08.8.02c.42-.07.9-.36 1.65-.82.86-.52 1.3-.78 1.79-.83q.27-.01.55.02c.5.06.96.34 1.89.9l2 1.2'
        stroke='currentColor'
      />
      <path
        d='m3.8 18.03 1.97-1.25a5 5 0 0 1 1.59-.8q.38-.06.78.01c.44.08.86.34 1.7.84.82.5 1.24.75 1.68.83q.38.08.76.02c.44-.06.92-.36 1.68-.82.87-.53 1.3-.8 1.8-.84q.26-.03.54.01c.5.07.97.35 1.9.92l2 1.22'
        stroke='currentColor'
      />
    </svg>
  )
}

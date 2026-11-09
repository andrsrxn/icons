import type { Icon } from './types'

export const IconHouse: Icon = ({
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
      data-slot='icon-ui-house'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M3.26 18.67c-.02.75-.04 1.12.16 1.4s.56.38 1.28.6l1.18.34c1.15.33 1.73.5 2.13.21s.4-.89.43-2.09l.07-3.05c.02-.92.03-1.39.32-1.67s.75-.29 1.68-.29h1.52l1.43.03c.93.01 1.4.02 1.68.31.28.3.28.76.28 1.69v2.95c0 1.21 0 1.82.4 2.12s.98.13 2.14-.2l1.35-.37c.72-.2 1.09-.3 1.29-.58s.2-.66.17-1.4l-.3-9.23a2 2 0 0 0-.11-.85c-.1-.19-.26-.33-.6-.61l-6.44-5.43c-.61-.52-.92-.78-1.29-.78-.36 0-.67.26-1.29.78L4.3 7.98c-.33.28-.5.42-.6.61-.09.2-.1.41-.11.85z'
        fill='currentColor'
      />
      <path
        d='M12.79 21.64h-1.58c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83v-1.08c0-1.7 0-2.54.32-3.3.33-.76.95-1.34 2.18-2.51l.8-.75C9.1 3.54 10.4 2.3 12 2.3s2.9 1.24 5.5 3.7l.79.75h0c1.23 1.17 1.85 1.75 2.17 2.5.33.77.33 1.61.33 3.31v1.08c0 3.77 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17'
        stroke='currentColor'
      />
      <path
        d='M8.62 21.43v-4.04c0-1.29 0-1.93.28-2.41a2 2 0 0 1 .68-.68c.48-.29 1.13-.29 2.42-.29 1.3 0 1.94 0 2.41.29a2 2 0 0 1 .68.68c.3.48.3 1.12.3 2.41v4.04'
        stroke='currentColor'
      />
    </svg>
  )
}

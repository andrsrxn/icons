import type { Icon } from './types'

export const IconHouseSmile: Icon = ({
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
      data-slot='icon-ui-house-smile'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M3.26 18.7c-.02.75-.04 1.12.17 1.4.2.28.56.38 1.28.59l3.4.97.28.07.28.01h6.75l.26-.07 3.62-1c.73-.2 1.1-.3 1.3-.57.2-.28.2-.66.17-1.42l-.3-8.95a2 2 0 0 0-.11-.86c-.1-.2-.27-.34-.61-.62L13.3 2.94c-.61-.5-.92-.76-1.28-.76s-.66.25-1.27.76L4.31 8.25c-.34.28-.5.43-.6.62s-.1.41-.12.85z'
        fill='currentColor'
      />
      <path d='M15.85 16.14A5.4 5.4 0 0 1 12 17.47a6 6 0 0 1-3.86-1.33' stroke='currentColor' />
      <path
        d='M12.81 21.64h-1.58c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83v-1.08c0-1.7 0-2.54.33-3.3.32-.76.94-1.34 2.17-2.51l.8-.75c2.6-2.46 3.9-3.7 5.5-3.7 1.58 0 2.89 1.24 5.49 3.7l.8.75h0c1.22 1.17 1.84 1.75 2.17 2.5.32.77.32 1.61.32 3.31v1.08c0 3.77 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17'
        stroke='currentColor'
      />
    </svg>
  )
}

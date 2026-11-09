import type { Icon } from './types'

export const IconDropShadow: Icon = ({
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
      data-slot='icon-ui-drop-shadow'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M13.98 22.99c3.3 0 4.95 0 5.98-1.03 1.02-1.02 1.02-2.67 1.02-5.97V13.6l-.46.9c-.75 1.49-1.13 2.23-1.8 2.67-.66.44-1.49.5-3.15.6l-3.59.24-3.6-.25c-1.55-.1-2.32-.15-2.95-.54s-1.02-1.05-1.81-2.38l-.6-1.02V16c0 3.3 0 4.95 1.02 5.97C5.07 23 6.72 23 10.02 23z'
        fill='currentColor'
      />
      <path
        d='M3.57 10.79V8.84c0-3.3 0-4.95 1.02-5.97 1.03-1.03 2.68-1.03 5.98-1.03h2.86c3.3 0 4.95 0 5.98 1.03 1.02 1.02 1.02 2.67 1.02 5.97v1.95c0 3.3 0 4.94-1.02 5.97-1.03 1.03-2.68 1.03-5.98 1.03h-2.86c-3.3 0-4.95 0-5.98-1.03-1.02-1.03-1.02-2.68-1.02-5.97'
        stroke='currentColor'
      />
    </svg>
  )
}

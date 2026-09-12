import type { Icon } from './types'

export const IconHandshake: Icon = ({
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
      data-slot='icon-ui-handshake'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M17 4.07c-2.87-.5-5.32 1.29-6.18 2.24L7.95 8.76c-.31.26-.47.4-.5.58s.08.35.3.7l.8 1.32c.24.4.37.6.57.65s.4-.08.8-.32l2.86-1.76c.32-.2.48-.3.65-.28s.3.15.57.42l5.13 5.05q.14.14.2.18c.07.03.13.05.27.08l2.97.73V5.86S18.5 4.33 17 4.06'
        fill='currentColor'
      />
      <path
        d='M10.93 6.07c1.3-.96 3.2-2.5 6.06-2 1.44.25 2.57 1.4 5.38 1.58'
        stroke='currentColor'
      />
      <path d='M22.34 16.44c-1.92-.34-2.46-.43-3.71-.01' stroke='currentColor' />
      <path d='M1.75 15.48c2.1 0 2.46 1.6 4.5 3.84' stroke='currentColor' />
      <path d='M12.15 4.93c-5.52-2.6-6.94.09-10.46.09' stroke='currentColor' />
      <path
        d='m6.18 19.25.48.44c.77.72 1.95.74 2.74.05l.07-.06c.83-.72.9-2 .14-2.8'
        stroke='currentColor'
      />
      <path
        d='m9.48 16.76 1.9 1.78c.81.76 2.1.72 2.87-.1a2 2 0 0 0-.12-2.86l-.6-.53'
        stroke='currentColor'
      />
      <path
        d='m13.36 14.87 2.07 1.92c.84.78 2.15.73 2.92-.1.77-.82.74-2.09-.06-2.87L14.1 9.73'
        stroke='currentColor'
      />
      <path d='m11.83 5.41-3.52 2.5a2.18 2.18 0 0 0 2.44 3.6L14.63 9' stroke='currentColor' />
    </svg>
  )
}

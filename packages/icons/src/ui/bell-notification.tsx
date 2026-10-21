import type { Icon } from './types'

export const IconBellNotification: Icon = ({
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
      data-slot='icon-ui-bell-notification'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M19.6 18.57c.48 0 .73 0 .93-.04a2 2 0 0 0 1.55-1.55c.04-.2.04-.45.04-.94v-.38a2 2 0 0 0-.62-1.28l-.34-.39c-.46-.53-.7-.79-.82-1.1l-.03-.08c-.11-.33-.11-.68-.11-1.38V7.84h-3.3l-1.81-2.4 1.18-2.8s.25-.01-.89-.45C14.02 1.66 12 1.77 12 1.77h-.25a8 8 0 0 0-7.89 7.89v2.66a2 2 0 0 1-.39 1l-.26.3-.69.76-.25.29a2 2 0 0 0-.38 1l-.01.39c0 .47 0 .71.04.9a2 2 0 0 0 1.56 1.57c.2.04.44.04.91.04z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M20.2 11.3v.14a4 4 0 0 0 .15 1.45c.13.32.36.58.82 1.1l.34.4q.18.19.24.29a2 2 0 0 1 .38.98v.39c0 .48 0 .72-.04.93a2 2 0 0 1-1.55 1.55c-.2.04-.44.04-.93.04H4.37c-.47 0-.7 0-.9-.04a2 2 0 0 1-1.57-1.57c-.03-.2-.03-.43-.03-.9v-.38a2 2 0 0 1 .64-1.3l1.33-1.47.01-.02V9.76c0-4.4 3.57-7.97 7.97-7.97l.79.05'
        stroke='currentColor'
      />
      <path d='M7.66 18.57c0 2.05 1.94 3.7 4.34 3.7s4.34-1.65 4.34-3.7' stroke='currentColor' />
      <circle
        cx='18.32'
        cy='4.84'
        r='3.08'
        transform='rotate(-90 18.32 4.84)'
        stroke='currentColor'
      />
    </svg>
  )
}

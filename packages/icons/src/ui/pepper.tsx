import type { Icon } from './types'

export const IconPepper: Icon = ({
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
      data-slot='icon-ui-pepper'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m7.9 21.98 7-4q.28-.16.38-.25c.08-.08.14-.17.27-.36l3.63-5.26c.44-.63.66-.95.63-1.3s-.29-.64-.82-1.2l-.03-.03c-.32-.35-.48-.52-.7-.6-.2-.08-.44-.07-.91-.03l-.9.07c-.56.04-.84.06-1.09-.06-.24-.11-.4-.35-.72-.82l-.41-.62-.12-.17-.1-.11-.17-.12c-.52-.37-.78-.56-1.03-.59a1 1 0 0 0-.74.2c-.2.17-.32.46-.57 1.05L9.06 13.5q-.1.26-.18.36c-.05.08-.13.15-.27.3l-6.1 5.87.8 2.3z'
        fill='currentColor'
      />
      <path
        d='M19.55 10.07s-.54 4.64-6.4 9.03c-3.3 2.48-6.76 3-8.43 3.09-.42.02-.63.04-1.07-.16s-.53-.3-.7-.52c-.4-.5-.68-1.2-.05-1.92 1.48-1.4 3.67-2.6 5.67-5.5 3.18-4.63 3.3-7.14 3.3-7.14'
        stroke='currentColor'
      />
      <path
        d='M17.83 4.17c-2.4-1.03-4.6-.46-6.1 1.35-.47.57-.7.85-.55 1.15.16.3.56.25 1.37.17l.87-.08c.27-.03.4-.04.52 0 .12.06.2.17.36.38l1.04 1.33c.17.2.25.3.36.36.12.05.25.04.52.02l1.74-.16c.26-.02.4-.03.5.02.12.05.2.15.37.35l.56.69c.49.6.73.9 1.04.83s.37-.43.5-1.13c.41-2.38-.66-4.22-3.1-5.28'
        stroke='currentColor'
      />
      <path d='M17.89 4.19c.37-.34.75-1.47.75-2.47' stroke='currentColor' />
    </svg>
  )
}
